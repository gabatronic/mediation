<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: true
  }
})
</script>
<template>
    <div>
        <RouterLink :to="to" class="flex items-center space-x-2">
        <i :class="`fas fa-${icon}`"></i>
        <span class="">{{ label }}</span>
        </RouterLink>    
    </div>
</template>