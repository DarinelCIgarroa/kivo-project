<template>
  <q-card class="card-detail no-shadow">
    <div class="card-detail__img-container">
      <img :src="selectedStep.img" class="card-detail__img" />
    </div>

    <q-card-section class="card-detail__content__img"></q-card-section>

    <q-card-section class="card-detail__steps">
      <div class="card-detail__header">
        <span class="text-h6">{{ selectedStep.title }}</span>
        <span class="text-h6 text-body1">{{ selectedStep.subtitle }}</span>
      </div>
      <q-list v-for="(step, index) in selectedStep.steps" :key="index">
        <q-expansion-item
          v-model="expanded[index]"
          v-if="step.title"
          expand-separator
          icon="fa-solid fa-diamond"
          :label="step.title"
        >
          <q-card>
            <q-card-section>
              <q-item v-for="(detail, i) in step.details" :key="i">
                <q-item-section avatar>
                  <q-icon color="positive" name="fa-solid fa-check" />
                </q-item-section>

                <q-item-section>{{ detail }}</q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-item v-for="(detail, i) in step.details" :key="i" v-else>
          <q-item-section avatar>
            <q-icon color="positive" name="fa-solid fa-check" />
          </q-item-section>
          <q-item-section>{{ detail }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { toRef, ref } from "vue";

const props = defineProps({
  selectedStep: {
    type: Object,
  },
});

const selectedStep = toRef(props.selectedStep);
const expanded = ref([true, false]);
</script>

<style scoped>
.card-detail {
  background: var(--card);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  padding: 5px;
  border-radius: 15px;
}
.card-detail__content__img {
  display: none;
}
.card-detail__img-container {
  height: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.card-detail__img {
  width: 18em;
  object-fit: contain;
  z-index: 3;
}
.card-detail__header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card-detail__steps {
  background: var(--card);
  width: 100%;
  height: auto;
}
@media (min-width: 48em) {
  /* 768 px */
  .card-detail {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    height: auto;
    padding: 10px;
    background: transparent;
    align-items: stretch;
    position: relative;
  }
  .card-detail__content__img {
    display: block;
    width: 25%;
    background: var(--card);
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
    transform: translateX(55%);
    z-index: 1;
  }
  .card-detail__img {
    width: 18em;
    object-fit: contain;
  }
  .card-detail__img-container {
    position: absolute;
    left: 0;
    top: 50%;
    width: 14em;
    transform: translate(-20%, -50%);
    top: 50%;
    left: calc(20% - 10em);
    transform: translateY(-50%);
    z-index: 3;
  }
  .card-detail__steps {
    flex: 1;
    width: 75%;
    border-radius: 15px !important;
    z-index: 2;
    height: auto;
    min-height: 50vh;
    padding-left: 3em;
  }
  @media (min-width: 56.25em) {
    /* > 900 px */
    .card-detail__img {
      width: 20em;
    }
    .card-detail__content__img {
      display: block;
      width: 30%;
    }
  }
  @media (min-width: 75em) {
    /* > 1200 px */
    .card-detail {
      min-width: 70%;
    }
    .card-detail__img {
      width: 28em;
    }
  }
}
</style>
