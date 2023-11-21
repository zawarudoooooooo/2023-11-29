<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
// import Main from './views/Main.vue'
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
  .header{
    width: 100vw;
    height: 28vh;
    background-color: #279EFF;
  }
  .content{
    margin-top: 20px;
    background-color: lightblue;
  }

</style>
