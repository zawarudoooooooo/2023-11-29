<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
}
</script>

<template>
    <div class="title">
        <RouterLink to="/" class="routerItem">水庫當日狀況</RouterLink>
    </div>
    <nav>
        <RouterLink to="/Visual" class="routerItem">水位視覺化</RouterLink>
        <RouterLink to="/Information" class="routerItem">即時資訊</RouterLink>
        <RouterLink to="/Caculate" class="routerItem">蓄水統計表</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
        .title{
            width: 100vw;
            height: 13vh;
            text-align: center;
            margin-top: 5vmin;
            .routerItem{
                text-decoration-line: none;
                text-decoration-color:none ;
                margin: 0px 10px;
                font-size: 36pt;
                color: aliceblue;
            }
        }

        nav{
            width: 100vw;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            .routerItem{
                text-decoration-line: none;
                text-decoration-color:none ;
                margin: 0px 10px;
                font-size: 20pt;
                color: aliceblue;
            }
        }
</style>