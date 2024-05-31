<template>
    <div v-show="!appStore.isMobile" class="data-client-detail col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
        <DetailClient @showCompleteList="handleShowCompleteList"></DetailClient>
    </div>
    <div class="data-client-list col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-7" @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave" @scroll="handleScroll">
        <ListClient></ListClient>
        <div v-if="showScrollIndicator" class="scroll-indicator">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
    </div>
    <q-dialog v-model="isDialogOpen" backdrop-filter="blur(4px) saturate(120%)" transition-show="rotate"
        transition-hide="rotate">
        <q-card class="articles" style="border-radius: 15px;">
            <q-card-section class="bg-pink-9 text-white text-center">
                <div class="text-h6">Lista de articulos completa</div>
            </q-card-section>
            <q-card-section>
                <q-chip v-for="article in clientNowArticles" :key="article" outline color="primary">
                    {{ article }}
                </q-chip>
            </q-card-section>
            <q-card-section vertical align="right">
                <q-btn class="text-primary" label="Cerrar" flat @click="isDialogOpen = false" />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script setup>
import ListClient from "./partials/ListClient.vue"
import DetailClient from "./partials/DetailClient.vue"
import { useClientServiceStore } from "@/stores/client-detail-store"
import { useAppStore } from "@/stores/app-store.js"
import { storeToRefs } from 'pinia';
import { ref } from "vue";

const clientDetailStore = useClientServiceStore()
const { clientNowArticles } = storeToRefs(clientDetailStore)
const appStore = useAppStore()

const showScrollIndicator = ref(false);
const isDialogOpen = ref(false);
let hasScrolled = ref(false);

defineOptions({
    name: 'HomeSearchService'
});

const handleMouseOver = () => {
    if (!hasScrolled.value) {
        showScrollIndicator.value = true;
    }
};

const handleMouseLeave = () => {
    showScrollIndicator.value = false;
};

const handleScroll = (event) => {
    showScrollIndicator.value = false;
    const scrollTop = event.target.scrollTop;

    if (scrollTop > 0) {
        hasScrolled.value = true;
        appStore.setScrolled(true);
        return true
    }

    hasScrolled.value = false;
    appStore.setScrolled(false);

};

const handleShowCompleteList = () => {
    isDialogOpen.value = true
}
</script>

<style scoped>
.data-client-detail {
    position: relative;
    height: 75vh;
    display: flex;
    justify-content: start;
    padding: 15px;
}

.data-client-list {
    /* background: rebeccapurple; */
    position: relative;
    height: 75vh;
    display: flex;
    justify-content: end;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 15px;
}

.data-client-list::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

.container {
    background: gray;
    height: 100%;
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

.articles .q-chip {
    cursor: pointer;
}

.articles .q-chip:hover {
    color: var(--letter) !important;
    border: 1.5px solid var(--primary) !important;
    background: var(--primary) !important;
}

@media (max-width: 320px) {
    .data-client-list {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;
        height: 90vh;
    }
}
</style>