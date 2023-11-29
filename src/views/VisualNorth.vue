<script>
import VisualSelect from '../components/VisualSelect.vue'
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

// 北部
const N1 = document.getElementById("10201")
const N2 = document.getElementById("10203")
const N3 = document.getElementById("10204")
const N4 = document.getElementById("10205")
const N5 = document.getElementById("10401")
const N6 = document.getElementById("10405")

let arr = []
let arr2 = []
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
            })
})
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(N1.getAttribute("id"));
    console.log(data[0].StationNo);
    arr2 = data
    arr2.forEach(item => {
        

        //北部 toFixed(N)取小點後第N位(會對N+1位作四捨五入)
       if(N1.getAttribute("id") == item.StationNo){
        ESNO.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNO.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(N2.getAttribute("id") == item.StationNo){
        ESNT.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNT.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(N3.getAttribute("id") == item.StationNo){
        ESNTH.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNTH.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(N4.getAttribute("id") == item.StationNo){
        ESNF.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNF.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(N5.getAttribute("id") == item.StationNo){
        ESNFI.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNFI.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(N6.getAttribute("id") == item.StationNo){
        ESNS.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSNS.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }

      
    });
  });
    },
    components:{
        VisualSelect
    }
}
</script>

<template>
<!-- 選擇區域 -->
    <div class="selectArea">
        <VisualSelect />
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
    </div>    
</template>

<style lang="scss" scoped>
//北區水庫
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
        
//北部區域
        .north{
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
        background-color: lightskyblue;
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
    }

    @media(max-width:992px){
        .content{
            height: 80vh;

            label{
                margin-left: 5vmin;
                font-size: 23pt;
            }

            .north{
            height: 75vh;
            padding-left: 2vmin;

            .quan{
                width: 12vmin;
                height: 12vmin;
                margin-left: 3vmin;
                margin-top: 2vmin;
            }

                .northOne{
                    width: 20vw;
                    height: 37vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameOne{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .northTwo{
                    width: 20vw;
                    height: 36vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameTwo{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .northThree{
                    width: 20vw;
                    height: 36vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameThree{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .northFour{
                    width: 20vw;
                    height: 36vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameFour{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .northFive{
                    width: 20vw;
                    height: 36vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameFive{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .northSix{
                    width: 20vw;
                    height: 36vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameSix{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }
            }
        }
    }

    @media(max-width:768px){
        .content{
            height: 40vh;
            .north{
                height: 35vh;
                .quan{
                    width: 9vmin;
                    height: 9vmin;
                    margin-left: 4vmin;
                    margin-top: 3vmin;
                }

                .shui{
                    p{
                        font-size: 13pt;
                    }
                }

                .northOne{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameOne{
                        font-size: 10pt;
                    }
                }

                .northTwo{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameTwo{
                        font-size: 10pt;
                    }
                }

                .northThree{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameThree{
                        font-size: 10pt;
                    }
                }

                .northFour{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameFour{
                        font-size: 10pt;
                    }
                }

                .northFive{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameFive{
                        font-size: 10pt;
                    }
                }

                .northSix{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameSix{
                        font-size: 10pt;
                    }
                }
            }
        }
    }

    @media(max-width:576px){
        .content{
            label{
                font-size: 16pt;
            }

            .north{
                .quan{
                    width: 11vmin;
                    height: 11vmin;
                    margin-top: 1vmin;
                }
                .northOne{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameOne{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .northTwo{
                    height: 27vh;

                    p{
                        font-size: 8pt;
                        margin-bottom: 2.5vmin;
                    }
                    .nameTwo{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }
                .northThree{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameThree{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .northFour{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameFour{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .northFive{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameFive{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .northSix{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameSix{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }
            }
        }
    }

    @media(max-width:414px){

        .content{
            label{
                font-size: 13pt;
            }

            .north{
                .northOne{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                    }
                    .nameOne{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .northTwo{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1vmin;
                    }
                    .nameTwo{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .northThree{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1vmin;
                    }
                    .nameThree{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .northFour{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1vmin;
                    }
                    .nameFour{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .northFive{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1vmin;
                    }
                    .nameFive{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .northSix{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1vmin;
                    }
                    .nameSix{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }
            }
        }
    }
</style>
