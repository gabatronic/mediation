<script lang="ts" setup>
import VideoBanner from '@/components/VideoBanner.vue';
import IconCard from '../components/IconCard.vue';
import BalanceIcon from '../components/Icons/BalanceIcon.vue';
import ShieldAltIcon from '../components/Icons/ShieldAltIcon.vue';
import FileCheckIcon from '../components/Icons/FileCheckIcon.vue';
</script>
<template>
    <div>
    <VideoBanner />
  </div>

  <!-- Main content -->
  <div class="container mx-auto py-5 sm:py-10">
    <h1 class="text-4xl font-bold text-center my-15">Simple, rápido y legalmente válido</h1>
    <div class="grid  sm:flex sm:flex-row gap-10 justify-center items-center">
      <IconCard 
        icon-name="UserCheck" 
        title="Rellena la Información Básica" 
        description="Introduce tus datos y la información de la otra parte"/>
      <IconCard 
        icon-name="Envelope" 
        title="Notificacion automatica" 
        description="Enviamos comuniaciones certificadas a todas las partes"/>
      <IconCard 
        icon-name="ShieldAlt" 
        title="Proteccion Legal" 
        description="Tu intento de mediacion queda legamente registrado y protegido"/>
      <IconCard 
        icon-name="FileAlt" 
        title="Recibe la documentacion" 
        description="Obten la documentacion certificada de tu intento de mediacion"/>

    </div>
  </div>
  <!-- End Main content -->
  <!-- Section 2 -->
  <div class="w-full py-2 bg-white text-black">
    <div class="container mx-auto justify-center items-center gap-10 flex flex-col">
      <h2 class="text-2xl sm:text-4xl font-bold p-10">Servicio certificado y avalado</h2>
      <p class="mb-5 w-2/3 mx-auto text-xl">Mediación Fácil utiliza servicios de Uanataca, Prestador de Servicios de Confianza Cualificados, acreditado ante el Ministerio para la Transformación Digital y de la Función Pública , garantizando la máxima seguridad y validez legal en todo el proceso de mediación.</p>
      <div class="flex flex-row gap-10 justify-center items-center  mx-auto items-center px-20">
        <div class="flex flex-col gap-3 justify-bottom">
          <img src="./assets/images/logo_uanataca.png" alt="Logo Uanataca" class="mx-auto w-20" />
          <p class="text-gray-400 align-baseline">Prestador Cualificado
          </p>
        </div>
        <div><div class="flex flex-col gap-3 justify-bottom"></div>
          <img src="./assets/images/servicio_eidas.png" alt="Logo Uanataca" class="mx-auto w-40" />        
          <p class="text-gray-400 align-baseline">Regulación europea</p>
        </div>
      </div>
      <div class="text-3xl font-bold p-10 mx-auto max-w-6xl text-center">
        <p>
          Certificado que acredita el intento de resolución de un conflicto mediante un Medio Adecuado de Solución de Controversias (MASC)
        </p>
      </div>

      <div class="py-8 mx-auto grid sm:grid-cols-3 gap-10 w-3/4 ">
        <div class="flex flex-col gap-8 items-start">
          <BalanceIcon class="w-16 h-16 stroke-black" />
          <p class="font-bold text-xl">Ley 1/2025</p>
          <p class="text-gray-400 text-left">
            Cumplimos con los requisitos establecidos en los artículos que exigen la mediación previa como requisito de procedibilidad en determinados procedimientos civiles y mercantiles.
          </p>
        </div>
        <div class="flex flex-col gap-8 items-start">
          <ShieldAltIcon class="w-16 h-16 stroke-black" />
          <p class="font-bold text-xl">Comunicaciones Certificadas</p>
          <p class="text-gray-400 text-left">
            Todas las notificaciones se realizan mediante comunicaciones electrónicas certificadas, garantizando la fecha y hora exacta del envío, recepción y acceso al contenido.
          </p>
        </div>
        <div class="flex flex-col gap-8 items-start">
          <FileCheckIcon class="w-16 h-16 stroke-black" />
          <p class="font-bold text-xl">Certificado emitido por un Mediador Profesional</p>
          <p class="text-gray-400 text-left">
            El mediador realiza los trámites necesarios para garantizar el intento de mediación, generando las evidencias necesarias.
          </p>
        </div>
      </div>

    </div>  
  </div>
</template>