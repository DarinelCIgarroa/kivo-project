<template>
  <div class="nav-container row col-12">
    <div class="flex justify-start col-6 logo">
      <span class="text-h4 text-white">𝓚𝓲𝓿𝓸</span>
    </div>
    <div class="flex justify-end col-6">
      <q-btn class="menu-button" @click="toggleMenu" round color="none" icon="fa-solid fa-bars"></q-btn>
      <nav>
        <ul class="nav-menu flex justify-end">
          <li class="nav-item"><a href="#home" class="nav-link">Inicio</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link">Servicios</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Acerca de</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contacto</a>
          </li>
        </ul>
      </nav>
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
.logo span {
  font-family: "Pacifico-Regular";
}

.nav-container {
  background: none !important;
  width: 100%;
  padding: 20px 10px;
  background-color: black;
}

.nav-menu {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  padding: 8px;
}

.nav-menu li a {
  font-family: "vollkorn";
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  color: var(--homeText);
  text-decoration: none;
  font-size: 17px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ae1067;
}

.menu-button {
  display: none;
}

@media only screen and (min-width: 300px) and (max-width: 768px) {
  .menu-button {
    display: block;
  }
}

@media only screen and (min-width: 601px) and (max-width: 768px) {

  /* Estilos para teléfonos en horizontal y tablets pequeñas */
  .nav-container {
    padding: 20px 10px;
  }

}
</style>
