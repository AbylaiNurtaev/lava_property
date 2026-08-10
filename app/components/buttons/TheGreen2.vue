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
    <button class="px-4 py-2 rounded-full border transition" :class="[
        active ? 'ring-2 ring-offset-2  scale-[1.02]' : '',
    ]" :style="{
        backgroundColor: props.color || '#2EB875',
        color: props.textColor || '#fff'
    }" @click="emit('click')">
        {{ text }}
    </button>
</template>
