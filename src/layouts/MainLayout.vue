<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      transition-show="slide-right"
      transition-hide="slide-left"
      :breakpoint="500"
      class="drawer"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding active-class="text-white">
          <q-item
            clickable
            v-ripple
            @click="link = 'home'"
            class="justify-center items-center"
          >
            <q-item-section avatar>
              <img :src="myIcon" :class="miniState ? 'logoSmall' : 'logo'" />
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="home"
            @click="link = 'home'"
            :active="link === 'home'"
            active-class="my-menu-link"
            class="q-my-sm"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-house" color="white"></q-icon>
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              <q-item-label>Inicio</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="client-services"
            @click="link = 'client-services'"
            :active="link === 'client-services'"
            active-class="my-menu-link"
            class="q-my-sm"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-handshake" color="white"></q-icon>
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              <q-item-label>Solicitudes de servicio</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="my-profile"
            @click="link = 'my-profile'"
            :active="link === 'my-profile'"
            active-class="q-item-no-link-highlighting my-menu-link"
            class="q-my-sm"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-user" color="white" />
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              <q-item-label>Mi perfil</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item
            icon="fa-solid fa-dice-d6"
            label="Servicios"
            header-class="text-white justify-center items-center"
            class="q-my-sm"
          >
            <q-list class="q-pl-lg">
              <q-item
                clickable
                v-ripple
                @click="link = 'my-service'"
                :active="link === 'my-service'"
                active-class="q-item-no-link-highlighting text-white my-menu-link"
              >
                <q-item-section avatar>
                  <q-icon color="white" name="fa-solid fa-circle-nodes" />
                </q-item-section>
                <q-item-section class="q-drawer__label-item">
                  <q-item-label>Mis servicios</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item
            clickable
            v-ripple
            to="how-work"
            @click="link = 'how-work'"
            :active="link === 'how-work'"
            active-class="q-item-no-link-highlighting my-menu-link"
            class="q-my-sm"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-shapes" color="white" />
            </q-item-section>
            <q-item-section class="q-drawer__label-item">
              <q-item-label>¿Cómo funciona?</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="white"
          icon="fa-solid fa-circle-chevron-left"
          size="md"
          text-color="primary"
          @click="miniState = true"
        />
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
import { ref } from "vue";
import myIcon from "@/assets/logo-kivo.svg";

const drawer = ref(false);
const miniState = ref(false);
const link = ref("home");

const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
};
</script>

<style>
body {
  font-family: "FontDefault", sans-serif;
}
.logo {
  width: 100px;
  height: 100px;
  transition: width 0.5s ease, height 0.7s ease; /* Transición suave */
}

.logoSmall {
  width: 65px;
  height: 65px;
  transition: width 0.5s ease, height 0.7s ease; /* Transición suave */
}

.q-drawer__label-item {
  color: white;
  font-size: 15px;
}

.my-menu-link {
  color: white;
  background: #474c5b;
}
.drawer {
  background: #293041;
}
.test {
  /* background-color: aquamarine; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
@media (max-width: 1400px) {
  .q-drawer--standard {
    width: 250px !important;
  }
}
</style>
