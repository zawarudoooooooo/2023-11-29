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

                    obj1 = data;
                    obj1.forEach((item) => {
                        let dayTime = new Date(item.Time)
                        let Time = dayTime.getFullYear() + "-" + (dayTime.getMonth() + 1) + "-" + dayTime.getDate() + " " + dayTime.getHours() + ":" + "0" + dayTime.getMinutes() + ":" + "0" + dayTime.getSeconds()
                        if (N1.getAttribute("value") == item.StationNo) {
                            TNO.innerText = Time
                            WHNO.innerText = item.WaterHeight
                            IPOSNO.innerText = Math.floor(item.PercentageOfStorage) + "%"

                        }
                        if (N2.getAttribute("value") == item.StationNo) {
                            TNT.innerText = Time
                            WHNT.innerText = item.WaterHeight
                            IPOSNT.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (N3.getAttribute("value") == item.StationNo) {
                            TNTH.innerText = Time
                            WHNTH.innerText = item.WaterHeight
                            IPOSTH.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (N4.getAttribute("value") == item.StationNo) {
                            TNF.innerText = Time
                            WHNF.innerText = item.WaterHeight
                            IPOSNF.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (N5.getAttribute("value") == item.StationNo) {
                            TNFI.innerText = Time
                            WHNFI.innerText = item.WaterHeight
                            IPOSNFI.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (N6.getAttribute("value") == item.StationNo) {
                            TNS.innerText = Time
                            WHNS.innerText = item.WaterHeight
                            IPOSNS.innerText = Math.floor(item.PercentageOfStorage) + "%"
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
                    const N1 = document.getElementById("N1")
                    const FWHNO = document.getElementById("FWHNO")
                    const IESNO = document.getElementById("IESNO")
                    const ARFNO = document.getElementById("ARFNO")
                    const INNO = document.getElementById("INNO")

                    const N2 = document.getElementById("N2")
                    const FWHNT = document.getElementById("FWHNT")
                    const IESNT = document.getElementById("IESNT")
                    const ARFNT = document.getElementById("ARFNT")
                    const INNT = document.getElementById("INNT")

                    const N3 = document.getElementById("N3")
                    const FWHNTH = document.getElementById("FWHNTH")
                    const IESNTH = document.getElementById("IESNTH")
                    const ARFNOTH = document.getElementById("ARFNOTH")
                    const INNTH = document.getElementById("INNTH")

                    const N4 = document.getElementById("N4")
                    const FWHNF = document.getElementById("FWHNF")
                    const IESNF = document.getElementById("IESNF")
                    const ARFNF = document.getElementById("ARFNF")
                    const INNF = document.getElementById("INNF")

                    const N5 = document.getElementById("N5")
                    const FWHNFI = document.getElementById("FWHNFI")
                    const IESNFI = document.getElementById("IESNFI")
                    const ARFNFI = document.getElementById("ARFNFI")
                    const INNFI = document.getElementById("INNFI")

                    const N6 = document.getElementById("N6")
                    const FWHNS = document.getElementById("FWHNS")
                    const IESNS = document.getElementById("IESNS")
                    const ARFNS = document.getElementById("ARFNS")
                    const INNS = document.getElementById("INNS")

                    obj2 = data;
                    obj2.forEach((item) => {
                        if (N1.getAttribute("value") == item.StationNo) {
                            FWHNO.innerText = item.FullWaterHeight
                            IESNO.innerText = item.EffectiveCapacity
                            ARFNO.innerText = item.AccumulatedRainfall
                            INNO.innerText = item.InflowTotal
                        }
                        if (N2.getAttribute("value") == item.StationNo) {
                            FWHNT.innerText = item.FullWaterHeight
                            IESNT.innerText = item.EffectiveCapacity
                            ARFNT.innerText = item.AccumulatedRainfall
                            INNT.innerText = item.InflowTotal
                        }
                        if (N3.getAttribute("value") == item.StationNo) {
                            FWHNTH.innerText = item.FullWaterHeight
                            IESNTH.innerText = item.EffectiveCapacity
                            ARFNOTH.innerText = item.AccumulatedRainfall
                            INNTH.innerText = item.InflowTotal
                        }
                        if (N4.getAttribute("value") == item.StationNo) {
                            FWHNF.innerText = item.FullWaterHeight
                            IESNF.innerText = item.EffectiveCapacity
                            ARFNF.innerText = item.AccumulatedRainfall
                            INNF.innerText = item.InflowTotal
                        }
                        if (N5.getAttribute("value") == item.StationNo) {
                            FWHNFI.innerText = item.FullWaterHeight
                            IESNFI.innerText = item.EffectiveCapacity
                            ARFNFI.innerText = item.AccumulatedRainfall
                            INNFI.innerText = item.InflowTotal
                        }
                        if (N6.getAttribute("value") == item.StationNo) {
                            FWHNS.innerText = item.FullWaterHeight
                            IESNS.innerText = item.EffectiveCapacity
                            ARFNS.innerText = item.AccumulatedRainfall
                            INNS.innerText = item.InflowTotal
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
        <label for="">北區</label>
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
            <!--石門水庫-->
            <tr>
                <td id="N1" value="10201">10201</td>
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
                <td id="N2" value="10203">10203</td>
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
                <td id="N3" value="10204">10204</td>
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
                <td id="N4" value="10205">10205</td>
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

                <td id="N5" value="10401">10401</td>
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

                <td id="N6" value="10405">10405</td>
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