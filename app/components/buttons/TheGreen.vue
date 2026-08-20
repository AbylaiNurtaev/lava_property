<script setup>
import { computed } from 'vue'

const props = defineProps({
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

const isWhiteButton = computed(() => String(props.color).toLowerCase() === 'white' || String(props.color).toLowerCase() === '#ffffff')
const resolvedTextColor = computed(() => isWhiteButton.value && props.textColor === '#FFFFFF' ? '#2B2925' : props.textColor)
const resolvedBorderColor = computed(() => isWhiteButton.value ? '#E3E1DA' : props.color)
</script>

<template>
    <button
        class="lava-button w-auto rounded-full px-4 lg:px-6 text-[13px] lg:text-base py-3 m-1 lg:m-2 transition-all"
        :style="{ '--button-bg': color, '--button-color': resolvedTextColor, '--button-border': resolvedBorderColor }">
        {{ text }}
    </button>
</template>

<style scoped>
.lava-button {
    background-color: var(--button-bg);
    color: var(--button-color);
    border: 1px solid var(--button-border);
}

.lava-button:hover {
    background-color: #0B4433;
    color: #FFFFFF;
}
</style>
