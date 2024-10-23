<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-5 is-family-monospace">
          <img :src="`${logoImg}`" alt="logo" />
          <span class="ml-2">Noteballs</span>
        </RouterLink>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            @click="showMobileNav = false"
            class="navbar-item"
            active-class="is-active"
            >Notes
          </RouterLink>
          <RouterLink
            to="/stats"
            @click="showMobileNav = false"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import logoImg from '../../assets/note-logo.png'

const showMobileNav = ref(false)

const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navbarMenuRef, () => (showMobileNav.value = false), {
  ignore: [navbarBurgerRef],
})
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
