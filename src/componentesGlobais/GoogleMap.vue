<template>
  <q-card class="card-map-google">
    <q-card-section id="myMap" class="map-section"></q-card-section>
    <q-btn
      class="close-map-btn"
      color="primary"
      label="Cerrar Mapa"
      @click="closeMap"
    />
  </q-card>
</template>

<script setup>
import { onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { useMapStore } from "@/stores/google-map/map-store";

const originPlaceId = "ChIJtRKjR83-0YURSRoKZak2sSs";
const destinationPlaceId = "ChIJX-vd5kgAzoURe-vvgkEJ7Rg";
const mapStore = useMapStore();

let directionsRenderer, directionsService, map;

onMounted(() => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });

  loader.load().then(() => {
    initializeMap();
  });
});

// Inicializar el mapa de Google
function initializeMap() {
  const mapElement = document.getElementById("myMap");
  map = new google.maps.Map(mapElement, {
    zoom: 20,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }], // Puntos de interés
      },
      {
        featureType: "transit",
        stylers: [{ visibility: "off" }], // Líneas de transporte público
      },
    ],
    mapTypeControl: false, // Control de tipo de mapa
    streetViewControl: true, // Control de Street View
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  renderRoute();
}

// Renderizar la ruta en el mapa
function renderRoute() {
  const request = {
    origin: { placeId: originPlaceId },
    destination: { placeId: destinationPlaceId },
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
      const bounds = new google.maps.LatLngBounds();
      result.routes[0].legs.forEach((leg) => {
        bounds.extend(leg.start_location);
        bounds.extend(leg.end_location);
      });
      map.fitBounds(bounds);
    } else {
      console.error("Error al renderizar la ruta:", status);
    }
  });
}

// Funcionalidad para cerrar el mapa
const closeMap = () => {
  mapStore.hideMap();
};
</script>

<style scoped>
/* Estilos del componente */
.card-map-google {
  padding: 5px;
  height: 90%;
  width: 90%;
  position: relative;
}

.map-section {
  height: 100%;
  width: 100%;
}

.close-map-btn {
  position: absolute;
  bottom: 40px;
  left: 10px;
}

@media (min-width: 600px) {
  .q-dialog__inner--minimized > div {
    max-width: 60% !important;
  }
}
</style>
