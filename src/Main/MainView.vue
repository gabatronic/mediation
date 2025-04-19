<script lang="ts" setup>
import VideoBanner from '@/components/VideoBanner.vue';
import IconCard from '../components/IconCard.vue';
import { cardItems, mandatoryCaseItems, serviceItems } from './Data';
import ServiceItem from './ServiceItem.vue';
import MandatoryCaseItem from './MandatoryCaseItem.vue';
import MediationForm from './Mediation/MediationForm.vue';
</script>
<template>
    <div>
    <VideoBanner video="/src/assets/video/header_mediacion.mp4">
      <template #content>
        <p class="text-3xl sm:text-7xl font-bold pt-20 mx-auto text-center text-white w-3/4 sm:w-1/2">
                Demuestra tu intento de mediación de forma rápida, fácil y 
                <span class="text-green-500 font-extrabold">100% legal</span>
            </p>
            <p class="text-center text-white p-4 sm:text-xl sm:w-1/2 mx-auto">
                Inicia tu proceso de mediación en minutos con nuestra plataforma certificada. Segura, eficiente y legalmente compatible con la Ley 1/2025.
            </p>
            <div class="w-full flex flex-row justify-center">
                <button class="button w-65 h-16 hover:shadow-xl">
                    Iniciar mediación ahora
                </button>
            </div>
      </template>
    </VideoBanner> 
  </div>

  <!-- Main content -->
  <div id="process" class="container mx-auto py-5 sm:py-10">
    <h1 class="text-4xl font-bold text-center my-15">Simple, rápido y legalmente válido</h1>
    <div class="grid  sm:flex sm:flex-row gap-10 justify-center items-center">
      <IconCard v-for="(item, idx) in cardItems" :key="idx"
        :title="item.title"
        :description="item.description"
        :icon-name="item.iconName" />
    </div>
  </div>
  <!-- End Main content -->
  <!-- Section 2 -->
  <div id="warranty" class="w-full py-2 bg-white text-black">
    <div class="container mx-auto justify-center items-center gap-10 flex flex-col">
      <h2 class="text-2xl sm:text-4xl font-bold p-10">Servicio certificado y avalado</h2>
      <p class="mb-5 w-2/3 mx-auto text-xl">Mediación Fácil utiliza servicios de Uanataca, Prestador de Servicios de Confianza Cualificados, acreditado ante el Ministerio para la Transformación Digital y de la Función Pública , garantizando la máxima seguridad y validez legal en todo el proceso de mediación.</p>
      <div class="flex flex-row gap-10 justify-center items-center  mx-auto items-center px-20">
        <div class="flex flex-col gap-3 justify-between items-center">
          <img src="../assets/images/logo_uanataca.png" alt="Logo Uanataca" class="mx-auto w-20" />
          <p class="text-gray-400 align-baseline">Prestador Cualificado
          </p>
        </div>
        <div><div class="flex flex-col gap-4 justify-between items-center "></div>
          <img src="../assets/images/servicio_eidas.png" alt="Logo Uanataca" class="mx-auto w-40" />        
          <p class="text-gray-400 align-baseline">Regulación europea</p>
        </div>
      </div>
      <div class="text-3xl font-bold p-10 mx-auto max-w-6xl text-center">
        <p>
          Certificado que acredita el intento de resolución de un conflicto mediante un Medio Adecuado de Solución de Controversias (MASC)
        </p>
      </div>

      <div class="py-8 px-2 mx-auto grid sm:grid-cols-3 gap-10 w-fit ">
        <ServiceItem v-for="(item, idx) in serviceItems" :key="idx"
          :title="item.title"
          :description="item.description"
          :icon-name="item.iconName" />
      </div>

    </div>  
  </div>

  <div class="w-full bg-gray-50 text-black pt-10">
    <div class="container mx-auto py-10 px-3 ">
      <h2 class="text-2xl sm:text-4xl font-bold text-center my-7">Casos de Obligado Intento de MASC</h2>
      <p class="text-center text-gray-600 my-10">Según la Ley 1/2025, estos son los ámbitos donde es obligatorio intentar un método alternativo de solución de controversias antes de acudir a los tribunales.</p>
      <div class="grid sm:grid-cols-3 gap-10 w-fit mx-auto">
        <MandatoryCaseItem v-for="(item, idx) in mandatoryCaseItems" :key="idx"
          :scope="item.scope"
          :icon-name="item.iconName"
          :scope-cases="item.scopeCase" />
      </div>
      <div class="text-center mt-10">
        <p class="text-gray-600 mb-4">Si tu caso se encuentra en alguna de estas categorías, inicia hoy mismo tu proceso de mediación para cumplir con el requisito legal.</p>
        <button class="bg-background transition-all text-white rounded-xl w-60 h-12 hover:shadow-xl">
          Iniciar Proceso de Mediación
        </button>
      </div>  
    </div>
  </div>
  <div class="w-full bg-white text-black py-10">    
      <MediationForm />    
    
  </div>
</template>