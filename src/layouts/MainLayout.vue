<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-header class="drawer">
      <q-toolbar class="row items-center justify-between q-gutter-sm">
        <!-- Imagen alineada a la izquierda -->
        <div>
          <img
            v-if="!drawerOpen && $q.screen.lt.md"
            :src="myIcon"
            class="logoSmall"
            :to="{ name: 'home' }"
          />
        </div>

        <!-- Botón de menú alineado a la derecha -->
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-bars"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      :mini="!drawer || drawerStore.isMiniDrawer"
      @click.capture="drawerClick"
      transition-show="slide-right"
      transition-hide="slide-left"
      :breakpoint="500"
      class="drawer"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding active-class="text-white">
          <q-item clickable v-ripple class="justify-center items-center">
            <q-item-section avatar>
              <img
                :src="myIcon"
                :class="drawerStore.isMiniDrawer ? 'logoSmall' : 'logo'"
              />
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="{ name: 'home' }"
            :active="$route.name === 'home'"
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
            :to="{ name: 'client-services' }"
            :active="$route.name === 'client-services'"
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
            :to="{ name: 'my-profile' }"
            :active="$route.name === 'my-profile'"
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
                :to="{ name: 'my-services' }"
                :active="$route.name === 'my-services'"
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
            :to="{ name: 'how-work' }"
            :active="$route.name === 'how-work'"
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
          @click="miniDrawer"
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
import { useDrawerStore } from "@/stores/mainStore/global-navbar-store";

const drawerStore = useDrawerStore();
const drawer = ref(true);

const miniDrawer = () => {
  drawerStore.miniDrawer();
};

const drawerClick = () => {
  drawerStore.drawerClick();
};
</script>

<style>
body {
  font-family: "FontDefault", sans-serif;
}

.logo {
  width: 110px;
  height: 110px;
  transition: width 0.6s ease, height 0.6s ease; /* Transición suave */
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
  background: #293041;
}

.q-drawer {
  transition: width 6s ease;
  transition: padding 6s ease-in-out;
}
.drawer {
  background: #293041;
  transition: width 6s ease-in-out;
  transition: padding 6s ease-in-out;
}
</style>
