<template>
  <q-page class="q-pa-md">
    <q-card class="my-services row">
      <q-card-section class="service-container col-12">
        <div class="card-income">Ingreso</div>
        <div class="card-sale">Ventas Totales</div>
        <div class="card-annual-sale">Ingreso Anual</div>
      </q-card-section>
      <q-card-section class="table-container col-12">
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
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <!-- Dropdown para seleccionar el estado -->
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
                <!-- Botón para eliminar cliente -->
                <q-btn
                  color="negative"
                  icon="delete"
                  label="Eliminar"
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
.my-services {
  background: aqua;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr; /* Una columna más pequeña que la otra */
  grid-gap: 20px;
  width: 100%; /* Asegúrate de que el grid ocupe el 100% del ancho */
}

.service-container {
  background: yellow;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Asegura que los contenedores se distribuyan bien */
}

.service-container > div {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.table-container {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 100%; /* Asegúrate de que la tabla ocupe el 100% */
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
