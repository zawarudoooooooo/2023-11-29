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
                const CECSO=document.getElementById("CECSO")
                const CECST=document.getElementById("CECST")
                const CECSTH=document.getElementById("CECSTH")
                const CECSF=document.getElementById("CECSF")
                const CECSFI=document.getElementById("CECSFI")
                const CECSS=document.getElementById("CECSS")
                const CECSSE=document.getElementById("CECSSE")

        r1.forEach(reservoir=>{

                if(reservoir.getAttribute("value")==this.basicInfo[44].StationName){
                        CECSO.innerText=this.basicInfo[44].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[49].StationName){
                        CECST.innerText=this.basicInfo[49].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[53].StationName){
                        CECSTH.innerText=this.basicInfo[53].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[54].StationName){
                        CECSFI.innerText=this.basicInfo[54].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[60].StationName){
                        CECSS.innerText=this.basicInfo[60].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[66].StationName){
                        CECSSE.innerText=this.basicInfo[66].EffectiveCapacity
                }
                if(reservoir.getAttribute("value")==this.basicInfo[52].StationName){
                        CECSF.innerText=this.basicInfo[52].EffectiveCapacity
                }
                })
                
        })
        // 即時資料
        watch(()=>this.StatisticsInfo,()=>{
        // 南
        const s1=document.getElementById("30302")   
        const s2=document.getElementById("30401")   
        const s3=document.getElementById("30502")   
        const s4=document.getElementById("30501")   
        const s5=document.getElementById("30503")   
        const s6=document.getElementById("30802")   
        const s7=document.getElementById("31201")
        
        const CARFSO=document.getElementById("CARFSO")
        const CARFST=document.getElementById("CARFST")
        const CARFSTH=document.getElementById("CARFSTH")
        const CARFSF=document.getElementById("CARFSF")
        const CARFSFI=document.getElementById("CARFSFI")
        const CARFSS=document.getElementById("CARFSS")
        const CARFSSE=document.getElementById("CARFSSE")


        this.StatisticsInfo.forEach(item=>{
// 15
                if(s1.getAttribute("id")==item.StationNo){
                        CARFSO.innerText=item.AccumulatedRainfall
                }
// 16
                if(s2.getAttribute("id")==item.StationNo){
                        CARFST.innerText=item.AccumulatedRainfall
                }
// 17
                if(s3.getAttribute("id")==item.StationNo){
                        CARFSTH.innerText=item.AccumulatedRainfall
                }
// 18
                if(s4.getAttribute("id")==item.StationNo){
                        CARFSF.innerText=item.AccumulatedRainfall
                }
// 19
                if(s5.getAttribute("id")==item.StationNo){
                        CARFSFI.innerText=item.AccumulatedRainfall
                }
// 20
                if(s6.getAttribute("id")==item.StationNo){
                        CARFSS.innerText=item.AccumulatedRainfall
                }
// 21
                if(s7.getAttribute("id")==item.StationNo){
                        CARFSSE.innerText=item.AccumulatedRainfall
                }
        })
        })
        // 營運狀況
        watch(()=>this.OperatingInfo,()=>{
                const r1=document.querySelectorAll(".r1")
// 15   
                const CIFSO=document.getElementById("CIFSO")
                const COFTSO=document.getElementById("COFTSO")
// 16   
                const CIFST=document.getElementById("CIFST")
                const COFTST=document.getElementById("COFTST")
// 17   
                const CIFSTH=document.getElementById("CIFSTH")
                const COFTSTH=document.getElementById("COFTSTH")
// 18   
                const CIFSF=document.getElementById("CIFSF")
                const COFTSF=document.getElementById("COFTSF")
// 19   
                const CIFSFI=document.getElementById("CIFSFI")
                const COFTSFI=document.getElementById("COFTSFI")
// 20   
                const CIFSS=document.getElementById("CIFSS")
                const COFTSS=document.getElementById("COFTSS")
// 21   
                const CIFSSE=document.getElementById("CIFSSE")
                const COFTSSE=document.getElementById("COFTSSE")


        r1.forEach(item=>{
// 15
                if(item.getAttribute("value")==this.OperatingInfo.responseData[29].ReservoirName){
                        CIFSO.innerText=this.OperatingInfo.responseData[29].Inflow
                        COFTSO.innerText=this.OperatingInfo.responseData[29].Outflow
                }
// 16
                if(item.getAttribute("value")==this.OperatingInfo.responseData[31].ReservoirName){
                        CIFST.innerText=this.OperatingInfo.responseData[31].Inflow
                        COFTST.innerText=this.OperatingInfo.responseData[31].Outflow
                }
// 17
                if(item.getAttribute("value")==this.OperatingInfo.responseData[33].ReservoirName){
                        CIFSF.innerText=this.OperatingInfo.responseData[33].Inflow
                        COFTSF.innerText=this.OperatingInfo.responseData[33].Outflow
                }
// 18
                if(item.getAttribute("value")==this.OperatingInfo.responseData[34].ReservoirName){
                        CIFSTH.innerText=this.OperatingInfo.responseData[34].Inflow
                        COFTSTH.innerText=this.OperatingInfo.responseData[34].Outflow
                }
// 19
                if(item.getAttribute("value")==this.OperatingInfo.responseData[35].ReservoirName){
                        CIFSFI.innerText=this.OperatingInfo.responseData[35].Inflow
                        COFTSFI.innerText=this.OperatingInfo.responseData[35].Outflow
                }
// 20
                if(item.getAttribute("value")==this.OperatingInfo.responseData[40].ReservoirName){
                        CIFSS.innerText=this.OperatingInfo.responseData[40].Inflow
                        COFTSS.innerText=this.OperatingInfo.responseData[40].Outflow
                }
// 21
                if(item.getAttribute("value")==this.OperatingInfo.responseData[44].ReservoirName){
                        CIFSSE.innerText=this.OperatingInfo.responseData[44].Inflow
                        COFTSSE.innerText=this.OperatingInfo.responseData[44].Outflow
                }
})
        })
        // 統計資料
        watch(()=>this.immediateInfo,()=>{  
        //    南
        const s1=document.getElementById("30302")   
        const s2=document.getElementById("30401")   
        const s3=document.getElementById("30502")   
        const s4=document.getElementById("30501")   
        const s5=document.getElementById("30503")   
        const s6=document.getElementById("30802")   
        const s7=document.getElementById("31201")
        
        // 15
        const CTSO=document.getElementById("CTSO")
        const CWHSO=document.getElementById("CWHSO")
        const CESSO=document.getElementById("CESSO")
        const CPOSSO=document.getElementById("CPOSSO")
        // 16
        const CTST=document.getElementById("CTST")
        const CWHST=document.getElementById("CWHST")
        const CESST=document.getElementById("CESST")
        const CPOSST=document.getElementById("CPOSST")
        // 17
        const CTSTH=document.getElementById("CTSTH")
        const CWHSTH=document.getElementById("CWHSTH")
        const CESSTH=document.getElementById("CESSTH")
        const CPOSSTH=document.getElementById("CPOSSTH")
        // 18
        const CTSF=document.getElementById("CTSF")
        const CWHSF=document.getElementById("CWHSF")
        const CESSF=document.getElementById("CESSF")
        const CPOSSF=document.getElementById("CPOSSF")
        // 19
        const CTSFI=document.getElementById("CTSFI")
        const CWHSFI=document.getElementById("CWHSFI")
        const CESSFI=document.getElementById("CESSFI")
        const CPOSSFI=document.getElementById("CPOSSFI")
        // 20
        const CTSS=document.getElementById("CTSS")
        const CWHSS=document.getElementById("CWHSS")
        const CESSS=document.getElementById("CESSS")
        const CPOSSS=document.getElementById("CPOSSS")
        // 21
        const CTSSE=document.getElementById("CTSSE")
        const CWHSSE=document.getElementById("CWHSSE")
        const CESSSE=document.getElementById("CESSSE")
        const CPOSSSE=document.getElementById("CPOSSSE")
// ------------------------

        

        this.immediateInfo.forEach(item=>{
                let dayTime=new Date(item.Time)
                let Time= dayTime.getFullYear()+"-"+(dayTime.getMonth()+1)+"-"+dayTime.getDate()+" "+dayTime.getHours()+":"+"0"+dayTime.getMinutes()+":"+"0"+dayTime.getSeconds()
// 15
                if(s1.getAttribute("id")==item.StationNo){
                        
                        CTSO.innerText=Time
                        CWHSO.innerText=item.WaterHeight
                        CESSO.innerText=item.EffectiveStorage
                        CPOSSO.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 16
                if(s2.getAttribute("id")==item.StationNo){
                        
                        CTST.innerText=Time
                        CWHST.innerText=item.WaterHeight
                        CESST.innerText=item.EffectiveStorage
                        CPOSST.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 17
                if(s3.getAttribute("id")==item.StationNo){
                        
                        CTSTH.innerText=Time
                        CWHSTH.innerText=item.WaterHeight
                        CESSTH.innerText=item.EffectiveStorage
                        CPOSSTH.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 18
                if(s4.getAttribute("id")==item.StationNo){
                        
                        CTSF.innerText=Time
                        CWHSF.innerText=item.WaterHeight
                        CESSF.innerText=item.EffectiveStorage
                        CPOSSF.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 19
                if(s5.getAttribute("id")==item.StationNo){

                        CTSFI.innerText=Time
                        CWHSFI.innerText=item.WaterHeight
                        CESSFI.innerText=item.EffectiveStorage
                        CPOSSFI.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 20
                if(s6.getAttribute("id")==item.StationNo){
                        
                        CTSS.innerText=Time
                        CWHSS.innerText=item.WaterHeight
                        CESSS.innerText=item.EffectiveStorage
                        CPOSSS.innerText=Math.floor(item.PercentageOfStorage)+"%"
                }
// 21
                if(s7.getAttribute("id")==item.StationNo){
                        
                        CTSSE.innerText=Time
                        CWHSSE.innerText=item.WaterHeight
                        CESSSE.innerText=item.EffectiveStorage
                        CPOSSSE.innerText=Math.floor(item.PercentageOfStorage)+"%"
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
        <label for="">南區</label>
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
<!-- 南區水庫 -->
<!--蘭潭水庫-->
            <tr>
                <td id="30302" class="r1" value="蘭潭水庫">蘭潭水庫</td>
        <!--有效容量-->
                <td id="CECSO"></td>
        <!--集水區降雨量-->
                <td id="CARFSO"></td>
        <!--進水量-->
                <td id="CIFSO"></td>
        <!--出水量-->
                <td id="COFTSO"></td>
        <!--水情時間-->
                <td id="CTSO"></td>
        <!--水位-->
                <td id="CWHSO"></td>
        <!--有效蓄水量-->
                <td id="CESSO"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSSO"></td>
            </tr>

<!--白河水庫-->
            <tr>
                <td id="30401" class="r1" value="白河水庫">白河水庫</td>
        <!--有效容量-->
                <td id="CECST"></td>
        <!--集水區降雨量-->
                <td id="CARFST"></td>
        <!--進水量-->
                <td id="CIFST"></td>
        <!--出水量-->
                <td id="COFTST"></td>
        <!--水情時間-->
                <td id="CTST"></td>
        <!--水位-->
                <td id="CWHST"></td>
        <!--有效蓄水量-->
                <td id="CESST"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSST"></td>
            </tr>

<!--曾文水庫-->
            <tr>
                <td id="30502" class="r1" value="曾文水庫">曾文水庫</td>
        <!--有效容量-->
                <td id="CECSTH"></td>
        <!--集水區降雨量-->
                <td id="CARFSTH"></td>
        <!--進水量-->
                <td id="CIFSTH"></td>
        <!--出水量-->
                <td id="COFTSTH"></td>
        <!--水情時間-->
                <td id="CTSTH"></td>
        <!--水位-->
                <td id="CWHSTH"></td>
        <!--有效蓄水量-->
                <td id="CESSTH"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSSTH"></td>
            </tr>

<!--烏山頭水庫-->
            <tr>
                <td id="30501" class="r1" value="烏山頭水庫">烏山頭水庫</td>
        <!--有效容量-->
                <td id="CECSF"></td>
        <!--集水區降雨量-->
                <td id="CARFSF"></td>
        <!--進水量-->
                <td id="CIFSF"></td>
        <!--出水量-->
                <td id="COFTSF"></td>
        <!--水情時間-->
                <td id="CTSF"></td>
        <!--水位-->
                <td id="CWHSF"></td>
        <!--有效蓄水量-->
                <td id="CESSF"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSSF"></td>
            </tr>

<!--南化水庫-->
            <tr>
                <td id="30503" class="r1" value="南化水庫">南化水庫</td>
        <!--有效容量-->
                <td id="CECSFI"></td>
        <!--集水區降雨量-->
                <td id="CARFSFI"></td>
        <!--進水量-->
                <td id="CIFSFI"></td>
        <!--出水量-->
                <td id="COFTSFI"></td>
        <!--水情時間-->
                <td id="CTSFI"></td>
        <!--水位-->
                <td id="CWHSFI"></td>
        <!--有效蓄水量-->
                <td id="CESSFI"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSSFI"></td>
            </tr>

<!--阿公店水庫-->
            <tr>
                <td id="30802" class="r1" value="阿公店水庫">阿公店水庫</td>
        <!--有效容量-->
                <td id="CECSS"></td>
        <!--集水區降雨量-->
                <td id="CARFSS"></td>
        <!--進水量-->
                <td id="CIFSS"></td>
        <!--出水量-->
                <td id="COFTSS"></td>
        <!--水情時間-->
                <td id="CTSS"></td>
        <!--水位-->
                <td id="CWHSS"></td>
        <!--有效蓄水量-->
                <td id="CESSS"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSSS"></td>
            </tr>

<!--牡丹水庫-->
            <tr>
                <td id="31201" class="r1" value="牡丹水庫">牡丹水庫</td>
        <!--有效容量-->
                <td id="CECSSE"></td>
        <!--集水區降雨量-->
                <td id="CARFSSE"></td>
        <!--進水量-->
                <td id="CIFSSE"></td>
        <!--出水量-->
                <td id="COFTSSE"></td>
        <!--水情時間-->
                <td id="CTSSE"></td>
        <!--水位-->
                <td id="CWHSSE"></td>
        <!--有效蓄水量-->
                <td id="CESSSE"></td>                
        <!--蓄水百分比(%)-->
                <td id="CPOSSSE"></td>
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