<script setup>
import { RouterView } from 'vue-router'

document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
