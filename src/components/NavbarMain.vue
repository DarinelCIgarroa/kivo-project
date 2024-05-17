<template>
  <div class="nav-container row col-12">
    <div class="flex justify-start col-6 logo">
      <span class="text-h4 text-white">𝓚𝓲𝓿𝓸</span>
    </div>
    <div class="content-nav flex justify-end col-6">
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
  /* padding: 20px 10px; */
  background-color: rgb(5, 110, 155);
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
  color: #000000;
}

.menu-button {
  display: none;
}

@media only screen and (min-width: 300px) and (max-width: 768px) {

  .nav-container {
    width: 80%;
    height: 100%;
    background: linear-gradient(to bottom right, #2d0929, #1758a3) !important;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    padding: 20px;
    width: 100%;
    /* background-color: red; */
  }

  .logo span {
    font-size: 1.5em;
  }

  .content-nav {
    display: flex;
    width: 100%;
    height: 70%;
    /* background-color: aqua; */
  }

  .content-nav nav {
    /* background: yellow; */
    width: 100%;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .nav-menu li a {
    font-size: 2em;
  }

}
</style>
