<script>
import InformationSelect from '../components/InformationSelect.vue';
export default {
    mounted() {
        let obj1 = [];
        let obj2 = [];
        // 水庫即時資料
        fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setInterval(function () {

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

                        if (S1.getAttribute("value") == item.StationNo) {
                            TSO.innerText = Time
                            WHSO.innerText = item.WaterHeight
                            IPOSSO.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (S2.getAttribute("value") == item.StationNo) {
                            TST.innerText = Time
                            WHST.innerText = item.WaterHeight
                            IPOSST.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (S3.getAttribute("value") == item.StationNo) {
                            TSTH.innerText = Time
                            WHSTH.innerText = item.WaterHeight
                            IPOSSTH.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (S4.getAttribute("value") == item.StationNo) {
                            TSF.innerText = Time
                            WHSF.innerText = item.WaterHeight
                            IPOSSF.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (S5.getAttribute("value") == item.StationNo) {
                            TSFI.innerText = Time
                            WHSFI.innerText = item.WaterHeight
                            IPOSSFI.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (S6.getAttribute("value") == item.StationNo) {
                            TSS.innerText = Time
                            WHSS.innerText = item.WaterHeight
                            IPOSSS.innerText = Math.floor(item.PercentageOfStorage) + "%"
                            ARFSS.innerText = item.AccumulatedRainfall
                        }
                        if (S7.getAttribute("value") == item.StationNo) {
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

                    //南部
                    const S1 = document.getElementById("S1")
                    const FWHSO = document.getElementById("FWHSO")
                    const IESSO = document.getElementById("IESSO")
                    const ARFSO = document.getElementById("ARFSO")
                    const INSO = document.getElementById("INSO")

                    const S2 = document.getElementById("S2")
                    const FWHST = document.getElementById("FWHST")
                    const IESST = document.getElementById("IESST")
                    const ARFST = document.getElementById("ARFST")
                    const INST = document.getElementById("INST")

                    const S3 = document.getElementById("S3")
                    const FWHSTH = document.getElementById("FWHSTH")
                    const IESSTH = document.getElementById("IESSTH")
                    const ARFSTH = document.getElementById("ARFSTH")
                    const INSTH = document.getElementById("INSTH")

                    const S4 = document.getElementById("S4")
                    const FWHSF = document.getElementById("FWHSF")
                    const IESSF = document.getElementById("IESSF")
                    const ARFSF = document.getElementById("ARFSF")
                    const INSF = document.getElementById("INSF")

                    const S5 = document.getElementById("S5")
                    const FWHSFI = document.getElementById("FWHSFI")
                    const IESSFI = document.getElementById("IESSFI")
                    const ARFSFI = document.getElementById("ARFSFI")
                    const INSFI = document.getElementById("INSFI")

                    const S6 = document.getElementById("S6")
                    const FWHSS = document.getElementById("FWHSS")
                    const IESSS = document.getElementById("IESSS")
                    const ARFSS = document.getElementById("ARFSS")
                    const INSS = document.getElementById("INSS")

                    const S7 = document.getElementById("S7")
                    const FWHSSE = document.getElementById("FWHSSE")
                    const IESSSE = document.getElementById("IESSSE")
                    const ARFSSE = document.getElementById("ARFSSE")
                    const INSSE = document.getElementById("INSSE")
                    obj2 = data;
                    obj2.forEach((item) => {

                        if (S1.getAttribute("value") == item.StationNo) {
                            FWHSO.innerText = item.FullWaterHeight
                            IESSO.innerText = item.EffectiveCapacity
                            ARFSO.innerText = item.AccumulatedRainfall
                            INSO.innerText = item.InflowTotal
                        }
                        if (S2.getAttribute("value") == item.StationNo) {
                            FWHST.innerText = item.FullWaterHeight
                            IESST.innerText = item.EffectiveCapacity
                            ARFST.innerText = item.AccumulatedRainfall
                            INST.innerText = item.InflowTotal
                        }
                        if (S3.getAttribute("value") == item.StationNo) {
                            FWHSTH.innerText = item.FullWaterHeight
                            IESSTH.innerText = item.EffectiveCapacity
                            ARFSTH.innerText = item.AccumulatedRainfall
                            INSTH.innerText = item.InflowTotal
                        }
                        if (S4.getAttribute("value") == item.StationNo) {
                            FWHSF.innerText = item.FullWaterHeight
                            IESSF.innerText = item.EffectiveCapacity
                            ARFSF.innerText = item.AccumulatedRainfall
                            INSF.innerText = item.InflowTotal
                        }
                        if (S5.getAttribute("value") == item.StationNo) {
                            FWHSFI.innerText = item.FullWaterHeight
                            IESSFI.innerText = item.EffectiveCapacity
                            ARFSFI.innerText = item.AccumulatedRainfall
                            INSFI.innerText = item.InflowTotal
                        }
                        if (S6.getAttribute("value") == item.StationNo) {
                            FWHSS.innerText = item.FullWaterHeight
                            IESSS.innerText = item.EffectiveCapacity
                            INSS.innerText = item.InflowTotal
                        }
                        if (S7.getAttribute("value") == item.StationNo) {
                            FWHSSE.innerText = item.FullWaterHeight
                            IESSSE.innerText = item.EffectiveCapacity
                            ARFSSE.innerText = item.AccumulatedRainfall
                            INSSE.innerText = item.InflowTotal
                        }
                    })
                }, 100)
            })
    },
    components:{
        InformationSelect
    }
}
</script>

<template>
<!-- 選擇區域 -->
    <div class="selectArea">
        <InformationSelect />
    </div>
    <div class="content">
        <label for="">南區</label>
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
<!-- 南區水庫 -->
        <!-- 蘭潭水庫 -->
            <tr>
                <td id="S1" value="30302">30302</td>
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
                <td id="S2" value="30401">30401</td>
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
                <td id="S3" value="30502">30502</td>
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
                <td id="S4" value="30501">30501</td>
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
                <td id="S5" value="30503">30503</td>
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
                <td id="S6" value="30802">30802</td>
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
                <td id="S7" value="31201">31201</td>
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
    height: 50vh;
    margin-top: 2vmin;

    label{
            font-size: 28pt;
            margin-left: 11vmin;
            color: #146C94;
            border-left: 5px solid #146C94;
            line-height: 1.1em;
            padding-left: 2vmin;
    }

    table {
        width: 90vw;
        margin: auto;
        margin-top: 2vmin;

        tr {
            th {
                border: 1px solid black;
                background-color: lightblue;
                opacity: 0.7;
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