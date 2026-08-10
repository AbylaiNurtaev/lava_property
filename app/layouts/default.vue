<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from '#imports'
import { useCityStore } from '~/stores/useCityStore'

const route = useRoute()
const cityStore = useCityStore()
const ready = ref(false)

const isClient = ref(false)
onMounted(() => {
    isClient.value = true
    cityStore.loadCity()

})

const showCommonShell = computed(() => route.path === '/' || !!cityStore.city)
</script>
<template>
    <div>
        <TheHeader class="absolute top-0 left-0 w-full z-[70]" />

        <main class="relative">
            <div :key="route.fullPath">
                <slot />
            </div>
        </main>

        <ThaCall v-if="showCommonShell" />
        <TheFooter v-if="showCommonShell" />
        <TheCookieBanner v-if="showCommonShell" />
    </div>
</template>
