<template>
  <q-card class="my-card">
    <transition appear enter-active-class="animated zoomIn delay-1s">
      <div v-if="showMainINformation" class="content-img">
        <q-img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" class="card-image" />
      </div>
    </transition>
    <transition appear enter-active-class="animated zoomIn delay-1s">
      <div v-if="showMainINformation" class="text-content">
        <div class="text-date">26 December 2019</div>
        <div class="text-title" style="color: var(--primary);">{{ client.name }}</div>
        <q-item-section class="text-description">
          <q-item-label>
            <q-icon class="q-px-xs iconForm" size="xs" name="my_location"></q-icon>
            <span class="info-span">Origen: </span>
            <span class="q-ml-xs data-span">{{ client.placeOrigin }}</span>
          </q-item-label>
          <q-item-label>
            <q-icon class="q-px-xs iconForm" size="xs" name="place"></q-icon>
            <span class="info-span">Destino: </span>
            <span class="q-ml-xs data-span">{{ client.placeDestination }}</span>
          </q-item-label>
          <q-item-label>
            <q-icon color="dark" class="q-px-xs" size="xs" name="fa-solid fa-car" />
            <span class="info-span">Tipo de Transporte: </span>
            <span class="q-ml-xs data-span">{{ client.transport_type }}</span>
          </q-item-label>
          <div class="changes-tab">
          </div>
        </q-item-section>

        <q-item-section class="content-price">
          <span class="price-span data-span">$ {{ client.price }}</span>
        </q-item-section>
      </div>
    </transition>
    <transition appear enter-active-class="animated zoomIn delay-1s">
      <div v-if="!showMainINformation" class="text-content-details">
        <q-chip v-for="(article, index) in client.detailsArticles" :key="index" v-model="cookies" color="grey-4"
          text-color="dark">
          <q-avatar color="primary" text-color="white">{{ article.number }}</q-avatar>
          <div class="ellipsis">
            {{ article.name }}
          </div>
        </q-chip>
      </div>
    </transition>
    <div class="changes-section">
      <div @click="peopleInformation('mainInformation')" :class="{ active: showMainINformation }">
      </div>
      <div @click="peopleInformation('')" :class="{ active: showSecondaryInformation }">
        <q-tooltip class="bg-grey-4 text-black text-weight-medium" transition-show="scale" transition-hide="scale">
          <span>Lista de articulos</span>
        </q-tooltip>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { ref, toRef, computed } from "vue";

const props = defineProps(['client'])
const client = toRef(props.client)

const showMainINformation = ref(true);
const showSecondaryInformation = ref(false);

const peopleInformation = (section) => {
  if (section == 'mainInformation') {
    showMainINformation.value = true
    showSecondaryInformation.value = false
    return
  }
  showMainINformation.value = false
  showSecondaryInformation.value = true
  return
}
</script>

<style>
.my-card {
  display: flex;
  width: 40%;
  padding: 30px 5px 30px 20px;
  /* background: rgb(23, 170, 181); */
  border-radius: 20px;
  margin: 15px 62px;
  height: 20em;
  max-height: 20em;
}

.content-img {
  position: relative;
  width: 29%;
  height: auto;
  flex-shrink: 0;
  /* background: palegreen; */
  transform: translateX(-80px);
}

.content-img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.8;
  -webkit-box-shadow: 10px 10px 21px -1px rgba(122, 27, 74, 0.6);
  -moz-box-shadow: 10px 10px 21px -1px rgba(122, 27, 74, 0.6);
  box-shadow: 10px 10px 21px -1px rgba(122, 27, 74, 0.6);
}

.content-img .q-img {
  width: 120%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  transition: all 0.3s;
}

.text-content {
  text-align: justify;
  padding: 5px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  flex-direction: column;
  /* background: bisque; */
}

.text-content-details {
  padding: 5px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) white;
}

.text-date {
  font-size: 0.8rem;
  color: rgba(22, 22, 22, 0.7);
  margin-bottom: 5px;
}

.text-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-description {
  font-size: 0.9rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.read-more-button {
  background: var(--primary);
  color: white;
  border-radius: 50px;
}

.info-span {
  font-size: 15px;
  font-weight: bold;
  color: var(--dark);
}

.content-price {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondaryLight);
  width: 30%;
  border-radius: 10px;
  padding: 12px;
  margin: 10px 0 0 6px;
}

.content-price .price-span {
  color: var(--letter);
  font-size: 1.2em;
}

.changes-section {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.changes-section div {
  background: #a3a2a2;
  margin: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.7s ease;
}

.changes-section .active {
  /* border-radius: 5px !important; */
  width: 17px;
  height: 17px;
  background: var(--primary) !important;
  /* transition: 5s ease; */
}
</style>
