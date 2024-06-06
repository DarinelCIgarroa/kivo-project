<template>
  <transition appear enter-active-class="animated zoomIn slower" leave-active-class="animated fadeInDown slower">
    <div ref="scrollArea" class="data-client-detail col-12">
      <q-infinite-scroll @load="onLoad" :offset="50" :scroll-target="scrollArea">
        <div class="content-card">
          <DetailClient v-for="client in clients" :key="client.id" :client="client">
          </DetailClient>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="2.5em"></q-spinner-dots>
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </transition>
</template>

<script setup>
import DetailClient from "./partials/DetailClient.vue"
import { ref } from 'vue';

defineOptions({
  name: 'HomeSearchService'
});

const clients = ref([
  {
    id: 1,
    name: 'Lorenzo Cigarroa de los Santos',
    price: '850',
    transport_type: 'Van',
    avatar: null,
    placeOrigin: 'Madrid, España',
    placeDestination: 'Barcelona, España',
    detailsArticles: [
      { name: 'Cajas de libros', number: 10 },
      { name: 'Bicicleta', number: 2 },
      { name: 'Equipo de camping', number: 3 },
      { name: 'Cajas de cocina', number: 4 },
      { name: 'Lámparas', number: 2 },
      { name: 'Ropa de temporada', number: 8 },
      { name: 'Televisor', number: 1 },
      { name: 'Equipo de sonido', number: 1 },
      { name: 'Cajas de decoración', number: 5 },
      { name: 'Juguetes', number: 3 },
      { name: 'Muebles pequeños', number: 3 },
      { name: 'Cajas de herramientas', number: 2 },
      { name: 'Artículos deportivos', number: 4 },
      { name: 'Ropa de cama', number: 3 },
      { name: 'Calzado', number: 5 },
      { name: 'Libros', number: 20 },
      { name: 'Electrodomésticos pequeños', number: 3 },
      { name: 'Artículos de baño', number: 4 },
      { name: 'Maletas', number: 3 },
      { name: 'Mochilas', number: 2 }
    ]
  },
  // Ejemplos adicionales con números aleatorios y tipos de artículos:
  {
    id: 2,
    name: 'Mirta Ocaña Lopez',
    price: '1300',
    transport_type: 'Truck',
    avatar: null,
    placeOrigin: 'Buenos Aires, Argentina',
    placeDestination: 'Mendoza, Argentina',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Artículo ${i + 1}`, number: i + 1 }))
  },
  {
    id: 3,
    name: 'Felipe Gutierrez Nola',
    price: '1100',
    transport_type: 'MiniVan',
    avatar: null,
    placeOrigin: 'Lima, Perú',
    placeDestination: 'Cuzco, Perú',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Producto ${i + 1}`, number: 2 }))
  },
  {
    id: 4,
    name: 'Carla Karian Mendez Agrup',
    price: '1600',
    transport_type: 'Flatbed',
    avatar: null,
    placeOrigin: 'México D.F., México',
    placeDestination: 'Guadalajara, México',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Ítem ${i + 1}`, number: 3 }))
  },
  {
    id: 5,
    name: 'Sergio Ramos Verllin',
    price: '1800',
    transport_type: 'RefrigeratedTruck',
    avatar: null,
    placeOrigin: 'Santiago, Chile',
    placeDestination: 'Valparaíso, Chile',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Carga ${i + 1}`, number: 4 }))
  },
  {
    id: 6,
    name: 'Ana Perez Lopez',
    price: '1400',
    transport_type: 'BoxTruck',
    avatar: null,
    placeOrigin: 'Bogotá, Colombia',
    placeDestination: 'Medellín, Colombia',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Equipo ${i + 1}`, number: 5 }))
  },
  {
    id: 7,
    name: 'Jorge Ortega Paez',
    price: '950',
    transport_type: 'SUV',
    avatar: null,
    placeOrigin: 'Quito, Ecuador',
    placeDestination: 'Guayaquil, Ecuador',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Material ${i + 1}`, number: 6 }))
  },
  {
    id: 8,
    name: 'Lucía Vargas',
    price: '2000',
    transport_type: 'Cargo Plane',
    avatar: null,
    placeOrigin: 'Caracas, Venezuela',
    placeDestination: 'Maracaibo, Venezuela',
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({ name: `Paquete ${i + 1}`, number: 7 }))
  }
]);

const scrollArea = ref(null);

const onLoad = (index, done) => {
  console.log(index, done);
  setTimeout(() => {
    clients.value.push(
      {
        id: 1,
        name: 'Lorenzo Cigarroa de los Santos',
        price: '850',
        transport_type: 'Van',
        avatar: null,
        placeOrigin: 'Madrid, España',
        placeDestination: 'Barcelona, España',
        detailsArticles: ['Cajas de libros', 'Bicicleta'],
      },
      {
        id: 1,
        name: 'Lorenzo Cigarroa de los Santos',
        price: '850',
        transport_type: 'Van',
        avatar: null,
        placeOrigin: 'Madrid, España',
        placeDestination: 'Barcelona, España',
        detailsArticles: ['Cajas de libros', 'Bicicleta'],
      },
      {
        id: 2,
        name: 'María Rodríguez',
        price: '750',
        transport_type: 'Carro',
        avatar: null,
        placeOrigin: 'Sevilla, España',
        placeDestination: 'Valencia, España',
        detailsArticles: ['Ropa', 'Electrónicos'],
      },
      {
        id: 3,
        name: 'Carlos Pérez',
        price: '950',
        transport_type: 'Camión',
        avatar: null,
        placeOrigin: 'Barcelona, España',
        placeDestination: 'Madrid, España',
        detailsArticles: ['Muebles', 'Electrodomésticos'],
      }
    );

    done()
  }, 2000)
}

</script>

<style scoped>
.data-client-detail {
  max-height: 80vh;
  width: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) white;
}

.content-card {
  display: flex;
  flex-wrap: wrap;
  height: 40%;
  width: 100%;
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(100%);
  font-size: 24px;
  color: #fff;
  background: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: scrollIndicator 1.5s infinite;
  z-index: 1000;
}

@media (max-width: 320px) {
  .data-client-detail {
    height: 90vh;
  }

  .scroll-indicator {
    left: 27%;
  }
}
</style>
