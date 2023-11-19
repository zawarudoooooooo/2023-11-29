<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>

<template>
<!-- 搜尋欄 -->
    <div class="search">
        <input type="text" placeholder="開始搜尋">
        <button type="button">搜尋</button>
    </div>
    <div class="content">

<!-- 北區 -->
    <label for="">北區</label>
        <div class="north">
            <!-- 石門水庫 -->
            <div class="northOne">
                <div class="nameOne">
                    <h2>石門水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNO">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNO">有效庫容量</p>
            </div>

            <!-- 西勢水庫 -->
            <div class="northTwo">
                <div class="nameTwo">
                    <h2>西勢水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNT"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNT"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNT"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNT"></p>
            </div>

            <!-- 新山水庫 -->
            <div class="northThree">
                <div class="nameThree">
                    <h2>新山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNTH"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNTH"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNTH"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNTH"></p>
            </div>

            <!-- 翡翠水庫 -->
            <div class="northFour">
                <div class="nameFour">
                    <h2>翡翠水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNF"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNF"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNF"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNF"></p>
            </div>

            <!-- 寶山水庫 -->
                <div class="northFive">
                <div class="nameFive">
                    <h2>寶山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNFI"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNFI"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNFI"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNFI"></p>
            </div>

            <!-- 寶山第二水庫 -->
            <div class="northSix">
                <div class="nameSix">
                    <h2>寶山第二水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNS"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNS"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNS"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNS"></p>
            </div>

        </div>
<!-- 中區 -->
    <label for="">中區</label>
        <div class="middle">
            <!-- 永和山水庫 -->
            <div class="middleOne">
                <div class="nameOneM">
                    <h2>永和山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMO"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMO"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMO"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMO"></p>
            </div>

            <!-- 大埔水庫 -->
            <div class="middleTwo">
                <div class="nameTwoM">
                    <h2>大埔水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMT"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMT"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMT"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMT"></p>
            </div>

            <!-- 明德水庫 -->
            <div class="middleThree">
                <div class="nameThreeM">
                    <h2>明德水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMTH"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMTH"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMTH"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMTH"></p>
            </div>

            <!-- 鯉魚潭水庫 -->
            <div class="middleFour">
                <div class="nameFourM">
                    <h2>鯉魚潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMF"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMF"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMF"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMF"></p>
            </div>

            <!-- 德基水庫 -->
            <div class="middleFive">
                <div class="nameFiveM">
                    <h2>德基水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMFI"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMFI"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMFI"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMFI"></p>
            </div>

            <!-- 霧社水庫 -->
            <div class="middleSix">
                <div class="nameSixM">
                    <h2>霧社水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMS"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMS"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMS"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMS"></p>
            </div>

            <!-- 日月潭水庫 -->
            <div class="middleSeven">
                <div class="nameSevenM">
                    <h2>日月潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMSE"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMSE"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMSE"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMSE"></p>
            </div>

            <!-- 頭社水庫 -->
            <div class="middleEight">
                <div class="nameEightM">
                    <h2>頭社水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTME"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFME"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESME"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECME"></p>
            </div>

            <!-- 湖山水庫 -->
            <div class="middleNine">
                <div class="nameNineM">
                    <h2>湖山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMN"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMN"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMN"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMN"></p>
            </div>
        </div>
<!-- 南區-->
    <label for="">南區</label>
        <div class="south">
        <!-- 蘭潭水庫 -->
        <div class="southOne">
                <div class="nameOneS">
                    <h2>蘭潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSO"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSO"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSO"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSO"></p>
            </div>

        <!-- 白河水庫 -->
        <div class="southTwo">
                <div class="nameTwoS">
                    <h2>白河水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTST"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFST"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESST"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECST"></p>
            </div>

        <!-- 曾文水庫 -->
        <div class="southThree">
                <div class="nameThreeS">
                    <h2>曾文水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSTH"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSTH"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSTH"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECTH"></p>
            </div>

        <!-- 烏山頭水庫 -->
        <div class="southFour">
                <div class="nameFourS">
                    <h2>烏山頭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSF"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSF"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSF"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSF"></p>
            </div>

        <!-- 南化水庫 -->
        <div class="southFive">
                <div class="nameFiveS">
                    <h2>南化水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSFI"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSFI"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSFI"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSFI"></p>
            </div>

        <!-- 阿公店水庫 -->
        <div class="southSix">
                <div class="nameSixS">
                    <h2>阿公店水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSS"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSS"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSS"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSS"></p>
            </div>

        <!-- 牡丹水庫 -->
        <div class="southSeven">
                <div class="nameSevenS">
                    <h2>牡丹水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSSE"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSSE"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSSE"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSSE"></p>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
//搜尋欄
    .search{
        text-align: center;
        margin-bottom: 8vmin;
        input{
            width: 40vmin;
            height: 5vmin;
            border-radius: 5px;
            border-style: none;
            padding-left: 2vmin;
        }

        button{
            width: 10vmin;
            height: 5vmin;
            margin-left: 3vmin;
            border-radius: 5px;
            color: gray;
            border-style: none;
            background-color: aliceblue;
            box-shadow: 3px 3px 3px gray;

            &:hover{
                background-color: gray;
                color: aliceblue;
            }
            &:active{
                background-color: aliceblue;
                color: gray;
                }
            }
    }
//北中南水庫
.content{
    width: 100vw;
    height: 100vh;

    label{
            font-size: 28pt;
            margin-left: 11vmin;
            color: aliceblue;
        }
        
//北部區域
    .north{
        width: 90vw;
        height: 104vh;
        margin: auto;
        border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;

//石門水庫
        .northOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameOne{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;            
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameTwo{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameThree{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameFour{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameFive{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameSix{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
        height: 157vh;
        margin: auto;
        border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;

//永和山水庫
        .middleOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameOneM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;            
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameTwoM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameThreeM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameFourM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameFiveM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameSixM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameSevenM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//頭社水庫
        .middleEight{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameEightM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameNineM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
    }

//南部區域
    .south{
        width: 90vw;
        height: 105vh;
        margin: auto;
        border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;

//蘭南水庫
        .southOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameOneS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;            
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameTwoS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameThreeS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameFourS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameFiveS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameSixS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
            background-color: aliceblue;
            border-radius: 5px;
            .nameSevenS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
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
