<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
// import Main from './views/Main.vue'
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <RouterView />
</template>

<style lang="scss" scoped>
  .header{
    width: 100vw;
    height: 23vh;
  }

</style>
