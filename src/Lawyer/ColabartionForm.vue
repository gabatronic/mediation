<script lang="ts" setup>
import { ref } from 'vue'
</script>
<template>
    <form class="flex flex-col gap-1 p-7 rounded-lg sm:w-190 shadow-sm mx-auto mt-10 border-1 border-gray-100">
        <h2 class="text-2xl font-bold mb-8">Solicita información para colaborar</h2>
        <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre completo</label>
            <input type="text" id="name" 
            placeholder="Nombre completo"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-200" required />
        </div>
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Correo eletronico</label>
            <input type="email" id="email" 
            placeholder="Correo electronico"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-200" required />
        </div>
        <div class="mb-4">
            <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Telefono movil:</label>
            <input 
            placeholder="Telefono movil"
            type="phone" id="phone" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-200" required />
        </div>
        <div class="mb-4 border-1 border-gray-200 px-5 rounded py-3">                        
            <input type="checkbox" 
               id="antibot"                
               required />
            <label for="antibot" class="text-gray-700 text-sm font-bold mb-2"> No soy un robot</label>
        </div>
        <button type="submit" class="bg-background hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>

    </form>
</template>