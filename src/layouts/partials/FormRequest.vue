<template>
  <div class="container">
    <span></span>
    <span></span>
    <span></span>
    <q-form id="signupForm" @submit="onSubmit" @reset="onReset" class="row q-pa-xl">
      <h2>Realizar viaje</h2>
      <q-input class="inputBox col-12" v-model="placeOfOrigin" label="¿Lugar de origen?"
        placeholder="Número de casa, calle" :dense="dense">
        <template v-slot:prepend>
          <q-icon class="q-px-sm iconForm" name="my_location"></q-icon>
        </template>
      </q-input>
      <q-input class="inputBox col-12" v-model="placeOfDestination" label="¿Lugar de destino?"
        placeholder="Número de casa, calle" :dense="dense">
        <template v-slot:prepend>
          <q-icon class="q-px-sm iconForm" name="place"></q-icon>
        </template>
      </q-input>
      <q-input filled v-model="serviceDate" class="inputBox col-12" label="Fecha y hora"
        placeholder="Ingresa la fecha y hora del servicio">
        <template v-slot:prepend>
          <q-icon name="event" class="iconForm cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date color="secondary" text-color="white" v-model="serviceDate" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="secondary" flat></q-btn>
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
        <template v-slot:append>
          <q-icon name="access_time" class="iconForm cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time color="secondary" text-color="white" v-model="serviceDate" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="secondary" flat></q-btn>
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input class="inputBox col-12" v-model="placeOfDestination" label="Tu número de teléfono"
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
import { ref } from 'vue'

const serviceDate = ref(null)
const placeOfOrigin = ref(null)
const placeOfDestination = ref(null)
const dense = ref(false)

function onSubmit() {
  console.log('submit')
}

function onReset() {
  date.value = false
}
</script>

<style>
/* FORM */
.container {
  position: relative;
  width: 80%;
  height: 500px;
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
      #ca3d90 0%,
      #ca3d90 10%,
      transparent 10%,
      transparent 80%,
      #ca3d90 100%);
  border-radius: 20px;
  animation: animate 2.5s linear infinite;
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

form {
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  transition: 0.5s;
}

form h2 {
  position: relative;
  color: var(--homeText);
  font-size: 1.5em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
}

.iconForm {
  color: var(--homeText);
}

.inputBox {
  outline: none !important;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-size: 0.85em;
  color: var(--homeText);
}

.submit {
  font-weight: 500;
  cursor: pointer;
  width: 70%;
  font-size: 1.5em;
  background-color: #000;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.inputBox .q-field__control {
  color: var(--homeText);
}

.inputBox .q-field__label {
  color: var(--homeText);
}

.q-field--labeled .q-field__native,
.q-field--labeled .q-field__prefix,
.q-field--labeled .q-field__suffix {
  color: var(--homeText);
  font-size: 1.4em;
}
</style>
