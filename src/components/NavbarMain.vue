<template>
  <div class="nav-container row col-12">
    <div class="flex justify-start col-6 logo">
      <span>Kivo</span>
    </div>
    <div class="content-nav flex justify-end col-6">
      <q-icon color="dark" size="md" name="fa-solid fa-bars"></q-icon>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const menuActive = ref(false)

function toggleMenu() {
  console.log('menu');
  menuActive.value = !menuActive.value;
}
</script>

<style scoped>
.nav-container {
  /* background: #2d0929; */
  /* background: none !important; */
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
}

.logo {
  font-size: 50px;
  font-weight: 500;
  color: var(--homeText);
}

.logo span {
  font-family: 'FontLogo', sans-serif;
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

@media only screen and (min-width: 300px) and (max-width: 768px) {}
</style>
