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
    height: 31vh;
    background-color: #AFD3E2;
    opacity: 0.7;
  }

  @media(max-width:992px){
    .header{
      height: 23vh;
    }
  }

  @media(max-width:576px){
    .header{
      height: 19vh;
    }
  }

</style>
