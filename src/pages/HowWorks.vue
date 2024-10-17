<template>
  <q-page class="row col-12">
    <transition
      appear
      enter-active-class="animated zoomIn slower delay-1s "
      leave-active-class="animated fadeOut"
    >
      <div class="how-works">
        <div class="how-works__select-information col-12">
          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            active-color="white"
            class="bg-primary text-grey-5 shadow-3"
          >
            <q-tab name="clientUser" label="Quiero un servicio"></q-tab>
            <q-tab name="serviceProvider" label="Quiero ser conductor"></q-tab>
          </q-tabs>
        </div>
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
        >
          <q-tab-panel name="clientUser">
            <div
              v-for="(step, index) in stepsClient"
              :key="index"
              class="card-detail__step-box"
              @click="toggleExpand(index, 'client')"
            >
              <div class="card-detail__avatar">
                <q-avatar>
                  <img :src="step.img" class="avatar-img" />
                </q-avatar>
              </div>

              <div class="how-works__original-step" style="text-align: center">
                <span class="text-weight-bold">{{ step.step }}</span>
                <span>{{ step.title }}</span>
                <span>{{ step.subtitle }}</span>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="serviceProvider">
            <div
              v-for="(step, index) in stepsServiceProvider"
              :key="index"
              class="card-detail__step-box"
              @click="toggleExpand(index, 'provider')"
            >
              <div class="card-detail__avatar">
                <q-avatar>
                  <img :src="step.img" class="avatar-img" />
                </q-avatar>
              </div>
              <div class="how-works__original-step" style="text-align: center">
                <span class="text-weight-bold">{{ step.step }}</span>
                <span>{{ step.title }}</span>
                <span>{{ step.subtitle }}</span>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </transition>
    <q-dialog
      v-model="isDialogOpen"
      backdrop-filter="blur(5px) saturate(130%)"
      transition-show="rotate"
      transition-hide="rotate"
      persistent
    >
      <HowItWorksTabs
        :selectedStep="selectedStep"
        @close-dialog="closeisDialogOpen"
      >
      </HowItWorksTabs>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import HowItWorksTabs from "@/components/howWorks/HowItWorksTabs.vue";
import imageStepOne from "@/assets/img/homeHowWorks/step-1-client.svg";
import imageStepTwo from "@/assets/img/homeHowWorks/step-2-client.svg";
import imageStepThree from "@/assets/img/homeHowWorks/step-3-client.svg";
import imageStepFour from "@/assets/img/homeHowWorks/step-4-client.svg";
import imageStepFive from "@/assets/img/homeHowWorks/step-5-client.svg";
import imageStepSix from "@/assets/img/homeHowWorks/step-6-client.svg";

import imageStepOneProvider from "@/assets/img/homeHowWorks/step-1-provider3.svg";
import imageStepTwoProvider from "@/assets/img/homeHowWorks/step-2-provider.svg";
import imageStepThreeProvider from "@/assets/img/homeHowWorks/step-3-provider.svg";

const tab = ref("clientUser");
const selectedStep = ref(null);
const isDialogOpen = ref(false);

const stepsClient = ref([
  {
    img: imageStepOne,
    step: "Paso 1",
    title: "Llenar formulario",
    subtitle: "(Solicitar servicio)",
    steps: [
      {
        details: [
          "Completa el formulario de solicitud proporcionando toda la información requerida para iniciar el proceso.",
          "Recibirás un código de verificación vía WhatsApp inmediatamente después de enviar el formulario.",
          "Abre el mensaje de WhatsApp y copia el código de verificación recibido.",
          "Regresa al formulario, ingresa el código en el campo correspondiente y presiona 'Aceptar' para confirmar tu solicitud.",
        ],
      },
    ],
  },
  {
    img: imageStepTwo,
    step: "Paso 2",
    title: "Información específica del flete/mudanza",
    subtitle: "(Detalla los artículos)",
    steps: [
      {
        details: [
          "Describe con precisión los artículos que deseas trasladar, incluyendo dimensiones y cantidad.",
          "Selecciona el tipo de vehículo que mejor se adapte a tus necesidades de transporte.",
          "Propón un precio justo acorde al servicio requerido.",
        ],
      },
    ],
  },
  {
    img: imageStepThree,
    step: "Paso 3",
    title: "Selecciona el proveedor de servicio",
    subtitle: "(Elige lo mejor para ti)",
    steps: [
      {
        details: [
          "Revisa los perfiles y valoraciones de los prestadores disponibles para evaluar su fiabilidad y calidad de servicio.",
          "Compara las ofertas y precios para seleccionar la opción que mejor se ajuste a tu presupuesto.",
          "Toma una decisión informada seleccionando el prestador que cumpla con tus expectativas de coste y calidad.",
        ],
      },
    ],
  },
  {
    img: imageStepFour,
    step: "Paso 4",
    title: "Confirmación y pago del servicio",
    subtitle: "(Pago del servicio)",
    steps: [
      {
        details: [
          "Verifica todos los detalles del servicio, incluyendo fechas, horarios, y el tipo de vehículo seleccionado.",
          "Confirma que estás de acuerdo con los términos del servicio, incluyendo las políticas de cancelación y seguro.",
          "Realiza el pago del servicio a través del método disponible y asegúrate de recibir una confirmación de pago y una factura detallada.",
        ],
      },
    ],
  },
  {
    img: imageStepFive,
    step: "Paso 5",
    title: "Confirmación final",
    subtitle: "(Servicio programado)",
    steps: [
      {
        details: [
          "Envía un mensaje de texto para confirmar la reserva del servicio.",
          "Recibirás una confirmación por parte del proveedor, asegurando que todo está preparado para el servicio.",
          "Prepárate para el día del servicio, esperando la llegada del proveedor en la fecha y hora acordadas.",
        ],
      },
    ],
  },
  {
    img: imageStepSix,
    step: "Paso 6",
    title: "Cancelación",
    subtitle: "(Paso extra)",
    steps: [
      {
        title: "Servicios Solicitados para el Mismo Día",
        details: [
          "Más de una hora y media de anticipación: Reembolso completo",
          "Menos de una hora y media de anticipación: Reembolso del 50%",
          "Menos de 1 hora de anticipación: No hay reembolso",
        ],
      },
      {
        title: "Servicios Programados",
        details: [
          "Anticipación máxima: Los servicios pueden ser programados con hasta un mes de anticipación.",
          "Cancelación temprana:",
          "Más de cuarenta y ocho horas de anticipación: Reembolso completo.",
          "Entre veinticuatro y cuarenta y ocho horas de anticipación: Reembolso del 85%.",
          "Menos de veinticuatro horas de anticipación: No hay reembolso.",
        ],
      },
    ],
  },
]);
const stepsServiceProvider = ref([
  {
    img: imageStepOneProvider,
    step: "Paso 1",
    title: "Registro y Confirmación",
    subtitle: "(Proceso para registrar y confirmar tu cuenta)",
    steps: [
      {
        title: "Proporciona tú información basica:",
        details: [
          "Completa el formulario de registro con tus datos personales.",
          "Al finalizar, presiona el botón 'Registrar'.",
          "Recibirás un mensaje de confirmación vía WhatsApp.",
          "Ingresa el código de confirmación recibido para completar el registro.",
        ],
      },
      {
        title: "Proporciona los datos de tu vehículo:",
        details: [
          "Modelo del auto.",
          "Número de placa.",
          "Licencia de conducir.",
          "Seguro (en caso de tener).",
          "Al menos una foto del auto.",
        ],
      },
    ],
  },
  {
    img: imageStepTwoProvider,
    step: "Paso 2",
    title: "Búsqueda de Servicios",
    subtitle: "(Cómo buscar y elegir servicios disponibles)",
    steps: [
      {
        details: [
          "Una vez registrado, se habilitará la pestaña 'Servicios' en la barra lateral derecha.",
          "Busca entre los servicios disponibles el que mejor se adapte a tus necesidades (tamaño del flete/mudanza, lugar de origen y destino, precio propuesto).",
          "Verifica que puedes realizar el servicio y, antes de proponerte al cliente, puedes sugerir un precio por tu servicio.",
          "Puedes ver los servicios activos y pendientes en la barra lateral derecha, en la sección 'Mis servicios'.",
          "Se generará un código de 4 dígitos para ambas partes, necesario para recibir tu pago al iniciar el servicio.",
        ],
      },
    ],
  },
  {
    img: imageStepThreeProvider,
    step: "Paso 3",
    title: "Recepción de Pagos",
    subtitle: "(Métodos para recibir el pago de tu servicio)",
    steps: [
      {
        title: "Método 1",
        details: [
          "Pide al cliente que te proporcione el código de servicio.",
          "Ingresa a la app o al sitio web y selecciona la opción 'Ingresar código de servicio' en la barra lateral derecha.",
          "Ingresa el código del cliente. Una vez ingresado, el servicio habrá comenzado y el pago se enviará a tu cuenta. Kivo retendrá el 10% del pago, y el resto será para ti.",
        ],
      },
      {
        title: "Método 2",
        details: [
          "Al iniciar un servicio, se generará un código de cuatro dígitos para ti.",
          "Puedes ver el código del servicio en la pestaña 'Mis servicios'.",
          "Pide al cliente que ingrese a la app o al sitio web de Kivo y que introduzca tu código.",
          "Una vez ingresado el código, el servicio habrá comenzado y el pago se realizará a tu cuenta.",
        ],
      },
    ],
  },
]);
const toggleExpand = (index, actor) => {
  if (actor === "client") {
    selectedStep.value = stepsClient.value[index];
  } else {
    selectedStep.value = stepsServiceProvider.value[index];
  }
  isDialogOpen.value = !isDialogOpen.value;
};
const closeisDialogOpen = () => {
  isDialogOpen.value = false;
};
</script>

<style scoped>
.how-works {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  margin-top: 10px;
}

.how-works__select-information {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.q-tabs {
  width: 40%;
  border-radius: 15px;
}

.q-tab-panels {
  background: transparent;
  width: 100%;
}

.q-tab-panel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-template-rows: auto;
  height: 100%;
}

.card-detail__step-box {
  background: var(--card);
  border: 0.1px solid #d6d6d6e1;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  height: 35vh;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.card-detail__step-box:hover {
  transform: scale(1.05);
}

.card-detail__avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 60%;
  width: 100%;
}

.q-avatar {
  border-radius: 0px;
  width: 100%;
  height: 80%;
}

.card-detail__step-box .how-works__original-step {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@media (max-width: 576px) {
  /* Estilos para pantallas pequeñas */
  .q-tab-panel {
    grid-template-columns: 1fr !important;
  }

  .q-dialog__inner--minimized {
    padding: 5px !important;
  }
}

@media (max-width: 767.98px) {
  /* Small devices (landscape phones, 576px and up) */
  .q-tab-panel {
    grid-template-columns: repeat(2, 1fr);
  }

  .q-tabs {
    width: 100%;
  }

  .q-tab__label {
    font-size: 10px !important;
  }

  .q-dialog__inner--minimized {
    padding: 50px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Medium devices (tablets, 768px and up) */
  .q-tabs {
    width: 70%;
  }
}

@media (min-width: 992px) and (max-width: 1525px) {
  /* Large devices (desktops, 992px and up) */
  .q-tabs {
    width: 60%;
  }
}
</style>
