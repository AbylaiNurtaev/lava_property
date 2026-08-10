<script setup>
import { ref } from "vue";
import { vMaska } from "maska/vue";

const phone = ref('');
const message = ref('');
let successfully = ref(false);
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
const handleSubmit2 = async () => {
    const digits = digitsOnly.value;

    if (digits.length < 8) {
        message.value = "Пожалуйста, введите корректный номер телефона.";
        return;
    }

    const formData = new FormData();
    formData.append("phone", phone.value);
    formData.append("page_url", window.location.href);

    try {
        const res = await fetch('/contacts.php', {
            method: 'POST',
            body: formData,
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        successfully.value = true
        phone.value = "";
        message.value = "";
    } catch (err) {
        console.error('Ошибка отправки:', err)
        message.value = 'Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.'
    }
}
</script>
<template>
    <div class="container mx-auto lg:my-10  flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center">
        <div class=" w-full lg:w-1/2">
            <h2 class="light text-2xl lg:text-4xl mb-10 mt-10">
                Возникли вопросы?
            </h2>
            <div class="flex mb-2">
                <img class="w-[70px]" src="/img/people/anna.png" alt=" LavaProperty">
                <img class="w-[70px] -ml-4" src="/img/people/sergio.png" alt="LavaProperty">
                <img class="w-[70px] -ml-6" src="/img/people/vika.png" alt="LavaProperty">
                <img class="w-[70px] -ml-6" src="/img/people/ekat.png" alt="LavaProperty">
            </div>
            <p class="">
                Наши специалисты по недвижимости в Тайланде
                с удовольствием вас проконсультирует по любым вопросам
            </p>
            <!--  -->
            <form @submit.prevent="handleSubmit2" class="flex flex-col gap-4 w-full my-10 ">
                <div class="text-[12px] text-red-700">{{ message }}</div>
                <div class="relative w-full">
                    <span class="flag-badge" :title="countryName">
                        {{ flag }}
                    </span>
                    <input v-model="phone" v-maska="'+#################'" placeholder="+" type="tel" @focus="ensurePlus"
                        class="rounded-full w-full py-3 pr-10 pl-14" />
                </div>
                <button
                    class="w-full rounded-full px-3 lg:px-6 py-3 hover:opacity-90 transition-all accent text-white  ">Заказать
                    звонок</button>

                <span v-if="successfully" class="block text-[10px] leading-[1.5] text-center my-6">
                    Мы уже получили ваше сообщение!
                </span>
                <span class="block   text-[10px] leading-[1.5] text-center lg:text-left">
                    Нажимая на кнопку "Cвязаться со специалистом", вы соглашаетесь с нашей
                    политикой конфиденциальности
                </span>
            </form>
            <div class="flex flex-col md:flex-row items-center  gap-6 ">
                <p class="flex md:w-[400px] text-[10px] lg:text-base text-center md:text-left">
                    Или напишите нам прямо сейчас в мессенджерах — мы всегда на связи!
                </p>
                <div class="flex gap-4">
                    <IconsTheTelegram />
                    <IconsTheWhatsApp />
                    <IconsTheMax />
                </div>
            </div>
            <!--  -->
        </div>
        <!--  -->
        <div class="relative bg-[url(/img/obj4.webp)] w-full lg:w-1/2 cursor-pointer bg-cover bg-center h-[450px]  rounded-[20px] flex flex-col justify-end p-6"
            data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
            data-aos-easing="ease-out-cubic">
            <!--  -->
            <div class="absolute lg:-top-20 flex flex-col justify-start  w-[230px] items-start bg-white  p-4 lg:p-6 rounded-[20px]"
                data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
                <svg width="185" height="107" viewBox="0 0 185 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M64.5029 63.1309C64.5029 52.6375 73.0095 44.1309 83.5029 44.1309C93.9963 44.1309 102.503 52.6375 102.503 63.1309C102.503 73.6243 93.9963 82.1309 83.5029 82.1309C73.0095 82.1309 64.5029 73.6243 64.5029 63.1309Z"
                        fill="#96D630" />
                    <path
                        d="M1.00293 106.131C11.6696 85.6307 23.8615 51.5449 91.5979 62.0967C128.61 62.0967 177.102 37.2277 183.502 0.827674"
                        stroke="#96D630" stroke-width="2" />
                </svg>

                <p><span class="bl0 m-0 leading-0">Как проверить застройщика недвижимости </span>в Тайланде</p>
            </div>
            <!--  -->
            <div style="background-color:#96D630"
                class="absolute lg:-bottom-20 lg:right-10 hidden lg:flex flex-col justify-start  w-[250px] items-start  p-4 lg:p-6 rounded-[20px]"
                data-aos="fade-left" data-aos-delay="200" data-aos-once="true" data-aos-duration="1200"
                data-aos-easing="ease-out-cubic">
                <div class="flex gap-4 items-center mb-2">
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.736328" y="0.741699" width="62" height="62" rx="31" fill="#ffffff" />
                        <path
                            d="M49.5042 27.0947V23.5411C49.5042 22.721 48.9575 22.1743 48.1374 22.1743H39.5267C39.1166 22.9944 38.1599 23.5411 37.2031 23.5411C36.2464 23.5411 35.2896 22.9944 34.8796 22.1743H15.3346C14.5145 22.1743 13.9678 22.721 13.9678 23.5411V27.0947C15.6079 28.0515 16.7013 29.8283 16.7013 31.7418C16.7013 33.6553 15.6079 35.5688 13.9678 36.3889V39.9425C13.9678 40.7626 14.5145 41.3093 15.3346 41.3093H34.8796C35.2896 40.4893 36.2464 39.9425 37.2031 39.9425C38.1599 39.9425 39.1166 40.4893 39.5267 41.3093H48.1374C48.9575 41.3093 49.5042 40.7626 49.5042 39.9425V36.3889C47.8641 35.4321 46.7706 33.6553 46.7706 31.7418C46.7706 29.8283 47.8641 27.9148 49.5042 27.0947Z"
                            stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M37.2031 26.2747V30.375" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M37.2031 37.209V33.1086" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.5352 35.8421L29.0023 27.6414" stroke="black" stroke-width="2"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.1685 26.2747V30.375" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.3691 33.1086V37.209" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p><span class="bl0 m-0 leading-0 block">Вилла</span>35 000$</p>
                </div>
                <p><span class="bl0 m-0 leading-0">Хороший объект </span>для инвестирования</p>
                <ButtonsTheGreen text="Cмотреть" color="white" class="w-full ml-0" />
            </div>
            <!--  -->
        </div>
    </div>
</template>
<style lang="css" scoped>
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
</style>