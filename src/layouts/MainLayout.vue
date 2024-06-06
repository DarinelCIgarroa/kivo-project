<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="row">
      <q-header class="q-header">
        <Navbar></Navbar>
      </q-header>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Navbar from "../components/NavbarMain.vue"
import { ref, onMounted } from "vue"
import { useAppStore } from "@/stores/app-store.js"

const isMenuOpen = ref(false)
const appStore = useAppStore()

onMounted(() => {
  appStore.isMobile = window.innerWidth <= 768;
});

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
  padding: 0 100px;
  display: flex;
  justify-content: center;
}

.q-header {
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
}
</style>
