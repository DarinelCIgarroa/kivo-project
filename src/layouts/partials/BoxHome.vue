<template>
  <div class="scene">
    <div class="cube" ref="cube">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face right"></div>
      <div class="face left"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
      <div class="lid"></div> <!-- Tapa de la caja -->
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const cube = ref(null);
    let angleX = 0, angleY = 0; // Ángulos para la rotación en dos ejes
    let posX = 0, posY = 0; // Posiciones iniciales
    let dx = 5, dy = 5; // Incrementos de movimiento

    function updateAnimation() {
      requestAnimationFrame(updateAnimation); // Animación continua con requestAnimationFrame

      const scene = document.querySelector('.scene');
      if (!scene || !cube.value) return;

      // Actualizar ángulos y posición
      angleX = (angleX + 1) % 360;
      angleY = (angleY + 1) % 360;
      posX += dx;
      posY += dy;

      // Revertir la dirección al llegar a los bordes del contenedor
      if (posX <= 0 || posX >= scene.clientWidth - cube.value.clientWidth) dx = -dx;
      if (posY <= 0 || posY >= scene.clientHeight - cube.value.clientHeight) dy = -dy;

      // Aplicar transformaciones al cubo
      cube.value.style.transform = `translate(${posX}px, ${posY}px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;

      // Ajustar la tapa para que siga al cubo
      const lid = cube.value.querySelector('.lid');
      if (lid) {
        lid.style.transform = `translateZ(125px) rotateX(${angleX - 90}deg)`;
      }
    }

    onMounted(() => {
      requestAnimationFrame(updateAnimation); // Iniciar la animación
    });


    return { cube };
  }
}
</script>

<style scoped>
.scene {
  width: 90vw;
  height: 90vh;
  position: relative;
  /* background-color: brown; */
  overflow: hidden;
}

.cube {
  padding: 100px;
  width: 500px;
  height: 500px;
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
