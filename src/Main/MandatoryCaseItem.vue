<script lang="ts" setup>
import { defineAsyncComponent, defineProps, computed } from 'vue';
const props = defineProps({
  scope: {
    type: String,
    default: ''
  },  
  iconName: {
    type: String,
    default: ''
  },
  scopeCases: {
    type: Array<string>,
    default: []
  },
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
<div class="sm:w-80 rounded-lg overflow-hidden shadow border-gray-200">
    <div class="w-full bg-background/90 h-25 test-white flex flex-row gap-2  p-4 items-center">
        <div v-if="iconName">      
            <component :is="iconComponent" :class="`w-6 h-6 stroke-white`" />
        </div>  
        <span class="text-xl font-bold text-white mb-2">{{ scope }}</span>
    </div>
    <div class="bg-white p-4 text-black">
        
        <ul class="flex flex-col list-disc pl-5 gap-3">
            <li v-for="(caseItem, index) in scopeCases" :key="index" class="text-green-400">
                <span class="text-black">{{ caseItem }}</span>
            </li>
        </ul>
    </div>
</div>
</template>