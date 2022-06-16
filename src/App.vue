<template>
  <NavbarVue />

  <div class="container">
    <RouterLink to="/">Home</RouterLink>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
