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
        },100)
    
        

    
    

  });
  fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily")
  .then((response) => response.json())
  .then((data) => {
    obj2=data
//     console.log("水庫統計資料");
    console.log(obj2);
    // 北
        const n1=document.getElementById("10201")   
        const n2=document.getElementById("10203")   
        const n3=document.getElementById("10204")   
        const n4=document.getElementById("10205")   
        const n5=document.getElementById("10401")   
        const n6=document.getElementById("10405")   
        //中 
        const m1=document.getElementById("10501")   
        const m2=document.getElementById("10503")   
        const m3=document.getElementById("10601")   
        const m4=document.getElementById("20101")   
        const m5=document.getElementById("20201")   
        const m6=document.getElementById("20501")   
        const m7=document.getElementById("20502")   
        const m8=document.getElementById("20509")   
        // 南
        const s1=document.getElementById("30302")   
        const s2=document.getElementById("30401")   
        const s3=document.getElementById("30502")   
        const s4=document.getElementById("30501")   
        const s5=document.getElementById("30503")   
        const s6=document.getElementById("30802")   
        const s7=document.getElementById("31201")
        
        
        const CARFNO=document.getElementById("CARFNO")
        const CARFNT=document.getElementById("CARFNT")
        const CARFNTH=document.getElementById("CARFNTH")
        const CARFNF=document.getElementById("CARFNF")
        const CARFNFI=document.getElementById("CARFNFI")
        const CARFNS=document.getElementById("CARFNS")
        const CARFMO=document.getElementById("CARFMO")
        const CARFMT=document.getElementById("CARFMT")
        const CARFMTH=document.getElementById("CARFMTH")
        const CARFMF=document.getElementById("CARFMF")
        const CARFMFI=document.getElementById("CARFMFI")
        const CARFMS=document.getElementById("CARFMS")
        const CARFMSE=document.getElementById("CARFMSE")
        const CARFMN=document.getElementById("CARFMN")
        const CARFSO=document.getElementById("CARFSO")
        const CARFST=document.getElementById("CARFST")
        const CARFSTH=document.getElementById("CARFSTH")
        const CARFSF=document.getElementById("CARFSF")
        const CARFSFI=document.getElementById("CARFSFI")
        const CARFSS=document.getElementById("CARFSS")
        const CARFSSE=document.getElementById("CARFSSE")


        obj2.forEach(item=>{
// 1
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 2
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNT.innerText=item.AccumulatedRainfall
                }
// 3
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNTH.innerText=item.AccumulatedRainfall
                }
// 4
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNF.innerText=item.AccumulatedRainfall
                }
// 5
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNFI.innerText=item.AccumulatedRainfall
                }
// 6
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNS.innerText=item.AccumulatedRainfall
                }
// 7
                if(n1.getAttribute("id")==item.StationNo){
                        CARFMO.innerText=item.AccumulatedRainfall
                }
// 8
                if(n1.getAttribute("id")==item.StationNo){
                        CARFMT.innerText=item.AccumulatedRainfall
                }
// 9
                if(n1.getAttribute("id")==item.StationNo){
                        CARFMTH.innerText=item.AccumulatedRainfall
                }
// 10
                if(n1.getAttribute("id")==item.StationNo){
                        CARFMF.innerText=item.AccumulatedRainfall
                }
// 11
                if(n1.getAttribute("id")==item.StationNo){
                        CARFMFI.innerText=item.AccumulatedRainfall
                }
// 12
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 13
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 14
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 15
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 16
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 17
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 18
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 19
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 20
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
// 21
                if(n1.getAttribute("id")==item.StationNo){
                        CARFNO.innerText=item.AccumulatedRainfall
                }
        })
        
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

        })},100)
        
  });
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
  .then((response) => response.json())
  .then((data) => {
    obj4=data
//     console.log("水庫即時資料");
//     console.log(obj4);
        // 北
        const n1=document.getElementById("10201")   
        const n2=document.getElementById("10203")   
        const n3=document.getElementById("10204")   
        const n4=document.getElementById("10205")   
        const n5=document.getElementById("10401")   
        const n6=document.getElementById("10405")   
        //中    
        const m1=document.getElementById("10501")   
        const m2=document.getElementById("10503")   
        const m3=document.getElementById("10601")   
        const m4=document.getElementById("20101")   
        const m5=document.getElementById("20201")   
        const m6=document.getElementById("20501")   
        const m7=document.getElementById("20502")   
        const m8=document.getElementById("20509")   
        //    南
        const s1=document.getElementById("30302")   
        const s2=document.getElementById("30401")   
        const s3=document.getElementById("30502")   
        const s4=document.getElementById("30501")   
        const s5=document.getElementById("30503")   
        const s6=document.getElementById("30802")   
        const s7=document.getElementById("31201")
        
        
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

        

obj4.forEach(item=>{
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
        height: 45vw;
        margin-top: 8vmin;

                table{
                        width: 90vw;
                        height: 40vh;
                        margin: auto;
                        tr{
                                th{
                                border: 1px solid black;
                                background-color: #AFD3E2;
                                opacity: 0.8;
                                }

                                td{
                                text-align: center;
                                border: 1px solid black;
                                background-color: white;
                                }
                        }
                }
        }



</style>