<script lang="ts" setup>
import { ref, defineProps, computed, defineAsyncComponent } from 'vue'

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
  },
  iconColor: {
    type: String,
    default: 'stroke-green-500'
  }
})

// Dynamically import icons based on the provided icon name
const iconComponent = computed(() => {
  if (!props.iconName) return null;
  
  try {
    return defineAsyncComponent(() => 
      import(`./Icons/${props.iconName}Icon.vue`).catch(err => {
        console.error(`Failed to load icon: ${props.iconName}Icon.vue`, err);
        return null;
      })
    );
  } catch (error) {
    console.error(`Error loading icon: ${props.iconName}Icon.vue`, error);
    return null;
  }
});

const cardElement = ref(null)
</script>
<template>
  <div class="card" ref="cardElement">
    <!-- Render the icon if provided -->
    <div v-if="iconName" class="flex justify-center mb-4">      
      <component :is="iconComponent" :class="`w-16 h-16 ${iconColor}`" />
    </div>    
    <h2 class="text-2xl font-bold text-white mb-2">{{ title }}</h2>
    <p class="text text-gray-400">{{ description }}</p>
    <slot name="cardContent">        
    </slot>
  </div>
</template>
<style scoped>
@reference "tailwindcss";
.card {  
  @apply relative p-6 rounded-lg bg-[#222222] border border-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-shadow flex flex-col items-center justify-between text-center;
  width: 20em;
  height: 20em;
  cursor: pointer;
  transition: transform 0.2s;  
}
</style>