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
                const CECNO=document.getElementById("CECNO")
                const CECNT=document.getElementById("CECNT")
                const CECNTH=document.getElementById("CECNTH")
                const CECNF=document.getElementById("CECNF")
                const CECNFI=document.getElementById("CECNFI")
                const CECNS=document.getElementById("CECNS")

        r1.forEach(reservoir=>{
                if(reservoir.getAttribute("value")==this.basicInfo[0].StationName){
                        CECNO.innerText=this.basicInfo[0].EffectiveCapacity
                        // CECNO.innerText="123"
                }
                if(reservoir.getAttribute("value")==this.basicInfo[1].StationName){
                        CECNT.innerText=this.basicInfo[1].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[2].StationName){
                        CECNTH.innerText=this.basicInfo[2].EffectiveCapacity 
                }
                if(reservoir.getAttribute("value")==this.basicInfo[3].StationName){
                        CECNF.innerText=this.basicInfo[3].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[15].StationName){
                        CECNFI.innerText=this.basicInfo[15].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[18].StationName){
                        CECNS.innerText=this.basicInfo[18].EffectiveCapacity
                }
                })
                
        })
        // 即時資料
        watch(()=>this.StatisticsInfo,()=>{
                // 北
        const n1=document.getElementById("10201")   
        const n2=document.getElementById("10203")   
        const n3=document.getElementById("10204")   
        const n4=document.getElementById("10205")   
        const n5=document.getElementById("10401")   
        const n6=document.getElementById("10405")   

        const CARFNO=document.getElementById("CARFNO")
        const CARFNT=document.getElementById("CARFNT")
        const CARFNTH=document.getElementById("CARFNTH")
        const CARFNF=document.getElementById("CARFNF")
        const CARFNFI=document.getElementById("CARFNFI")
        const CARFNS=document.getElementById("CARFNS")

        this.StatisticsInfo.forEach(item=>{
// 1
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 2
                if(n2.getAttribute("id")==item.StationNo){
                        CARFNT.innerText=item.AccumulatedRainfall
                }
// 3
                if(n3.getAttribute("id")==item.StationNo){
                        CARFNTH.innerText=item.AccumulatedRainfall
                }
// 4
                if(n4.getAttribute("id")==item.StationNo){
                        CARFNF.innerText=item.AccumulatedRainfall
                }
// 5
                if(n5.getAttribute("id")==item.StationNo){
                        CARFNFI.innerText=item.AccumulatedRainfall
                }
// 6
                if(n6.getAttribute("id")==item.StationNo){
                        CARFNS.innerText=item.AccumulatedRainfall
                }
        })
        })
        // 營運狀況
        watch(()=>this.OperatingInfo,()=>{
                const r1=document.querySelectorAll(".r1")
// 1
                const CIFNO=document.getElementById("CIFNO")
                const COFTNO=document.getElementById("COFTNO")
// 2    
                const CIFNT=document.getElementById("CIFNT")
                const COFTNT=document.getElementById("COFTNT")
// 3            
                const CIFNTH=document.getElementById("CIFNTH")
                const COFTNTH=document.getElementById("COFTNTH")
// 4            
                const CIFNF=document.getElementById("CIFNF")
                const COFTNF=document.getElementById("COFTNF")
// 5            
                const CIFNFI=document.getElementById("CIFNFI")
                const COFTNFI=document.getElementById("COFTNFI")
// 6            
                const CIFNS=document.getElementById("CIFNS")
                const COFTNS=document.getElementById("COFTNS")

        r1.forEach(item=>{
        // 1        
                if(item.getAttribute("value")==this.OperatingInfo.responseData[0].ReservoirName){
                        CIFNO.innerText=this.OperatingInfo.responseData[0].Inflow
                        COFTNO.innerText=this.OperatingInfo.responseData[0].Outflow
                }
                // 2
                if(item.getAttribute("value")==this.OperatingInfo.responseData[1].ReservoirName){
                        CIFNT.innerText=this.OperatingInfo.responseData[1].Inflow
                        COFTNT.innerText=this.OperatingInfo.responseData[1].Outflow
                }
                // 3
                if(item.getAttribute("value")==this.OperatingInfo.responseData[2].ReservoirName){
                        CIFNTH.innerText=this.OperatingInfo.responseData[2].Inflow
                        COFTNTH.innerText=this.OperatingInfo.responseData[2].Outflow
                }
                // 4
                if(item.getAttribute("value")==this.OperatingInfo.responseData[3].ReservoirName){
                        CIFNF.innerText=this.OperatingInfo.responseData[3].Inflow
                        COFTNF.innerText=this.OperatingInfo.responseData[3].Outflow
                }
                // 5
                if(item.getAttribute("value")==this.OperatingInfo.responseData[11].ReservoirName){
                        CIFNFI.innerText=this.OperatingInfo.responseData[11].Inflow
                        COFTNFI.innerText=this.OperatingInfo.responseData[11].Outflow
                }
                // 6
                if(item.getAttribute("value")==this.OperatingInfo.responseData[13].ReservoirName){
                        CIFNS.innerText=this.OperatingInfo.responseData[13].Inflow
                        COFTNS.innerText=this.OperatingInfo.responseData[13].Outflow
                }
})
        })
        // 統計資料
        watch(()=>this.immediateInfo,()=>{
        // 北
        const n1=document.getElementById("10201")   
        const n2=document.getElementById("10203")   
        const n3=document.getElementById("10204")   
        const n4=document.getElementById("10205")   
        const n5=document.getElementById("10401")   
        const n6=document.getElementById("10405")   

        // 1
        const CTNO=document.getElementById("CTNO")
        const CWHNO=document.getElementById("CWHNO")
        const CESNO=document.getElementById("CESNO")
        const CPOSNO=document.getElementById("CPOSNO")
        // 2
        const CTNT=document.getElementById("CTNT")
        const CWHNT=document.getElementById("CWHNT")
        const CESNT=document.getElementById("CESNT")
        const CPOSNT=document.getElementById("CPOSNT")
        // 3
        const CTNTH=document.getElementById("CTNTH")
        const CWHNTH=document.getElementById("CWHNTH")
        const CESNTH=document.getElementById("CESNTH")
        const CPOSNTH=document.getElementById("CPOSNTH")
        // 4
        const CTNF=document.getElementById("CTNF")
        const CWHNF=document.getElementById("CWHNF")
        const CESNF=document.getElementById("CESNF")
        const CPOSNF=document.getElementById("CPOSNF")
        // 5
        const CTNFI=document.getElementById("CTNFI")
        const CWHNFI=document.getElementById("CWHNFI")
        const CESNFI=document.getElementById("CESNFI")
        const CPOSNFI=document.getElementById("CPOSNFI")
        // 6
        const CTNS=document.getElementById("CTNS")
        const CWHNS=document.getElementById("CWHNS")
        const CESNS=document.getElementById("CESNS")
        const CPOSNS=document.getElementById("CPOSNS")
// ------------------------

        this.immediateInfo.forEach(item=>{
                let dayTime=new Date(item.Time)
                let Time= dayTime.getFullYear()+"-"+(dayTime.getMonth()+1)+"-"+dayTime.getDate()+" "+dayTime.getHours()+":"+"0"+dayTime.getMinutes()+":"+"0"+dayTime.getSeconds()
                if(n1.getAttribute("id")==item.StationNo){
                        CTNO.innerText=Time
                        CWHNO.innerText=item.WaterHeight 
                        CESNO.innerText=item.EffectiveStorage 
                        CPOSNO.innerText=Math.floor(item.PercentageOfStorage)+"%"  

                }
                
                if(n2.getAttribute("id")==item.StationNo){
                        
                        CTNT.innerText=Time
                        CWHNT.innerText=item.WaterHeight
                        CESNT.innerText=item.EffectiveStorage
                        CPOSNT.innerText=Math.floor(item.PercentageOfStorage)+"%"    
                        
                }

                if(n3.getAttribute("id")==item.StationNo){
                        
                        CTNTH.innerText=Time
                        CWHNTH.innerText=item.WaterHeight
                        CESNTH.innerText=item.EffectiveStorage
                        CPOSNTH.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }

                if(n4.getAttribute("id")==item.StationNo){
                        
                        CTNF.innerText=Time
                        CWHNF.innerText=item.WaterHeight
                        CESNF.innerText=item.EffectiveStorage
                        CPOSNF.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }

                if(n5.getAttribute("id")==item.StationNo){
                        
                        CTNFI.innerText=Time
                        CWHNFI.innerText=item.WaterHeight
                        CESNFI.innerText=item.EffectiveStorage
                        CPOSNFI.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }

                if(n6.getAttribute("id")==item.StationNo){
                        
                        CTNS.innerText=Time
                        CWHNS.innerText=item.WaterHeight
                        CESNS.innerText=item.EffectiveStorage
                        CPOSNS.innerText=Math.floor(item.PercentageOfStorage)+"%"
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
        <label for="">北區</label>
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

<!-- 北區水庫 -->
<!--石門水庫-->
            <tr>
                <td id="10201" class="r1" value="石門水庫">石門水庫</td>
        <!--有效容量-->
                <td id="CECNO"></td>
        <!--集水區降雨量-->
                <td id="CARFNO"></td>
        <!--進水量-->
                <td id="CIFNO"></td>
        <!--出水量-->
                <td id="COFTNO"></td>
        <!--水情時間-->
                <td id="CTNO"></td>
        <!--水位-->
                <td id="CWHNO"></td>
        <!--有效蓄水量-->
                <td id="CESNO"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSNO"></td>
            </tr>

<!--西勢水庫-->
            <tr>
                <td id="10203" class="r1" value="西勢水庫">西勢水庫</td>
        <!--有效容量-->
                <td id="CECNT"></td>
        <!--集水區降雨量-->
                <td id="CARFNT"></td>
        <!--進水量-->
                <td id="CIFNT"></td>
        <!--出水量-->
                <td id="COFTNT"></td>
        <!--水情時間-->
                <td id="CTNT"></td>
        <!--水位-->
                <td id="CWHNT"></td>
        <!--有效蓄水量-->
                <td id="CESNT"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSNT"></td>
            </tr>

<!--新山水庫-->
            <tr>
                <td id="10204" class="r1" value="新山水庫">新山水庫</td>
        <!--有效容量-->
                <td id="CECNTH"></td>
        <!--集水區降雨量-->
                <td id="CARFNTH"></td>
        <!--進水量-->
                <td id="CIFNTH"></td>
        <!--出水量-->
                <td id="COFTNTH"></td>
        <!--水情時間-->
                <td id="CTNTH"></td>
        <!--水位-->
                <td id="CWHNTH"></td>
        <!--有效蓄水量-->
                <td id="CESNTH"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSNTH"></td>
            </tr>
    
<!--翡翠水庫-->
            <tr>
                <td id="10205" class="r1" value="翡翠水庫">翡翠水庫</td>
        <!--有效容量-->
                <td id="CECNF"></td>
        <!--集水區降雨量-->
                <td id="CARFNF"></td>
        <!--進水量-->
                <td id="CIFNF"></td>
        <!--出水量-->
                <td id="COFTNF"></td>
        <!--水情時間-->
                <td id="CTNF"></td>
        <!--水位-->
                <td id="CWHNF"></td>
        <!--有效蓄水量-->
                <td id="CESNF"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSNF"></td>
            </tr>

<!--寶山水庫-->
            <tr>
                <td id="10401" class="r1" value="寶山水庫">寶山水庫</td>
        <!--有效容量-->
                <td id="CECNFI"></td>
        <!--集水區降雨量-->
                <td id="CARFNFI"></td>
        <!--進水量-->
                <td id="CIFNFI"></td>
        <!--出水量-->
                <td id="COFTNFI"></td>
        <!--水情時間-->
                <td id="CTNFI"></td>
        <!--水位-->
                <td id="CWHNFI"></td>
        <!--有效蓄水量-->
                <td id="CESNFI"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSNFI"></td>
            </tr>

<!--寶山第二水庫-->
            <tr>
                <td id="10405" class="r1" value="寶山第二水庫">寶山第二水庫</td>
        <!--有效容量-->
                <td id="CECNS"></td>
        <!--集水區降雨量-->
                <td id="CARFNS"></td>
        <!--進水量-->
                <td id="CIFNS"></td>
        <!--出水量-->
                <td id="COFTNS"></td>
        <!--水情時間-->
                <td id="CTNS"></td>
        <!--水位-->
                <td id="CWHNS"></td>
        <!--有效蓄水量-->
                <td id="CESNS"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSNS"></td>
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