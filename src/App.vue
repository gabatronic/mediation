<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconCard from './components/IconCard.vue'
</script>

<template>
  <div class="container">
    <header>
      <h1 class="text-2xl font-bold">My Vue App</h1>
      <button class="button">Hola</button>
      <IconCard>
        <template #cardContent>
          <h2 class="text-xl">Card Title</h2>
          <p class="text-gray-500">This is a card description.</p>
        </template>
      </IconCard>
        
    </header>
  </div>
</template>