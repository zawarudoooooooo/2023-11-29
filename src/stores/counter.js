import { defineStore } from "pinia";

export default defineStore('counter',{
    state(){
        return{
            location:1,
            basicInfo:{},
            immediateInfo:{},
            OperatingInfo:{},
            StatisticsInfo:{},
            weatherInfo:{}
        }
    },
    getters:{
        locationInfo(){
            return `現在位置: ${this.location}`
        }
    },
    actions:{
        getBasic(){
            fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station")
            .then((response) => response.json())
            .then((data) => {
                this.basicInfo=data
            // console.log(this.basicInfo[0]);
        });
        },
        getImmediate(){
            fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
            .then((response) => response.json())
            .then((data) => {
                this.immediateInfo=data
                // console.log(this.immediateInfo);
        });
        },
        getOperating(){
            fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
                .then((response) => response.json())
                .then((data) => {
                    this.OperatingInfo=data
                    // console.log(this.OperatingInfo.responseData[0]);
                });
        },
        getStatistics(){
            fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily")
                .then((response) => response.json())
                .then((data) => {
                    this.StatisticsInfo=data
                    // console.log(this.StatisticsInfo[0].StationNo);
                });
        },
        getweather(){
            fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-33D89F4E-6F24-4977-A02D-2792BD4124FE")
                .then(response=>response.json())
                .then(data=>{
                    this.weatherInfo=data
                    console.log(this.weatherInfo);
                })
        }
    }
})