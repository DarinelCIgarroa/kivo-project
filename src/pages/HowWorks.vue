<template>
  <q-page class="row col-12">
    <transition appear enter-active-class="animated zoomIn slower delay-1s " leave-active-class="animated fadeOut">
      <div class="home-how-works">
        <div class="select-information col-12">
          <q-tabs v-model="tab" indicator-color="transparent" active-color="white"
            class="bg-primary text-grey-5 shadow-3">
            <q-tab name="clientUser" label="Quiero un servicio"></q-tab>
            <q-tab name="serviceProvider" label="Quiero ser conductor"></q-tab>
          </q-tabs>
        </div>
        <div>
          <q-tab-panels v-model="tab" animated transition-prev="scale" transition-next="scale">
            <q-tab-panel name="clientUser">
              <div v-for="(step, index) in steps" :key="index" class="step-box" @click="toggleExpand(index, $event)">
                <q-avatar size="120px">
                  <img :src="step.img">
                </q-avatar>
                <div class="original-step">
                  <span class="text-weight-bold">{{ step.step }}</span>
                  <span>{{ step.title }}</span>
                  <span>{{ step.subtitle }}</span>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
        <q-dialog v-model="isDialogOpen" backdrop-filter="blur(5px) saturate(130%)" transition-show="rotate"
          transition-hide="rotate">
          <q-card class="card-select-detail no-shadow">
            <q-card-section class="section-detail-step">
              <img :src="selectedStep.img" class="select-detail-img">
              <div class="select-detail-steps">
                <div class="select-detail-info">
                  <div class="flex justify-end" style="width: 100%;">
                    <q-icon name="fa-solid fa-circle-xmark" color="dark" size="1.4rem"
                      @click="isDialogOpen = !isDialogOpen" style="cursor: pointer;"></q-icon>
                  </div>
                  <div><span class="text-weight-bolder" style="font-size: 20px;">{{ selectedStep.title }}</span></div>
                  <div><span class="text-weight-bold" style="font-size: 15px;">{{ selectedStep.subtitle }}</span></div>
                  <div class="step" v-for="(detail, index) in selectedStep.details" :key="index">
                    <div>
                      <q-icon name="fa-solid fa-check" color="positive" size="1.2rem"></q-icon>
                    </div>
                    <div>
                      <span style="font-size: 15px;">{{ `${detail}` }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </transition>
  </q-page>

</template>

<script setup>
import { ref } from 'vue'
import imageStepOne from '@/assets/img/homeHowWorks/step-1-client.svg';
import imageStepTwo from '@/assets/img/homeHowWorks/step-2-client.svg';
import imageStepThree from '@/assets/img/homeHowWorks/step-3-client.svg';
import imageStepFour from '@/assets/img/homeHowWorks/step-4-client.svg';
import imageStepFive from '@/assets/img/homeHowWorks/step-5-client.svg';

const tab = ref('clientUser');
const selectedStep = ref(null)
const isDialogOpen = ref(false);

const steps = ref([
  {
    img: imageStepOne,
    step: 'Paso 1',
    title: 'Llenar formulario',
    subtitle: '(Solicitar servicio)',
    details: [
      "Completa el formulario de solicitud proporcionando toda la información requerida para iniciar el proceso.",
      "Recibirás un código de verificación vía WhatsApp inmediatamente después de enviar el formulario.",
      "Abre el mensaje de WhatsApp y copia el código de verificación recibido.",
      "Regresa al formulario, ingresa el código en el campo correspondiente y presiona 'Aceptar' para confirmar tu solicitud."
    ]
  },
  {
    img: imageStepTwo,
    step: 'Paso 2',
    title: 'Información específica del flete/mudanza',
    subtitle: '(Detalla los artículos)',
    details: [
      'Describe con precisión los artículos que deseas trasladar, incluyendo dimensiones y cantidad.',
      'Selecciona el tipo de vehículo que mejor se adapte a tus necesidades de transporte.',
      'Propón un precio justo acorde al servicio requerido.'
    ]
  },
  {
    img: imageStepThree,
    step: 'Paso 3',
    title: 'Selecciona el proveedor de servicio',
    subtitle: '(Elige lo mejor para ti)',
    details: [
      'Revisa los perfiles y valoraciones de los prestadores disponibles para evaluar su fiabilidad y calidad de servicio.',
      'Compara las ofertas y precios para seleccionar la opción que mejor se ajuste a tu presupuesto.',
      'Toma una decisión informada seleccionando el prestador que cumpla con tus expectativas de coste y calidad.'
    ]
  },
  {
    img: imageStepFour,
    step: 'Paso 4',
    title: 'Confirmación y pago del servicio',
    subtitle: '(Pago del servicio)',
    details: [
      'Verifica todos los detalles del servicio, incluyendo fechas, horarios, y el tipo de vehículo seleccionado.',
      'Confirma que estás de acuerdo con los términos del servicio, incluyendo las políticas de cancelación y seguro.',
      'Realiza el pago del servicio a través del método disponible y asegúrate de recibir una confirmación de pago y una factura detallada.'
    ]
  },
  {
    img: imageStepFive,
    step: 'Paso 5',
    title: 'Confirmación final',
    subtitle: '(Servicio programado)',
    details: [
      'Envía un mensaje de texto para confirmar la reserva del servicio.',
      'Recibirás una confirmación por parte del proveedor, asegurando que todo está preparado para el servicio.',
      'Prepárate para el día del servicio, esperando la llegada del proveedor en la fecha y hora acordadas.'
    ]
  }

]);


function toggleExpand(index) {
  selectedStep.value = steps.value[index]
  isDialogOpen.value = !isDialogOpen.value
}

</script>

<style scoped>
.home-how-works {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  min-width: 100%;
  padding: 50px;
}

.select-information {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.q-tabs {
  width: 30%;
  border-radius: 15px;
}

.q-tab-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
}

.step-box {
  background: rgba(219, 219, 219, 0.866);
  position: relative;
  cursor: pointer;
  flex: 0 0 31%;
  margin: 1%;
  transition: transform 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}

.q-tab-panels {
  background: transparent;
}

.step-box .original-step {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.step-box .original-step span:nth-of-type(1) {
  font-size: 20px;
}

.card-select-detail {
  background: transparent;
  padding: 5px;
  border-radius: 15px;
  min-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-detail-step {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.select-detail-img {
  position: absolute;
  width: 36%;
  left: 17px;

}

.select-detail-steps {
  background: white;
  border: 0.5px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: end;
  max-width: 70%;
}

.select-detail-info {
  padding: 15px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-detail-info .step {
  padding: 15px;
  display: flex;
  width: 100%;
}

.select-detail-info .step div:nth-of-type(1) {
  padding: 5px;
  display: flex;
  justify-items: center;
  align-items: center;
}

.select-detail-info .step div:nth-of-type(2) {
  padding: 3px;
}
</style>
