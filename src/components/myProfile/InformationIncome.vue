<template>
  <q-card class="card card--direction-column row" flat bordered>
    <div class="card__summary col-12">
      <q-item>
        <q-item-section side>
          <q-avatar size="2.5em" color="primary" text-color="white" icon="fa-solid fa-wallet">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Ingresos este mes</q-item-label>
          <q-item-label caption>$3,423.00</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="card__content-chart col-12">
    </div>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import ApexCharts from 'apexcharts';

const chartOptions = ref({
  chart: {
    type: 'area',
    width: '100%',
    height: '100%',
    tollbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    responsive: [{
      breakpoint: 360,
      options: {
        chart: {
          width: 100,
          height: 500
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
    curve: 'smooth'
  },
  markers: {
    size: 5,
    colors: ['#000'],
    strokeWidth: 1,
    hover: {
      size: 8
    }
  },
  // colors: ['#7a1b4a', 'BDBAB9'],
  title: {
    text: 'Últimos Dos Meses',
    align: 'center',
    style: {
      fontSize: '16px',
    },
  },
  xaxis: {
    categories: [
      "Sem 1", "Sem 2", "Sem 3", "Sem 4",
    ]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  },
  series: [{
    name: 'Mayo',
    data: [1000, 1200, 900, 1600]
  }, {
    name: 'Junio',
    data: [1100, 1400, 1300, 0]
  }]
});

onMounted(() => {
  const chartContainer = document.querySelector(".card__content-chart");
  const observer = new ResizeObserver(() => {
    if (chart) {
      chart.destroy();
      chart = new ApexCharts(chartContainer, chartOptions.value);
      chart.render();
    }
  });

  observer.observe(chartContainer);

  let chart = new ApexCharts(chartContainer, chartOptions.value);
  chart.render();
});
</script>

<style scoped>
.card__content-chart {
  height: 80%;
}

@media (max-width: 480px) {
  .card__content-chart {
    height: 300px;
  }

}
</style>
