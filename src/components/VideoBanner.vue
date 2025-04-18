<script lang="ts" setup>
</script>
<template>
    <div class="w-full bg-black relative h-190">        
        <div class="absolute mx-auto w-full text-white bg-black/50 font-inter h-190 flex flex-col gap-10 z-10 top-0 sm:pt-20">
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
        </div>   
        <div class="inset-0 absolute top-0 left-0 w-full h-190 z-0">
            <video autoplay loop muted class="w-full h-full object-cover">
                <source src="../assets/video/header_mediacion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>     
    </div>
</template>