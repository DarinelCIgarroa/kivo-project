<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
      :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-dark' : 'bg-dark'">

      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>

          <q-item clickable v-ripple @click="this.$router.push({ name: 'home' });">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-house" color="white"></q-icon>
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              Kivo
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="this.$router.push({ name: 'my-profile' })">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-user" color="white"></q-icon>
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              Mi perfil
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="this.$router.push({ name: 'client-services' })">
            <q-item-section avatar>
              <q-icon color="white" name="fa-solid fa-box"></q-icon>
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              Servicio
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="this.$router.push({ name: 'how-work' })">
            <q-item-section avatar>
              <q-icon color="white" name="fa-solid fa-question"></q-icon>
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              ¿Cómo funciona?
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn dense round unelevated color="accent" icon="chevron_left" @click="miniState = true"></q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="q-px-lg">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue"

const drawer = ref(false)
const miniState = ref(false)

const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false
    e.stopPropagation()
  }
}
</script>

<style>
body {
  font-family: 'FontDefault', sans-serif;
}

.q-drawer__label-item {
  color: white;
}
</style>
