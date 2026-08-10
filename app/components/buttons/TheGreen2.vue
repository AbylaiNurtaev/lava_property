<!-- components/ButtonsTheGreen.vue -->
<script setup lang="ts">
const props = defineProps<{
    text: string
    color?: string
    textColor?: string
    active?: boolean      // <- добавили
}>()

const emit = defineEmits<{
    (e: 'click'): void
}>()
</script>

<template>
    <button class="lava-button-secondary px-4 py-2 rounded-full border transition" :class="[
        active ? 'ring-2 ring-offset-2  scale-[1.02]' : '',
    ]" :style="{
        '--button-bg': props.color || '#0F5C43',
        '--button-color': props.textColor || '#FFFFFF'
    }" @click="emit('click')">
        {{ text }}
    </button>
</template>

<style scoped>
.lava-button-secondary {
    background-color: var(--button-bg);
    color: var(--button-color);
    border-color: #E3E1DA;
}

.lava-button-secondary:hover {
    background-color: #0B4433;
    border-color: #0B4433;
    color: #FFFFFF;
}
</style>
