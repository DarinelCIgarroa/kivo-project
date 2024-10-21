<template>
  <q-page class="q-pa-md">
    <q-card class="my-services">
      <!-- Primera fila: contenedor de servicios -->
      <q-card-section class="service-container">
        <div class="card-income">Ingreso</div>
        <div class="card-sale">Ventas Totales</div>
        <div class="card-annual-sale">Ingreso Anual</div>
      </q-card-section>

      <!-- Segunda fila: tabla de clientes -->
      <q-card-section class="table-container">
        <div>
          <div class="card-table text-h6 text-grey-8">Clientes</div>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            :rows-per-page-options="[5, 10, 25]"
            :pagination="pagination"
            @request="onRequest"
            :loading="loading"
            flat
            bordered
          >
            <!-- Columnas personalizadas (opcional) -->
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-select
                  v-model="props.row.status"
                  :options="statusOptions"
                  outlined
                  dense
                />
              </q-td>
            </template>

            <template v-slot:body-cell-delete="props">
              <q-td :props="props">
                <q-btn
                  color="negative"
                  icon="delete"
                  round
                  @click="deleteClient(props.row.id)"
                  flat
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script setup>
import { ref } from "vue";

// Opciones de estado
const statusOptions = [
  { label: "Pendiente", value: "Pendiente" },
  { label: "Cancelado", value: "Cancelado" },
  { label: "Pagado", value: "Pagado" },
];

// Definir columnas
const columns = ref([
  { name: "id", label: "ID", field: "id", align: "left", sortable: true },
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
  {
    name: "delete",
    label: "Delete",
    field: "delete",
    align: "left",
    sortable: false,
  },
]);

// Definir filas (datos de ejemplo)
const rows = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    cuota: "$500",
    status: "Pendiente",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    cuota: "$500",
    status: "Pagado",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    cuota: "$500",
    status: "Cancelado",
  },
  {
    id: 4,
    name: "Alice Walker",
    email: "alice@example.com",
    cuota: "$500",
    status: "Pendiente",
  },
  {
    id: 5,
    name: "Chris Evans",
    email: "chris@example.com",
    cuota: "$500",
    status: "Pagado",
  },
  {
    id: 6,
    name: "Bruce Wayne",
    email: "bruce@example.com",
    cuota: "$500",
    status: "Cancelado",
  },
  {
    id: 7,
    name: "Clark Kent",
    email: "clark@example.com",
    cuota: "$500",
    status: "Pendiente",
  },
]);

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

// Método para eliminar cliente
const deleteClient = (id) => {
  const index = rows.value.findIndex((row) => row.id === id);
  if (index !== -1) {
    rows.value.splice(index, 1); // Eliminar cliente de la lista
  }
};
</script>
<style scoped>
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
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-right: 10px;
  flex: 1; /* Asegurar que los contenedores se distribuyan proporcionalmente */
}

/* Segunda fila: la tabla de clientes */
.table-container {
  grid-area: table; /* Asignar esta área a la tabla */
  background: #fff;
  padding: 20px;
  border-radius: 4px;
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
