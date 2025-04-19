<script lang="ts" setup>
import LawyerItem from '@/Lawyer/LawyerItem.vue';
import VideoBanner from '@/components/VideoBanner.vue';
import CheckListItem from './CheckListItem.vue';
import ColabartionForm from './ColabartionForm.vue';
import { items, checkItems } from './Data'; // Importar los datos desde el archivo data.js


</script>
<template>    
    <VideoBanner video="/src/assets/video/header_abogados.mp4" height="h-100">
        <template #content>
            <p class="text-3xl sm:text-5xl font-bold mx-auto text-center text-white w-3/4 sm:w-1/2">
                Mediación Fácil para Profesionales Jurídicos
            </p>
            <p class="text-center text-white p-4 sm:text-xl sm:w-1/2 mx-auto">
                Expanda su oferta de servicios y mejore la experiencia de sus clientes con nuestra plataforma de mediación digital.
            </p>
            <div class="w-full flex flex-col sm:flex-row justify-center gap-3">
                <button class="px-3 py-2 h-12 w-2/3 sm:w-fit hover:shadow-xl bg-background border-1 border-background text-white rounded-lg text-sm mx-auto sm:mx-0">
                    Solicitar información
                </button>
                <button class="px-3 py-2 h-12 w-2/3 sm:w-fit text-white border-white border-1 rounded-lg hover:shadow-xl mx-auto sm:mx-0">
                    Iniciar measdfdiación ahora
                </button>

            </div>
        </template>
    </VideoBanner>  
    <div class="w-full bg-white text-black">
        <div class="container mx-auto py-5 sm:py-10">
            <h1 class="text-4xl font-bold text-center my-15">Beneficios para su Despacho</h1>
            <div class="grid sm:grid-cols-3 gap-10 justify-center items-center w-fit mx-auto">
                <LawyerItem v-for="(item, idx) in items"  :key="idx"
                    :title="item.title"
                    :description="item.description"
                    :icon-name="item.iconName" />               
                
            </div>
        </div>
        <div class="w-full bg-gray-50 text-black">
            <div class="container mx-auto py-5 sm:py-10">
                <h1 class="text-4xl font-bold text-center mb-10">Condiciones Especiales para Abogados</h1>
                <p class="text-center text-gray-500 p-4 sm:text- sm:w-2/3 mx-auto">
                    Ofrecemos ventajas exclusivas para profesionales jurídicos que confían en nuestra plataforma
                </p>
                <div class="w-fit min-w-200 mx-auto flex flex-col gap-7 border-1 bg-white text-black rounded-2xl shadow-md p-5 sm:p-10 mt-10 border-gray-100">
                    <CheckListItem v-for="(item, idx) in checkItems" :key="idx"
                        :title="item.title"
                        :description="item.description" />
                </div>
                    
                <div class="mx-auto w-fit my-15 ">
                    <button class="bg-background text-white rounded-lg p-3">Solicitar colaboracion</button>
                </div>
            </div>            
        </div>
        <div class="w-full bg-white text-black">
            <div class="container mx-auto py-5 sm:py-10">
                <h1 class="text-4xl font-bold text-center mb-10">Únete como Colaborador</h1>
                <p class="text-center text-gray-500 p-4 sm:text-md sm:w-2/3 mx-auto">
                    Rellena el formulario y un asesor especializado se pondrá en contacto contigo para explicarte todos los detalles.
                </p>
                <ColabartionForm />            
            </div>
        </div>
    </div>

</template>