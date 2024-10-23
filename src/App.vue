<template>
  <Navigation />
  <main class="container is-max-desktop px-2 py-4">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Layout/Navigation.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
