<script setup lang="ts">
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
  }
})
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
    <div class="flex flex-col gap-8 items-start sm:w-70 bg-gray-50 p-4 rounded-lg">        
        <div v-if="iconName">      
            <component :is="iconComponent" :class="`w-12 h-12 stroke-black`" />
        </div>    
        <p class="font-bold text-xl">{{  props.title }}</p>
        <p class="text-gray-400 text-left">
            {{ props.description }}
        </p>
    </div>
</template>