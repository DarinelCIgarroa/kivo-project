<template>
  <q-card class="no-shadow custom-rounded">
    <q-card-section class="text-center">
      <q-avatar color="black" size="80px" class="shadow-10">
        <img :src="logo" />
      </q-avatar>
    </q-card-section>

    <q-card-section class="q-pt-none text-center">
      <div class="text-h6">
        <span>¡Hola, Darinel Cigarroa! 👋</span>
      </div>
      <div class="text-grey-8" style="font-size: 16px">
        <span>
          Nos alegra tenerte de vuelta. Por favor, introduce el código que te hemos enviado.
        </span>
      </div>
    </q-card-section>

    <q-card-section class="input-container q-pa-md">
      <q-form>
        <div class="row justify-center">
          <q-col cols="2" v-for="(digit, index) in digits.length" :key="index">
            <q-input
              v-model="digits[index]"
              type="text"
              maxlength="1"
              outlined
              class="digit-input"
              :ref="setInputRef(index)"
              @update:model-value="validateDigit(index)"
              @keyup="(event) => handleKeyup(index, event)"
              @keydown="(event) => handleKeydown(index, event)"
              input-class="text-center"
            />
          </q-col>
          <div class="resend-container text-grey-8 col-12">
            <span @click="resendCode" class="resend-code">
              ¿No recibiste el código? <strong>Reenviar</strong>
            </span>
          </div>
        </div>
      </q-form>
    </q-card-section>

    <q-card-actions class="q-ma-sm col-12" align="around">
      <q-btn
        rounded
        padding="xs lg"
        size="17px"
        color="primary"
        label="Verificar"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref, nextTick } from "vue";
import logo from "@/assets/logo-kivo.svg";

// Constantes
const DIGIT_LIMIT = 6;
const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight"];

// Datos reactivos
const digits = ref(Array(DIGIT_LIMIT).fill(""));
const digitInputRefs = ref([]);

// Función para establecer referencias dinámicas
const setInputRef = (index) => (el) => {
  if (el) {
    digitInputRefs.value[index] = el;
  }
};

// Manejo del evento `keyup`
const handleKeyup = (index, event) => {
  const key = event.key;

  if (!allowedKeys.includes(key) && digits.value[index] && index < DIGIT_LIMIT - 1) {
    focusNextInput(index);
  }
};

// Manejo del evento `keydown`
const handleKeydown = (index, event) => {
  const key = event.key;

  if (key === "Backspace") {
    handleBackspace(index);
  } else {
    handleArrowKeys(index, key);
  }
};

// Moverse al input siguiente
const focusNextInput = (index) => {
  nextTick(() => {
    digitInputRefs.value[index + 1]?.focus();
  });
};

// Moverse al input anterior
const focusPreviousInput = (index) => {
  nextTick(() => {
    digitInputRefs.value[index - 1]?.focus();
  });
};

// Manejar Backspace
const handleBackspace = (index) => {
  if (digits.value[index] !== "") {
    digits.value[index] = ""; // Borrar el valor si existe
  } else if (index > 0) {
    focusPreviousInput(index);
  }
};

// Manejo de teclas de flecha
const handleArrowKeys = (index, key) => {
  if (key === "ArrowLeft" && index > 0) {
    focusPreviousInput(index);
  } else if (key === "ArrowRight" && index < DIGIT_LIMIT - 1) {
    focusNextInput(index);
  }
};

// Validar que el input solo contenga dígitos
const validateDigit = (index) => {
  const value = digits.value[index];
  if (!/^\d$/.test(value)) {
    digits.value[index] = ""; // Borrar si no es un dígito
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-rounded {
  border-radius: 16px;
}
.digit-input {
  text-align: center;
  font-size: 24px;
  width: 50px;
  margin: 5px;
}
.resend-container {
  margin-top: 10px;
  text-align: center;
}
.resend-code {
  cursor: pointer;
  font-size: 14px;
}
.resend-code strong {
  text-decoration: underline;
}
</style>
