<script>
    export default{
        data(){
            return{
            //北部
            arrN:[1,2,3,4,5,6],
            //中部
            arrM:[1,2,3,4,5,6,7,8,9],
            //南部
            arrS:[1,2,3,4,5,6,7],
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
<!-- 北區 -->
    <div class="content">

        <div class="north">
            <label for="">北區</label>
            <!-- <div  v-for="item in arrN" class="northItem">
            </div> -->
            <!-- 石門水庫 -->
            <div class="northOne">
                <div class="nameOne">
                    <h2>石門水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNO"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNO"></p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNO"></p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNO"></p>
            </div>
        </div>
<!-- 中區 -->
        <div class="middle">
            <div  v-for="item in arrM" class="middleItem">
            </div>
        </div>
<!-- 南區-->
        <div class="south">
            <div  v-for="item in arrS" class="southItem">
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
//北部區域
    .north{
        width: 90vw;
        height: 60vh;
        display: grid;
        margin: auto;
        border: 1px solid black;

        label{
            font-size: 28pt;
            margin: 0;
        }

        .northOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            border: 1px solid black;

            .nameOne{
                width: 20vw;
                height: 10vh;
                background-color: lightslategray;
                color: aliceblue;
                

                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 2vmin;
                }

            }

        }
    }

}




</style>
