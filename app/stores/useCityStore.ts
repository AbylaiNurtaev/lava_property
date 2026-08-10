import { defineStore } from 'pinia'

const isCity = (v: any): v is 'phuket' | 'pattaya' =>
  v === 'phuket' || v === 'pattaya'

export const useCityStore = defineStore('city', {
  state: () => ({
    city: null as null | 'phuket' | 'pattaya',
  }),

  actions: {
    loadCity() {
      if (!process.client) return
      const saved = localStorage.getItem('city')
      this.city = isCity(saved) ? saved : null
    },

    // ✅ persist по умолчанию true, но можно выключить
    setCity(city: 'phuket' | 'pattaya', persist: boolean = true) {
      this.city = city
      if (process.client && persist) localStorage.setItem('city', city)
    },

    clearCity() {
      this.city = null
      if (process.client) localStorage.removeItem('city')
    },
  },
})