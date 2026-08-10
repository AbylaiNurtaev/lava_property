import { usePropertyStore } from '~/stores/useProperties'

export default defineNuxtPlugin(async () => {
  const propertyStore = usePropertyStore()
  await propertyStore.ensureLoaded()
})
