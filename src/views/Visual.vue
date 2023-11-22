<script>
export default{
    mounted(){   
    // 北部
const IFTNO = document.getElementById("IFTNO")
const BRFNO = document.getElementById("BRFNO")
const ESNO = document.getElementById("ESNO")
const ECNO = document.getElementById("ECNO")
const POSNO = document.getElementById("POSNO")

const IFTNT = document.getElementById("IFTNT")
const BRFNT = document.getElementById("BRFNT")
const ESNT = document.getElementById("ESNT")
const ECNT = document.getElementById("ECNT")
const POSNT = document.getElementById("POSNT")

const IFTNTH = document.getElementById("IFTNTH")
const BRFNTH = document.getElementById("BRFNTH")
const ESNTH = document.getElementById("ESNTH")
const ECNTH = document.getElementById("ECNTH")
const POSNTH = document.getElementById("POSNTH")

const IFTNF = document.getElementById("IFTNF")
const BRFNF = document.getElementById("BRFNF")
const ESNF = document.getElementById("ESNF")
const ECNF = document.getElementById("ECNF")
const POSNF = document.getElementById("POSNF")

const IFTNFI = document.getElementById("IFTNFI")
const BRFNFI = document.getElementById("BRFNFI")
const ESNFI = document.getElementById("ESNFI")
const ECNFI = document.getElementById("ECNFI")
const POSNFI = document.getElementById("POSNFI")

const IFTNS = document.getElementById("IFTNS")
const BRFNS = document.getElementById("BRFNS")
const ESNS = document.getElementById("ESNS")
const ECNS = document.getElementById("ECNS")
const POSNS = document.getElementById("POSNS")

// 中部

const IFTMO = document.getElementById("IFTMO")
const BRFMO = document.getElementById("BRFMO")
const ESMO = document.getElementById("ESMO")
const ECMO = document.getElementById("ECMO")
const POSMO = document.getElementById("POSMO")

const IFTMT = document.getElementById("IFTMT")
const BRFMT = document.getElementById("BRFMT")
const ESMT = document.getElementById("ESMT")
const ECMT = document.getElementById("ECMT")
const POSMT = document.getElementById("POSMT")

const IFTMTH = document.getElementById("IFTMTH")
const BRFMTH = document.getElementById("BRFMTH")
const ESMTH = document.getElementById("ESMTH")
const ECMTH = document.getElementById("ECMTH")
const POSMTH = document.getElementById("POSMTH")

const IFTMF = document.getElementById("IFTMF")
const BRFMF = document.getElementById("BRFMF")
const ESMF = document.getElementById("ESMF")
const ECMF = document.getElementById("ECMF")
const POSMF = document.getElementById("POSMF")

const IFTMFI = document.getElementById("IFTMFI")
const BRFMFI = document.getElementById("BRFMFI")
const ESMFI = document.getElementById("ESMFI")
const ECMFI = document.getElementById("ECMFI")
const POSMFI = document.getElementById("POSMFI")

const IFTMS = document.getElementById("IFTMS")
const BRFMS = document.getElementById("BRFMS")
const ESMS = document.getElementById("ESMS")
const ECMS = document.getElementById("ECMS")
const POSMS = document.getElementById("POSMS")

const IFTMSE = document.getElementById("IFTMSE")
const BRFMSE = document.getElementById("BRFMSE")
const ESMSE = document.getElementById("ESMSE")
const ECMSE = document.getElementById("ECMSE")
const POSMSE = document.getElementById("POSMSE")

const IFTMN = document.getElementById("IFTMN")
const BRFMN = document.getElementById("BRFMN")
const ESMN = document.getElementById("ESMN")
const ECMN = document.getElementById("ECMN")
const POSMN = document.getElementById("POSMN")

// 南部

const IFTSO = document.getElementById("IFTSO")
const BRFSO = document.getElementById("BRFSO")
const ESSO = document.getElementById("ESSO")
const ECSO = document.getElementById("ECSO")
const POSSO = document.getElementById("POSSO")

const IFTST = document.getElementById("IFTST")
const BRFST = document.getElementById("BRFST")
const ESST = document.getElementById("ESST")
const ECST = document.getElementById("ECST")
const POSST = document.getElementById("POSST")

const IFTSTH = document.getElementById("IFTSTH")
const BRFSTH = document.getElementById("BRFSTH")
const ESSTH = document.getElementById("ESSTH")
const ECSTH = document.getElementById("ECSTH")
const POSSTH = document.getElementById("POSSTH")

const IFTSF = document.getElementById("IFTSF")
const BRFSF = document.getElementById("BRFSF")
const ESSF = document.getElementById("ESSF")
const ECSF = document.getElementById("ECSF")
const POSSF = document.getElementById("POSSF")

const IFTSFI = document.getElementById("IFTSFI")
const BRFSFI = document.getElementById("BRFSFI")
const ESSFI = document.getElementById("ESSFI")
const ECSFI = document.getElementById("ECSFI")
const POSSFI = document.getElementById("POSSFI")

const IFTSS = document.getElementById("IFTSS")
const BRFSS = document.getElementById("BRFSS")
const ESSS = document.getElementById("ESSS")
const ECSS = document.getElementById("ECSS")
const POSSS = document.getElementById("POSSS")

const IFTSSE = document.getElementById("IFTSSE")
const BRFSSE = document.getElementById("BRFSSE")
const ESSSE = document.getElementById("ESSSE")
const ECSSE = document.getElementById("ECSSE")
const POSSSE = document.getElementById("POSSSE")

// 北部

const N1 = document.getElementById("10201")
const N2 = document.getElementById("10203")
const N3 = document.getElementById("10204")
const N4 = document.getElementById("10205")
const N5 = document.getElementById("10401")
const N6 = document.getElementById("10405")

// 中部

const M1 = document.getElementById("10501")
const M2 = document.getElementById("10503")
const M3 = document.getElementById("10601")
const M4 = document.getElementById("20101")
const M5 = document.getElementById("20201")
const M6 = document.getElementById("20501")
const M7 = document.getElementById("20502")
const M9 = document.getElementById("20509")

// 南部

const S1 = document.getElementById("30302")
const S2 = document.getElementById("30401")
const S3 = document.getElementById("30502")
const S4 = document.getElementById("30501")
const S5 = document.getElementById("30503")
const S6 = document.getElementById("30802")
const S7 = document.getElementById("31201")
let arr = []
let arr2 = []
let arr3 = []
            fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
            .then(response=>response.json())
            .then(data=>{
                arr = data
                arr.responseData.forEach(item => {

                    //北部

                    if(N1.getAttribute("value") == item.ReservoirName){
                        IFTNO.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFNO.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECNO.innerText = "有效庫容量: " + item.Capacity + " 萬立方公尺"
                    }
                    if(N2.getAttribute("value") == item.ReservoirName){
                        IFTNT.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFNT.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECNT.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(N3.getAttribute("value") == item.ReservoirName){
                        IFTNTH.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFNTH.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECNTH.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(N4.getAttribute("value") == item.ReservoirName){
                        IFTNF.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFNF.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECNF.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(N5.getAttribute("value") == item.ReservoirName){
                        IFTNFI.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFNFI.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECNFI.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(N6.getAttribute("value") == item.ReservoirName){
                        IFTNS.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFNS.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECNS.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }

                    //中部

                    if(M1.getAttribute("value") == item.ReservoirName){
                        IFTMO.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMO.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMO.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M2.getAttribute("value") == item.ReservoirName){
                        IFTMT.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMT.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMT.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M3.getAttribute("value") == item.ReservoirName){
                        IFTMTH.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMTH.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMTH.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M4.getAttribute("value") == item.ReservoirName){
                        IFTMF.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMF.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMF.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M5.getAttribute("value") == item.ReservoirName){
                        IFTMFI.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMFI.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMFI.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M6.getAttribute("value") == item.ReservoirName){
                        IFTMS.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMS.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMS.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M7.getAttribute("value") == item.ReservoirName){
                        IFTMSE.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMSE.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMSE.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(M9.getAttribute("value") == item.ReservoirName){
                        IFTMN.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFMN.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECMN.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }

                    //南部

                    if(S1.getAttribute("value") == item.ReservoirName){
                        IFTSO.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFSO.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECSO.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(S2.getAttribute("value") == item.ReservoirName){
                        IFTST.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFST.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECST.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(S3.getAttribute("value") == item.ReservoirName){
                        IFTSTH.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFSTH.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECSTH.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(S4.getAttribute("value") == item.ReservoirName){
                        IFTSF.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFSF.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECSF.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(S5.getAttribute("value") == item.ReservoirName){
                        IFTSFI.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFSFI.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECSFI.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(S6.getAttribute("value") == item.ReservoirName){
                        IFTSS.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFSS.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECSS.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                    if(S7.getAttribute("value") == item.ReservoirName){
                        IFTSSE.innerText = "本日總進水量 : " + item.Inflow + " mm"
                        BRFSSE.innerText = "昨日累積雨量 : " + item.BasinRainfall + " mm"
                        ECSSE.innerText = "有效庫容量 : " + item.Capacity + " 萬立方公尺"
                    }
                });
})
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
  .then((response) => response.json())
  .then((data) => {
    arr2 = data
    console.log(N1.getAttribute("id"));
    arr2.forEach(item => {
        
        //北部

       if(N1.getAttribute("id") == item.StationNo){
        ESNO.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNO.innerText = item.PercentageOfStorage + " %"
       }
       if(N2.getAttribute("id") == item.StationNo){
        ESNT.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNT.innerText = item.PercentageOfStorage + " %"
       }
       if(N3.getAttribute("id") == item.StationNo){
        ESNTH.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNTH.innerText = item.PercentageOfStorage + " %"
       }
       if(N4.getAttribute("id") == item.StationNo){
        ESNF.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNF.innerText = item.PercentageOfStorage + " %"
       }
       if(N5.getAttribute("id") == item.StationNo){
        ESNFI.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNFI.innerText = item.PercentageOfStorage + " %"
       }
       if(N6.getAttribute("id") == item.StationNo){
        ESNS.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNS.innerText = item.PercentageOfStorage + " %"
       }

       //中部

       if(M1.getAttribute("id") == item.StationNo){
        ESMO.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMO.innerText = item.PercentageOfStorage + " %"
       }
       if(M2.getAttribute("id") == item.StationNo){
        ESMT.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMT.innerText = item.PercentageOfStorage + " %"
       }
       if(M3.getAttribute("id") == item.StationNo){
        ESMTH.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMTH.innerText = item.PercentageOfStorage + " %"
       }
       if(M4.getAttribute("id") == item.StationNo){
        ESMF.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMF.innerText = item.PercentageOfStorage + " %"
       }
       if(M5.getAttribute("id") == item.StationNo){
        ESMFI.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMFI.innerText = item.PercentageOfStorage + " %"
       }
       if(M6.getAttribute("id") == item.StationNo){
        ESMS.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMS.innerText = item.PercentageOfStorage + " %"
       }
       if(M7.getAttribute("id") == item.StationNo){
        ESMSE.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMSE.innerText = item.PercentageOfStorage + " %"
       }
       if(M9.getAttribute("id") == item.StationNo){
        ESMN.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMN.innerText = item.PercentageOfStorage + " %"
       }
       
       //南部

       if(S1.getAttribute("id") == item.StationNo){
        ESSO.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSO.innerText = item.PercentageOfStorage + " %"
       }
       if(S2.getAttribute("id") == item.StationNo){
        ESST.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSST.innerText = item.PercentageOfStorage + " %"
       }
       if(S3.getAttribute("id") == item.StationNo){
        ESSTH.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSTH.innerText = item.PercentageOfStorage + " %"
       }
       if(S4.getAttribute("id") == item.StationNo){
        ESSF.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSF.innerText = item.PercentageOfStorage + " %"
       }
       if(S5.getAttribute("id") == item.StationNo){
        ESSFI.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSFI.innerText = item.PercentageOfStorage + " %"
       }
       if(S6.getAttribute("id") == item.StationNo){
        ESSS.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSS.innerText = item.PercentageOfStorage + " %"
       }
       if(S7.getAttribute("id") == item.StationNo){
        ESSSE.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSSE.innerText = item.PercentageOfStorage + " %"
       }
    });
  });
    }
}

</script>

<template>
<!-- 選擇區域 -->
    <div class="selectArea">
        <select class="form-control" onchange="location.href = this.options[this.selectedIndex].value">
            <option selected="" value="#search">請選擇地區</option>
            <option value="#north">北區</option>
            <option value="#middle">中區</option>
            <option value="#south">南區</option>
        </select>
    </div>


    <div class="content">
        

<!-- 北區 -->
    <label for="">北區</label>
        <div class="north" id="north">
            <!-- 石門水庫 -->
            <div class="northOne">
                <div class="nameOne">
                    <h2 id="10201" value="石門水庫">石門水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNO"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNO">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNO">5</p>
                    </div>
                </div>
            </div>

            <!-- 西勢水庫 -->
            <div class="northTwo">
                <div class="nameTwo">
                    <h2 id="10203" value="西勢水庫">西勢水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNT">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNT">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNT">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNT">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNT"></p>
                    </div>
                </div>
            </div>

            <!-- 新山水庫 -->
            <div class="northThree">
                <div class="nameThree">
                    <h2 id="10204" value="新山水庫">新山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNTH">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNTH">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNTH">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNTH">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNTH"></p>
                    </div>
                </div>
            </div>

            <!-- 翡翠水庫 -->
            <div class="northFour">
                <div class="nameFour">
                    <h2 id="10205" value="翡翠水庫">翡翠水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNF">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNF">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNF">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNF">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNF"></p>
                    </div>
                </div>
            </div>

            <!-- 寶山水庫 -->
                <div class="northFive">
                <div class="nameFive">
                    <h2 id="10401" value="寶山水庫">寶山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNFI">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNFI">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNFI">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNFI">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNFI"></p>
                    </div>
                </div>
            </div>

            <!-- 寶山第二水庫 -->
            <div class="northSix">
                <div class="nameSix">
                    <h2 id="10405" value="寶山第二水庫">寶山第二水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNS">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNS">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNS">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNS">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNS"></p>
                    </div>
                </div>
            </div>
        </div>
<!-- 中區 -->
    <label for="">中區</label>
        <div class="middle" id="middle">
            <!-- 永和山水庫 -->
            <div class="middleOne">
                <div class="nameOneM">
                    <h2 id="10501" value="永和山水庫">永和山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMO">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMO">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMO"></p>
                    </div>
                </div>
                
            </div>

            <!-- 大埔水庫 -->
            <div class="middleTwo">
                <div class="nameTwoM">
                    <h2 id="10503" value="大埔水庫">大埔水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMT">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMT">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMT">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMT">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMT"></p>
                    </div>
                </div> 
            </div>

            <!-- 明德水庫 -->
            <div class="middleThree">
                <div class="nameThreeM">
                    <h2 id="10601" value="明德水庫">明德水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMTH">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMTH">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMTH">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMTH">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMTH"></p>
                    </div>
                </div> 
            </div>

            <!-- 鯉魚潭水庫 -->
            <div class="middleFour">
                <div class="nameFourM">
                    <h2 id="20101" value="鯉魚潭水庫">鯉魚潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMF">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMF">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMF">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMF">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMF"></p>
                    </div>
                </div> 
            </div>

            <!-- 德基水庫 -->
            <div class="middleFive">
                <div class="nameFiveM">
                    <h2 id="20201" value="德基水庫">德基水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMFI">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMFI">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMFI">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMFI">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMFI"></p>
                    </div>
                </div> 
            </div>

            <!-- 霧社水庫 -->
            <div class="middleSix">
                <div class="nameSixM">
                    <h2 id="20501" value="霧社水庫">霧社水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMS">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMS">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMS">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMS">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMS"></p>
                    </div>
                </div> 
            </div>

            <!-- 日月潭水庫 -->
            <div class="middleSeven">
                <div class="nameSevenM">
                    <h2 id="20502" value="日月潭水庫">日月潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMSE">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMSE">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMSE">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMSE">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMSE"></p>
                    </div>
                </div> 
            </div>

            <!-- 湖山水庫 -->
            <div class="middleNine">
                <div class="nameNineM">
                    <h2 id="20509" value="湖山水庫">湖山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMN">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMN">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMN">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMN">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMN"></p>
                    </div>
                </div> 
            </div>
        </div>
<!-- 南區-->
    <label for="">南區</label>
        <div class="south" id="south">
        <!-- 蘭潭水庫 -->
        <div class="southOne">
                <div class="nameOneS">
                    <h2 id="30302" value="蘭潭水庫">蘭潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSO">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSO">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSO"></p>
                    </div>
                </div>
            </div>

        <!-- 白河水庫 -->
        <div class="southTwo">
                <div class="nameTwoS">
                    <h2 id="30401" value="白河水庫">白河水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTST">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFST">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESST">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECST">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSST"></p>
                    </div>
                </div>
            </div>

        <!-- 曾文水庫 -->
        <div class="southThree">
                <div class="nameThreeS">
                    <h2 id="30502" value="曾文水庫">曾文水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSTH">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSTH">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSTH">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSTH">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSTH"></p>
                    </div>
                </div>
            </div>

        <!-- 烏山頭水庫 -->
        <div class="southFour">
                <div class="nameFourS">
                    <h2 id="30501" value="烏山頭水庫">烏山頭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSF">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSF">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSF">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSF">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSF"></p>
                    </div>
                </div>
            </div>

        <!-- 南化水庫 -->
        <div class="southFive">
                <div class="nameFiveS">
                    <h2 id="30503" value="南化水庫">南化水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSFI">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSFI">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSFI">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSFI">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSFI"></p>
                    </div>
                </div>
            </div>

        <!-- 阿公店水庫 -->
        <div class="southSix">
                <div class="nameSixS">
                    <h2 id="30802" value="阿公店水庫">阿公店水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSS">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSS">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSS">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSS">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSS"></p>
                    </div>
                </div>
            </div>

        <!-- 牡丹水庫 -->
        <div class="southSeven">
                <div class="nameSevenS">
                    <h2 id="31201" value="牡丹水庫">牡丹水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSSE">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSSE">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSSE">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSSE">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSSE"></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
//選擇區域
    .selectArea{
        text-align: center;
        margin-top: 5vmin;

        select{
            width: 40vmin;
            height: 5vmin;
            border-radius: 5px;
            border-style: none;
            text-align: center;
        }
    }
//北中南水庫
    .content{
    width: 100vw;
    height: 90vh;
    

    label{
            font-size: 28pt;
            margin-left: 16vmin;
            color: #146C94;
        }
        
//北部區域
    .north{
        width: 90vw;
        height: 104vh;
        margin: auto;
        // border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;
        padding-left: 10vmin;
        margin-bottom: 3vmin;

        .quan {
        position: relative;
        width: 17vmin;
        height: 17vmin;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 3px gray;
        margin-left: 12vmin;
        }

        .shui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(23, 106, 201);
        border-radius: 50%;
        overflow: hidden;

        p{
            color: black;
            font-size: 10pt;
            z-index: 1;
        }
        }   

        .shui::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 40%;
        background-color: aliceblue;
        animation: shi 5s linear infinite;
        }

        @keyframes shi {
        0% {
        transform: translate(-50%, -65%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -65%) rotate(360deg);
        }
        }

        .shui::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 42%;
        background-color: rgb(240, 228, 228, 0.2);
        animation: xu 7s linear infinite;
        }

        @keyframes xu {
        0% {
        transform: translate(-50%, -60%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -60%) rotate(360deg);
        }
        }

//石門水庫
        .northOne{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            P{
                margin-left: 2vmin;
            }

            .nameOne{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
            
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//西勢水庫
        .northTwo{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }
            .nameTwo{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//新山水庫
        .northThree{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameThree{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//翡翠水庫
        .northFour{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameFour{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//寶山水庫
        .northFive{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameFive{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//寶山第二水庫
        .northSix{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameSix{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
    }

//中部區域
    .middle{
        width: 90vw;
        height: 105vh;
        margin: auto;
        // border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;
        padding-left: 10vmin;
        margin-bottom: 3vmin;

        .quan {
        position: relative;
        width: 18vmin;
        height: 18vmin;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 3px gray;
        margin-left: 12vmin;
        }

        .shui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(23, 106, 201);
        border-radius: 50%;
        overflow: hidden;
        }   

        .shui::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 40%;
        background-color: white;
        animation: shi 5s linear infinite;
        }

        @keyframes shi {
        0% {
        transform: translate(-50%, -65%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -65%) rotate(360deg);
        }
        }

        .shui::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 42%;
        background-color: rgb(240, 228, 228, 0.2);
        animation: xu 7s linear infinite;
        }

        @keyframes xu {
        0% {
        transform: translate(-50%, -60%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -60%) rotate(360deg);
        }
        }
        }

//永和山水庫
        .middleOne{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameOneM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;            
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//大埔水庫
        .middleTwo{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameTwoM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//明德水庫
        .middleThree{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameThreeM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//鯉魚潭水庫
        .middleFour{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameFourM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//德基水庫
        .middleFive{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameFiveM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//霧社水庫
        .middleSix{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameSixM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//日月潭水庫
        .middleSeven{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameSevenM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//湖山水庫
        .middleNine{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameNineM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//南部區域
    .south{
        width: 90vw;
        height: 105vh;
        margin: auto;
        // border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;
        padding-left: 10vmin;

        
        .quan {
        position: relative;
        width: 18vmin;
        height: 18vmin;
        border-radius: 50%;
        border: 3px solid aliceblue;
        box-shadow: 0 0 0 3px gray;
        margin-left: 12vmin;
        }

        .shui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(23, 106, 201);
        border-radius: 50%;
        overflow: hidden;
        }   

        .shui::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 40%;
        background-color: white;
        animation: shi 5s linear infinite;
        }

        @keyframes shi {
        0% {
        transform: translate(-50%, -65%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -65%) rotate(360deg);
        }
        }

        .shui::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 42%;
        background-color: rgb(240, 228, 228, 0.2);
        animation: xu 7s linear infinite;
        }

        @keyframes xu {
        0% {
        transform: translate(-50%, -60%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -60%) rotate(360deg);
        }
        }

//蘭潭水庫
        .southOne{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameOneS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;            
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//白河水庫
        .southTwo{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameTwoS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//曾文水庫
        .southThree{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameThreeS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//烏山頭水庫
        .southFour{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameFourS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//南化水庫
        .southFive{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameFiveS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//阿公店水庫
        .southSix{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameSixS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//牡丹水庫
        .southSeven{
            width: 20vw;
            height: 50vh;
            background-color: white;
            border-radius: 5px;

            p{
                margin-left: 2vmin;
            }

            .nameSevenS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: #19A7CE;
                color: white;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
    }
    }




</style>
