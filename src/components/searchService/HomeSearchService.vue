<template>
    <div class="data-client-detail col-md-6 col-lg-6 col-xl-6">
        <DetailClient></DetailClient>
    </div>
    <div class="data-client-list col-md-6 col-lg-6 col-xl-6" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave"
        @scroll="handleScroll">
        <ListClient></ListClient>
        <div v-if="showScrollIndicator" class="scroll-indicator">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script setup>
import ListClient from "./partials/ListClient.vue"
import DetailClient from "./partials/DetailClient.vue"

import { ref } from "vue";

defineOptions({
    name: 'HomeSearchService'
});

const showScrollIndicator = ref(false);
let hasScrolled = false;

const handleMouseOver = () => {
    if (!hasScrolled) {
        showScrollIndicator.value = true;
    }
};

const handleMouseLeave = () => {
    showScrollIndicator.value = false;
};

const handleScroll = () => {
    showScrollIndicator.value = false;
    hasScrolled = true;
};
</script>

<style scoped>
.data-client-detail {
    display: flex;
    justify-content: center;
    padding: 25px;
    height: 85vh;
    /* background: fuchsia; */
}

.data-client-list {
    padding: 25px;
    position: relative;
    height: 85vh;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
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
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    color: #000;
    background: #fff;
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
</style>