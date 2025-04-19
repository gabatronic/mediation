<script lang="ts" setup>
</script>
<template>
    <div class="w-full bg-white relative text-black py-10 border-t-2 border-gray-200">
        <div class="container mx-auto">
            <div class="grid sm:grid-cols-2">
                <div class="p-4 sm:p-0 order-last sm:order-first">                    
                    <img src="../assets/images/idverse_logo.png" alt="Logo Uanataca" class="w-44 mb-10" />
                    <div class="w-full text-gray-300">
                        © 2025 IDVERSE, S.L. Todos los derechos reservados.
                    </div>
                </div>
                <div class="grid sm:grid-cols-3 p-4 sm:p-0">
                    <div>
                        <h3 class="text-lg font-bold">Información Legal</h3>
                        <ul class="text-gray-400">
                            <li class="py-1"><RouterLink to="/mediacion">Terminos y condiciones</RouterLink></li>
                            <li class="py-1"><RouterLink to="/mediacion">Politica y privacad</RouterLink></li>
                            <li class="py-1"><RouterLink to="/mediacion">Aviso legal</RouterLink></li>                            
                        </ul>
                    </div>                    
                    <div>
                        <h3 class="text-lg font-bold">Contacto</h3>
                        <ul class="text-gray-400">
                            <li class="py-1">C/ Hospital, 30</li>
                            <li class="py-1">03203 Elche, Alicante</li>
                            <li class="py-1">Teléfono: <a href="tel:+34962283727">96 228 37 27</a></li>                            
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold">Enlaces Rapidos</h3>
                        <ul class="text-gray-400">
                            <li class="py-1"><RouterLink to="/">Inicio</RouterLink></li>
                            <li class="py-1"><RouterLink to="/#process">Proceso</RouterLink></li>
                            <li class="py-1"><RouterLink to="/pricing">Precios</RouterLink></li>                            
                            <li class="py-1"><RouterLink to="/">Iniciar mediacion</RouterLink></li>
                            <li class="py-1"><RouterLink to="/lawyers">Para abogados</RouterLink></li>                            
                        </ul>
                    </div>
                </div>
            </div>        
        </div>        
    </div>
</template>