<script>

let obj1 = {};
let obj2 = {};
// 水庫即時資料
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setInterval(function () {
            //北部
            const N1 = document.getElementById("N1")
            const TNO = document.getElementById("TNO")
            const WHNO = document.getElementById("WHNO")
            const IPOSNO = document.getElementById("IPOSNO")

            const N2 = document.getElementById("N2")
            const TNT = document.getElementById("TNT")
            const WHNT = document.getElementById("WHNT")
            const IPOSNT = document.getElementById("IPOSNT")

            const N3 = document.getElementById("N3")
            const TNTH = document.getElementById("TNTH")
            const WHNTH = document.getElementById("WHNTH")
            const IPOSTH = document.getElementById("IPOSTH")
            
            const N4 = document.getElementById("N4")
            const TNF = document.getElementById("TNF")
            const WHNF = document.getElementById("WHNF")
            const IPOSNF = document.getElementById("IPOSNF")

            const N5 = document.getElementById("N5")
            const TNFI = document.getElementById("TNFI")
            const WHNFI = document.getElementById("WHNFI")
            const IPOSNFI = document.getElementById("IPOSNFI")

            const N6 = document.getElementById("N6")
            const TNS = document.getElementById("TNS")
            const WHNS = document.getElementById("WHNS")
            const IPOSNS = document.getElementById("IPOSNS")

            // 中部
            const M1 = document.getElementById("M1")
            const TMO = document.getElementById("TMO")
            const WHMO = document.getElementById("WHMO")
            const IPOSMO = document.getElementById("IPOSMO")

            const M2 = document.getElementById("M2")
            const TMT = document.getElementById("TMT")
            const WHMT = document.getElementById("WHMT")
            const IPOSMT = document.getElementById("IPOSMT")

            const M3 = document.getElementById("M3")
            const TMTH = document.getElementById("TMTH")
            const WHMTH = document.getElementById("WHMTH")
            const IPOSMTH = document.getElementById("IPOSMTH")
            
            const M4 = document.getElementById("M4")
            const TMF = document.getElementById("TMF")
            const WHMF = document.getElementById("WHMF")
            const IPOSMF = document.getElementById("IPOSMF")

            const M5 = document.getElementById("M5")
            const TMFI = document.getElementById("TMFI")
            const WHMFI = document.getElementById("WHMFI")
            const IPOSMFI = document.getElementById("IPOSMFI")

            const M6 = document.getElementById("M6")
            const TMS = document.getElementById("TMS")
            const WHMS = document.getElementById("WHMS")
            const IPOSMS = document.getElementById("IPOSMS")

            const M7 = document.getElementById("M7")
            const TMSE = document.getElementById("TMSE")
            const WHMSE = document.getElementById("WHMSE")
            const IPOSMSE = document.getElementById("IPOSMSE")

            const M9 = document.getElementById("M9")
            const TMN = document.getElementById("TMN")
            const WHMN = document.getElementById("WHMN")
            const IPOSMN = document.getElementById("IPOSMN")

            //南部
            const S1 = document.getElementById("S1")
            const TSO = document.getElementById("TSO")
            const WHSO = document.getElementById("WHSO")
            const IPOSSO = document.getElementById("IPOSSO")

            const S2 = document.getElementById("S2")
            const TST = document.getElementById("TST")
            const WHST = document.getElementById("WHST")
            const IPOSST = document.getElementById("IPOSST")

            const S3 = document.getElementById("S3")
            const TSTH = document.getElementById("TSTH")
            const WHSTH = document.getElementById("WHSTH")
            const IPOSSTH = document.getElementById("IPOSSTH")

            const S4 = document.getElementById("S4")
            const TSF = document.getElementById("TSF")
            const WHSF = document.getElementById("WHSF")
            const IPOSSF = document.getElementById("IPOSSF")

            const S5 = document.getElementById("S5")
            const TSFI = document.getElementById("TSFI")
            const WHSFI = document.getElementById("WHSFI")
            const IPOSSFI = document.getElementById("IPOSSFI")

            const S6 = document.getElementById("S6")
            const TSS = document.getElementById("TSS")
            const WHSS = document.getElementById("WHSS")
            const IPOSSS = document.getElementById("IPOSSS")

            const S7 = document.getElementById("S7")
            const TSSE = document.getElementById("TSSE")
            const WHSSE = document.getElementById("WHSSE")
            const IPOSSSE = document.getElementById("IPOSSSE")
            obj1 = data;
            obj1.forEach((item) => {
                let dayTime = new Date(item.Time)
                let Time = dayTime.getFullYear() + "-" + (dayTime.getMonth() + 1) + "-" + dayTime.getDate() + " " + dayTime.getHours() + ":" + "0" + dayTime.getMinutes() + ":" + "0" + dayTime.getSeconds()
                if (N1.innerText == item.StationNo) {
                    TNO.innerText = Time
                    WHNO.innerText = item.WaterHeight
                    IPOSNO.innerText = Math.floor(item.PercentageOfStorage) + "%"

                }
                if (N2.innerText == item.StationNo) {
                    TNT.innerText = Time
                    WHNT.innerText = item.WaterHeight
                    IPOSNT.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (N3.innerText == item.StationNo) {
                    TNTH.innerText = Time
                    WHNTH.innerText = item.WaterHeight
                    IPOSTH.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (N4.innerText == item.StationNo) {
                    TNF.innerText = Time
                    WHNF.innerText = item.WaterHeight
                    IPOSNF.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (N5.innerText == item.StationNo) {
                    TNFI.innerText = Time
                    WHNFI.innerText = item.WaterHeight
                    IPOSNFI.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (N6.innerText == item.StationNo) {
                    TNS.innerText = Time
                    WHNS.innerText = item.WaterHeight
                    IPOSNS.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M1.innerText == item.StationNo) {
                    TMO.innerText = Time
                    WHMO.innerText = item.WaterHeight
                    IPOSMO.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M2.innerText == item.StationNo) {
                    TMT.innerText = Time
                    WHMT.innerText = item.WaterHeight
                    IPOSMT.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M3.innerText == item.StationNo) {
                    TMTH.innerText = Time
                    WHMTH.innerText = item.WaterHeight
                    IPOSMTH.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M4.innerText == item.StationNo) {
                    TMF.innerText = Time
                    WHMF.innerText = item.WaterHeight
                    IPOSMF.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M5.innerText == item.StationNo) {
                    TMFI.innerText = Time
                    WHMFI.innerText = item.WaterHeight
                    IPOSMFI.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M6.innerText == item.StationNo) {
                    TMS.innerText = Time
                    WHMS.innerText = item.WaterHeight
                    IPOSMS.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M7.innerText == item.StationNo) {
                    TMSE.innerText = Time
                    WHMSE.innerText = item.WaterHeight
                    IPOSMSE.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (M9.innerText == item.StationNo) {
                    TMN.innerText = Time
                    WHMN.innerText = item.WaterHeight
                    IPOSMN.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S1.innerText == item.StationNo) {
                    TSO.innerText = Time
                    WHSO.innerText = item.WaterHeight
                    IPOSSO.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S2.innerText == item.StationNo) {
                    TST.innerText = Time
                    WHST.innerText = item.WaterHeight
                    IPOSST.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S3.innerText == item.StationNo) {
                    TSTH.innerText = Time
                    WHSTH.innerText = item.WaterHeight
                    IPOSSTH.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S4.innerText == item.StationNo) {
                    TSF.innerText = Time
                    WHSF.innerText = item.WaterHeight
                    IPOSSF.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S5.innerText == item.StationNo) {
                    TSFI.innerText = Time
                    WHSFI.innerText = item.WaterHeight
                    IPOSSFI.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S6.innerText == item.StationNo) {
                    TSS.innerText = Time
                    WHSS.innerText = item.WaterHeight
                    IPOSSS.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
                if (S7.innerText == item.StationNo) {
                    TSSE.innerText = Time
                    WHSSE.innerText = item.WaterHeight
                    IPOSSSE.innerText = Math.floor(item.PercentageOfStorage) + "%"
                }
            })
        }, 100)

    });
// 水庫統計資料
fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setInterval(function () {

            //北部
            const N1= document.getElementById("N1")
            const FWHNO = document.getElementById("FWHNO")
            const IESNO = document.getElementById("IESNO")
            const ARFNO = document.getElementById("ARFNO")
            const INNO = document.getElementById("INNO")

            const N2= document.getElementById("N2")
            const FWHNT = document.getElementById("FWHNT")
            const IESNT = document.getElementById("IESNT")
            const ARFNT = document.getElementById("ARFNT")
            const INNT = document.getElementById("INNT")

            const N3= document.getElementById("N3")
            const FWHNTH = document.getElementById("FWHNTH")
            const IESNTH = document.getElementById("IESNTH")
            const ARFNOTH = document.getElementById("ARFNOTH")
            const INNTH = document.getElementById("INNTH")

            const N4= document.getElementById("N4")
            const FWHNF = document.getElementById("FWHNF")
            const IESNF = document.getElementById("IESNF")
            const ARFNF = document.getElementById("ARFNF")
            const INNF = document.getElementById("INNF")

            const N5= document.getElementById("N5")
            const FWHNFI = document.getElementById("FWHNFI")
            const IESNFI = document.getElementById("IESNFI")
            const ARFNFI = document.getElementById("ARFNFI")
            const INNFI = document.getElementById("INNFI")

            const N6= document.getElementById("N6")
            const FWHNS = document.getElementById("FWHNS")
            const IESNS = document.getElementById("IESNS")
            const ARFNS = document.getElementById("ARFNS")
            const INNS = document.getElementById("INNS")

            //中部
            const M1= document.getElementById("M1")
            const FWHMO = document.getElementById("FWHMO")
            const IESMO = document.getElementById("IESMO")
            const ARFMO = document.getElementById("ARFMO")
            const INMO = document.getElementById("INMO")

            const M2= document.getElementById("M2")
            const FWHMT = document.getElementById("FWHMT")
            const IESMT = document.getElementById("IESMT")
            const ARFMT = document.getElementById("ARFMT")
            const INMT = document.getElementById("INMT")

            const M3= document.getElementById("M3")
            const FWHMTH = document.getElementById("FWHMTH")
            const IESMTH = document.getElementById("IESMTH")
            const ARFMTH = document.getElementById("ARFMTH")
            const INMTH = document.getElementById("INMTH")

            const M4= document.getElementById("M4")
            const FWHMF = document.getElementById("FWHMF")
            const IESMF = document.getElementById("IESMF")
            const ARFMF = document.getElementById("ARFMF")
            const INMF = document.getElementById("INMF")

            const M5= document.getElementById("M5")
            const FWHMFI = document.getElementById("FWHMFI")
            const IESMFI = document.getElementById("IESMFI")
            const ARFMFI = document.getElementById("ARFMFI")
            const INMFI = document.getElementById("INMFI")

            const M6= document.getElementById("M6")
            const FWHMS = document.getElementById("FWHMS")
            const IESMS = document.getElementById("IESMS")
            const ARFMS = document.getElementById("ARFMS")
            const INMS = document.getElementById("INMS")

            const M7= document.getElementById("M7")
            const FWHMSE = document.getElementById("FWHMSE")
            const IESMSE = document.getElementById("IESMSE")
            const ARFMSE = document.getElementById("ARFMSE")
            const INMSE = document.getElementById("INMSE")

            const M9 = document.getElementById("M9")
            const FWHMN = document.getElementById("FWHMN")
            const IESMN = document.getElementById("IESMN")
            const ARFMN = document.getElementById("ARFMN")
            const INMN = document.getElementById("INMN")
             
            //南部
            const S1= document.getElementById("S1")
            const FWHSO = document.getElementById("FWHSO")
            const IESSO = document.getElementById("IESSO")
            const ARFSO = document.getElementById("ARFSO")
            const INSO = document.getElementById("INSO")

            const S2= document.getElementById("S2")
            const FWHST = document.getElementById("FWHST")
            const IESST = document.getElementById("IESST")
            const ARFST = document.getElementById("ARFST")
            const INST = document.getElementById("INST")

            const S3= document.getElementById("S3")
            const FWHSTH = document.getElementById("FWHSTH")
            const IESSTH = document.getElementById("IESSTH")
            const ARFSTH = document.getElementById("ARFSTH")
            const INSTH = document.getElementById("INSTH")

            const S4= document.getElementById("S4")
            const FWHSF = document.getElementById("FWHSF")
            const IESSF = document.getElementById("IESSF")
            const ARFSF = document.getElementById("ARFSF")
            const INSF = document.getElementById("INSF")

            const S5= document.getElementById("S5")
            const FWHSFI = document.getElementById("FWHSFI")
            const IESSFI = document.getElementById("IESSFI")
            const ARFSFI = document.getElementById("ARFSFI")
            const INSFI = document.getElementById("INSFI")

            const S6= document.getElementById("S6")
            const FWHSS = document.getElementById("FWHSS")
            const IESSS = document.getElementById("IESSS")
            const ARFSS = document.getElementById("ARFSS")
            const INSS = document.getElementById("INSS")

            const S7= document.getElementById("S7")
            const FWHSSE = document.getElementById("FWHSSE")
            const IESSSE = document.getElementById("IESSSE")
            const ARFSSE = document.getElementById("ARFSSE")
            const INSSE = document.getElementById("INSSE")
            obj2 = data;
            obj2.forEach((item) => {
                if (N1.innerText == item.StationNo) {
                    FWHNO.innerText = item.FullWaterHeight
                    IESNO.innerText = item.EffectiveCapacity
                    ARFNO.innerText = item.AccumulatedRainfall
                    INNO.innerText = item.InflowTotal
                }
                if (N2.innerText == item.StationNo) {
                    FWHNT.innerText = item.FullWaterHeight
                    IESNT.innerText = item.EffectiveCapacity
                    ARFNT.innerText = item.AccumulatedRainfall
                    INNT.innerText = item.InflowTotal
                }
                if (N3.innerText == item.StationNo) {
                    FWHNTH.innerText = item.FullWaterHeight
                    IESNTH.innerText = item.EffectiveCapacity
                    ARFNOTH.innerText = item.AccumulatedRainfall
                    INNTH.innerText = item.InflowTotal
                }
                if (N4.innerText == item.StationNo) {
                    FWHNF.innerText = item.FullWaterHeight
                    IESNF.innerText = item.EffectiveCapacity
                    ARFNF.innerText = item.AccumulatedRainfall
                    INNF.innerText = item.InflowTotal
                }
                if (N5.innerText == item.StationNo) {
                    FWHNFI.innerText = item.FullWaterHeight
                    IESNFI.innerText = item.EffectiveCapacity
                    ARFNFI.innerText = item.AccumulatedRainfall
                    INNFI.innerText = item.InflowTotal
                }
                if (N6.innerText == item.StationNo) {
                    FWHNS.innerText = item.FullWaterHeight
                    IESNS.innerText = item.EffectiveCapacity
                    ARFNS.innerText = item.AccumulatedRainfall
                    INNS.innerText = item.InflowTotal
                }
                if (M1.innerText == item.StationNo) {
                    FWHMO.innerText = item.FullWaterHeight
                    IESMO.innerText = item.EffectiveCapacity
                    ARFMO.innerText = item.AccumulatedRainfall
                    INMO.innerText = item.InflowTotal
                }
                if (M2.innerText == item.StationNo) {
                    FWHMT.innerText = item.FullWaterHeight
                    IESMT.innerText = item.EffectiveCapacity
                    ARFMT.innerText = item.AccumulatedRainfall
                    INMT.innerText = item.InflowTotal
                }
                if (M3.innerText == item.StationNo) {
                    FWHMTH.innerText = item.FullWaterHeight
                    IESMTH.innerText = item.EffectiveCapacity
                    ARFMTH.innerText = item.AccumulatedRainfall
                    INMTH.innerText = item.InflowTotal
                }
                if (M4.innerText == item.StationNo) {
                    FWHMF.innerText = item.FullWaterHeight
                    IESMF.innerText = item.EffectiveCapacity
                    ARFMF.innerText = item.AccumulatedRainfall
                    INMF.innerText = item.InflowTotal
                }
                if (M5.innerText == item.StationNo) {
                    FWHMFI.innerText = item.FullWaterHeight
                    IESMFI.innerText = item.EffectiveCapacity
                    ARFMFI.innerText = item.AccumulatedRainfall
                    INMFI.innerText = item.InflowTotal
                }
                if (M6.innerText == item.StationNo) {
                    FWHMS.innerText = item.FullWaterHeight
                    IESMS.innerText = item.EffectiveCapacity
                    ARFMS.innerText = item.AccumulatedRainfall
                    INMS.innerText = item.InflowTotal
                }
                if (M7.innerText == item.StationNo) {
                    FWHMSE.innerText = item.FullWaterHeight
                    IESMSE.innerText = item.EffectiveCapacity
                    ARFMSE.innerText = item.AccumulatedRainfall
                    INMSE.innerText = item.InflowTotal
                }
                if (M9.innerText == item.StationNo) {
                    FWHMN.innerText = item.FullWaterHeight
                    IESMN.innerText = item.EffectiveCapacity
                    ARFMN.innerText = item.AccumulatedRainfall
                    INMN.innerText = item.InflowTotal
                }
                if (S1.innerText == item.StationNo) {
                    FWHSO.innerText = item.FullWaterHeight
                    IESSO.innerText = item.EffectiveCapacity
                    ARFSO.innerText = item.AccumulatedRainfall
                    INSO.innerText = item.InflowTotal
                }
                if (S2.innerText == item.StationNo) {
                    FWHST.innerText = item.FullWaterHeight
                    IESST.innerText = item.EffectiveCapacity
                    ARFST.innerText = item.AccumulatedRainfall
                    INST.innerText = item.InflowTotal
                }
                if (S3.innerText == item.StationNo) {
                    FWHSTH.innerText = item.FullWaterHeight
                    IESSTH.innerText = item.EffectiveCapacity
                    ARFSTH.innerText = item.AccumulatedRainfall
                    INSTH.innerText = item.InflowTotal
                }
                if (S4.innerText == item.StationNo) {
                    FWHSF.innerText = item.FullWaterHeight
                    IESSF.innerText = item.EffectiveCapacity
                    ARFSF.innerText = item.AccumulatedRainfall
                    INSF.innerText = item.InflowTotal
                }
                if (S5.innerText == item.StationNo) {
                    FWHSFI.innerText = item.FullWaterHeight
                    IESSFI.innerText = item.EffectiveCapacity
                    ARFSFI.innerText = item.AccumulatedRainfall
                    INSFI.innerText = item.InflowTotal
                }
                if (S6.innerText == item.StationNo) {
                    FWHSS.innerText = item.FullWaterHeight
                    IESSS.innerText = item.EffectiveCapacity
                    ARFSS.innerText = item.AccumulatedRainfall
                    INSS.innerText = item.AccumulatedRainfall
                }
                if (S7.innerText == item.StationNo) {
                    FWHSSE.innerText = item.FullWaterHeight
                    IESSSE.innerText = item.EffectiveCapacity
                    ARFSSE.innerText = item.AccumulatedRainfall
                    INSSE.innerText = item.InflowTotal
                }
            })
        }, 100)
    })


</script>

<template>
    <div class="content">
        <table>
            <tr>
                <th>水庫編號</th>
                <th>水庫名稱</th>
                <th>水情時間</th>
                <th>本日集水區累積降雨量<br>(毫米)</th>
                <th>進流量<br>(cms)</th>
                <th>水位<br>(公尺)</th>
                <th>滿水位<br>(公尺)</th>
                <th>有效蓄水量<br>(萬立方公尺)</th>
                <th>蓄水百分比<br>百分比(%)</th>
            </tr>

            <!-- 北區水庫 -->

            <!-- 北區水庫 -->

            <!--石門水庫-->
            <tr>
                <td id="N1">10201</td>
                <td>石門水庫</td>
                <!--水情時間-->
                <td id="TNO"></td>
                <!--本日集水區累積降雨量(mm)-->
                <td id="ARFNO"></td>
                <!--進流量(cms)-->
                <td id="INNO"></td>
                <!--水位(公尺)-->
                <td id="WHNO"></td>
                <!--滿水位(公尺)-->
                <td id="FWHNO"></td>
                <!--有效蓄水量(萬立方公尺)-->
                <td id="IESNO"></td>
                <!--蓄水百分比(%)-->
                <td id="IPOSNO"></td>
            </tr>
            <!--西勢水庫-->
            <tr>
                <td id="N2">10203</td>
                <td>西勢水庫</td>
                <!--水情時間-->
                <td id="TNT"></td>
                <!--本日集水區累積降雨量(mm)-->
                <td id="ARFNT"></td>
                <!--進流量(cms)-->
                <td id="INNT"></td>
                <!--水位(公尺)-->
                <td id="WHNT"></td>
                <!--滿水位(公尺)-->
                <td id="FWHNT"></td>
                <!--有效蓄水量(萬立方公尺)-->
                <td id="IESNT"></td>
                <!--蓄水百分比(%)-->
                <td id="IPOSNT"></td>
            </tr>
            <!--新山水庫-->
            <tr>
                <td id="N3">10204</td>
                <td>新山水庫</td>
                <!--水情時間-->
                <td id="TNTH"></td>
                <!--本日集水區累積降雨量(mm)-->
                <td id="ARFNOTH"></td>
                <!--進流量(cms)-->
                <td id="INNTH"></td>
                <!--水位(公尺)-->
                <td id="WHNTH"></td>
                <!--滿水位(公尺)-->
                <td id="FWHNTH"></td>
                <!--有效蓄水量(萬立方公尺)-->
                <td id="IESNTH"></td>
                <!--蓄水百分比(%)-->
                <td id="IPOSTH"></td>
            </tr>
            <!--翡翠水庫-->
            <tr>
                <td id="N4">10205</td>
                <td>翡翠水庫</td>
                <!--水情時間 -->
                <td id="TNF"></td>
                <!--本日集水區累積降雨量(mm)-->
                <td id="ARFNF"></td>
                <!--進流量(cms)-->
                <td id="INNF"></td>
                <!--水位(公尺)-->
                <td id="WHNF"></td>
                <!--滿水位(公尺)-->
                <td id="FWHNF"></td>
                <!--有效蓄水量(萬立方公尺)-->
                <td id="IESNF"></td>
                <!--蓄水百分比(%)-->
                <td id="IPOSNF"></td>
            </tr>

            <!--寶山水庫-->
            <tr>

                <td id="N5">10401</td>
                <td>寶山水庫</td>
                <!--水情時間-->
                <td id="TNFI"></td>
                <!--本日集水區累積降雨量(mm)-->
                <td id="ARFNFI"></td>
                <!--進流量(cms)-->
                <td id="INNFI"></td>
                <!--水位(公尺)-->
                <td id="WHNFI"></td>
                <!--滿水位(公尺)-->
                <td id="FWHNFI"></td>
                <!--有效蓄水量(萬立方公尺)-->
                <td id="IESNFI"></td>
                <!--蓄水百分比(%)-->
                <td id="IPOSNFI"></td>
            </tr>

            <!--寶山第二水庫-->
            <tr>

                <td id="N6">10405</td>
                <td>寶山第二水庫</td>
                <!--水情時間-->
                <td id="TNS"></td>
                <!--本日集水區累積降雨量(mm)-->
                <td id="ARFNS"></td>
                <!--進流量(cms)-->
                <td id="INNS"></td>
                <!--水位(公尺)-->
                <td id="WHNS"></td>
                <!--滿水位(公尺)-->
                <td id="FWHNS"></td>
                <!--有效蓄水量(萬立方公尺)-->
                <td id="IESNS"></td>
                <!--蓄水百分比(%)-->
                <td id="IPOSNS"></td>
            </tr>

            <!-- 中區水庫 -->

            <!--永和山水庫 -->
            <tr>
                <td id="M1">10501</td>
                <td>永和山水庫</td>
                <!-- 水情時間-->
                <td id="TMO"></td>
                <!-- 本日集水區累積降雨量(mm)-->
                <td id="ARFMO"></td>
                <!-- 進流量(cms)-->
                <td id="INMO"></td>
                <!-- 水位(公尺)-->
                <td id="WHMO"></td>
                <!-- 滿水位(公尺)-->
                <td id="FWHMO"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMO"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMO"></td>
            </tr>

            <!-- 大埔水庫 -->
            <tr>

                <td id="M2">10503</td>
                <td>大埔水庫</td>
                <!-- 水情時間 -->
                <td id="TMT"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMT"></td>
                <!-- 進流量(cms) -->
                <td id="INMT"></td>
                <!-- 水位(公尺) -->
                <td id="WHMT"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHMT"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMT"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMT"></td>
            </tr>

            <!-- 明德水庫 -->
            <tr>

                <td id="M3">10601</td>
                <td>明德水庫</td>
                <!-- 水情時間 -->
                <td id="TMTH"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMTH"></td>
                <!-- 進流量(cms) -->
                <td id="INMTH"></td>
                <!-- 水位(公尺) -->
                <td id="WHMTH"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHMTH"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMTH"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMTH"></td>
            </tr>

            <!-- 鯉魚潭水庫 -->
            <tr>

                <td id="M4">20101</td>
                <td>鯉魚潭水庫</td>
                <!-- 水情時間 -->
                <td id="TMF"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMF"></td>
                <!-- 進流量(cms) -->
                <td id="INMF"></td>
                <!-- 水位(公尺) -->
                <td id="WHMF"></td>
                <!-- 滿水位(公尺)  -->
                <td id="FWHMF"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMF"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMF"></td>
            </tr>

            <!-- 德基水庫 -->
            <tr>

                <td id="M5">20201</td>
                <td>德基水庫</td>
                <!-- 水情時間 -->
                <td id="TMFI"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMFI"></td>
                <!-- 進流量(cms) -->
                <td id="INMFI"></td>
                <!-- 水位(公尺) -->
                <td id="WHMFI"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHMFI"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMFI"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMFI"></td>
            </tr>

            <!-- 霧社水庫 -->
            <tr>

                <td id="M6">20501</td>
                <td>霧社水庫</td>
                <!-- 水情時間 -->
                <td id="TMS"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMS"></td>
                <!-- 進流量(cms) -->
                <td id="INMS"></td>
                <!-- 水位(公尺) -->
                <td id="WHMS"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHMS"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMS"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMS"></td>
            </tr>

            <!-- 日月潭水庫 -->
            <tr>

                <td id="M7">20502</td>
                <td>日月潭水庫</td>
                <!-- 水情時間 -->
                <td id="TMSE"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMSE"></td>
                <!-- 進流量(cms) -->
                <td id="INMSE"></td>
                <!-- 水位(公尺) -->
                <td id="WHMSE"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHMSE"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMSE"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMSE"></td>
            </tr>


            <!-- 湖山水庫 -->
            <tr>
                <td id="M9">20509</td>
                <td>湖山水庫</td>
                <!-- 水情時間 -->
                <td id="TMN"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFMN"></td>
                <!-- 進流量(cms) -->
                <td id="INMN"></td>
                <!-- 水位(公尺) -->
                <td id="WHMN"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHMN"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESMN"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSMN"></td>
            </tr>

            <!-- 南區水庫 -->

            <!-- 蘭潭水庫 -->
            <tr>
                <td id="S1">30302</td>
                <td>蘭潭水庫</td>
                <!-- 水情時間 -->
                <td id="TSO"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFSO"></td>
                <!-- 進流量(cms) -->
                <td id="INSO"></td>
                <!-- 水位(公尺) -->
                <td id="WHSO"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHSO"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESSO"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSSO"></td>
            </tr>

            <!-- 白河水庫 -->
            <tr>

                <td id="S2">30401</td>
                <td>白河水庫</td>
                <!-- 水情時間 -->
                <td id="TST"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFST"></td>
                <!-- 進流量(cms) -->
                <td id="INST"></td>
                <!-- 水位(公尺) -->
                <td id="WHST"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHST"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESST"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSST"></td>
            </tr>

            <!-- 曾文水庫 -->
            <tr>
                <td id="S3">30502</td>
                <td>曾文水庫</td>
                <!-- 水情時間 -->
                <td id="TSTH"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFSTH"></td>
                <!-- 進流量(cms) -->
                <td id="INSTH"></td>
                <!-- 水位(公尺) -->
                <td id="WHSTH"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHSTH"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESSTH"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSSTH"></td>
            </tr>

            <!-- 烏山頭水庫 -->
            <tr>

                <td id="S4">30501</td>
                <td>烏山頭水庫</td>
                <!-- 水情時間 -->
                <td id="TSF"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFSF"></td>
                <!-- 進流量(cms) -->
                <td id="INSF"></td>
                <!-- 水位(公尺) -->
                <td id="WHSF"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHSF"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESSF"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSSF"></td>
            </tr>

            <!-- 南化水庫 -->
            <tr>

                <td id="S5">30503</td>
                <td>南化水庫</td>
                <!-- 水情時間 -->
                <td id="TSFI"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFSFI"></td>
                <!-- 進流量(cms) -->
                <td id="INSFI"></td>
                <!-- 水位(公尺) -->
                <td id="WHSFI"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHSFI"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESSFI"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSSFI"></td>
            </tr>

            <!-- 阿公店水庫 -->
            <tr>

                <td id="S6">30802</td>
                <td>阿公店水庫</td>
                <!-- 水情時間 -->
                <td id="TSS"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFSS"></td>
                <!-- 進流量(cms) -->
                <td id="INSS"></td>
                <!-- 水位(公尺) -->
                <td id="WHSS"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHSS"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESSS"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSSS"></td>
            </tr>

            <!-- 牡丹水庫 -->
            <tr>

                <td id="S7">31201</td>
                <td>牡丹水庫</td>
                <!-- 水情時間 -->
                <td id="TSSE"></td>
                <!-- 本日集水區累積降雨量(mm) -->
                <td id="ARFSSE"></td>
                <!-- 進流量(cms) -->
                <td id="INSSE"></td>
                <!-- 水位(公尺) -->
                <td id="WHSSE"></td>
                <!-- 滿水位(公尺) -->
                <td id="FWHSSE"></td>
                <!-- 有效蓄水量(萬立方公尺) -->
                <td id="IESSSE"></td>
                <!-- 蓄水百分比(%) -->
                <td id="IPOSSSE"></td>
            </tr>
        </table>

    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 45vw;
    margin-top: 8vmin;

    table {
        width: 90vw;
        height: 40vh;
        margin: auto;

        tr {
            th {
                border: 1px solid black;
                background-color: #AFD3E2;
                opacity: 0.8;
            }

            td {
                text-align: center;
                border: 1px solid black;
                background-color: white;
            }

        }
    }
}
</style>