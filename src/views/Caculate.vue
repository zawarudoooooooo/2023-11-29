<script>
let obj1 = {};
let obj2 = {};
let obj3 = {};
let obj4 = {};



fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station")
.then((response) => response.json())
.then((data) => {
        obj1=data
        // console.log("水庫基本資料");
        // console.log(obj1);
        // console.log(obj1[0].EffectiveCapacity);
        const r1=document.querySelectorAll(".r1")
        const CECNO=document.getElementById("CECNO")
        const CECNT=document.getElementById("CECNT")
        const CECNTH=document.getElementById("CECNTH")
        const CECNF=document.getElementById("CECNF")
        const CECNFI=document.getElementById("CECNFI")
        const CECNS=document.getElementById("CECNS")
        const CECMO=document.getElementById("CECMO")
        const CECMT=document.getElementById("CECMT")
        const CECMTH=document.getElementById("CECMTH")
        const CECMF=document.getElementById("CECMF")
        const CECMFI=document.getElementById("CECMFI")
        const CECMS=document.getElementById("CECMS")
        const CECMSE=document.getElementById("CECMSE")
        const CECMN=document.getElementById("CECMN")
        const CECSO=document.getElementById("CECSO")
        const CECST=document.getElementById("CECST")
        const CECSTH=document.getElementById("CECSTH")
        const CECSF=document.getElementById("CECSF")
        const CECSFI=document.getElementById("CECSFI")
        const CECSS=document.getElementById("CECSS")
        const CECSSE=document.getElementById("CECSSE")
        setInterval(()=>{
                r1.forEach(reservoir=>{
        if(reservoir.getAttribute("value")==obj1[0].StationName){
                CECNO.innerText=obj1[0].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[1].StationName){
                CECNT.innerText=obj1[1].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[2].StationName){
                CECNTH.innerText=obj1[2].EffectiveCapacity 
        }
        if(reservoir.getAttribute("value")==obj1[3].StationName){
                CECNF.innerText=obj1[3].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[15].StationName){
                CECNFI.innerText=obj1[15].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[18].StationName){
                CECNS.innerText=obj1[18].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[19].StationName){
                CECMO.innerText=obj1[19].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[20].StationName){
                CECMT.innerText=obj1[20].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[21].StationName){
                CECMTH.innerText=obj1[21].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[24].StationName){
                CECMF.innerText=obj1[24].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[25].StationName){
                CECMFI.innerText=obj1[25].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[33].StationName){
                CECMS.innerText=obj1[33].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[34].StationName){
                CECMSE.innerText=obj1[34].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[41].StationName){
                CECMN.innerText=obj1[41].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[44].StationName){
                CECSO.innerText=obj1[44].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[49].StationName){
                CECST.innerText=obj1[49].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[53].StationName){
                CECSTH.innerText=obj1[53].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[54].StationName){
                CECSFI.innerText=obj1[54].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[60].StationName){
                CECSS.innerText=obj1[60].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[66].StationName){
                CECSSE.innerText=obj1[66].EffectiveCapacity
        }
        if(reservoir.getAttribute("value")==obj1[52].StationName){
                CECSF.innerText=obj1[52].EffectiveCapacity
        }
    })
        },1000)
    
        

    
    

  });
  fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily")
  .then((response) => response.json())
  .then((data) => {
    obj2=data
//     console.log("水庫統計資料");
//     console.log(obj2);
        
    });
fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
  .then((response) => response.json())
  .then((data) => {
    obj3=data
//     console.log("水庫每日營運狀況");
//     console.log(obj3);
        
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

setInterval(()=>{
r1.forEach(item=>{
        // 1
                if(item.getAttribute("value")==obj3.responseData[0].ReservoirName){
                        CIFNO.innerText=obj3.responseData[0].Inflow
                        COFTNO.innerText=obj3.responseData[0].Outflow
                }
                // 2
                if(item.getAttribute("value")==obj3.responseData[1].ReservoirName){
                        CIFNT.innerText=obj3.responseData[1].Inflow
                        COFTNT.innerText=obj3.responseData[1].Outflow
                }
                // 3
                if(item.getAttribute("value")==obj3.responseData[2].ReservoirName){
                        CIFNTH.innerText=obj3.responseData[2].Inflow
                        COFTNTH.innerText=obj3.responseData[2].Outflow
                }
                // 4
                if(item.getAttribute("value")==obj3.responseData[3].ReservoirName){
                        CIFNF.innerText=obj3.responseData[3].Inflow
                        COFTNF.innerText=obj3.responseData[3].Outflow
                }
                // 5
                if(item.getAttribute("value")==obj3.responseData[11].ReservoirName){
                        CIFNFI.innerText=obj3.responseData[11].Inflow
                        COFTNFI.innerText=obj3.responseData[11].Outflow
                }
                // 6
                if(item.getAttribute("value")==obj3.responseData[13].ReservoirName){
                        CIFNS.innerText=obj3.responseData[13].Inflow
                        COFTNS.innerText=obj3.responseData[13].Outflow
                }
                // 7
                if(item.getAttribute("value")==obj3.responseData[14].ReservoirName){
                        CIFMO.innerText=obj3.responseData[14].Inflow
                        COFTMO.innerText=obj3.responseData[14].Outflow
                }
                // 8

                if(item.getAttribute("value")==obj3.responseData[15].ReservoirName){
                        CIFMT.innerText=obj3.responseData[15].Inflow
                        COFTMT.innerText=obj3.responseData[15].Outflow
                }
// 9
                if(item.getAttribute("value")==obj3.responseData[16].ReservoirName){
                        CIFMTH.innerText=obj3.responseData[16].Inflow
                        COFTMTH.innerText=obj3.responseData[16].Outflow
                }
// 10
                if(item.getAttribute("value")==obj3.responseData[18].ReservoirName){
                        CIFMF.innerText=obj3.responseData[18].Inflow
                        COFTMF.innerText=obj3.responseData[18].Outflow
                }
// 11
                if(item.getAttribute("value")==obj3.responseData[19].ReservoirName){
                        CIFMFI.innerText=obj3.responseData[19].Inflow
                        COFTMFI.innerText=obj3.responseData[19].Outflow
                }
// 12
                if(item.getAttribute("value")==obj3.responseData[22].ReservoirName){
                        CIFMS.innerText=obj3.responseData[22].Inflow
                        COFTMS.innerText=obj3.responseData[22].Outflow
                }
// 13
                if(item.getAttribute("value")==obj3.responseData[23].ReservoirName){
                        CIFMSE.innerText=obj3.responseData[23].Inflow
                        COFTMSE.innerText=obj3.responseData[23].Outflow
                }
// 14
                if(item.getAttribute("value")==obj3.responseData[27].ReservoirName){
                        CIFMN.innerText=obj3.responseData[27].Inflow
                        COFTMN.innerText=obj3.responseData[27].Outflow
                }
// 15
                if(item.getAttribute("value")==obj3.responseData[29].ReservoirName){
                        CIFSO.innerText=obj3.responseData[29].Inflow
                        COFTSO.innerText=obj3.responseData[29].Outflow
                }
// 16
                if(item.getAttribute("value")==obj3.responseData[31].ReservoirName){
                        CIFST.innerText=obj3.responseData[31].Inflow
                        COFTST.innerText=obj3.responseData[31].Outflow
                }
// 17
                if(item.getAttribute("value")==obj3.responseData[33].ReservoirName){
                        CIFSF.innerText=obj3.responseData[33].Inflow
                        COFTSF.innerText=obj3.responseData[33].Outflow
                }
// 18
                if(item.getAttribute("value")==obj3.responseData[34].ReservoirName){
                        CIFSTH.innerText=obj3.responseData[34].Inflow
                        COFTSTH.innerText=obj3.responseData[34].Outflow
                }
// 19
                if(item.getAttribute("value")==obj3.responseData[35].ReservoirName){
                        CIFSFI.innerText=obj3.responseData[35].Inflow
                        COFTSFI.innerText=obj3.responseData[35].Outflow
                }
// 20
                if(item.getAttribute("value")==obj3.responseData[40].ReservoirName){
                        CIFSS.innerText=obj3.responseData[40].Inflow
                        COFTSS.innerText=obj3.responseData[40].Outflow
                }
// 21
                if(item.getAttribute("value")==obj3.responseData[44].ReservoirName){
                        CIFSSE.innerText=obj3.responseData[44].Inflow
                        COFTSSE.innerText=obj3.responseData[44].Outflow
                }

        })},1000)
        
  });
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
  .then((response) => response.json())
  .then((data) => {
    obj4=data
//     console.log("水庫即時資料");
    console.log(obj4);
    
  });

export default{
  data(){
    return{
      
    }
    
  },
}

</script>

<template>
    <div class="content">
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
                <td id="r1" class="r1" value="石門水庫">石門水庫</td>
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
                <td id="r2" class="r1" value="西勢水庫">西勢水庫</td>
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
                <td id="r3" class="r1" value="新山水庫">新山水庫</td>
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
                <td id="r4" class="r1" value="翡翠水庫">翡翠水庫</td>
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
                <td id="r5" class="r1" value="寶山水庫">寶山水庫</td>
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
                <td id="r6" class="r1" value="寶山第二水庫">寶山第二水庫</td>
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


<!-- 中區水庫 -->
<!--永和山水庫-->
            <tr>
                <td id="r7" class="r1" value="永和山水庫">永和山水庫</td>
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
                <td id="r8" class="r1" value="大埔水庫">大埔水庫</td>
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
                <td id="r9" class="r1" value="明德水庫">明德水庫</td>
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
                <td id="r10" class="r1" value="鯉魚潭水庫">鯉魚潭水庫</td>
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
                <td id="r11" class="r1" value="德基水庫">德基水庫</td>
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
                <td id="r12" class="r1" value="霧社水庫">霧社水庫</td>
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
                <td id="r13" class="r1" value="日月潭水庫">日月潭水庫</td>
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
                <td id="r14" class="r1" value="湖山水庫">湖山水庫</td>
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


<!-- 南區水庫 -->
<!--蘭潭水庫-->
            <tr>
                <td id="r15" class="r1" value="蘭潭水庫">蘭潭水庫</td>
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
                <td id="r16" class="r1" value="白河水庫">白河水庫</td>
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
                <td id="r17" class="r1" value="曾文水庫">曾文水庫</td>
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
                <td id="CPOSST"></td>
            </tr>

<!--烏山頭水庫-->
            <tr>
                <td id="r18" class="r1" value="烏山頭水庫">烏山頭水庫</td>
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
                <td id="r19" class="r1" value="南化水庫">南化水庫</td>
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
                <td id="r20" class="r1" value="阿公店水庫">阿公店水庫</td>
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
                <td id="r21" class="r1" value="牡丹水庫">牡丹水庫</td>
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
        height: 100vw;

        table{
            width: 90vw;
            height: 100vh;
            margin: auto;
            tr{
                th{
                    border: 1px solid black;
                    background-color: aliceblue;
                }

                td{
                    text-align: center;
                    border: 1px solid black;
                    background-color: aliceblue;
                }

            }
        }

    }


</style>