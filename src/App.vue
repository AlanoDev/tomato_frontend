<script setup>
import Home from '@/Layout/Home.vue'
import NavBar from '@/Layout/NavBar.vue'
</script>

<template>
  <div class="layout">
    <NavBar/>
    <Home />
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
}
</style>
