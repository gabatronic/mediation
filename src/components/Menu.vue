<script lang="ts" setup>
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
import BurgerMenuIcon from './Icons/BurgerMenuIcon.vue'
const isOpen = ref<boolean>(false)
const toggleMenu = () => {
    isOpen.value = !isOpen.value    
}
</script>
<template>
<div class="w-full relative sm:flex sm:flex-row sm:container sm:mx-auto">
    <div class="text-white p-2 flex flex-row sm:gap-2 py-3 relative mx-auto relative">
        <a href="/"><img src="../assets//images/logo.png" alt="Logo" class="w-30 left-0 sm:-translate-x-50 " /></a>
        <BurgerMenuIcon class="stroke-white w-10 absolute sm:hidden right-10" @click="toggleMenu"/>
    </div>
    <div class="bg-background flex flex-col sm:flex-row gap-4 transition-all overflow-y-hidden sm:gap-1 absolute sm:relative right-1 top-2 h-0 sm:h-fit sm:items-end" 
       :class="{'h-0 sm:h-fit': !isOpen, 'h-fit left-0 translate-y-12 py-4': isOpen}">
        <MenuItem to="/" icon="Inicio" label="Inicio" class="mt-2" />
        <MenuItem to="/#process" icon="info" label="Proceso" class="mt-2" />
        <MenuItem to="/#warranty" icon="info" label="Garantias" class="mt-2" />
        <MenuItem to="/pricing" icon="info" label="Precios" class="mt-2" />        
        <MenuItem to="/lawyers" icon="envelope" label="Para abogados" class="mt-2"/>
        <MenuItem to="/faq" icon="info" label="FAQ" class="mt-2"/>
        <MenuItem to="/client-area" icon="info" label="Acceder" class="mt-2"/>
        <MenuItem to="/form" icon="info" label="Iniciar Mediacion" class="rounded-md mt-1 bg-gray-800 py-1 px-2" />
    </div>    
</div>    
</template>