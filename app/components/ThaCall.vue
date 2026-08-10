<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const route = useRoute()

const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const onClickOutside = (e: MouseEvent) => {
    if (!open.value) return
    const el = rootRef.value
    if (el && !el.contains(e.target as Node)) close()
}

onMounted(() => window.addEventListener('click', onClickOutside))
onBeforeUnmount(() => window.removeEventListener('click', onClickOutside))

watch(() => route.fullPath, () => close())
</script>

<template>
    <div ref="rootRef" class="fixed right-6 bottom-6 z-[999999] flex flex-col items-center gap-3"
        :class="{ 'is-open': open }">
        <!-- Вылетающие кнопки -->
        <div class="stack flex flex-col items-center gap-3" v-show="open">
            <!-- WhatsApp -->
            <a href="https://wa.me/66627652952" target="_blank" rel="noopener" class="bubble wa" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.76.46 3.48 1.34 4.99L2 22l5.23-1.37a9.87 9.87 0 0 0 4.81 1.23h.01c5.48 0 9.94-4.46 9.94-9.94C21.99 6.46 17.53 2 12.04 2zm5.8 14.25c-.25.7-1.44 1.34-2 1.42-.52.07-1.17.1-1.89-.12-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.92-4.3-5.07-4.5-.14-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.38.8-.38h.58c.18 0 .42-.07.65.5.25.62.86 2.15.94 2.3.08.16.13.35.02.56-.1.22-.15.35-.3.54-.15.2-.32.43-.46.58-.15.15-.3.32-.13.63.18.32.8 1.33 1.72 2.16 1.18 1.05 2.18 1.38 2.5 1.54.32.15.5.13.69-.08.2-.2.78-.9.99-1.22.2-.3.41-.25.67-.15.27.1 1.7.8 2 1 .3.15.5.23.58.35.07.12.07.7-.18 1.4z" />
                </svg>
            </a>

            <!-- Telegram -->
            <a href="https://t.me/LavaProperty" target="_blank" rel="noopener" class="bubble tg" aria-label="Telegram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M21.8 4.6c.3-1.1-.7-1.9-1.7-1.5L2.9 10.2c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.7c.3 1 1.6 1.2 2.2.5l2.6-2.8 4.9 3c.9.6 2.1.1 2.3-1l3.4-15.5zM9.2 13.4l9.7-6.1c.3-.2.6.2.3.4l-7.9 7.4-.3 3.8-1.7-5.5c-.1-.3 0-.7.4-1z" />
                </svg>
            </a>

            <!-- MAX -->
            <a href="https://max.ru/u/f9LHodD0cOJMf1ZdXmhtxsJut3OCfKmwmchFdZ7WWd4U5mcYjqCqB8UsjJE" target="_blank"
                rel="noopener" class="bubble max" aria-label="MAX">
                <svg viewBox="0 0 57 57" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M28.7903 47.1129C25.1943 47.1129 23.5231 46.5749 20.6183 44.4231C18.7809 46.8439 12.9625 48.7357 12.7088 45.499C12.7088 43.0692 12.1838 41.016 11.5889 38.7745C10.8801 36.013 10.0752 32.9376 10.0752 28.4815C10.0752 17.8389 18.5972 9.83228 28.6941 9.83228C38.7997 9.83228 46.7179 18.2334 46.7179 28.5802C46.7342 33.4725 44.8557 38.1716 41.4946 41.6462C38.1335 45.1207 33.5645 47.0868 28.7903 47.1129Z" />
                </svg>
            </a>
        </div>

        <!-- Главная кнопка -->
        <button type="button" class="main-btn" @click.stop="toggle" aria-label="Открыть мессенджеры">
            <span v-if="!open">
                <svg class="b24-crm-button-icon b24-crm-button-icon-active" width="28" height="29"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="b24-crm-button-chat-icon"
                        d="M25.99 7.744a2 2 0 012 2v11.49a2 2 0 01-2 2h-1.044v5.162l-4.752-5.163h-7.503a2 2 0 01-2-2v-1.872h10.073a3 3 0 003-3V7.744zM19.381 0a2 2 0 012 2v12.78a2 2 0 01-2 2h-8.69l-5.94 6.453V16.78H2a2 2 0 01-2-2V2a2 2 0 012-2h17.382z"
                        fill=" #ffffff" fill-rule="evenodd"></path>
                </svg>
            </span>
            <span v-else class="x">×</span>
        </button>
    </div>
</template>

<style scoped>
/* главная кнопка */
.main-btn {
    width: 76px;
    height: 76px;
    border-radius: 9999px;
    background: var(--text-p-color);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.203);
    transition: transform 0.2s ease;
}

.main-btn {
    animation: bouncePulse 4s infinite;
}

@keyframes bouncePulse {

    0%,
    100% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.15);
    }

    40% {
        transform: scale(1);
    }

    60% {
        transform: scale(1.1);
    }

    80% {
        transform: scale(1);
    }
}

.main-btn:hover {
    transform: scale(1.05);
}

/* .main-btn svg {
    width: 44px;
    height: 44px;
    display: block;
} */

.main-btn svg path {
    fill: #fff !important;
}

.x {
    font-size: 44px;
    color: #fff;
    line-height: 1;
}

/* пузырьки */
.bubble {
    width: 76px;
    height: 76px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3); */

    /* стартовое состояние (скрыто) */
    opacity: 0;
    transform: translateY(18px);
    transition: transform 0.35s ease, opacity 0.35s ease;
}

.bubble svg {
    width: 42px;
    height: 42px;
    display: block;
}

.bubble svg path {
    fill: #fff !important;
    stroke: none !important;
}

/* цвета */
.wa {
    background: #25d366;
}

.tg {
    background: #2aabee;
}

.max {
    background: #96d630;
}

/* открыто */
.is-open .bubble {
    opacity: 1;
    transform: translateY(0);
}

/* задержки появления (1 сверху/снизу — как тебе нужно) */
.is-open .bubble:nth-child(1) {
    transition-delay: 0ms;
}

.is-open .bubble:nth-child(2) {
    transition-delay: 80ms;
}

.is-open .bubble:nth-child(3) {
    transition-delay: 160ms;
}

/* чтобы v-show не “жрал” клики при закрытии */
.stack {
    pointer-events: none;
}

.is-open .stack {
    pointer-events: auto;
}
</style>