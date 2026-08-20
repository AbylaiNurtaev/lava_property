<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "#imports";
import { useCityStore } from "~/stores/useCityStore";
import { vMaska } from "maska/vue";

// cмена фонового изображения в зависимости от города (можно удалить, если не нужно)
const route = useRoute();
const cityStore = useCityStore();

// определяем регион безопасно
const effectiveCity = computed(() => {
    if (cityStore.city) return cityStore.city
    const path = route.path || ''
    if (path.startsWith('/pattaya')) return 'pattaya'
    if (path.startsWith('/phuket')) return 'phuket'
    return null
})

// выбираем CSS класс фона
const footerBgClass = computed(() => {
    if (effectiveCity.value === 'pattaya') return 'bg-img-pattaya'
    if (effectiveCity.value === 'phuket') return 'bg-img-phuket'
    return 'bg-img'
})
//
const address = computed(() => {
    if (effectiveCity.value === 'pattaya') return 'Паттайя, Таиланд'
    if (effectiveCity.value === 'phuket') return 'Пхукет, Таиланд'
    return 'Таиланд'
})

const phone = ref("");
const message = ref("");
const successfully = ref(false);

// Коды стран (с +), сортировка: длинные сначала
const DIAL_CODE_TO_COUNTRY = [
    { dial: "+380", country: "Ukraine", flag: "🇺🇦" },
    { dial: "+375", country: "Belarus", flag: "🇧🇾" },
    { dial: "+373", country: "Moldova", flag: "🇲🇩" },
    { dial: "+374", country: "Armenia", flag: "🇦🇲" },
    { dial: "+995", country: "Georgia", flag: "🇬🇪" },
    { dial: "+994", country: "Azerbaijan", flag: "🇦🇿" },
    { dial: "+998", country: "Uzbekistan", flag: "🇺🇿" },
    { dial: "+996", country: "Kyrgyzstan", flag: "🇰🇬" },
    { dial: "+992", country: "Tajikistan", flag: "🇹🇯" },
    { dial: "+993", country: "Turkmenistan", flag: "🇹🇲" },
    { dial: "+371", country: "Latvia", flag: "🇱🇻" },
    { dial: "+372", country: "Estonia", flag: "🇪🇪" },
    { dial: "+370", country: "Lithuania", flag: "🇱🇹" },
    { dial: "+7", country: "Russia / Kazakhstan", flag: "🇷🇺" },
    { dial: "+66", country: "Thailand", flag: "🇹🇭" },
    { dial: "+90", country: "Turkey", flag: "🇹🇷" },
    { dial: "+971", country: "UAE", flag: "🇦🇪" },
    { dial: "+48", country: "Poland", flag: "🇵🇱" },
    { dial: "+49", country: "Germany", flag: "🇩🇪" },
    { dial: "+33", country: "France", flag: "🇫🇷" },
    { dial: "+39", country: "Italy", flag: "🇮🇹" },
    { dial: "+34", country: "Spain", flag: "🇪🇸" },
    { dial: "+1", country: "US/CA", flag: "🇺🇸" },
    { dial: "+44", country: "UK", flag: "🇬🇧" },
].sort((a, b) => b.dial.length - a.dial.length);

// Только цифры (для валидации/отправки)
const digitsOnly = computed(() => phone.value.replace(/\D/g, ""));

// Нормализованный вид для определения страны: "+<цифры>"
const normalized = computed(() => {
    let s = phone.value.replace(/[^\d+]/g, "");
    if (!s) return "";

    if (!s.startsWith("+")) s = "+" + s;
    s = s.replace(/\++/g, "+"); // на случай "++"
    return s;
});

const detected = computed(() => {
    const s = normalized.value;
    if (!s || s.length < 2) return null; // пусто или только "+"
    return DIAL_CODE_TO_COUNTRY.find((x) => s.startsWith(x.dial)) || null;
});

const flag = computed(() => detected.value?.flag || "🏳️");
const countryName = computed(() => detected.value?.country || "Unknown");

// Подставить "+" при фокусе
const ensurePlus = () => {
    if (!phone.value) {
        phone.value = "+";
        return;
    }
    if (!phone.value.startsWith("+")) {
        phone.value = "+" + phone.value.replace(/\D/g, "");
    }
};

// Если пользователь начал вводить цифры без плюса — автоматически исправим
watch(phone, (val) => {
    if (!val) return;
    if (!val.startsWith("+")) {
        phone.value = "+" + val.replace(/\D/g, "");
    }
});

const handleSubmit = async () => {
    const digits = digitsOnly.value;

    if (digits.length < 8) {
        message.value = "Пожалуйста, введите корректный номер телефона.";
        return;
    }

    const formData = new FormData();
    formData.append("phone", phone.value);
    formData.append("page_url", window.location.href);

    try {
        const res = await fetch("/contacts.php", {
            method: "POST",
            body: formData,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        successfully.value = true;
        phone.value = "";
        message.value = "";
    } catch (err) {
        console.error("Ошибка отправки:", err);
        message.value = "Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.";
    }
};
</script>

<template>
    <div id="contacts" class="relative flex items-start mt-36" :class="footerBgClass">
        <div class="container w-full z-10">
            <div class="hero flex flex-col lg:flex-row justify-between items-start w-full mt-20">
                <div class="text-left w-full lg:w-1/2">
                    <h1 class="text-xl lg:text-4xl light">
                        Получите<br />
                        <span class="text-4xl lg:text-6xl uppercase bl">бесплатную консультацию</span>
                    </h1>

                    <div class="flex flex-col md:flex-row md:items-center text-white gap-6 mt-6">
                        <p class="md:w-[400px]">
                            Или напишите нам прямо сейчас в мессенджерах — мы всегда на связи!
                        </p>

                        <div class="flex gap-4">
                            <IconsTheTelegram />
                            <IconsTheWhatsApp />
                            <IconsTheMax />
                        </div>
                    </div>
                </div>

                <div class="text-right flex justify-start flex-col text-left mt-10 lg:mt-0">
                    <a href="tel:+66618133387" class="footer-phone text-left text-3xl lg:text-5xl hover:opacity-70">
                        +66 61 813 3387
                    </a>
                    <span class="block bl0 text-2xl text-white hover:opacity-70 text-left">{{ address }}</span>
                    <a target="_blank" class="text-left light text-xl text-white hover:opacity-70"
                        href="mailto:contact@lavaproperty.com">
                        contact@lavaproperty.com
                    </a>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="my-10 lg:my-20">
                <div class="text-[10px] text-white">{{ message }}</div>
                <div class="flex flex-col lg:flex-row">
                    <div class="relative w-full lg:w-3/4 m-2">
                        <span class="flag-badge" :title="countryName">
                            {{ flag }}
                        </span>
                        <input v-model="phone" v-maska="'+#################'" placeholder="+" type="tel"
                            @focus="ensurePlus" class="rounded-full w-full py-3 pr-10 pl-14" />
                    </div>
                    <button
                        class="rounded-full px-3 lg:px-6 py-3 m-2 hover:opacity-90 transition-all accent text-white w-full lg:w-auto">
                        Заказать звонок
                    </button>
                </div>
                <span v-if="successfully" class="block text-[10px] leading-[1.5] text-center my-6">
                    Мы уже получили ваше сообщение!
                </span>

                <span class="block text-white text-[10px] leading-[1.5] text-center lg:text-left">
                    Нажимая на кнопку "Заказать звонок", вы соглашаетесь с нашей политикой конфиденциальности
                </span>
            </form>

            <div class="mx-auto relative h-auto md:h-[100px] pb-10">
                <div class="mx-auto flex flex-col cursor-pointer">
                    <div class="flex justify-between items-center px-4 md:px-8 py-2 md:py-1 rounded-full bg-white">
                        <IconsTheLogo class="hidden lg:block" />
                        <IconsTheLogoMini class="block lg:hidden mx-auto" />

                        <div class="left-menu flex items-center gap-10">
                            <!-- <div class="accent text-white flex rounded-full">
                                <NuxtLink to="/catalog">
                                    <button
                                        class="hidden lg:block w-auto px-8 py-4 rounded-full transition duration-0 hover:duration-150 opacity-90">
                                        Каталог
                                    </button>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <button
                                        class="hidden lg:block w-auto px-6 py-4 rounded-full transition duration-0 hover:duration-150 opacity-90">
                                        О компании
                                    </button>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <button
                                        class="hidden lg:block w-auto px-6 py-4 rounded-full transition duration-0 hover:duration-150 opacity-90">
                                        Контакты
                                    </button>
                                </NuxtLink>
                            </div> -->

                            <div class="hidden md:flex gap-2 items-center">
                                <IconsTheTelegram />
                                <IconsTheWhatsApp />
                                <IconsTheMax />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img src="/img/footer-palm.webp" alt="фон" class="absolute bottom-0" data-aos="fade-right" data-aos-delay="200"
            data-aos-duration="1200" data-aos-easing="ease-out-cubic" />
    </div>
</template>

<style lang="css" scoped>
.bg-img {
    background-image: url("/img/footer-bg.webp");

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 700px;
}

/* change bg */
.bg-img-phuket {
    background-image: url('/img/footer-bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.bg-img-pattaya {
    background-image: url('/img/footer-pattaya.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.bg-img-default {
    background-image: url('/img/footer-bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}



/*  */
h1 {
    color: white;
}

@media (max-width: 441px) {
    .bg-img {
        min-height: auto;
        background-position: -24em 0em;
        mask-image: linear-gradient(to right,
                rgb(0, 0, 0),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 100%,
                rgb(0, 0, 0));
    }
}

.flag-badge {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    text-align: center;
    font-size: 20px;
    line-height: 1;
    user-select: none;
    pointer-events: none;
    opacity: 0.95;
}

.footer-phone {
    color: #ffffff;
}
</style>
