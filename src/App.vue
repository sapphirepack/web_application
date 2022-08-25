<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <RouterView class="router"/>
</template>

<style scoped>
  .router {
    margin-top: 133px;
  }
</style>
