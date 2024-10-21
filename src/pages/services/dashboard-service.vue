<template>
  <q-layout view="hHh Lpr fff">
    <q-page class="">
      <div class="my-services">
        <div class="my-service-headed col-12">
          <q-tabs
            indicator-color="transparent"
            active-color="white"
            class="bg-primary text-grey-5 shadow-3"
          >
            <q-tab name="header" label="Mis servicios"></q-tab>
          </q-tabs>
        </div>
      </div>

      <q-card>
        <q-card-section>
          <div class="service-container">
            <div class="card-income">Ingreso</div>
            <div class="card-sale">Ventas Totales</div>

            <div class="card-annual-sale">Ingreso Anual</div>
          </div>
         
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
      <div class="table-container col-12">
            <div class="card-table">Clientes</div>
            <q-table
              :rows="filteredRows"
              :columns="columns"
              row-key="id"
              :rows-per-page-options="[5, 10, 25]"
              :pagination="pagination"
              @request="onRequest"
              :loading="loading"
              flat
              bordered
            >
            </q-table>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      // Columnas de la tabla
      columns: [
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
          sortable: true,
        },
        {
          name: "delete",
          label: "Delete",
          field: "delete",
          align: "left",
          sortable: true,
        },
      ],
      // Datos de ejemplo
      rows: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 4, name: "Alice Walker", email: "alice@example.com" },
        { id: 5, name: "Chris Evans", email: "chris@example.com" },
        { id: 6, name: "Bruce Wayne", email: "bruce@example.com" },
        { id: 7, name: "Clark Kent", email: "clark@example.com" },
      ],
      search: "",
      pagination: {
        page: 1,
        rowsPerPage: 5,
        sortBy: "name",
        descending: false,
      },
      loading: false, // Controla si la tabla está cargando datos
    };
  },
  computed: {
    // Filtra las filas basadas en la búsqueda
    filteredRows() {
      if (!this.search) {
        return this.rows;
      }
      const searchLower = this.search.toLowerCase();
      return this.rows.filter((row) => {
        return (
          row.name.toLowerCase().includes(searchLower) ||
          row.email.toLowerCase().includes(searchLower) ||
          String(row.id).includes(searchLower)
        );
      });
    },
  },
  methods: {
    onSearch() {
      this.pagination.page = 1; // Reinicia a la primera página cuando hay una búsqueda
    },
    onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;
      // Aquí puedes agregar lógica para obtener datos de una API o base de datos si es necesario
      this.loading = false; // Puedes cambiar esto para hacer que cargue dinámicamente
    },
  },
};
</script>

<style scoped>
.service-container {
  width: 100%;
  max-width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-gap: 20px; /* Espaciado entre elementos */
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  grid-template-rows: auto; /* 3 filas iguales */
}

.service-container > div {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
}

.table-container {
  grid-gap: 20px;
 
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
.my-services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  margin-top: 10px;
}
.q-input {
  margin-bottom: 16px;
}
</style>
