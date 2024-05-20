<template>
    <q-list color="white" class="q-list-hover">
        <q-item v-for="client in clients" :key="client.id" class="q-my-sm q-item-hover" clickable v-ripple>
            <q-item-section avatar>
                <q-avatar color="warning" text-color="white">
                    <img :src="client.avatar ? client.avatar : defaultAvatar" alt="Client Avatar">
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>
                    <q-icon class="q-px-sm" size="sm" name="person" />
                    <span class="info-span">Nombre: </span>
                    <span class="q-ml-xs data-span">{{ client.name }}</span>
                </q-item-label>
                <q-item-label>
                    <q-icon class="q-px-sm" size="sm" name="commute" />
                    <span class="info-span"> Tipo de Transporte: </span>
                    <span class="q-ml-xs data-span">{{ client.transport_type }}</span>
                </q-item-label>
                <q-item-label class="content-price q-ml-md">
                    <span class="price-span data-span">{{ client.price }}</span>
                </q-item-label>
            </q-item-section>
            <q-item-section class="section-btn" side>
                <q-btn push color="secondary" label="Detalles" @click="selectClient(client.id)"></q-btn>
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
        name: 'Lorenzo',
        price: '$850',
        transport_type: 'Van',
        avatar: null,
        placeOrigin: 'Madrid, España',
        placeDestination: 'Barcelona, España',
        detailsArticles: [
            'Cajas de libros', 'Bicicleta', 'Lámpara de pie', 'Mesa de noche',
            'Jarrones', 'Cuadros', 'Espejo', 'Sillas', 'Televisor', 'Consola de juegos',
            'Equipaje de mano', 'Mochila de camping', 'Ropa de cama', 'Toallas', 'Zapatos',
            'Equipo de esquí', 'Bolsas de supermercado', 'Artículos de decoración', 'Herramientas', 'Juguetes'
        ]
    },
    {
        id: 2,
        name: 'Mirta',
        price: '$1300',
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
        name: 'Felipe',
        price: '$1100',
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
        name: 'Carla',
        price: '$1600',
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
        name: 'Sergio',
        price: '$1800',
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
        name: 'Ana',
        price: '$1400',
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

function selectClient(clientId) {
    const client = clients.value.find((client) => client.id === clientId)
    clientDetailStore.addClient(client)
}

</script>
<style scoped>
.q-item {
    position: relative;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin: 25px 0;
    cursor: pointer;
    transition: 0.3s ease;
    background: #fff;
}

.section-btn {
    position: absolute;
    bottom: 35px;
    right: -200px;
    transition: 0.5s;
    font-size: 2em;
}

.q-list .q-item-section .section-btn .q-btn {
    font-weight: 500;
    opacity: 0.25;
}

.q-item:hover {
    box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
}

.q-item:hover .section-btn {
    right: 50px;
}

.q-avatar {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
}

.q-list-hover:hover .q-item-hover {
    opacity: 0.2;
}

.q-list-hover:hover .q-item-hover:hover {
    opacity: 1;
}

.q-item__label {
    display: flex;
    align-items: center;
}

.info-span {
    font-size: 18px;
    font-weight: bold;
    color: #000;
}

.data-span {
    font-size: 18px;
    color: #000;
}

.content-price {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #19232d;
    width: 15%;
    border-radius: 10px;
    padding: 10px;
}

.content-price .price-span {
    color: white;
    font-size: 1.2em;
}

@keyframes scrollIndicator {
    0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }

    50% {
        transform: translateX(-50%) translateY(10px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
}
</style>