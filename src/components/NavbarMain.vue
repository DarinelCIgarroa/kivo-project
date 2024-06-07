<template>
  <div :class="['nav-container row col-12', { 'scrolled': appStore.isScrolled }]">
    <div class="flex justify-start col-6 logo">
      <span>Kivo</span>
    </div>
    <div class="content-nav flex justify-end col-6">
      <q-icon color="dark" class="icon-medium" name="fa-solid fa-bars"></q-icon>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/stores/app-store.js';
const appStore = useAppStore();

</script>

<style scoped>
.nav-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.content-nav {
  cursor: pointer;
}

.logo {
  font-size: 50px;
  font-weight: 500;
  color: var(--homeText);
}

.logo span {
  font-family: 'FontLogo', sans-serif;
  transition: padding 0.5s ease, font-size 0.5s ease;
}

.scrolled .logo span {
  padding: 0px;
  font-size: 38px;
}

.icon-medium {
  font-size: 30px;
  transition: font-size 0.5s ease;
}

.icon-small {
  font-size: 25px;
  transition: font-size 0.5s ease;
}

.nav-menu {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  padding: 8px;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  font-size: 22px;
}

.nav-link {
  color: var(--homeText);
  text-decoration: none;
  font-size: 17px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #000000;
}

.menu-button {
  display: none;
}

@media (max-width: 320px) {
  .nav-container {
    padding: 8px;
  }
}
</style>
