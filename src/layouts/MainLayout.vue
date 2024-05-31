<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="row">
      <q-header class="col-12 flex justify-start q-header">
        <Navbar></Navbar>
      </q-header>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Navbar from "../components/NavbarMain.vue"
import { ref } from "vue"

const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
body {
  font-family: 'FontDefault', sans-serif;
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
  padding: 0px !important;
  /* background: rebeccapurple */
}

.q-header {
  background: transparent;
  position: relative;
}

@media only screen and (max-width: 600px) {}
</style>
