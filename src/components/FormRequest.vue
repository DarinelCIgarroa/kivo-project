<template>
  <div class="container">
    <span></span>
    <span></span>
    <q-form id="signupForm" @submit="onSubmit" @reset="onReset" class="form q-pa-lg text-center">
      <h4>Solicitar servicio</h4>
      <q-select class="inputBox col-12" label="¿Lugar de origen?" v-model="placeOrigin" :options="locationOptions"
        use-input @filter="filterDestinations" :placeholder="originPlaceholder" :dense="dense" transition-show="scale"
        transition-hide="scale">
        <template v-slot:prepend>
          <q-icon class="q-px-sm iconForm" name="my_location"></q-icon>
        </template>
        <template v-if="placeOrigin" v-slot:append>
          <q-icon color="accent" name="cancel" @click.stop.prevent="placeOrigin = null" class="cursor-pointer"></q-icon>
        </template>
      </q-select>
      <q-select class="inputBox col-12" label="¿Lugar de destino?" v-model="placeDestination" :options="locationOptions"
        use-input @filter="filterDestinations" :placeholder="destinationPlaceholder" :dense="dense"
        transition-show="scale" transition-hide="scale">
        <template v-slot:prepend>
          <q-icon class="q-px-sm iconForm" name="place"></q-icon>
        </template>
        <template v-if="placeDestination" v-slot:append>
          <q-icon color="accent" name="cancel" @click.stop.prevent="placeDestination = null"
            class="cursor-pointer"></q-icon>
        </template>
      </q-select>
      <q-input filled v-model="serviceDate" class="inputBox col-12" label="Fecha"
        placeholder="Ingresa la fecha del servicio" @click="$refs.qstartDateProxy.show()">
        <template v-slot:prepend>
          <q-icon name="event" class="iconForm cursor-pointer">
            <q-popup-proxy ref="qstartDateProxy" cover transition-show="scale" transition-hide="scale">
              <q-date color="primary" text-color="white" v-model="serviceDate" mask="YYYY-MM-DD">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="accent" flat></q-btn>
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input filled v-model="time" class="inputBox col-12" mask="time" label="Hora"
        placeholder="Ingresa la hora del servicio" @click="$refs.qstartTimeProxy.show()">
        <template v-slot:prepend>
          <q-icon name="access_time" class="iconForm cursor-pointer">
            <q-popup-proxy ref="qstartTimeProxy" cover transition-show="scale" transition-hide="scale">
              <q-time color="primary" v-model="time" :format24h="true">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="accent" flat></q-btn>
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input class="inputBox col-12" v-model="number" label="Tu número de teléfono"
        placeholder="Número de telefono personal" :dense="dense">
        <template v-slot:prepend>
          <q-icon class="q-px-sm iconForm" name="smartphone"></q-icon>
        </template>
      </q-input>
      <div class="col-12 flex justify-center q-pa-xs">
        <input class="submit text-white" type="submit" value="Continuar">
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import * as HomeService from 'src/services/home/HomePageServices.js'

const serviceDate = ref(null)
const placeOrigin = ref(null)
const placeDestination = ref('')
const originPlaceholder = ref('Ciudad, colonia, calle, número de casa')
const destinationPlaceholder = ref('Ciudad, colonia, calle, número de casa')
const locationOptions = ref([])
const number = ref('')
const dense = ref(false)
const time = ref('')

function onReset() {
  serviceDate.value = null
}

function filterDestinations(val, update) {
  update(async () => {
    if (val === '') {
      locationOptions.value = [];
      return
    }
    try {
      locationOptions.value = await HomeService.getPlacePredictions(val);
    } catch (error) {
      console.log(error)
    }
  });
}

watch(placeDestination, (newValue) => {
  if (newValue === null) {
    destinationPlaceholder.value = 'Ciudad, colonia, calle, número de casa'
  } else {
    destinationPlaceholder.value = ''
  }
})

watch(placeOrigin, (newValue) => {
  if (newValue === null) {
    originPlaceholder.value = 'Ciudad, colonia, calle, número de casa'
  } else {
    originPlaceholder.value = ''
  }
})

</script>

<style scoped>
.container {
  position: relative;
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: 0.5s;
  overflow: hidden;
}

.container::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-conic-gradient(from var(--a),
      rgba(161, 0, 54, 0.8) 0%,
      rgba(161, 0, 54, 0.8)10%,
      transparent 10%,
      transparent 80%,
      rgba(161, 0, 54, 0.8)100%);
  border-radius: 15px;
  animation: animate 3.5s linear infinite;
  z-index: -1;
}

@property --a {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@keyframes animate {
  0% {
    --a: 0deg;
  }

  100% {
    --a: 360deg;
  }
}

.container span {
  position: absolute;
  inset: 5px;
  overflow: hidden;
  border-radius: 15px;
}

.container span::before {
  content: "";
  position: absolute;
  inset: 5px;
  background: var(--background);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: blur(10px);
}

.container span::after {
  content: "";
  position: absolute;
  inset: 5px;
  background: var(--background);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: blur(15px);
}

.q-field__input {
  font-size: 200px !important;
  /* Cambia esto al tamaño que prefieras */
}


.form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: 0.5s;
}

form h4 {
  color: var(--primary);
  font-size: 1.8em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0;
}

.iconForm {
  color: var(--homeText);
}

.inputBox {
  outline: none !important;
  /* border: 1px solid rgba(255, 255, 255, 0.25); */
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.submit {
  font-weight: 500;
  cursor: pointer;
  width: 70%;
  font-size: 1.5em;
  background-color: var(--primary);
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #fff;
}

@media only screen and (min-width: 300px) and (max-width: 599px) {
  .form h4 {
    font-size: 1.4em;
  }

  .inputBox .q-field__label {
    font-size: 0.7em !important;
  }
}
</style>
