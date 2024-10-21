<template>
  <q-card class="card-map-google">
    <div id="myMap" style="height: 100vh; width: 100vh">
      <q-select
        v-model="selectedTravelMode"
        :options="travelOptions"
        label="Selecciona el modo de viaje"
        @update:model-value="updateRoute"
      />
    </div>
  </q-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";


const originPlaceId = "ChIJtRKjR83-0YURSRoKZak2sSs";
const destinationPlaceId = "ChIJX-vd5kgAzoURe-vvgkEJ7Rg";
let directionsRenderer, directionsService, map;

// Modo de viaje seleccionado por el usuario
const selectedTravelMode = ref(google.maps.TravelMode.DRIVING); // Valor inicial
const travelOptions = [
  { label: "Carro", value: google.maps.TravelMode.DRIVING },
  { label: "A pie", value: google.maps.TravelMode.WALKING },
  { label: "Bicicleta", value: google.maps.TravelMode.BICYCLING },
  { label: "Transporte público", value: google.maps.TravelMode.TRANSIT },
];

onMounted(() => {
  console.log("Componente mapa");

  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });

  loader.load().then(() => {
    initializeMap(originPlaceId, destinationPlaceId);
  });
});

function initializeMap(originPlaceId, destinationPlaceId) {
  // Inicializar el mapa y los servicios de Google Maps
  const mapElement = document.getElementById("myMap");
  map = new google.maps.Map(mapElement, {
    center: { lat: 19.4326, lng: -99.1332 }, // Centrar en Ciudad de México
    zoom: 20,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  // Renderizar la ruta inicial
  renderRoute(originPlaceId, destinationPlaceId, selectedTravelMode.value);
}

function renderRoute(originPlaceId, destinationPlaceId, travelMode) {
  const request = {
    origin: { placeId: originPlaceId },
    destination: { placeId: destinationPlaceId },
    travelMode: travelMode, // Usar el modo de viaje seleccionado
  };

  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
      console.log("Ruta renderizada correctamente.");
    } else {
      console.error("Error al renderizar la ruta:", status);
    }
  });
}

// Actualizar la ruta cuando se cambia el modo de viaje
function updateRoute() {
  if (directionsRenderer && directionsService) {
    directionsRenderer.setDirections({ routes: [] }); // Limpiar la ruta anterior
    renderRoute(
      originPlaceId,
      destinationPlaceId,
      selectedTravelMode.value.value
    ); // Llamar a renderRoute con los valores actuales
  }
}
</script>

<style scoped>
.card-map-google {
  height: 100vh !important;
  width: 100vh !important;
}
@media (min-width: 600px) {
  .q-dialog__inner--minimized > div {
    max-width: 100vh !important;
  }
}
</style>
