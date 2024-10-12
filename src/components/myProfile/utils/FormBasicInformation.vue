<template>
  <q-dialog backdrop-filter="blur(5px) saturate(130%)">
    <q-card class="no-shadow" transition-show="rotate" transition-hide="rotate">
      <div class="form-container">
        <q-item-section class="content-avatar" avatar>
          <q-avatar size="9em">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-form id="signupForm" @submit="onSubmit" @reset="onReset" class="form-container__form q-pa-lg text-center">
          <q-input filled v-model="profile.name" class="inputBox col-12" label="Nombre" placeholder="Darinel">
          </q-input>
          <q-input filled v-model="profile.paternalSurnmame" class="inputBox col-12" label="Primer apellido"
            placeholder="Cigarroa">
          </q-input>
          <q-input filled class="inputBox col-12" v-model="profile.maternalSurname" label="Segundo apellido"
            placeholder="de los Santos">
          </q-input>
          <q-input filled class="inputBox col-12" v-model="profile.address" label="Dirección"
            placeholder="CDMX. Coyoacan">
          </q-input>
          <q-input filled class="inputBox col-12" v-model="profile.phoneNumber" label="Número de celular"
            placeholder="5598100286">
          </q-input>
          <div class="col-12 flex justify-center q-pa-xs">
            <input class="submit text-white" type="submit" value="Guardar">
          </div>
        </q-form>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { toRef } from 'vue';
import { useProfileStore } from '@/stores/profile-store';

const store = useProfileStore();
const profile = toRef(store, 'ProfileNow');

const onSubmit = () => {
  console.log('Form submitted:', profile.value);
}

const onReset = () => {
  console.log('on reset');
}
</script>

<style scoped>
.q-card {
  width: 100%;
  background: transparent;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-container {
  position: relative;
  width: 100%;
  padding: 10px;
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

.form-container__form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: 0.5s;
}

.iconForm {
  color: var(--homeText);
}

.inputBox {
  outline: none !important;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
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

@media only screen and (min-width: 300px) and (max-width: 600px) {
  .q-card {
    display: inline;
  }

  .inputBox .q-field__label {
    font-size: 0.7em !important;
  }
}
</style>
