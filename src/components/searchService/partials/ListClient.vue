<template>
    <q-list color="white" class="q-list-hover">
        <q-item v-for="client in clients" :key="client.id" class="q-my-sm q-item-hover" clickable v-ripple>
            <q-item-section avatar class="section-avatar">
                <q-avatar color="secondary" text-color="white">
                    <img :src="client.avatar ? client.avatar : defaultAvatar" alt="Client Avatar">
                </q-avatar>
            </q-item-section>
            <q-item-section class="section-info">
                <q-icon color="secondary" v-if="activeClientId === client.id" size="sm" name="fa-solid fa-thumbtack"
                    class="pin-icon">
                </q-icon>
                <q-item-label>
                    <q-icon color="info" class="q-px-xs" size="xs" name="fa-solid fa-user" />
                    <span class="info-span">Nombre: </span>
                    <span class="q-ml-xs data-span">{{ client.name }}</span>
                </q-item-label>
                <q-item-label>
                    <q-icon color="info" class="q-px-xs" size="xs" name="fa-solid fa-car" />
                    <span class="info-span">Tipo de Transporte: </span>
                    <span class="q-ml-xs data-span">{{ client.transport_type }}</span>
                </q-item-label>
                <q-item-label class="content-price">
                    <span class="price-span data-span">${{ client.price }}</span>
                </q-item-label>
            </q-item-section>
            <q-item-section v-if="activeClientId !== client.id" class="section-btn" side>
                <q-btn style="background: var(--secondary); color: var(--accent)" label="Detalles"
                    @click="selectClient(client.id)"></q-btn>
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useClientServiceStore } from "@/stores/client-detail-store"
import defaultAvatar from '../../../assets/img/homeService/default-avatar.png';

const clientDetailStore = useClientServiceStore()
const clients = ref([
    {
        id: 1,
        name: 'Lorenzo Cigarroa de los Santos',
        price: '850',
        transport_type: 'Van',
        avatar: null,
        placeOrigin: 'Madrid, España',
        placeDestination: 'Barcelona, España',
        detailsArticles: [
            'Cajas de libros', 'Bicicleta',
        ]
    },
    {
        id: 2,
        name: 'Mirta Ocaña Lopez',
        price: '1300',
        transport_type: 'Truck',
        avatar: null,
        placeOrigin: 'Buenos Aires, Argentina',
        placeDestination: 'Mendoza, Argentina',
        detailsArticles: [
            'Muebles de sala', 'Electrodomésticos', 'Estantería', 'Libros de cocina',
            'Sets de vajilla', 'Cortinas', 'Ropa de invierno', 'Bolsas de dormir', 'Camping gear',
            'Bicicletas', 'Juguetes para niños', 'Maleta grande', 'Computadora', 'Impresora',
            'Cámara fotográfica', 'Relojes', 'Colección de vinos', 'Equipo de audio', 'Instrumentos musicales', 'Material deportivo'
        ]
    },
    {
        id: 3,
        name: 'Felipe Gutierrez Nola',
        price: '1100',
        transport_type: 'MiniVan',
        avatar: null,
        placeOrigin: 'Lima, Perú',
        placeDestination: 'Cuzco, Perú',
        detailsArticles: [
            'Instrumentos musicales', 'Maletas de ropa', 'Sombreros', 'Bufandas',
            'Botas de montaña', 'Tienda de campaña', 'Sacos de dormir', 'Linternas', 'Cantimploras',
            'Mapas', 'Libros de viaje', 'Snacks', 'Ropa de abrigo', 'Guantes', 'Cámaras',
            'Binoculares', 'GPS', 'Equipaje', 'Souvenirs', 'Medicamentos'
        ]
    },
    {
        id: 4,
        name: 'Carla Karian Mendez Agrup',
        price: '1600',
        transport_type: 'Flatbed',
        avatar: null,
        placeOrigin: 'México D.F., México',
        placeDestination: 'Guadalajara, México',
        detailsArticles: [
            'Piezas de arte', 'Esculturas', 'Pinturas', 'Marcos antiguos',
            'Estatuas', 'Libros raros', 'Manuscritos', 'Joyas', 'Reliquias', 'Muebles antiguos',
            'Instrumentos antiguos', 'Tapices', 'Lámparas', 'Candelabros', 'Espejos de época',
            'Cámaras antiguas', 'Discos de vinilo', 'Equipos de música vintage', 'Posters de arte', 'Colecciones de monedas'
        ]
    },
    {
        id: 5,
        name: 'Sergio Ramos Verllin',
        price: '1800',
        transport_type: 'RefrigeratedTruck',
        avatar: null,
        placeOrigin: 'Santiago, Chile',
        placeDestination: 'Valparaíso, Chile',
        detailsArticles: [
            'Carga de alimentos perecederos', 'Vegetales', 'Frutas', 'Carnes',
            'Pescados', 'Lácteos', 'Helados', 'Comidas preparadas', 'Bebidas frías', 'Medicamentos que requieren refrigeración',
            'Chocolates', 'Flores', 'Semillas', 'Productos biológicos', 'Cremas cosméticas',
            'Vacunas', 'Cultivos de laboratorio', 'Especímenes para investigación', 'Ingredientes de alta cocina', 'Pasteles y postres'
        ]
    },
    {
        id: 6,
        name: 'Ana Perez Lopez',
        price: '1400',
        transport_type: 'BoxTruck',
        avatar: null,
        placeOrigin: 'Bogotá, Colombia',
        placeDestination: 'Medellín, Colombia',
        detailsArticles: [
            'Equipamiento de oficina', 'Documentos importantes', 'Computadoras', 'Monitores',
            'Impresoras', 'Sillas de oficina', 'Escritorios', 'Suministros de papelería', 'Máquinas de fax', 'Teléfonos',
            'Archivadores', 'Libros de referencia', 'Material de marketing', 'Proyectos de diseño', 'Maquetas',
            'Equipos de red', 'Routers', 'Switches', 'Servidores', 'Discos duros'
        ]
    },
]);

onMounted(() => {
    // Traer el servcio de la lista de clientes
    const firstClient = clients.value[0]
    clientDetailStore.addClient(firstClient)
})

const activeClientId = ref(null);

function selectClient(clientId) {
    activeClientId.value = clientId;  // Activar el ID del cliente seleccionado
    const client = clients.value.find(c => c.id === clientId);
    clientDetailStore.addClient(client);
}
</script>

<style scoped>
.q-list {
    width: 80%;
}

.q-item {
    position: relative;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    background: var(--primary);
    margin-bottom: 25px;
}

.section-btn {
    position: absolute;
    bottom: 35px;
    right: -220px;
    transition: 0.5s;
    font-size: 2em;
}

.section-btn .q-btn {
    border-radius: 5px;
}

.q-list .q-item-section .section-btn .q-btn {
    font-weight: 500;
    opacity: 0.25;
}

.q-item:hover .section-btn {
    right: 50px;
}

.q-item:hover {
    background: var(--accent) !important;
    transform: scale(1.05);
}

.q-avatar {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
}

.q-item:hover .q-avatar {
    background: var(--secondary) !important;
}

.q-list-hover:hover .q-item-hover {
    opacity: 0.2;
}

.q-list-hover:hover .q-item-hover:hover {
    background: var(--secondary);
    opacity: 1;
}

.q-item__label {
    display: flex;
    align-items: center;
}

.info-span {
    font-size: 18px;
    font-weight: bold;
    color: var(--letter);
}

.data-span {
    font-size: 18px;
    color: var(--letter);
}

.content-price {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--secondary);
    width: 18%;
    border-radius: 10px;
    padding: 12px;
    margin: 10px 0 0 6px;
}

.content-price .price-span {
    color: #000;
    font-size: 1.2em;
}

.pin-icon {
    position: absolute;
    margin: 20px;
    right: 0;
    top: 0;
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}

@media (max-width: 320px) {
    .data-client-list {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0px;
    }

    .q-item {
        display: flex;
        flex-direction: column;
    }

    .section-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }

    .section-info .q-item__label {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .section-info .q-item__label span {
        font-size: 15px;
        text-align: center;
        margin-top: 5px;
    }

    .content-price {
        width: 25%;
        margin: 8px;
    }

    .section-btn {
        bottom: 20px;
    }

    .q-item:hover .section-btn {
        right: 15px;
    }
}
</style>