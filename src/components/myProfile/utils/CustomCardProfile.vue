<template>
  <q-card :class="['card row', { 'card--direction-column': directionColumn }]" flat bordered>
    <slot></slot>
  </q-card>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
  directionColumn: {
    type: Boolean,
    default: false
  },
});

const { directionColumn } = toRefs(props);
</script>

<style scoped>
.card {
  height: 100%;
  min-width: 100%;
  padding: 5px !important;
  border-radius: 20px;
  background: #EEEE;
  display: flex;
}

.card--direction-column {
  flex-direction: column;
}

.card__icon {
  cursor: pointer;
}

@media (min-width: 601px) and (max-width: 899px) {
  .card {
    height: auto;
  }
}

@media (min-width: 899px) and (max-width: 1024px) {
  .card {
    height: 100%;
  }
}
</style>
