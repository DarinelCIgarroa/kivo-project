<template>
  <div class="scene">
    <div class="cube" ref="cube">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face right"></div>
      <div class="face left"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const cube = ref(null);
    let angleY = 0; // Ángulo para la rotación en el eje Y
    let posX = 50, posY = 50; // Posiciones iniciales (ajustadas para que no empiece en el borde)
    let dx = getRandomSpeed(), dy = getRandomSpeed(); // Velocidades iniciales

    function getRandomSpeed() {
      return Math.floor(Math.random() * 20 - 10) || 5; // Asegurarse de que la velocidad no sea 0
    }

    function updateAnimation() {
      requestAnimationFrame(updateAnimation);

      const scene = document.querySelector('.scene');
      if (!scene || !cube.value) return;

      // Actualizar ángulo en el eje Y
      angleY += 1; // Aumentar en 3 grados cada frame para una rotación suave y continua

      posX += dx;
      posY += dy;

      // Ajustar los límites considerando el tamaño del cubo
      let maxX = scene.clientWidth - cube.value.clientWidth;
      let maxY = scene.clientHeight - cube.value.clientHeight;

      // Revertir la dirección al llegar a los bordes del contenedor y aplicar corrección si es necesario
      if (posX <= 0 || posX >= maxX) {
        dx = -dx;
        posX = posX <= 0 ? 0 : maxX; // Corregir posición para mantener dentro del contenedor
      }
      if (posY <= 0 || posY >= maxY) {
        dy = -dy;
        posY = posY <= 0 ? 0 : maxY; // Corregir posición para mantener dentro del contenedor
      }

      // Cambiar aleatoriamente las direcciones en intervalos regulares
      if (Math.random() < 0.1) { // 10% de probabilidad de cambio aleatorio de dirección
        dx = getRandomSpeed();
        dy = getRandomSpeed();
      }

      // Aplicar transformaciones al cubo
      cube.value.style.transform = `translate(${posX}px, ${posY}px) rotateY(${angleY}deg)`;
    }

    onMounted(() => {
      requestAnimationFrame(updateAnimation);
    });

    return { cube };
  }
}
</script>

<style scoped>
.scene {
  width: 84vw;
  height: 100vh;
  position: relative;
  /* background-color: brown; */
  overflow: hidden;
}

.cube {
  width: 200px;
  height: 200px;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 2s linear;
  /* background-color: black; */
}

.face {
  position: absolute;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 2px solid white;
}

.front {
  transform: translateZ(25px);
}

.back {
  transform: rotateY(180deg) translateZ(25px);
}

.right {
  transform: rotateY(90deg) translateZ(25px);
}

.left {
  transform: rotateY(-90deg) translateZ(25px);
}

.top {
  transform: rotateX(90deg) translateZ(25px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(25px);
}

@media only screen and (min-width: 300px) and (max-width: 599px) {
  .scene {
    height: 100vh;
    /* background-color: rgb(126, 211, 14); */
  }

}
</style>
