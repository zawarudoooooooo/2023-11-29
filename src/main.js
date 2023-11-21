import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// // 北部
// const IFTNO = document.getElementById("IFTNO")
// const BRFNO = document.getElementById("BRFNO")
// const ESNO = document.getElementById("ESNO")
// const ECNO = document.getElementById("ECNO")

// const IFTNT = document.getElementById("IFTNO")
// const BRFNT = document.getElementById("BRFNO")
// const ESNT = document.getElementById("ESNO")
// const ECNT = document.getElementById("ECNO")

// const IFTNTH = document.getElementById("IFTNO")
// const BRFNTH = document.getElementById("BRFNO")
// const ESNTH = document.getElementById("ESNO")
// const ECNTH = document.getElementById("ECNO")

// const IFTNF = document.getElementById("IFTNO")
// const BRFNF = document.getElementById("BRFNO")
// const ESNF = document.getElementById("ESNO")
// const ECNF = document.getElementById("ECNO")

// const IFTNFI = document.getElementById("IFTNO")
// const BRFNFI = document.getElementById("BRFNO")
// const ESNFI = document.getElementById("ESNO")
// const ECNFI = document.getElementById("ECNO")

// const IFTNS = document.getElementById("IFTNO")
// const BRFNS = document.getElementById("BRFNO")
// const ESNS = document.getElementById("ESNO")
// const ECNS = document.getElementById("ECNO")

// // 中部

// const IFTMO = document.getElementById("IFTNO")
// const BRFMO = document.getElementById("BRFNO")
// const ESMO = document.getElementById("ESNO")
// const ECMO = document.getElementById("ECNO")

// const IFTMT = document.getElementById("IFTMT")
// const BRFMT = document.getElementById("BRFMT")
// const ESMT = document.getElementById("ESMT")
// const ECMT = document.getElementById("ECMT")

// const IFTMTH = document.getElementById("IFTMTH")
// const BRFMTH = document.getElementById("BRFMTH")
// const ESMTH = document.getElementById("ESMTH")
// const ECMTH = document.getElementById("ECMTH")

// const IFTMF = document.getElementById("IFTMF")
// const BRFMF = document.getElementById("BRFMF")
// const ESMF = document.getElementById("ESMF")
// const ECMF = document.getElementById("ECMF")

// const IFTMFI = document.getElementById("IFTMFI")
// const BRFMFI = document.getElementById("BRFMFI")
// const ESMFI = document.getElementById("ESMFI")
// const ECMFI = document.getElementById("ECMFI")

// const IFTMS = document.getElementById("IFTMS")
// const BRFMS = document.getElementById("BRFMS")
// const ESMS = document.getElementById("ESMS")
// const ECMS = document.getElementById("ECMS")

// const IFTMSE = document.getElementById("IFTMSE")
// const BRFMSE = document.getElementById("BRFMSE")
// const ESMSE = document.getElementById("ESMSE")
// const ECMSE = document.getElementById("ECMSE")

// const IFTME = document.getElementById("IFTME")
// const BRFME = document.getElementById("BRFME")
// const ESME = document.getElementById("ESME")
// const ECME = document.getElementById("ECME")

// const IFTMN = document.getElementById("IFTMN")
// const BRFMN = document.getElementById("BRFMN")
// const ESMN = document.getElementById("ESMN")
// const ECMN = document.getElementById("ECMN")

// // 南部

// const IFTSO = document.getElementById("IFTSO")
// const BRFSO = document.getElementById("BRFSO")
// const ESSO = document.getElementById("ESSO")
// const ECSO = document.getElementById("ECSO")

// const IFTST = document.getElementById("IFTST")
// const BRFST = document.getElementById("BRFST")
// const ESST = document.getElementById("ESST")
// const ECST = document.getElementById("ECST")

// const IFTSTH = document.getElementById("IFTSTH")
// const BRFSTH = document.getElementById("BRFSTH")
// const ESSTH = document.getElementById("ESSTH")
// const ECSTH = document.getElementById("ECSTH")

// const IFTSF = document.getElementById("IFTSF")
// const BRFSF = document.getElementById("BRFSF")
// const ESSF = document.getElementById("ESSF")
// const ECSF = document.getElementById("ECSF")

// const IFTSFI = document.getElementById("IFTSFI")
// const BRFSFI = document.getElementById("BRFSFI")
// const ESSFI = document.getElementById("ESSFI")
// const ECSFI = document.getElementById("ECSFI")

// const IFTSS = document.getElementById("IFTSS")
// const BRFSS = document.getElementById("BRFSS")
// const ESSS = document.getElementById("ESSS")
// const ECSS = document.getElementById("ECSS")

// const IFTSSE = document.getElementById("IFTSSE")
// const BRFSSE = document.getElementById("BRFSSE")
// const ESSSE = document.getElementById("ESSSE")
// const ECSSE = document.getElementById("ECSSE")

// // 北部

// const N1 = document.getElementById("10201")
// const N2 = document.getElementById("10203")
// const N3 = document.getElementById("10204")
// const N4 = document.getElementById("10205")
// const N5 = document.getElementById("10401")
// const N6 = document.getElementById("10405")

// // 中部

// const M1 = document.getElementById("10501")
// const M2 = document.getElementById("10503")
// const M3 = document.getElementById("10601")
// const M4 = document.getElementById("20101")
// const M5 = document.getElementById("20201")
// const M6 = document.getElementById("20501")
// const M7 = document.getElementById("20502")
// const M8 = document.getElementById("20504")
// const M9 = document.getElementById("20509")

// // 南部

// const S1 = document.getElementById("30302")
// const S2 = document.getElementById("30401")
// const S3 = document.getElementById("30502")
// const S4 = document.getElementById("30501")
// const S5 = document.getElementById("30503")
// const S6 = document.getElementById("30802")
// const S7 = document.getElementById("31201")

// 水庫基本資料
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station")
.then(response=>response.json())
.then(data=>{
    console.log(data)
})

//水庫即時資料
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
.then(response=>response.json())
.then(data=>{
    console.log(data)
})

//水庫每日營運狀況
fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
.then(response=>response.json())
.then(data=>{
    console.log(data)
})


// // 水庫統計資料
// fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily")
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)


// })
