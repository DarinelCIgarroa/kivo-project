<template>
    <div class="profile-card">
        <div class="backdrop"></div>
        <div v-if="isMobile" class="profile-card-top">
            <q-icon @click="closeSelectClient" name="fa-solid fa-circle-xmark" size="2em" color="white"></q-icon>
        </div>
        <div class="profile-card-middle">
            <div class="profile-pic">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <span class="name-client">{{ clientNow.name }}</span>

            <span class="data-location">
                <span class="text-weight-bolder">Origen:</span> {{ clientNow.placeOrigin }}
                <br>
                <span class="text-weight-bolder">Destino:</span> {{ clientNow.placeDestination }}
            </span>

            <div class="details-articles">
                <span>Detalles del flete/mudanza</span>
                <div class="articles">
                    <q-chip v-for="article in listArticlesModal" :key="article" outline color="accent">
                        {{ article }}
                    </q-chip>
                </div>
            </div>
            <div class="details-articles">
                <q-btn style="padding: 10px;" round dense color="primary" size="sm" icon="fa-solid fa-eye"
                    @click="showCompleteList()">
                    <q-tooltip class="bg-accent">Ver lista de artículos completa</q-tooltip>
                </q-btn>
            </div>

        </div>
        <div class="profile-card-bottom">
            <q-input prefix="$" mask="#" fill-mask="0" reverse-fill-mask type="number" class="half-width"
                v-model.number="serviceProviderPrice" placeholder="¿Cuánto quieres cobrar?">
                <template v-slot:append>
                    <q-icon color="accent" name="fa-solid fa-sack-dollar"></q-icon>
                </template>
            </q-input>
            <q-btn @mouseenter="isHovering = true" @mouseleave="isHovering = false" rounded
                :color="isHovering ? 'pink-9' : 'primary'" label="Aceptar" class="half-width accept-service"></q-btn>
        </div>
    </div>
</template>
<script setup>
import { useClientServiceStore } from "@/stores/client-detail-store"
import { useAppStore } from "@/stores/app-store"
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

const clienStore = useClientServiceStore()
const { clientNow } = storeToRefs(clienStore)

const appStore = useAppStore()
const { isMobile } = storeToRefs(appStore)

const serviceProviderPrice = ref(0)
const emit = defineEmits(['showCompleteList', 'closeClientDetails']);
const isHovering = ref(false)

watch(() => clientNow.value.price, (newPrice) => {
    serviceProviderPrice.value = newPrice;
});

const listArticlesModal = computed(() => {
    console.log("isMobile", isMobile.value);
    if (clientNow.value && clientNow.value.detailsArticles && !isMobile.value) {
        console.log('if');
        return clientNow.value.detailsArticles.slice(0, 7);
    } else {
        console.log('else');
        return clientNow.value.detailsArticles.slice(0, 3);
    }

    return [];
})

const closeSelectClient = () => {
    emit('closeClientDetails')
}

const showCompleteList = () => {
    emit('showCompleteList');
}
</script>

<style scoped>
.profile-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    min-height: 73vh;
    background-color: #fff;
    border-radius: 20px;
    border: 0.5px solid #000;
    overflow: hidden;
    z-index: 2;
}

.profile-card:hover {
    opacity: 1;
}

.backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 25rem;
    background: var(--primary);
    clip-path: polygon(0 0, 100% 0, 100% 14%, 0 45%);
    z-index: -1;
}

.profile-card-top {
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
}

.profile-card-top i {
    cursor: pointer;
}

.profile-card-middle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    flex-grow: 1;
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
    box-shadow: 0 0 8px 5px var(--accent);
}

.profile-pic i {
    position: absolute;
    right: 0;
    top: 6.5rem;
    font-size: 1.2rem;
    color: #3ec70b;
}

.name-client {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
    font-weight: 600;
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
    color: var(--accent);
    font-weight: 400;
}

.details-articles .articles {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0.5rem;
}


.articles .q-chip {
    cursor: pointer;
}

.articles .q-chip:hover {
    color: var(--primary) !important;
    border: 1.5px solid var(--primary) !important;
    background: #ecadc2 !important;
}

.profile-card-bottom {
    margin: 0 20px;
    padding: 20px;
    display: flex;
    /* background: #3ec70b; */
    justify-content: space-between;
}

.half-width {
    width: 45%;
}

.q-field__native::placeholder {
    font-size: 5em !important;
}

@media (max-width: 320px) {
    .name-client {
        text-align: center
    }

    .details-articles span {
        text-align: center;
    }
}
</style>