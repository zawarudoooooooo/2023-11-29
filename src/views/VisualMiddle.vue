<script>
export default{
    mounted(){

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

// 中部
const M1 = document.getElementById("10501")
const M2 = document.getElementById("10503")
const M3 = document.getElementById("10601")
const M4 = document.getElementById("20101")
const M5 = document.getElementById("20201")
const M6 = document.getElementById("20501")
const M7 = document.getElementById("20502")
const M9 = document.getElementById("20509")

let arr = []
let arr2 = []

fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
            .then(response=>response.json())
            .then(data=>{
                arr = data
                arr.responseData.forEach(item => {
                    setInterval(function () {
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
    },100);
            })
})

fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
  .then((response) => response.json())
  .then((data) => {
    arr2 = data
    arr2.forEach(item => {
        setInterval(function () {

       //中部
       if(M1.getAttribute("id") == item.StationNo){
        ESMO.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMO.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M2.getAttribute("id") == item.StationNo){
        ESMT.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMT.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M3.getAttribute("id") == item.StationNo){
        ESMTH.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMTH.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M4.getAttribute("id") == item.StationNo){
        ESMF.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMF.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M5.getAttribute("id") == item.StationNo){
        ESMFI.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMFI.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M6.getAttribute("id") == item.StationNo){
        ESMS.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMS.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M7.getAttribute("id") == item.StationNo){
        ESMSE.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMSE.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(M9.getAttribute("id") == item.StationNo){
        ESMN.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSMN.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
    });
    },100)
  });
    },
    methods:{
        goNorthPage(){
            this.$router.push('VisualNorth')
        },
        goMiddlePage(){
            this.$router.push('/VisualMiddle')
        },
        goSouthPage(){
            this.$router.push('/VisualSouth')
        }
    }
}
</script>

<template>
    <!-- 選擇區域 -->
    <div class="selectArea">
        <div class="select">
            <button type="button" @click="goNorthPage()">北區</button>
            <button type="button" @click="goMiddlePage()">中區</button>
            <button type="button" @click="goSouthPage()">南區</button>
        </div>
    </div>

    <div class="content">
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
    </div>


</template>

<style lang="scss" scoped>
//選擇區域
.selectArea{
        width: 100vw;
        margin-top: 5vmin;
        opacity: 0.7;

            .select{
                width: 60vw;
                height: 13vh;
                display: flex;
                justify-content: space-around;
                margin: auto;
                button{
                    width: 30vmin;
                    height: 7vmin;
                    border-radius: 5px;
                    border-style: none;
                    text-align: center;
                    background-color: white;
                    box-shadow: 4px 5px 1px black;
                    font-weight: bold;
                    color: #0766AD;
                    font-size: 26pt;

                    &:hover{
                        background-color: #0766AD;
                        color: white;
                    }
                
                    &:active{
                        background-color: white;
                        color: #0766AD;
                    }
                }
            }
    }
//中區水庫
    .content{
    width: 100vw;
    height: 110vh;

    label{
            font-size: 28pt;
            margin-left: 16vmin;
            color: #146C94;
            border-left: 5px solid #146C94;
            line-height: 1.1em;
            padding-left: 2vmin;
        }

//中部區域
    .middle{
        width: 90vw;
        height: 110vh;
        margin: auto;
        //border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;
        padding-left: 10vmin;
        margin-bottom: 3vmin;
        margin-top: 3vmin;

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
        p{
            color: black;
            font-size: 20pt;
            position: absolute;
            top: 12%;
            left: 11%;
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
    }
</style>