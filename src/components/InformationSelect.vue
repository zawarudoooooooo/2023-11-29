<script>
    export default{
        data(){
            return{
            }
        },
        methods:{
        goNorthPage(){
            this.$router.push('InformationNorth')
        },
        goMiddlePage(){
            this.$router.push('/InformationMiddle')
        },
        goSouthPage(){
            this.$router.push('/InformationSouth')
        }
        }
    } 
</script>

<template>
    <div class="selectArea">
        <div class="select">
            <button type="button" @click="goNorthPage()">北區</button>
            <button type="button" @click="goMiddlePage()">中區</button>
            <button type="button" @click="goSouthPage()">南區</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .selectArea{
        width: 100vw;
        margin-top: 5vmin;
        opacity: 0.7;

            .select{
                width: 60vw;
                height: 10vh;
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
    }

    @media(max-width:768px){
        .selectArea{
            .select{
                button{
                    font-size: 18pt;
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
    }
</style>