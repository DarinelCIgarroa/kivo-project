<template>
  <div class="box-home">
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

    function updateAnimation() {
      requestAnimationFrame(updateAnimation);

      const boxHome = document.querySelector('.box-home');
      if (!boxHome || !cube.value) return;

      angleY += 2; // Continuar con la rotación en el eje Y

      posX += dx;
      posY += dy;

      let maxX = boxHome.clientWidth - cube.value.clientWidth;
      let maxY = boxHome.clientHeight - cube.value.clientHeight;

      if (posX <= 0 || posX >= maxX) {
        dx = -getRandomSpeed(true); // Cambios más bruscos al rebotar horizontalmente
        posX = posX <= 0 ? 0 : maxX;
      }
      if (posY <= 0 || posY >= maxY) {
        dy = -getRandomSpeed(true); // Cambios más bruscos al rebotar verticalmente
        posY = posY <= 0 ? 0 : maxY;
      }

      // Cambio aleatorio de dirección y velocidad con una alta probabilidad
      if (Math.random() < 0.5) { // 50% de probabilidad de cambio
        dx = getRandomSpeed();
        dy = getRandomSpeed();
      }

      cube.value.style.transform = `translate(${posX}px, ${posY}px) rotateY(${angleY}deg)`;
    }

    function getRandomSpeed(forceBrusque = false) {
      // Velocidades más variadas y bruscas si es necesario
      let baseSpeed = forceBrusque ? 20 : 10; // Base speed más alta para cambios más bruscos
      return Math.random() < 0.5 ? -(Math.random() * baseSpeed + 10) : (Math.random() * baseSpeed + 10);
    }


    onMounted(() => {
      requestAnimationFrame(updateAnimation);
    });

    return { cube };
  }
}
</script>

<style scoped>
.box-home {
  position: absolute;
  /* background: rgb(99, 13, 196); */
  width: 100%;
  height: 100vh;
}

.cube {
  width: 100px;
  height: 100px;
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
</style>
