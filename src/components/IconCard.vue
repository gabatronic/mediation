<script lang="ts" setup>
import { ref, defineProps } from 'vue'


const cardElement = ref(null)

const handleClick = (theCard) => {
  const router = useRouter()
  const store = useStore()

  // Example of using Vuex store
  const user = computed(() => store.state.user)

  // Example of using Vue Router
  router.push({ name: 'SomeRoute' })

  console.log('User:', user.value)
}
</script>
<template>
  <div class="card" @click="handleClick" ref="cardElement">    
    <slot name="cardContent">
        
    </slot>
  </div>
</template>
<style scoped>
@reference "tailwindcss";
.card {
  @apply relative p-6 rounded-lg bg-[#222222] border border-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-shadow;
  width: 15em;
  height: 15em;
  cursor: pointer;
  transition: transform 0.2s;  
}
</style>