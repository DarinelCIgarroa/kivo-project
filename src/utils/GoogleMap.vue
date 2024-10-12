<template>
    <GoogleMap api-key="TU_CLAVE_DE_API" :center="{ lat: 10.0, lng: 10.0 }" :zoom="7">
        <MapMarker :position="{ lat: 10.0, lng: 10.0 }" />
    </GoogleMap>
</template>

<script>
import { GoogleMap, Marker as MapMarker } from 'vue3-google-map';

export default {
    components: {
        GoogleMap,
        MapMarker
    }
};
</script>