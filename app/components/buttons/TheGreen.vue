<script setup>
defineProps({
    text: {
        type: String,
        default: 'Смотреть каталог'
    },
    color: {
        type: String,
        default: '#96D630'   // цвет фона
    },
    textColor: {
        type: String,
        default: '#172E4D'   // цвет текста
    }
})
</script>

<template>
    <button
        class="w-auto rounded-full px-4 lg:px-6 text-[13px] lg:text-base py-3 m-1 lg:m-2 hover:opacity-90 transition-all"
        :style="{ backgroundColor: color, color: textColor }">
        {{ text }}
    </button>
</template>
