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
        <div class="middle">

        </div>
<!-- 南區-->
        <div class="south">

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
