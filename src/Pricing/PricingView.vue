<script lang="ts" setup>
import { prices } from './Data'
import PricingItem from './PricingItem.vue'

</script>
<template>
    <div class="w-full bg-white text-black p-5">
        <div class="container mx-auto">
        <h3 class="text-4xl font-bold text-center mb-10">Precios</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center w-fit mx-auto sm:p-5">
            <PricingItem
                v-for="(price, index) in prices"
                :key="index"
                :title="price.title"
                :subtitle="price.subtitle"
                :description="price.description"
                :price="price.price"
                :features="price.features"
            />  
            </div>
        </div>
    </div>
    
</template>