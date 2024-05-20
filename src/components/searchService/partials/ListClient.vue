<template>
    <q-list color="white" class="q-list-hover">
        <q-item v-for="client in clients" :key="client.id" class="q-my-sm q-item-hover" clickable v-ripple>
            <q-item-section avatar>
                <q-avatar color="warning" text-color="white">
                    <img :src="client.avatar ? client.avatar : defaultAvatar" alt="Client Avatar">
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>
                    <q-icon class="q-px-sm" size="sm" name="person" />
                    <span class="info-span">Nombre: </span>
                    <span class="q-ml-xs data-span">{{ client.name }}</span>
                </q-item-label>
                <q-item-label>
                    <q-icon class="q-px-sm" size="sm" name="commute" />
                    <span class="info-span"> Tipo de Transporte: </span>
                    <span class="q-ml-xs data-span">{{ client.transport_type }}</span>
                </q-item-label>
                <q-item-label class="content-price q-ml-md">
                    <span class="price-span data-span">{{ client.price }}</span>
                </q-item-label>
            </q-item-section>
            <q-item-section class="section-btn" side>
                <q-btn push color="secondary" label="Detalles" @click="selectClient(client.id)"></q-btn>
            </q-item-section>
        </q-item>
    </q-list>
</template>
<script setup>
import { ref } from "vue";

import defaultAvatar from '../../../assets/img/homeService/default-avatar.png';

const clients = ref([
    { id: 1, name: 'Lorenzo', price: '$850', transport_type: 'Van', avatar: null },
    { id: 2, name: 'Mirta', price: '$1300', transport_type: 'Truck', avatar: null },
    { id: 3, name: 'Felipe', price: '$1100', transport_type: 'MiniVan', avatar: null },
    { id: 4, name: 'Carla', price: '$1600', transport_type: 'Flatbed', avatar: null },
    { id: 5, name: 'Sergio', price: '$1800', transport_type: 'RefrigeratedTruck', avatar: null },
    { id: 6, name: 'Ana', price: '$1400', transport_type: 'BoxTruck', avatar: null },
]);


function selectClient(clientId) {
    console.log('test', clientId);
}

</script>
<style scoped>
.q-item {
    position: relative;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin: 25px 0;
    cursor: pointer;
    transition: 0.3s ease;
    background: #fff;
}

.section-btn {
    position: absolute;
    bottom: 35px;
    right: -200px;
    transition: 0.5s;
    font-size: 2em;
}

.q-list .q-item-section .section-btn .q-btn {
    font-weight: 500;
    opacity: 0.25;
}

.q-item:hover {
    box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
}

.q-item:hover .section-btn {
    right: 50px;
}

.q-avatar {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
}

.q-list-hover:hover .q-item-hover {
    opacity: 0.2;
}

.q-list-hover:hover .q-item-hover:hover {
    opacity: 1;
}

.q-item__label {
    display: flex;
    align-items: center;
}

.info-span {
    font-size: 18px;
    font-weight: bold;
    color: #000;
}

.data-span {
    font-size: 18px;
    color: #000;
}

.content-price {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #19232d;
    width: 15%;
    border-radius: 10px;
    padding: 10px;
}

.content-price .price-span {
    color: white;
    font-size: 1.2em;
}

@keyframes scrollIndicator {
    0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }

    50% {
        transform: translateX(-50%) translateY(10px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
}
</style>