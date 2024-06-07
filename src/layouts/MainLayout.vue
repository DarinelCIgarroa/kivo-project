<template>
  <q-layout>
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
  min-height: 100vh !important;
}

.q-page-container {
  width: 90%;
  padding: 0px 60px !important;
  display: flex;
  min-height: 100vh;
  justify-content: center;
}

.q-header {
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding: 20px;
}
</style>
