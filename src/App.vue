<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import HomeFooter from './components/HomeFooter.vue'
import MainView from './views/MainView.vue';
</script>

<template>
  
  <header class="w-full">
    <Menu />
  </header>
  <MainView />
  <HomeFooter />
  
</template>