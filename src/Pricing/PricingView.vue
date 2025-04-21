<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getPlans, Plan, PlanFeature } from './PlansService'
import PricingItem from './PricingItem.vue'

const prices = ref<Plan[]>()
onMounted(async () => {
    const response = await getPlans()
    prices.value = response
})
</script>
<template>
    <div class="w-full bg-white text-black p-5">
        <div class="container mx-auto">
            <h3 class="text-4xl font-bold text-center mb-10">Precios</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center w-fit mx-auto sm:p-5">
                <div v-for="(price, index) in prices"
                    :key="index" class="relative">
                    <PricingItem                        
                        :title="price.name"
                        :subtitle="price.subtitle"
                        :description="price.description"
                        :price="price.cost"
                        :features="price.features.map((feature: PlanFeature) => feature.description)"
                        cardWidth="w-80"
                    />  
                    <div class="w-40 absolute bottom-4 left-10">
                        <button class="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 px-20">
                            Contratar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>