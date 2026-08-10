<script setup>
defineProps({
    text: {
        type: String,
        default: 'Смотреть каталог'
    },
    color: {
        type: String,
        default: '#0F5C43'   // цвет фона
    },
    textColor: {
        type: String,
        default: '#FFFFFF'   // цвет текста
    }
})
</script>

<template>
    <button
        class="lava-button w-auto rounded-full px-4 lg:px-6 text-[13px] lg:text-base py-3 m-1 lg:m-2 transition-all"
        :style="{ '--button-bg': color, '--button-color': textColor }">
        {{ text }}
    </button>
</template>

<style scoped>
.lava-button {
    background-color: var(--button-bg);
    color: var(--button-color);
}

.lava-button:hover {
    background-color: #0B4433;
    color: #FFFFFF;
}
</style>
