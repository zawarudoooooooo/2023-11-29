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


//     width: 100vw;
//   height: 20vh;
//   outline: 2px dashed gray;
//   --c: #2196f3;
//   --w1: radial-gradient(100% 57% at top, #0000 100%, var(--c) 100.5%) no-repeat;
//   --w2: radial-gradient(100% 57% at bottom, var(--c) 100%, #0000 100.5%)
//     no-repeat;
//   background: var(--w1), var(--w2), var(--w1), var(--w2);
//   background-position-x: -200%, -100%, 0%, 100%;
//   background-position-y: 100%;
//   background-size: 50.5% 100%;
//   animation: m 1s infinite linear;
// }

// @keyframes m {
//   0%  {background-position-x:-200%, -100%, 0%, 100%}
//   100%{background-position-x:  0%, 100%, 200%, 300%}
}
</style>
