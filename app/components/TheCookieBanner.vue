<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)


onMounted(() => {
    if (!localStorage.getItem('cookieAccepted')) {
        setTimeout(() => {
            visible.value = true
        }, 1500) // ← задержка в миллисекундах
    }
})

const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true')
    visible.value = false
}
</script>

<template>
    <transition name="slide-up">
        <div v-if="visible" class="max-container2 fixed bottom-4 left-4 right-4 z-[9999] 
           bg-white shadow-xl rounded-[30px] p-4 
           flex flex-col lg:flex-row lg:items-center justify-between  gap-4">
            <p class="text-sm text-gray-700">
                Мы используем cookie для улучшения работы сайта.
                Продолжая пользоваться сайтом, вы соглашаетесь с их использованием.
            </p>

            <button @click="acceptCookies" class="accent text-white px-6 py-2 rounded-[30px] ">
                Понятно
            </button>
        </div>
    </transition>
</template>
<style lang="css" scoped>
button:hover {
    background-color: #172e4d;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 2s ease, opacity 0.4s ease;
}

.slide-up-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.max-container2 {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width:414px) {
    .max-container2 {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>