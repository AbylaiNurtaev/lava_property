<script setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '120x120', href: '/favicon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
})
</script>
<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtLayout>
      <NuxtPage page-key="static" />
    </NuxtLayout>

  </div>
</template>
