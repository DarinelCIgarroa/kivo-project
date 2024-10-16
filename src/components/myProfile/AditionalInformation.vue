<template>
  <q-card class="card row card--direction-column" flat bordered>
    <span class="text-center text-h5">Evaluaciones</span>
    <div class="card__content-counts q-mt-md">
      <q-item>
        <q-item-section side>
          <q-avatar
            size="2.5em"
            square
            color="primary"
            text-color="white"
            icon="fa-solid fa-heart"
          >
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Me gusta</q-item-label>
          <q-item-label caption>1203</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-avatar
            size="2.5em"
            square
            color="primary"
            text-color="white"
            icon="fa-solid fa-comment"
          >
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Comentarios</q-item-label>
          <q-item-label caption>600</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-avatar
            size="2.5em"
            square
            color="primary"
            text-color="white"
            icon="fa-solid fa-star"
          >
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Evaluación</q-item-label>
          <q-item-label caption>3.5</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="card__ultimate-comments q-mt-xs">
      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>
        <q-separator></q-separator>
        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-item class="q-my-md">
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-item class="q-my-md">
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
    </div>
  </q-card>
</template>

<style scoped>
.card--direction-column {
  flex-direction: column;
}

.card__content-counts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card__ultimate-comments {
  width: 100%;
  height: 30%;
}

@media (max-width: 1024px) {
  .card__content-counts {
    justify-content: space-between;
  }
}
</style>
