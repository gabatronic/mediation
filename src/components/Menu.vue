<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
import BurgerMenuIcon from './Icons/BurgerMenuIcon.vue'
</script>
<template>
<div class="w-full relative">
    <div class=" text-white p-2 flex flex-row sm:gap-2 w-full  py-3 relative container mx-auto">
        <img src="../assets//images/logo.png" alt="Logo" class=" left-4 top-3 h-10" />
        <BurgerMenuIcon class="stroke-white w-16 absolute right-0 " />
    </div>
    <div class="flex flex-col sm:flex-row gap-4  overflow-y-hidden sm:gap-1 absolute right-2 top-2">
            <MenuItem to="/" icon="Inicio" label="Inicio" class="mt-2" />
            <MenuItem to="/process" icon="info" label="Proceso" class="mt-2" />
            <MenuItem to="/warranties" icon="info" label="Garantias" class="mt-2" />
            <MenuItem to="/pricing" icon="info" label="Precios" class="mt-2" />        
            <MenuItem to="/lawyers" icon="envelope" label="Para abogados" class="mt-2"/>
            <MenuItem to="/faq" icon="info" label="FAQ" class="mt-2"/>
            <MenuItem to="/client-area" icon="info" label="Acceder" class="mt-2"/>
            <MenuItem to="/form" icon="info" label="Iniciar Mediacion" class="bg-gray-800 pr-3 pl-2 py-2 rounded-md" />
        </div>    
</div>    
</template>