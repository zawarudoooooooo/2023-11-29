<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
// import Main from './views/Main.vue'
</script>

<template>
  <div class="header">
    <Header />
  </div>

  <!-- <div class="quan">
    <div class="shui"></div>
  </div> -->
  
  <RouterView />
</template>

<style lang="scss" scoped>
  .header{
    width: 100vw;
    height: 23vh;
  }
//會動的水
  // .quan {
  //     position: relative;
  //     width: 180px;
  //     height: 180px;
  //     border-radius: 50%;
  //     border: 3px solid rgb(246, 247, 248);
  //     box-shadow: 0 0 0 3px rgb(41, 134, 196);
  //   }

  //   .shui {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background-color: lightskyblue;
  //     border-radius: 50%;
  //     overflow: hidden;
  //   }

  //   .shui::after {
  //     content: '';
  //     position: absolute;
  //     top: 0;
  //     left: 50%;
  //     width: 150%;
  //     height: 150%;
  //     border-radius: 40%;
  //     background-color: lightblue;
  //     animation: shi 5s linear infinite;
  //   }

  //   @keyframes shi {
  //     0% {
  //       transform: translate(-50%, -65%) rotate(0deg);
  //     }

  //     100% {
  //       transform: translate(-50%, -65%) rotate(360deg);
  //     }
  //   }

  //   .shui::before {
  //     content: '';
  //     position: absolute;
  //     top: 0;
  //     left: 50%;
  //     width: 150%;
  //     height: 150%;
  //     border-radius: 42%;
  //     background-color: rgb(240, 228, 228, 0.2);
  //     animation: xu 7s linear infinite;
  //   }

  //   @keyframes xu {
  //     0% {
  //       transform: translate(-50%, -60%) rotate(0deg);
  //     }

  //     100% {
  //       transform: translate(-50%, -60%) rotate(360deg);
  //     }
  //   }


</style>
