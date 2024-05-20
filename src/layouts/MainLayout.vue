<template>
  <q-layout view="hHh lpR fFf">
    <!-- <BoxHome></BoxHome> -->
    <q-page-container class="row">
      <div class="header-mobile">
      </div>
      <q-header class="col-12 flex justify-start" :class="{ 'header-open-menu ': isMenuOpen, 'q-header': !isMenuOpen }">
        <Navbar></Navbar>
      </q-header>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Navbar from "../components/NavbarMain.vue"
import BoxHome from "./partials/BoxHome.vue"
import { ref } from "vue"

const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
body {
  font-family: var(--font-default);
}

.q-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: var(--background);
}

.q-page-container {
  width: 90%;
  border-radius: 10px;
  padding: 20px;
}

.q-header {
  background: none !important;
  position: relative;
}

@media only screen and (max-width: 600px) {

  .header-mobile {
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 4;
  }

  .q-header {
    position: absolute;
    display: flex;
    transform: translateX(150%);
    transition: background-color 0.5s ease, transform 0.5s ease;
    z-index: 2;
  }

  .header-open-menu {
    position: absolute;
    width: 50%;
    height: 100%;
    transform: translateX(120%);
  }

  .q-header-mobile {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
