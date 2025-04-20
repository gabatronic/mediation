<script setup lang="ts">
import { defineProps } from 'vue'
import CircleCheckIcon from '@/components/Icons/CircleCheckIcon.vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    type: Array as () => string[],
    required: true
  },
  cardWidth: {
    type: String,
    default: 'w-80'
  },
  selected: {
    type: Boolean,
    default: false
  },
  selectedClass: {
    type: String,
    default: 'border-blue-500'
  }
})
</script>
<template>
    <div class="border-1  rounded-lg p-4  bg-white hover:shadow-xl transition-shadow duration-300 
         mx-auto min-h-170 relative" :class="props.selected ? `${props.cardWidth} ${props.selectedClass}` : `${props.cardWidth} border-gray-300`">
        <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
        <h4 class="mb-2 text-gray-600">{{ subtitle }}</h4>
        <p class="text-2xl font-bold mb-1">{{ price }} € <span class="text-sm text-gray-400">+ IVA </span></p>
        
        <p class="text-gray-600 mb-4 text-sm">{{ description }}</p>
        
        <ul class="flex flex-col mb-4 gap-3">
            <li v-for="(feature, index) in features" :key="index" 
            class="items-center ml-7 relative ">
                <CircleCheckIcon class="stroke-green-500 w-6 inline absolute -translate-x-7" /> 
                <p class=" text-sm inline">{{ feature }}</p>
            </li>
        </ul>
        
    </div>
   
</template>