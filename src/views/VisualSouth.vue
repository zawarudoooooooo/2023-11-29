<script>
export default{
    mounted(){   

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
            fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
            .then(response=>response.json())
            .then(data=>{
                arr = data
                arr.responseData.forEach(item => {

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
            })
})
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
  .then((response) => response.json())
  .then((data) => {
    arr2 = data
    arr2.forEach(item => {

       //南部
       if(S1.getAttribute("id") == item.StationNo){
        ESSO.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSO.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(S2.getAttribute("id") == item.StationNo){
        ESST.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSST.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(S3.getAttribute("id") == item.StationNo){
        ESSTH.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSTH.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(S4.getAttribute("id") == item.StationNo){
        ESSF.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSF.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(S5.getAttribute("id") == item.StationNo){
        ESSFI.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSFI.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(S6.getAttribute("id") == item.StationNo){
        ESSS.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSS.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
       if(S7.getAttribute("id") == item.StationNo){
        ESSSE.innerText = "有效蓄水量 : " + item.EffectiveStorage + " 萬立方公尺"
        POSSSE.innerText = (item.PercentageOfStorage).toFixed(1) + " %"
       }
    });
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

//南部區域
.south{
        width: 90vw;
        height: 110vh;
        margin: auto;
        //border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;
        padding-left: 10vmin;
        margin-top: 3vmin;

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

    @media(max-width:992px){
        .selectArea{
            height: 5vh;
            margin-top: 4vmin;
            .select{
                height: 7vh;
                button{
                    width: 14vmin;
                    height: 5vmin;
                    font-size: 23pt;
                }
            }
        }

        .content{
            height: 80vh;

            label{
                margin-left: 5vmin;
                font-size: 23pt;
            }

            .south{
            height: 75vh;
            padding-left: 2vmin;
                .quan{
                    width: 12vmin;
                    height: 12vmin;
                    margin-left: 3vmin;
                    margin-top: 3vmin;
                }
                .southOne{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameOneS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .southTwo{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameTwoS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .southThree{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameThreeS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .southFour{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameFourS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .southFive{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameFiveS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .southSix{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameSixS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }

                .southSeven{
                    width: 20vw;
                    height: 35vh;

                    p{
                        margin-left: 1vmin;
                        margin-bottom: 0;
                    }

                    .nameSevenS{
                        height: 4vh;
                        font-size: 12pt;
                    }
                }
            }
        }
    } 

    @media(max-width:768px){
        .selectArea{
            .select{
                button{
                    font-size: 18pt;
                }
            }
        }

        .content{
            height: 40vh;
            .south{
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

                .southOne{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameOneS{
                        font-size: 10pt;
                    }
                }

                .southTwo{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameTwoS{
                        font-size: 10pt;
                    }
                }

                .southThree{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameThreeS{
                        font-size: 10pt;
                    }
                }

                .southFour{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameFourS{
                        font-size: 10pt;
                    }
                }

                .southFive{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameFiveS{
                        font-size: 10pt;
                    }
                }

                .southSix{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameSixS{
                        font-size: 10pt;
                    }
                }

                .southSeven{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 9pt;
                    }
                    .nameSevenS{
                        font-size: 10pt;
                    }
                }
            }  

        }
    }

    @media(max-width:576px){
        .selectArea{
            .select{
                height: 5vh;
                button{
                    width: 16vmin;
                    height: 6vmin;
                    font-size: 13pt;
                }
            }
        }

        .content{
            label{
                font-size: 16pt;
            }

            .south{
                .quan{
                    width: 11vmin;
                    height: 11vmin;
                    margin-top: 1vmin;
                }

                .southOne{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameOneS{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }
                .southTwo{
                    height: 27vh;

                    p{
                        margin-bottom: 2vmin;
                        font-size: 8pt;
                    }
                    .nameTwoS{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .southThree{
                    height: 27vh;

                    p{
                        margin-top: 1vmin;
                        font-size: 8pt;
                    }
                    .nameThreeS{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .southFour{
                    height: 27vh;

                    p{
                        font-size: 8pt;
                        margin-bottom: 2vmin;
                    }
                    .nameFourS{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .southFive{
                    height: 27vh;

                    p{
                        font-size: 8pt;
                        margin-bottom: 2vmin;
                    }
                    .nameFiveS{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .southSix{
                    height: 27vh;

                    p{
                        font-size: 8pt;
                        margin-bottom: 2vmin;
                    }
                    .nameSixS{
                        height: 3.5vh;
                        font-size: 8pt;
                    }
                }

                .southSeven{
                    height: 27vh;

                    p{
                        font-size: 8pt;
                        margin-bottom: 2vmin;
                    }
                    .nameSevenS{
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

            .south{
                .southOne{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                    }
                    .nameOneS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .southTwo{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1.5vmin;
                    }
                    .nameTwoS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .southThree{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1vmin;
                    }
                    .nameThreeS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .southFour{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1.5vmin;
                    }
                    .nameFourS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .southFive{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1.5vmin;
                    }
                    .nameFiveS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .southSix{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1.5vmin;
                    }
                    .nameSixS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }

                .southSeven{
                    height: 33vh;
                    p{
                        font-size: 7pt;
                        margin-bottom: 1.5vmin;
                    }
                    .nameSevenS{
                        height: 3.5vh;
                        font-size: 7pt
                    }
                }
            }
        }
    }
</style>