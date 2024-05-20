<template>
    <div class="profile-card">
        <div class="backdrop"></div>
        <div class="profile-card-top">
            <i class="fa-solid fa-arrow-left-long"></i>
            <div>
                <i class="fa-regular fa-heart heart"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
        <div class="profile-card-middle">
            <div class="profile-pic">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <span class="name-client">Laura Chouette</span>

            <span class="data-location">
                <span class="text-weight-bolder">Origen:</span> Calle Madero 74, Centro Histórico, 06000 Ciudad de
                México, CDMX, México
                <br>
                <span class="text-weight-bolder">Destino:</span>
                Av. Presidente Masaryk 111, Polanco, 11550 Ciudad de México, CDMX, México
            </span>

            <div class="details-articles">
                <span>Detalles del flete/mudanza</span>
                <div class="marticles">
                    <q-chip outline color="primary" text-color="white">
                        Espejo de 1 metro
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        Comedor completo
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        Tres cajas de ropa
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        Cuatro cajas de objetos
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                    <q-chip outline color="primary" text-color="white">
                        item
                    </q-chip>
                </div>
            </div>
        </div>
        <div class="profile-card-bottom">
            <q-btn rounded label="Aceptar" class="half-width accept-service"></q-btn>
            <q-input rounded outlined v-model="counterOfferPrice" placeholder="500" class="half-width">
                <template v-slot:append>
                    <q-icon color="dark" name="fa-solid fa-sack-dollar"></q-icon>
                </template>
            </q-input>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const counterOfferPrice = ref('')
</script>

<style scoped>
.profile-card {
    position: absolute;
    width: 500px;
    height: auto;
    background-color: #fff;
    padding-bottom: 0.5rem;
    border-radius: 10px;
    overflow: hidden;
}

.backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 25rem;
    background-color: #19232d;
    clip-path: polygon(0 0, 100% 0, 100% 14%, 0 45%);
}

.profile-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
}

.profile-card-top i {
    cursor: pointer;
}

.profile-card-top div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 3.5rem;
}

.profile-card-middle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
}

.profile-pic {
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-size: cover;
    cursor: pointer;
    margin-bottom: 0.5rem;
    background-image: url(https://randomuser.me/api/portraits/men/20.jpg);
    transition: box-shadow 0.3s ease-in-out;
}

.profile-pic:hover {
    box-shadow: 0 0 8px 5px #96baff;
}

.profile-pic i {
    position: absolute;
    right: 0;
    top: 6.5rem;
    font-size: 1.2rem;
    /* color: var(--green); */
    color: #3ec70b;
}

.name-client {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #000;
    font-weight: 400;
}

.data-location {
    margin-bottom: 1rem;
    border-bottom: 1px solid #000;
    padding-bottom: 0.5rem;
    font-size: 0.9rem;
    text-align: center;
    color: #000;
}

.details-articles {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
}

.details-articles span {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #000;
    font-weight: 400;
}

.details-articles .marticles {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0.5rem;
}


.marticles .q-chip:hover {
    color: #fff !important;
    border: 1px solid #fff !important;
    background: black !important;
}

.profile-card-bottom {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.half-width {
    width: 48%;
}

.accept-service {
    background-color: #19232d;
    color: white;
}

.accept-service:hover {
    background-color: #47494b;
    color: #fff;
    font-weight: 500;
}

.q-field__native::placeholder {
    font-size: 5em !important;
}
</style>