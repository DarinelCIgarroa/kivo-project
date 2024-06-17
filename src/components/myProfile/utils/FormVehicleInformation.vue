<template>
  <q-dialog backdrop-filter="blur(5px) saturate(130%)">
    <q-card class="no-shadow" transition-show="rotate" transition-hide="rotate">
      <div class="container">
        <q-form id="signupForm" @submit="onSubmit" @reset="onReset" class="container__form q-pa-lg text-center">
          <q-input filled v-model="profile.name" class="container__input-box col-12" label="Nombre"
            placeholder="Darinel">
          </q-input>
          <q-input filled v-model="profile.paternalSurnmame" class="container__input-box col-12" label="Primer apellido"
            placeholder="Cigarroa">
          </q-input>
          <q-input filled class="container__input-box col-12" v-model="profile.maternalSurname" label="Segundo apellido"
            placeholder="de los Santos">
          </q-input>
          <q-input filled class="container__input-box col-12" v-model="profile.address" label="Dirección"
            placeholder="CDMX. Coyoacan">
          </q-input>
          <q-input filled class="container__input-box col-12" v-model="profile.phoneNumber" label="Número de celular"
            placeholder="5598100286">
          </q-input>
          <div class="container__images">
            <div class=" q-gutter-sm row items-start">
              <q-img v-for="(image, index) in vehiclePhotos" :key="image.id" :src="image.src" alt="vehicle">

                <q-btn icon="fa-solid fa-image" flat class="absolute all-pointer-events container__button-file"
                  @click="triggerFileUpload(index)" />

                <q-file class="container__file-vehicle" style="display: none;" @update:model-value="handleFileChange" />

                <template v-slot:loading>
                  <div class="text-subtitle1 text-white">
                    Loading...
                  </div>
                </template>
              </q-img>
            </div>
          </div>
          <div class="col-12 flex justify-center q-pa-xs">
            <input class="submit text-white" type="submit" value="Guardar">
          </div>
        </q-form>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { toRef, ref } from 'vue'
import { useProfileStore } from '@/stores/profile-store'

const store = useProfileStore()
const profile = toRef(store, 'ProfileNow')
const currentImageIndex = ref(null)
const currentFile = ref(null)

const vehiclePhotos = ref([
  { id: 1, src: 'https://picsum.photos/500/300' },
  { id: 2, src: 'https://picsum.photos/500/300' },
  { id: 3, src: 'https://picsum.photos/500/300' },
])

const triggerFileUpload = (index) => {
  currentImageIndex.value = index
  const fileInputs = document.querySelectorAll(".container__file-vehicle")
  if (fileInputs[index]) {
    fileInputs[index].click()
  }
};

function handleFileChange(file) {
  currentFile.value = file
  if (file) {
    vehiclePhotos.value[currentImageIndex.value].file = file
    vehiclePhotos.value[currentImageIndex.value].src = URL.createObjectURL(file)
  }
}

const onSubmit = () => {
  const formData = new FormData()
  formData.append('image', currentFile.value)
  console.log('Form submitted:', formData)
}

const onReset = () => {
  console.log('on reset')
}
</script>

<style scoped>
.q-card {
  width: 100%;
  background: #EEEE;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  position: relative;
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.5s;
  background: #EEEE;
}

.q-field__input {
  font-size: 200px !important;
}

.container__form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: 0.5s;
}

.container__input-box {
  outline: none !important;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.container__images div {
  display: flex;
  justify-content: center;
}

.container__images div .q-img {
  height: 140px;
  max-width: 150px;
}

.submit {
  font-weight: 300;
  cursor: pointer;
  width: 70%;
  font-size: 1.2em;
  background-color: var(--primary);
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #fff;
}

.container__button-file {
  top: 8px;
  left: 8px;
  animation: colorFlip 5s infinite;
  animation-timing-function: ease-out;
}

@keyframes colorFlip {

  0%,
  100% {
    color: black;
  }

  50% {
    color: white;
  }
}

@media only screen and (min-width: 300px) and (max-width: 599px) {
  .q-card {
    display: inline;
  }

  .container {
    display: inline;
  }

  .container__input-box .q-field__label {
    font-size: 0.7em !important;
  }

  .container__images div {
    justify-content: center !important;
  }

  .container__images div .q-img {
    height: 110px;
    max-width: 120px;
  }

}
</style>
