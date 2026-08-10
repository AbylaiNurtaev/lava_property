import { defineNuxtRouteMiddleware } from '#app'
import { useCityStore } from '~/stores/useCityStore'

export default defineNuxtRouteMiddleware((to) => {
  const cityStore = useCityStore()

  const path = to.path || ''

  if (path === '/pattaya' || path.startsWith('/pattaya/')) {
    cityStore.setCity('pattaya')
    return
  }

  if (path === '/phuket' || path.startsWith('/phuket/')) {
    cityStore.setCity('phuket')
    return
  }

  // 3-е состояние: "не выбран"
  if (path === '/') {
    cityStore.clearCity()
  }
})