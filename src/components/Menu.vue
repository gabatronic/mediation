<script lang="ts" setup>
import MenuItem from './MenuItem.vue'

</script>
<template>
<div class="w-full h-fit">
    <nav class=" text-white p-2 flex flex-row gap-2 w-full justify-end py-3 relative container mx-auto">
        <img src="../assets//images/logo.png" alt="Logo" class="absolute left-4 top-3 h-10" />
        <MenuItem to="/" icon="Inicio" label="Inicio" class="mt-2" />
        <MenuItem to="/process" icon="info" label="Proceso" class="mt-2" />
        <MenuItem to="/warranties" icon="info" label="Garantias" class="mt-2" />
        <MenuItem to="/pricing" icon="info" label="Precios" class="mt-2" />        
        <MenuItem to="/lawyers" icon="envelope" label="Para abogados" class="mt-2"/>
        <MenuItem to="/faq" icon="info" label="FAQ" class="mt-2"/>
        <MenuItem to="/client-area" icon="info" label="Acceder" class="mt-2"/>
        <MenuItem to="/form" icon="info" label="Iniciar Mediacion" class="bg-gray-800 pr-3 pl-2 py-2 rounded-md" />
    </nav>    
</div>    
</template>