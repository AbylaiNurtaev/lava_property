<script setup lang="ts">
import { ref, computed, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { useCityStore } from '~/stores/useCityStore'

const route = useRoute()
const router = useRouter()
const cityStore = useCityStore()

const isClient = ref(false)


onMounted(() => {
    isClient.value = true
    cityStore.loadCity() // безопасно, только на клиенте
})
// ✅ город: из store, а если пусто — из URL
// const effectiveCity = computed<'phuket' | 'pattaya' | ''>(() => {
//     if (cityStore.city) return cityStore.city
//     const p = route.path || ''
//     if (p.startsWith('/phuket')) return 'phuket'
//     if (p.startsWith('/pattaya')) return 'pattaya'
//     return ''
// })
// ✅ город: из store, а если пусто — из URL
const effectiveCity = computed<'phuket' | 'pattaya' | ''>(() => {
    if (cityStore.city) return cityStore.city
    const p = route.path || ''
    if (p.startsWith('/phuket')) return 'phuket'
    if (p.startsWith('/pattaya')) return 'pattaya'
    return ''
})
const base = computed(() => (effectiveCity.value ? `/${effectiveCity.value}` : ''))

const linkCatalog = computed(() => (base.value ? `${base.value}/catalog` : '/best'))
const linkVillas = computed(() => (base.value ? `${base.value}/villas` : '/villas'))
const linkCondo = computed(() => (base.value ? `${base.value}/condo` : '/condo'))
const linkBest = computed(() => (base.value ? `${base.value}/best` : '/best'))



const catalogLink = computed(() => {
    if (!cityStore.city) return '/best' // если город не выбран
    return `/${cityStore.city}/catalog`
})

// ✅ подпись города (тоже от effectiveCity)
const cityLabel = computed(() => {
    if (effectiveCity.value === 'pattaya') return 'Паттайя'
    if (effectiveCity.value === 'phuket') return 'Пхукет'
    return ''
})

const open = ref(false)

const dropdownContainer = ref(null);

const toggleDropdown = () => {
    open.value = !open.value;
}
// Close dropdown when clicking outside
const handleClickOutside = (e) => {
    if (dropdownContainer.value && !dropdownContainer.value.contains(e.target)) {
        open.value = false;
    }
};

// Set up event listeners
onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside);
});

// Close dropdown when route changes
// router.beforeEach((to, from, next) => {
//     open.value = false; // Close the dropdown
//     next();
// });
import { watch } from 'vue'

watch(() => route.fullPath, () => {
    open.value = false
})

onUpdated((el) => {
    if (open.value == true) {
        gsap.from('#mobil', { y: -100, opacity: 1, duration: 1 })
    }
})
onMounted((e) => {
    gsap.from('header', { y: -11, duration: 3 });

})
const cityPrefix = computed(() => (cityStore.city ? `/${cityStore.city}` : ''))
const linkHome = computed(() => {
    return effectiveCity.value ? `/${effectiveCity.value}` : '/'
})
const study = computed(() => [
    { title: 'Главная', path: linkHome.value, icon: '' },
    { title: 'Каталог', path: linkCatalog.value, icon: '' },
    { title: 'Лучшие предложения', path: linkBest.value, icon: 'new' },

    // общие страницы — без city
    { title: 'Управление недвижимостью', path: '/rent', icon: 'new' },
    { title: 'Контакты', path: '/contacts', icon: '' },
    { title: 'О компании', path: '/about', icon: '' },
    { title: 'Каталог Виллы', path: linkVillas.value, icon: '' },
    { title: 'Каталог Апартаменты', path: linkCondo.value, icon: '' },
    { title: 'Гид', path: '/news', icon: '' },
])


const isSticky = ref(false)

const onScroll = () => {
    // можешь поменять порог на 20-80px, если нужно “не сразу”
    isSticky.value = window.scrollY > 0
}
onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const spacerClass = computed(() =>
    isSticky.value ? 'h-[64px] lg:h-[88px]' : 'h-[64px] lg:h-[88px]',
)
const headerRef = ref<HTMLElement | null>(null)
const headerH = ref(72) // дефолт

const calcHeaderH = () => {
    headerH.value = headerRef.value?.offsetHeight || 72
}

onMounted(() => {
    calcHeaderH()
    window.addEventListener('resize', calcHeaderH, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', calcHeaderH)
})
</script>
<template>

    <div class="header-wrap dropdown-container sm:mb-10 lg:mb-0 mt-4 " ref="dropdownContainer">
        <div class=" mx-auto relative h-auto md:h-[100px] ">
            <header ref="headerRef" class="fixed left-0 right-0 top-2 z-50 px-4 ">
                <div :class="[
                    'mx-auto ',
                    'duration-500 ease-out will-change-transform will-change-opacity',

                    isSticky
                        ? 'max-container py-2 '
                        : 'container py-3 bg-transparent shadow-none'
                ]" class="">

                    <div class="flex justify-between   items-center px-4 md:px-4 py-2 md:py-2 rounded-full bg-white">
                        <div class="splash flex gap-2 lg:gap-4 items-center">
                            <ClientOnly>
                                <NuxtLink :to="`/${effectiveCity}`">
                                    <div v-if="cityLabel"
                                        class="accent-blue px-4 lg:px-8 py-3 text-sm lg:text-base text-white flex justify-center text-center rounded-full min-w-[80px]">
                                        {{ cityLabel }}
                                    </div>
                                </NuxtLink>
                            </ClientOnly>
                            <IconsTheLogo class="hidden lg:block" />
                            <IconsTheLogoMini class="w-[50px]  block lg:hidden " />
                        </div>
                        <!-- <IconsTheLogo class="hidden lg:block" />
                    <IconsTheLogoMini class="block lg:hidden " /> -->
                        <div class="left-menu flex items-center  lg:gap-2">
                            <div class="accent text-white flex rounded-full">
                                <NuxtLink :to="`/${effectiveCity}`"><button
                                        class="hidden lg:block w-auto lg:px-4 py-3 rounded-full transition duration-0 hover:duration-150 opacity-90  ">
                                        Главная
                                        <!-- <span class="rounded-full bg-red-600 px-2 ">MCK</span> -->
                                    </button>
                                </NuxtLink>
                                <NuxtLink :to="linkCatalog"><button
                                        class="hidden lg:block w-auto lg:px-4 py-3 rounded-full transition duration-0 hover:duration-150 opacity-90  ">
                                        Каталог
                                        <!-- <span class="rounded-full bg-red-600 px-2 ">MCK</span> -->
                                    </button>
                                </NuxtLink>
                                <NuxtLink to="/rent"><button
                                        class="hidden lg:block w-auto lg:px-4 py-3 rounded-full transition duration-0 hover:duration-150 opacity-90  ">
                                        Управление
                                        <!-- <span class="rounded-full bg-red-600 px-2 ">MCK</span> -->
                                    </button>
                                </NuxtLink>
                                <NuxtLink to="/about"> <button
                                        class="hidden lg:block w-auto lg:px-4 py-3 rounded-full transition duration-0 hover:duration-150 opacity-90  ">
                                        О компании
                                        <!-- <span class="rounded-full bg-red-600 px-2 ">MCK</span> -->
                                    </button>
                                </NuxtLink>

                                <NuxtLink to="/contacts"> <button
                                        class="hidden lg:block w-auto lg:px-6 py-3 rounded-full transition duration-0 hover:duration-150 opacity-90  ">
                                        Контакты </button></NuxtLink>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <!-- <div class="hidden md:flex gap-2  items-center">
                                <IconsTheMax />
                                <IconsTheTelegram />
                                <IconsTheWhatsApp />
                            </div> -->
                            <!-- B start version -->
                            <div @click="toggleDropdown"
                                class="pl-2 pr-1 md:pl-2 flex flex-col  items-center justify-center mx-auto">
                                <i :class="[open ? 'pi pi-times' : 'pi pi-align-justify']" style="color: #0F5C43"></i>
                                <span
                                    class=" text-[9px] md:text-[11px] mx-auto text-center  text-gray-500 lowercase">Меню</span>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <!--  mobil menu -->
            <div v-if="open" id="mobil-sidebar" class="fixed left-0 right-0 z-40 px-4"
                :style="{ top: `${headerH + 8}px` }">
                <div id="mobil" class="mx-auto max-w-[1200px] rounded-[20px] bg-white p-4 shadow-xl">
                    <ul class="flex flex-wrap justify-start my-0">
                        <li v-for="(item, index) in study" :key="index"
                            class="w-auto text-[10px] text-center   z-30 flex items-center m-1 md:m-2">
                            <NuxtLink
                                class="text-center rounded-full w-auto px-4 md:px-6 py-4 text-white  rounded-full transition duration-0 hover:duration-150 text-[12px] md:text-[14px] accent-blue hover:bg-gray-100 hover:text-black  "
                                :to="`${item.path}`"><i class="pi pi pi-caret-right pr-1 md:pr-2"
                                    style="color:white"></i>{{
                                        item.title }} <span v-if="item.icon" class="rounded-full bg-red-600 px-2 text-white">{{
                                    item.icon }}</span> </NuxtLink>
                        </li>
                    </ul>
                    <!-- <div
                        class="icons flex justify-between md:justify-center items-center accent rounded-[40px] mt-2 py-2 px-4 md:px-8">
                        <p class="mr-4 text-[10px] uppercase">Наши соц.сети:</p>
                        <a href="tel:" class="opacity-50 p-2 hover:opacity-100" target="_blank"><i
                                class="pi pi-phone"></i></a>
                        <a href="https://t.me/" class="opacity-50 p-2 hover:opacity-100" target="_blank"><i
                                class="pi pi-telegram"></i></a>
                        <a href="https://www.youtube.com/@" class="opacity-50 p-2 hover:opacity-100" target="_blank"><i
                                class="pi pi-youtube"></i></a>
                        <a href="https://vk.com/" class="opacity-50 p-2 hover:opacity-100" target="_blank"><img
                                src="/img/icons/vk-icon.svg" alt="vkontakte" /></a>
                    </div> -->
                </div>
            </div>
        </div>
        <!--  the end mobil menu -->
    </div>
</template>
<style scoped>
.pi-times,
.pi-align-justify {
    color: rgba(255, 255, 255, 0.507);
    font-size: 2rem
}

.container {
    max-width: 1200px
}

#mobil-sidebar {
    width: 100%;
    left: 50%;
    /* коррекция положения элемента */
    transform: translate(-50%);
}

@media (max-width:600px) {
    .container {
        max-width: 90%;
        margin: 10px auto;
    }

    #mobil-sidebar {
        width: 100%;
        margin: 10px auto;

    }

    .pi-align-justify {
        color: rgba(255, 255, 255, 0.507);
        font-size: 1.5rem
    }

    /* .mobil-sidebar{
        max-width: 90%;
        margin: 0 auto;
    } */
}
</style>
