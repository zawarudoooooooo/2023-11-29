<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
import { watch } from 'vue';
import CaculateSelect from '../components/CaculateSelect.vue';
export default{
  data(){
    return{
    }
  },
  methods:{
        ...mapActions(counter,["getBasic","getImmediate","getOperating","getStatistics"])
  },
  computed:{
        ...mapState(counter,["basicInfo","immediateInfo","OperatingInfo","StatisticsInfo"])
    },
  created(){
        this.getBasic();
        this.getImmediate();
        this.getOperating();
        this.getStatistics();
  },
  mounted(){
        // 基本資料
        watch(()=>this.basicInfo,()=>{
                // this.basicInfo.forEach(item=>{
                //         // console.log(item);
                // })
                const r1=document.querySelectorAll(".r1")
                const CECMO=document.getElementById("CECMO")
                const CECMT=document.getElementById("CECMT")
                const CECMTH=document.getElementById("CECMTH")
                const CECMF=document.getElementById("CECMF")
                const CECMFI=document.getElementById("CECMFI")
                const CECMS=document.getElementById("CECMS")
                const CECMSE=document.getElementById("CECMSE")
                const CECMN=document.getElementById("CECMN")

        r1.forEach(reservoir=>{
                if(reservoir.getAttribute("value")==this.basicInfo[19].StationName){
                        CECMO.innerText=this.basicInfo[19].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[20].StationName){
                        CECMT.innerText=this.basicInfo[20].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[21].StationName){
                        CECMTH.innerText=this.basicInfo[21].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[24].StationName){
                        CECMF.innerText=this.basicInfo[24].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[25].StationName){
                        CECMFI.innerText=this.basicInfo[25].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[33].StationName){
                        CECMS.innerText=this.basicInfo[33].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[34].StationName){
                        CECMSE.innerText=this.basicInfo[34].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[41].StationName){
                        CECMN.innerText=this.basicInfo[41].EffectiveCapacity
                }
                })
        })
        // 即時資料
        watch(()=>this.StatisticsInfo,()=>{
        //中 
        const m1=document.getElementById("10501")   
        const m2=document.getElementById("10503")   
        const m3=document.getElementById("10601")   
        const m4=document.getElementById("20101")   
        const m5=document.getElementById("20201")   
        const m6=document.getElementById("20501")   
        const m7=document.getElementById("20502")   
        const m8=document.getElementById("20509")   

        const CARFMO=document.getElementById("CARFMO")
        const CARFMT=document.getElementById("CARFMT")
        const CARFMTH=document.getElementById("CARFMTH")
        const CARFMF=document.getElementById("CARFMF")
        const CARFMFI=document.getElementById("CARFMFI")
        const CARFMS=document.getElementById("CARFMS")
        const CARFMSE=document.getElementById("CARFMSE")
        const CARFMN=document.getElementById("CARFMN")

        this.StatisticsInfo.forEach(item=>{
// 7
                if(m1.getAttribute("id")==item.StationNo){
                        CARFMO.innerText=item.AccumulatedRainfall
                }
// 8
                if(m2.getAttribute("id")==item.StationNo){
                        CARFMT.innerText=item.AccumulatedRainfall
                }
// 9
                if(m3.getAttribute("id")==item.StationNo){
                        CARFMTH.innerText=item.AccumulatedRainfall
                }
// 10
                if(m4.getAttribute("id")==item.StationNo){
                        CARFMF.innerText=item.AccumulatedRainfall
                }
// 11
                if(m5.getAttribute("id")==item.StationNo){
                        CARFMFI.innerText=item.AccumulatedRainfall
                }
// 12
                if(m6.getAttribute("id")==item.StationNo){
                        CARFMS.innerText=item.AccumulatedRainfall
                }
// 13
                if(m7.getAttribute("id")==item.StationNo){
                        CARFMSE.innerText=item.AccumulatedRainfall
                }
// 14
                if(m8.getAttribute("id")==item.StationNo){
                        CARFMN.innerText=item.AccumulatedRainfall
                }
        })
        })
        // 營運狀況
        watch(()=>this.OperatingInfo,()=>{
                const r1=document.querySelectorAll(".r1")
// 7            
                const CIFMO=document.getElementById("CIFMO")
                const COFTMO=document.getElementById("COFTMO")
// 8            
                const CIFMT=document.getElementById("CIFMT")
                const COFTMT=document.getElementById("COFTMT")
// 9            
                const CIFMTH=document.getElementById("CIFMTH")
                const COFTMTH=document.getElementById("COFTMTH")
// 10   
                const CIFMF=document.getElementById("CIFMF")
                const COFTMF=document.getElementById("COFTMF")
// 11   
                const CIFMFI=document.getElementById("CIFMFI")
                const COFTMFI=document.getElementById("COFTMFI")
// 12   
                const CIFMS=document.getElementById("CIFMS")
                const COFTMS=document.getElementById("COFTMS")
// 13   
                const CIFMSE=document.getElementById("CIFMSE")
                const COFTMSE=document.getElementById("COFTMSE")
// 14   
                const CIFMN=document.getElementById("CIFMN")
                const COFTMN=document.getElementById("COFTMN")

        r1.forEach(item=>{
                // 7
                if(item.getAttribute("value")==this.OperatingInfo.responseData[14].ReservoirName){
                        CIFMO.innerText=this.OperatingInfo.responseData[14].Inflow
                        COFTMO.innerText=this.OperatingInfo.responseData[14].Outflow
                }
                // 8

                if(item.getAttribute("value")==this.OperatingInfo.responseData[15].ReservoirName){
                        CIFMT.innerText=this.OperatingInfo.responseData[15].Inflow
                        COFTMT.innerText=this.OperatingInfo.responseData[15].Outflow
                }
// 9
                if(item.getAttribute("value")==this.OperatingInfo.responseData[16].ReservoirName){
                        CIFMTH.innerText=this.OperatingInfo.responseData[16].Inflow
                        COFTMTH.innerText=this.OperatingInfo.responseData[16].Outflow
                }
// 10
                if(item.getAttribute("value")==this.OperatingInfo.responseData[18].ReservoirName){
                        CIFMF.innerText=this.OperatingInfo.responseData[18].Inflow
                        COFTMF.innerText=this.OperatingInfo.responseData[18].Outflow
                }
// 11
                if(item.getAttribute("value")==this.OperatingInfo.responseData[19].ReservoirName){
                        CIFMFI.innerText=this.OperatingInfo.responseData[19].Inflow
                        COFTMFI.innerText=this.OperatingInfo.responseData[19].Outflow
                }
// 12
                if(item.getAttribute("value")==this.OperatingInfo.responseData[22].ReservoirName){
                        CIFMS.innerText=this.OperatingInfo.responseData[22].Inflow
                        COFTMS.innerText=this.OperatingInfo.responseData[22].Outflow
                }
// 13
                if(item.getAttribute("value")==this.OperatingInfo.responseData[23].ReservoirName){
                        CIFMSE.innerText=this.OperatingInfo.responseData[23].Inflow
                        COFTMSE.innerText=this.OperatingInfo.responseData[23].Outflow
                }
// 14
                if(item.getAttribute("value")==this.OperatingInfo.responseData[27].ReservoirName){
                        CIFMN.innerText=this.OperatingInfo.responseData[27].Inflow
                        COFTMN.innerText=this.OperatingInfo.responseData[27].Outflow
                }
})
        })
        // 統計資料
        watch(()=>this.immediateInfo,()=>{
        //中    
        const m1=document.getElementById("10501")   
        const m2=document.getElementById("10503")   
        const m3=document.getElementById("10601")   
        const m4=document.getElementById("20101")   
        const m5=document.getElementById("20201")   
        const m6=document.getElementById("20501")   
        const m7=document.getElementById("20502")   
        const m8=document.getElementById("20509")   

        // 7
        const CTMO=document.getElementById("CTMO")
        const CWHMO=document.getElementById("CWHMO")
        const CESMO=document.getElementById("CESMO")
        const CPOSMO=document.getElementById("CPOSMO")
        // 8
        const CTMT=document.getElementById("CTMT")
        const CWHMT=document.getElementById("CWHMT")
        const CESMT=document.getElementById("CESMT")
        const CPOSMT=document.getElementById("CPOSMT")
        // 9
        const CTMTH=document.getElementById("CTMTH")
        const CWHMTH=document.getElementById("CWHMTH")
        const CESMTH=document.getElementById("CESMTH")
        const CPOSMTH=document.getElementById("CPOSMTH")
        // 10
        const CTMF=document.getElementById("CTMF")
        const CWHMF=document.getElementById("CWHMF")
        const CESMF=document.getElementById("CESMF")
        const CPOSMF=document.getElementById("CPOSMF")
        // 11
        const CTMFI=document.getElementById("CTMFI")
        const CWHMFI=document.getElementById("CWHMFI")
        const CESMFI=document.getElementById("CESMFI")
        const CPOSMFI=document.getElementById("CPOSMFI")
        // 12
        const CTMS=document.getElementById("CTMS")
        const CWHMS=document.getElementById("CWHMS")
        const CESMS=document.getElementById("CESMS")
        const CPOSMS=document.getElementById("CPOSMS")
        // 13
        const CTMTSE=document.getElementById("CTMTSE")
        const CWHMSE=document.getElementById("CWHMSE")
        const CESMSE=document.getElementById("CESMSE")
        const CPOSMSE=document.getElementById("CPOSMSE")
        // 14
        const CTMN=document.getElementById("CTMN")
        const CWHMN=document.getElementById("CWHMN")
        const CESMN=document.getElementById("CESMN")
        const CPOSMN=document.getElementById("CPOSMN")
// ------------------------

        

        this.immediateInfo.forEach(item=>{
                let dayTime=new Date(item.Time)
                let Time= dayTime.getFullYear()+"-"+(dayTime.getMonth()+1)+"-"+dayTime.getDate()+" "+dayTime.getHours()+":"+"0"+dayTime.getMinutes()+":"+"0"+dayTime.getSeconds()

                if(m1.getAttribute("id")==item.StationNo){
                        
                        CTMO.innerText=Time
                        CWHMO.innerText=item.WaterHeight
                        CESMO.innerText=item.EffectiveStorage
                        CPOSMO.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }

                if(m2.getAttribute("id")==item.StationNo){
                        
                        CTMT.innerText=Time
                        CWHMT.innerText=item.WaterHeight
                        CESMT.innerText=item.EffectiveStorage
                        CPOSMT.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }

                if(m3.getAttribute("id")==item.StationNo){
                        
                        CTMTH.innerText=Time
                        CWHMTH.innerText=item.WaterHeight
                        CESMTH.innerText=item.EffectiveStorage
                        CPOSMTH.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 10
                if(m4.getAttribute("id")==item.StationNo){
                        
                        CTMF.innerText=Time
                        CWHMF.innerText=item.WaterHeight
                        CESMF.innerText=item.EffectiveStorage
                        CPOSMF.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 11
                if(m5.getAttribute("id")==item.StationNo){
                        
                        CTMFI.innerText=Time
                        CWHMFI.innerText=item.WaterHeight
                        CESMFI.innerText=item.EffectiveStorage
                        CPOSMFI.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 12
                if(m6.getAttribute("id")==item.StationNo){
                        
                        CTMS.innerText=Time
                        CWHMS.innerText=item.WaterHeight
                        CESMS.innerText=item.EffectiveStorage
                        CPOSMS.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 13
                if(m7.getAttribute("id")==item.StationNo){
                        
                        CTMTSE.innerText=Time
                        CWHMSE.innerText=item.WaterHeight
                        CESMSE.innerText=item.EffectiveStorage
                        CPOSMSE.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 14
                if(m8.getAttribute("id")==item.StationNo){
                        
                        CTMN.innerText=Time
                        CWHMN.innerText=item.WaterHeight
                        CESMN.innerText=item.EffectiveStorage
                        CPOSMN.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
        })
        })
  },
  components:{
        CaculateSelect
  }
  }
</script>

<template>
<!-- 選擇區域 -->
    <div class="selectArea">
        <CaculateSelect />
    </div>

    <div class="content">
        <label for="">中區</label>
        <table>
            <tr>
                <th rowspan="2">水庫名稱</th>
                <th>水庫基本資訊</th>
                <th colspan="3">每日蓄水統計</th>
                <th colspan="4">水情資料</th>
            </tr>
            <tr>
                <th>有效容量<br>(萬立方公尺)</th>
                <th>集水區<br>降雨量<br>(毫米)</th>
                <th>進水量<br>(萬立方公尺)</th>
                <th>出水量<br>(萬立方公尺)</th>
                <th>水情時間</th>
                <th>水位<br>(公尺)</th>
                <th>有效蓄水量<br>(萬立方公尺)</th>
                <th>蓄水量<br>百分比(%)</th>
            </tr>
            
<!-- 中區水庫 -->
<!--永和山水庫-->
            <tr>
                <td id="10501" class="r1" value="永和山水庫">永和山水庫</td>
        <!--有效容量-->
                <td id="CECMO"></td>
        <!--集水區降雨量-->
                <td id="CARFMO"></td>
        <!--進水量-->
                <td id="CIFMO"></td>
        <!--出水量-->
                <td id="COFTMO"></td>
        <!--水情時間-->
                <td id="CTMO"></td>
        <!--水位-->
                <td id="CWHMO"></td>
        <!--有效蓄水量-->
                <td id="CESMO"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMO"></td>
            </tr>

<!--大埔水庫-->
            <tr>
                <td id="10503" class="r1" value="大埔水庫">大埔水庫</td>
        <!--有效容量-->
                <td id="CECMT"></td>
        <!--集水區降雨量-->
                <td id="CARFMT"></td>
        <!--進水量-->
                <td id="CIFMT"></td>
        <!--出水量-->
                <td id="COFTMT"></td>
        <!--水情時間-->
                <td id="CTMT"></td>
        <!--水位-->
                <td id="CWHMT"></td>
        <!--有效蓄水量-->
                <td id="CESMT"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMT"></td>
            </tr>

<!--明德水庫-->
            <tr>
                <td id="10601" class="r1" value="明德水庫">明德水庫</td>
        <!--有效容量-->
                <td id="CECMTH"></td>
        <!--集水區降雨量-->
                <td id="CARFMTH"></td>
        <!--進水量-->
                <td id="CIFMTH"></td>
        <!--出水量-->
                <td id="COFTMTH"></td>
        <!--水情時間-->
                <td id="CTMTH"></td>
        <!--水位-->
                <td id="CWHMTH"></td>
        <!--有效蓄水量-->
                <td id="CESMTH"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMTH"></td>
            </tr>

<!--鯉魚潭水庫-->
            <tr>
                <td id="20101" class="r1" value="鯉魚潭水庫">鯉魚潭水庫</td>
        <!--有效容量-->
                <td id="CECMF"></td>
        <!--集水區降雨量-->
                <td id="CARFMF"></td>
        <!--進水量-->
                <td id="CIFMF"></td>
        <!--出水量-->
                <td id="COFTMF"></td>
        <!--水情時間-->
                <td id="CTMF"></td>
        <!--水位-->
                <td id="CWHMF"></td>
        <!--有效蓄水量-->
                <td id="CESMF"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMF"></td>
            </tr>

<!--德基水庫-->
            <tr>
                <td id="20201" class="r1" value="德基水庫">德基水庫</td>
        <!--有效容量-->
                <td id="CECMFI"></td>
        <!--集水區降雨量-->
                <td id="CARFMFI"></td>
        <!--進水量-->
                <td id="CIFMFI"></td>
        <!--出水量-->
                <td id="COFTMFI"></td>
        <!--水情時間-->
                <td id="CTMFI"></td>
        <!--水位-->
                <td id="CWHMFI"></td>
        <!--有效蓄水量-->
                <td id="CESMFI"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMFI"></td>
            </tr>

<!--霧社水庫-->
            <tr>
                <td id="20501" class="r1" value="霧社水庫">霧社水庫</td>
        <!--有效容量-->
                <td id="CECMS"></td>
        <!--集水區降雨量-->
                <td id="CARFMS"></td>
        <!--進水量-->
                <td id="CIFMS"></td>
        <!--出水量-->
                <td id="COFTMS"></td>
        <!--水情時間-->
                <td id="CTMS"></td>
        <!--水位-->
                <td id="CWHMS"></td>
        <!--有效蓄水量-->
                <td id="CESMS"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMS"></td>
            </tr>

<!--日月潭水庫-->
            <tr>
                <td id="20502" class="r1" value="日月潭水庫">日月潭水庫</td>
        <!--有效容量-->
                <td id="CECMSE"></td>
        <!--集水區降雨量-->
                <td id="CARFMSE"></td>
        <!--進水量-->
                <td id="CIFMSE"></td>
        <!--出水量-->
                <td id="COFTMSE"></td>
        <!--水情時間-->
                <td id="CTMTSE"></td>
        <!--水位-->
                <td id="CWHMSE"></td>
        <!--有效蓄水量-->
                <td id="CESMSE"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMSE"></td>
            </tr>

<!--湖山水庫-->
            <tr>
                <td id="20509" class="r1" value="湖山水庫">湖山水庫</td>
        <!--有效容量-->
                <td id="CECMN"></td>
        <!--集水區降雨量-->
                <td id="CARFMN"></td>
        <!--進水量-->
                <td id="CIFMN"></td>
        <!--出水量-->
                <td id="COFTMN"></td>
        <!--水情時間-->
                <td id="CTMN"></td>
        <!--水位-->
                <td id="CWHMN"></td>
        <!--有效蓄水量-->
                <td id="CESMN"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSMN"></td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
        .content{
        width: 100vw;
        margin-top: 2vmin;
        label{
                font-size: 28pt;
                margin-left: 11vmin;
                color: #146C94;
                border-left: 5px solid #146C94;
                line-height: 1.1em;
                padding-left: 2vmin;
                }
                table{
                        width: 90vw;
                        margin: auto;
                        margin-top: 2vmin;
                        tr{
                                th{
                                border: 1px solid black;
                                background-color: lightblue;
                                opacity: 0.7;
                                }

                                td{
                                text-align: center;
                                border: 1px solid black;
                                background-color: white;
                                }
                        }
                }
        }
        @media(max-width:992px){
                .content{
                        label{
                                margin-left: 6vmin;
                                font-size: 24pt;
                        }
                        table{
                                tr{
                                        th{
                                                font-size: 10pt;
                                        }
                                }
                        }
                }
        }
        @media(max-width:768px){
                .content{
                        label{
                                font-size: 22pt;
                        }
                        table{
                                tr{
                                        th{
                                                font-size: 8pt;
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
                        table{
                                tr{
                                        th{
                                                font-size: 5pt;
                                        }
                                        td{
                                                font-size: 5pt;
                                        }
                                }
                        }
                }
        }
        @media(max-width:414px){
                .content{
                        label{
                                font-size: 12pt;
                        }
                        table{
                                tr{
                                        th{
                                                font-size: 4pt;
                                        }
                                }
                        }
                }
        }
</style>