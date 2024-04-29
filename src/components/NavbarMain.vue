<template>
  <div class="nav-container row">
    <div class="flex justify-start col-6 logo">
      <span class="text-h4 text-white">𝓚𝓲𝓿𝓸</span>
      <!-- <span style="font-weight: 500; color: var(--homeText);" class="text-h4">𝒦𝒾𝓋𝑜</span> -->
    </div>
    <nav class="flex justify-end col-6">
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
</template>

<style scoped>
.logo span {
  font-family: "Pacifico-Regular";
}

.nav-container {
  background: none !important;
  width: 100%;
  padding: 20px 10px;
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
</style>
