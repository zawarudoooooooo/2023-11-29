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

    @media(max-width:992px){
        .title{
            margin-bottom: 0;
            padding-top: 0;
            .routerItem{
                width: 36vw;
                height: 6vh;
            }
        }

        nav{
            height: 7vh;

            .item{
                width: 70vw;

                .routerItem{
                width: 17vw;
                height: 3.5vh;
                }
            }
        }
    }

    @media(max-width:768px){
        .title{
            margin-bottom: 0;
            padding-top: 0;
            .routerItem{
                width: 40vw;
                height: 6vh;
            }
        }

        nav{
            height: 7vh;

            .item{
                width: 70vw;

                .routerItem{
                width: 19vw;
                height: 4vh;
                }
            }
        }

    }

    @media(max-width:576px){
        .title{
            margin-bottom: 0;
            padding-top: 0;
            height: 10vh;
            .routerItem{
                width: 40vw;
                height: 4vh;
                font-size: 20pt;
                border-radius: 5px;
            }
        }

        nav{
            height: 5vh;

            .item{
                width: 80vw;

                .routerItem{
                width: 22vw;
                height: 3vh;
                font-size: 13pt;
                border-radius: 5px;
                }
            }
        }

    }

    @media(max-width:414px){
        .title{
            margin-bottom: 0;
            padding-top: 0;
            height: 11vh;
            .routerItem{
                width: 40vw;
                height: 4.5vh;
                font-size: 17pt;
                border-radius: 5px;
            }
        }

        nav{
            height: 5vh;

            .item{
                width: 80vw;

                .routerItem{
                width: 22vw;
                height: 3.5vh;
                font-size: 11pt;
                border-radius: 5px;
                }
            }
        }

    }
</style>