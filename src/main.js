import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

let obj1 = {};
let obj2 = {};

//水庫基本資料
// fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station")
//   .then((response) => response.json())
//   .then((data) => {
//     obj2=data
//     console.log(data);
//   });

// 水庫即時資料
// fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     obj1 = data;
//   });

//水庫每日營運狀況
// fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     obj2 = data;
//   });

//水庫統計資料
// fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     });
    
