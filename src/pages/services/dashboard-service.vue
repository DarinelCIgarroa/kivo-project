<template>
  <q-page class="q-pa-md">
    <div class="my-services">
      <!-- Primera fila: contenedor de servicios -->
      <div class="service-container">
        <div class="card-income">
          <div class="icon-title">
            <q-icon name="attach_money" size="32px" color="green" />
          <div class="text-h6">INGRESOS</div>
        </div>
          <div class="q-mt-xs">
            <div class="text-subtitle2">Ingreso de Hoy:</div>
            <div class="text-h5">{{ todayIncome }}</div>
            <!-- Monto de hoy -->
          </div>

          <div class="q-mt-xs">
            <div class="text-subtitle2">Ingreso de Ayer:</div>
            <div class="text-h5">{{ yesterdayIncome }}</div>
            <!-- Monto de ayer -->
          </div>

          <!-- Sección de la diferencia porcentual con barra de progreso -->
        <div class="q-mt-md">
          <div class="text-subtitle2 text-bold">Diferencia:</div>
          <q-linear-progress
            :value="percentageDifference / 100"
            color="green"
            track-color="lightgrey"
            :size="20"
            rounded
            class="q-mt-sm"
          />
          <div
            class="percentage-text q-mt-sm"
            :class="{
              'text-positive': percentageDifference > 0,
              'text-negative': percentageDifference < 0,
            }"
          >
            {{ percentageDifferenceText }}
            </div>
          </div>
        </div>
        <!-- card de ingresos mensuales -->
        <div class="card-sale">
          <div class="icon-title">
            <q-icon name="attach_money" size="32px" color="green" />
          <div class="text-h6">INGRESO MENSUAL</div>
        </div>
          <div class="q-mt-xs">
            <div class="text-subtitle2">Ingreso de este Mes:</div>
            <div class="text-h5">{{ currentMonthIncome }}</div>
            <!-- Ingreso del mes actual -->
          </div>

          <div class="q-mt-xs">
            <div class="text-subtitle2">Ingreso del Mes Anterior:</div>
            <div class="text-h5">{{ previousMonthIncome }}</div>
            <!-- Ingreso del mes anterior -->
          </div>

          <!-- Diferencia porcentual con barra de progreso -->
        <div class="q-mt-md">
          <div class="text-subtitle2 text-bold">Diferencia:</div>
          <q-linear-progress
            :value="monthlyPercentageDifference / 100"
            color="green"
            track-color="lightgrey"
            :size="20"
            rounded
            class="q-mt-sm"
          />
          <div
            class="percentage-text q-mt-sm"
            :class="{
              'text-positive': monthlyPercentageDifference > 0,
              'text-negative': monthlyPercentageDifference < 0,
            }"
          >
            {{ monthlyPercentageDifferenceText }}
            </div>
          </div>
        </div>
        <div class="card-annual-sale">Clientes</div>
      </div>

      <!-- Segunda fila: tabla de clientes -->
      <div class="table-container">
        <div class="header-container">
          <div class="card-table text-h6 text-grey-8">Clientes</div>

          <div class="filters-container">
            <q-input
              v-model="search"
              placeholder="Buscar por nombre o email"
              debounce="300"
              outlined
              dense
              class="q-mb-md"
            />

            <q-select
              v-model="selectedStatus"
              :options="statusOptions"
              placeholder="Filtrar por estado"
              outlined
              dense
              class="q-mb-md"
              clearable
              @click="openStatusSelect"
            />
          </div>
        </div>

        <q-table
          :rows="filteredRows"
          :columns="columns"
          row-key="name"
          :rows-per-page-options="[5, 10, 25]"
          :pagination="pagination"
          @request="onRequest"
          :loading="loading"
          flat
          bordered
        >
          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              {{ props.row.status }}
            </q-td>
          </template>

          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn color="primary" icon="visibility" flat />
              <q-btn color="blue-10" icon="edit" flat />
              <q-btn color="negative" icon="delete" flat />
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
// codigo de script de la parte de ingresos por dia
// Funciones para simular ingresos
const getTodayIncome = () => {
  // Simula el ingreso de hoy
  return Math.floor(Math.random() * 700) + 300; // Genera un número entre 300 y 1000
};

const getYesterdayIncome = () => {
  // Simula el ingreso de ayer
  return Math.floor(Math.random() * 700) + 300; // Genera un número entre 300 y 1000
};

// Variables reactivas para los ingresos
const todayIncome = ref(getTodayIncome());
const yesterdayIncome = ref(getYesterdayIncome());

// Calcular el porcentaje de diferencia
const percentageDifference = computed(() => {
  const difference = todayIncome.value - yesterdayIncome.value;
  const percentage = (difference / yesterdayIncome.value) * 100;
  return percentage.toFixed(2); // Limitar a 2 decimales
});

// Texto para mostrar la diferencia porcentual
const percentageDifferenceText = computed(() => {
  const diff = percentageDifference.value;
  return diff > 0 ? `+${diff}% más que ayer` : `${diff}% menos que ayer`;
});

// codigo de script de la parte de ingresos mensuales
// Funciones para simular ingresos mensuales
const getCurrentMonthIncome = () => {
  // Simula el ingreso del mes actual
  return Math.floor(Math.random() * 20000) + 10000; // Genera un número entre 10,000 y 30,000
};

const getPreviousMonthIncome = () => {
  // Simula el ingreso del mes anterior
  return Math.floor(Math.random() * 20000) + 10000; // Genera un número entre 10,000 y 30,000
};

// Variables reactivas para los ingresos mensuales
const currentMonthIncome = ref(getCurrentMonthIncome());
const previousMonthIncome = ref(getPreviousMonthIncome());

// Calcular el porcentaje de diferencia mensual
const monthlyPercentageDifference = computed(() => {
  const difference = currentMonthIncome.value - previousMonthIncome.value;
  const percentage = (difference / previousMonthIncome.value) * 100;
  return percentage.toFixed(2); // Limitar a 2 decimales
});

// Texto para mostrar la diferencia porcentual mensual
const monthlyPercentageDifferenceText = computed(() => {
  const diff = monthlyPercentageDifference.value;
  return diff > 0
    ? `+${diff}% más que el mes anterior`
    : `${diff}% menos que el mes anterior`;
});

const statusOptions = [
  { label: "Activo", value: "Activo" },
  { label: "Pendiente", value: "Pendiente" },
  { label: "Cancelado", value: "Cancelado" },
  { label: "Finalizado", value: "Finalizado" },
];
// Variables reactivas
const search = ref("");
const selectedStatus = ref(null);

// Definir columnas
const columns = ref([
  {
    name: "name",
    label: "Nombre",
    field: "name",
    align: "left",
    sortable: true,
  },
  {
    name: "email",
    label: "Email",
    field: "email",
    align: "left",
    sortable: true,
  },
  {
    name: "cuota",
    label: "Cuota",
    field: "cuota",
    align: "left",
    sortable: true,
  },
  {
    name: "vehiculo",
    label: "Vehiculo",
    field: "vehiculo",
    align: "left",
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    align: "left",
    sortable: false, // No es necesario ordenar por esta columna
  },

  { name: "actions", label: "Acciones", field: "actions", align: "left" },
]);

// Definir filas (datos de ejemplo)
const rows = ref([
  {
    name: "John Doe",
    email: "john@example.com",
    cuota: "$500",
    vehiculo: "Hummer EV",
    status: "Pendiente",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    cuota: "$500",
    vehiculo: "RAM 2500",
    status: "Finalizado",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    cuota: "$500",
    vehiculo: "Rivian R1T",
    status: "Cancelado",
  },
  {
    name: "Alice Walker",
    email: "alice@example.com",
    cuota: "$500",
    vehiculo: "Rolls-Royce Cullinan",
    status: "Pendiente",
  },
  {
    name: "Chris Evans",
    email: "chris@example.com",
    cuota: "$500",
    vehiculo: "Cadillac Escalade",
    status: "finalziado",
  },
  {
    name: "Bruce Wayne",
    email: "bruce@example.com",
    cuota: "$500",
    vehiculo: "BMW X7",
    status: "Cancelado",
  },
  {
    name: "Clark Kent",
    email: "clark@example.com",
    cuota: "$500",
    vehiculo: "Mercedes Clase G",
    status: "Pendiente",
  },
]);

// Computed para filtrar filas
const filteredRows = computed(() => {
  return rows.value.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.value.toLowerCase()) ||
      row.email.toLowerCase().includes(search.value.toLowerCase());
    const matchesStatus = selectedStatus.value
      ? row.status === selectedStatus.value
      : true;
    return matchesSearch && matchesStatus;
  });
});

// Variables reactivas para paginación
const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  sortBy: "name",
  descending: false,
});
const loading = ref(false);

// Método para manejar la solicitud de cambio de paginación, orden, etc.
const onRequest = (props) => {
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  pagination.value.page = page;
  pagination.value.rowsPerPage = rowsPerPage;
  pagination.value.sortBy = sortBy;
  pagination.value.descending = descending;
  loading.value = false; // Simulación de carga (puede ser dinámico si se obtiene de una API)
};
// Método para abrir el select al hacer clic
const openStatusSelect = () => {
  // Este método se activa al hacer clic en el filtro, lo que permite que el menú se despliegue.
};
//borrar apartir de aqui
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between; /* Para espaciar elementos */
  align-items: center; /* Alinear verticalmente */
}
.filters-container {
  display: flex;
  gap: 1rem; /* Espaciado entre los elementos del filtro */
  margin-left: auto; /* Empujar el contenedor hacia la derecha */
}

/* El contenedor principal que define el grid con áreas */
.my-services {
  display: grid;
  grid-template-rows: auto 1fr; /* Dos filas: una para los servicios y otra para la tabla */
  grid-template-areas:
    "services"
    "table";
  grid-gap: 20px;
  width: 100%;
  height: 100%; /* Asegurar que todo ocupe el espacio vertical disponible */
}

/* Primera fila: contenedor de servicios */
.service-container {
  grid-area: services; /* Asignar esta área a los servicios */
  display: flex;
  flex-direction: row; /* Distribuir los contenedores en fila */
  justify-content: space-around;
  height: 100%;
}

.service-container > div {
  background: var(--card);
  padding: 20px;
  border-radius: 1rem;
  padding: 1rem !important;
  margin-right: 10px;
  border: 0.1px solid #d6d6d6e1;
  flex: 1; /* Asegurar que los contenedores se distribuyan proporcionalmente */
}

.icon-title {
  display: flex; /* Alinear ícono y texto en fila */
  align-items: center; /* Alinear verticalmente */
}

.q-ml-sm {
  margin-left: 10px; /* Margen a la izquierda del texto para separar del ícono */
}

.text-subtitle2 {
  font-weight: 500;
  color: #555;
}

.text-h5 {
  font-weight: bold;
  color: #333;
}

.text-positive {
  color: green;
}

.text-negative {
  color: red;
}

/* Espaciado adicional */
.q-mt-xs {
  margin-top: 10px;
}

.q-mt-md {
  margin-top: 20px;
}
.percentage-text {
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
}

/* Segunda fila: la tabla de clientes */
.table-container {
  grid-area: table; /* Asignar esta área a la tabla */
  background: #fff;
  padding: 20px;
  border-radius: 1rem;
  padding: 1rem !important;
  border: 0.1px solid #d6d6d6e1;
  display: block;
  width: 100%; /* La tabla debe ocupar todo el ancho disponible */
}

.q-tabs {
  width: 40%;
  border-radius: 15px;
}

.my-service-headed {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.q-input {
  margin-bottom: 16px;
}
</style>
