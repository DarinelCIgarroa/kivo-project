<template>
  <q-card class="card-detail no-shadow">
    <q-card-section class="card-detail__section">
      <img :src="selectedStep.img" class="card-detail__img" />
      <div class="card-detail__steps">
        <div class="card-detail__info">
          <div class="flex justify-end" style="width: 100%">
            <q-icon
              class="card-detail__circle-xmark"
              name="fa-solid fa-circle-xmark"
              color="dark"
              size="1.4rem"
              @click="closeDialog"
              style="cursor: pointer"
            ></q-icon>
          </div>
          <div class="card-detail__title text-center">
            <span class="text-weight-bolder" style="font-size: 1.1em">{{
              selectedStep.title
            }}</span>
          </div>
          <div>
            <span
              class="card-detail__subtitle text-weight-bold"
              style="font-size: 0.9em"
              >{{ selectedStep.subtitle }}</span
            >
          </div>
          <div v-if="selectedStep.steps.length >= 2">
            <div
              class="card-detail__step"
              v-for="(step, index) in selectedStep.steps"
              :key="index"
            >
              <q-expansion-item
                expand-separator
                :label="step.title"
                header-class="text-weight-bold"
              >
                <q-card>
                  <q-card-section
                    class="card-detail__details"
                    v-for="(detail, index) in step.details"
                    :key="index"
                  >
                    <div class="card-detail__list row">
                      <div class="col-1 card-detail__list__icon">
                        <q-icon
                          name="fa-solid fa-check"
                          color="positive"
                          size="1.2rem"
                        ></q-icon>
                      </div>
                      <div class="col-11 card-detail__list__detail">
                        <span>{{ detail }}</span>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </div>
          </div>
          <div v-else>
            <div
              class="card-detail__step"
              v-for="(step, index) in selectedStep.steps"
              :key="index"
            >
              <span class="text-weight-bold" v-show="step.title">{{
                step.title
              }}</span>
              <div
                class="card-detail__details"
                v-for="(detail, index) in step.details"
                :key="index"
              >
                <div class="card-detail__list row">
                  <div class="col-1 card-detail__list__icon">
                    <q-icon
                      name="fa-solid fa-check"
                      color="positive"
                      size="1.2rem"
                    ></q-icon>
                  </div>
                  <div class="col-11 card-detail__list__detail">
                    <span>{{ detail }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { toRef } from "vue";
const emit = defineEmits(["closeDialog"]);
const props = defineProps({
  selectedStep: {
    type: Object,
  },
});

const selectedStep = toRef(props.selectedStep);

const closeDialog = () => {
  emit("closeDialog");
};
</script>
<style scoped>
.card-detail {
  background: transparent;
  padding: 5px;
  border-radius: 15px;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 100px;
  /* background: red; */
}

.card-detail__section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* background: aqua; */
}

.card-detail__steps {
  background: white;
  border-radius: 15px;
  display: flex;
  justify-content: end;
  width: 50%;
}

.card-detail__info {
  padding: 15px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: antiquewhite; */
}

.card-detail__img {
  position: absolute;
  width: 22%;
  left: 215px;
}

.card-detail__info .card-detail__step {
  /* padding: 5px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 5px; */
}

.card-detail__details {
  margin: 5px;
  font-size: 16px;
}

.how-card-detail__list {
  padding: 5px;
  display: flex;
}

.card-detail__list__icon {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}
.card-detail__list__detail {
  padding: 3px;
}

@media (max-width: 350px) {
  .card-detail__img {
    display: none;
  }

  .card-detail__details {
    font-size: 10px !important;
  }
}
@media (max-width: 576px) {
  .card-detail__details {
    font-size: 17px !important;
    padding: 10px !important;
  }

  .card-detail__list__detail {
    padding: 2px !important;
  }

  .q-dialog__inner--minimized {
    padding: 5px !important;
  }
}

@media (max-width: 767.98px) {
  .card-detail {
    left: 0;
    height: 100%;
    /* background: gray; */
  }

  .card-detail__section {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0px;
    /* background: aqua; */
  }

  .card-detail__steps {
    width: 100%;
    height: auto;
    justify-content: start;
  }

  .q-dialog__inner--minimized {
    padding: 50px;
  }

  .card-detail__img {
    position: relative;
    width: 30%;
    left: 0;
    top: 20px;
  }

  .card-detail__info {
    padding: 5px;
    width: 100%;
    /* background: antiquewhite; */
  }

  .card-detail__details {
    font-size: 14px;
  }

  .card-detail__list__detail {
    padding: 2px;
  }
}
</style>