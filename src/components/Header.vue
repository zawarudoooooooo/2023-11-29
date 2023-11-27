<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter,["location","locationInfo","weatherInfo"])
    }
}
</script>

<template>
    <div class="title">
        <RouterLink to="/" class="routerItem">水庫當日狀況</RouterLink>
    </div>

    <nav>
        <div class="item">
            <RouterLink to="/VisualNorth" class="routerItem">水位視覺化</RouterLink>
            <RouterLink to="/Information" class="routerItem">即時資訊</RouterLink>
            <RouterLink to="/Caculate" class="routerItem">蓄水統計表</RouterLink>

        </div>

    </nav>
    <!-- <span>{{ location }}</span>
    <span>{{ locationInfo }}</span> -->
    <!-- <span>{{ weatherInfo }}</span>  -->
</template>

<style lang="scss" scoped>
    .title{
        width: 100vw;
        height: 13vh;
        padding-top: 3vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2vmin;
        cursor: pointer;

        .routerItem{
            width: 20vw;
            height: 10vh;
            font-size: 36pt;
            text-decoration-line: none;
            background-color: white;
            color: #0766AD;
            border-radius: 10px;
            box-shadow: 4px 5px 1px black;
            font-weight: bold;
            border-style: none;
            text-align: center;
            cursor: pointer;

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

    nav{
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .item{
            width: 40vw;
            margin: auto;
            display: flex;
            justify-content: space-around;

            .routerItem{
            width: 10vw;
            height: 6vh;
            text-align: center;
            font-size: 20pt;
            text-decoration-line: none;
            background-color: white;
            color: #0766AD;
            border-radius: 10px;
            box-shadow: 4px 5px 1px black;
            font-weight: bold;
            border-style: none;

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
                // }

                //     // background: radial-gradient(100% 57% at top ,#0000 100%,#2196F3 100.5%);
                //     // background-size: 50% 100%;
                //     background-position: 0 100%;
                // text-shadow: 1px 1px black, -1px -1px black, -1px -1px black, -1px -1px black;
                //     color: white;

                //     --c: #2196f3;
                //     --w1: radial-gradient(100% 57% at top, #0000 100%, var(--c) 100.5%) no-repeat;
                //     --w2: radial-gradient(100% 57% at bottom, var(--c) 100%, #0000 100.5%) no-repeat;
                //     background: var(--w1), var(--w2), var(--w1), var(--w2);
                //     background-position-x: -200%, -100%, 0%, 100%;
                //     background-position-y: 100%;
                //     background-size: 50.5% 100%;
                //     animation: m 1s infinite linear;
                // }

                // @keyframes m {
                //     0%  {background-position-x:-200%, -100%, 0%, 100%}
                //     100%{background-position-x:  0%, 100%, 200%, 300%}
                // }

                // @keyframes m {
                //     0%  {background-position-x:-200%, -100%, 0%, 100%}
                //     100%{background-position-x:  0%, 100%, 200%, 300%}
                // }

                    // background-repeat: no-repeat;


//         a.router-link-exact-active{
//             background-color: #fff;
//             color: #0766AD;
//             border-radius: 10px;
//             box-shadow: 4px 5px 1px black;
//             font-weight: bold;
        
        
</style>