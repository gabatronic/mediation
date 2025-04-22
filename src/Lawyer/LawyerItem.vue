<script setup lang="ts">
import { defineAsyncComponent, defineProps, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  iconName: {
    type: String,
    default: ''
  }
});
const iconComponent = computed(() => {
  if (!props.iconName) return null;
  
  try {
    return defineAsyncComponent(() => 
      import(`@/components/Icons/${props.iconName}Icon.vue`).catch(err => {
        console.error(`Failed to load icon: ${props.iconName}Icon.vue`, err);
        return null;
      })
    );
  } catch (error) {
    console.error(`Error loading icon: ${props.iconName}Icon.vue`, error);
    return null;
  }
});


</script>
<template>
    <div class="bg-gray-50 border-1 border-gray-100 p-5 rounded-lg hover:shadow-md transition-all max-w-80 h-80">        
        <div v-if="iconName">      
        <component :is="iconComponent" :class="`w-9 stroke-black p-1.5 bg-green-100 rounded-lg`" />
        </div>    
        <h2 class="text-xl font-bold mt-3">{{ title }}</h2>
        <p class="text-gray-500 mt-2">{{  description }}</p>
    </div>
</template>