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

                    obj1 = data;
                    obj1.forEach((item) => {
                        let dayTime = new Date(item.Time)
                        let Time = dayTime.getFullYear() + "-" + (dayTime.getMonth() + 1) + "-" + dayTime.getDate() + " " + dayTime.getHours() + ":" + "0" + dayTime.getMinutes() + ":" + "0" + dayTime.getSeconds()

                        if (M1.getAttribute("value") == item.StationNo) {
                            TMO.innerText = Time
                            WHMO.innerText = item.WaterHeight
                            IPOSMO.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M2.getAttribute("value") == item.StationNo) {
                            TMT.innerText = Time
                            WHMT.innerText = item.WaterHeight
                            IPOSMT.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M3.getAttribute("value") == item.StationNo) {
                            TMTH.innerText = Time
                            WHMTH.innerText = item.WaterHeight
                            IPOSMTH.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M4.getAttribute("value") == item.StationNo) {
                            TMF.innerText = Time
                            WHMF.innerText = item.WaterHeight
                            IPOSMF.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M5.getAttribute("value") == item.StationNo) {
                            TMFI.innerText = Time
                            WHMFI.innerText = item.WaterHeight
                            IPOSMFI.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M6.getAttribute("value") == item.StationNo) {
                            TMS.innerText = Time
                            WHMS.innerText = item.WaterHeight
                            IPOSMS.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M7.getAttribute("value") == item.StationNo) {
                            TMSE.innerText = Time
                            WHMSE.innerText = item.WaterHeight
                            IPOSMSE.innerText = Math.floor(item.PercentageOfStorage) + "%"
                        }
                        if (M9.getAttribute("value") == item.StationNo) {
                            TMN.innerText = Time
                            WHMN.innerText = item.WaterHeight
                            IPOSMN.innerText = Math.floor(item.PercentageOfStorage) + "%"
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

                    //中部
                    const M1 = document.getElementById("M1")
                    const FWHMO = document.getElementById("FWHMO")
                    const IESMO = document.getElementById("IESMO")
                    const ARFMO = document.getElementById("ARFMO")
                    const INMO = document.getElementById("INMO")

                    const M2 = document.getElementById("M2")
                    const FWHMT = document.getElementById("FWHMT")
                    const IESMT = document.getElementById("IESMT")
                    const ARFMT = document.getElementById("ARFMT")
                    const INMT = document.getElementById("INMT")

                    const M3 = document.getElementById("M3")
                    const FWHMTH = document.getElementById("FWHMTH")
                    const IESMTH = document.getElementById("IESMTH")
                    const ARFMTH = document.getElementById("ARFMTH")
                    const INMTH = document.getElementById("INMTH")

                    const M4 = document.getElementById("M4")
                    const FWHMF = document.getElementById("FWHMF")
                    const IESMF = document.getElementById("IESMF")
                    const ARFMF = document.getElementById("ARFMF")
                    const INMF = document.getElementById("INMF")

                    const M5 = document.getElementById("M5")
                    const FWHMFI = document.getElementById("FWHMFI")
                    const IESMFI = document.getElementById("IESMFI")
                    const ARFMFI = document.getElementById("ARFMFI")
                    const INMFI = document.getElementById("INMFI")

                    const M6 = document.getElementById("M6")
                    const FWHMS = document.getElementById("FWHMS")
                    const IESMS = document.getElementById("IESMS")
                    const ARFMS = document.getElementById("ARFMS")
                    const INMS = document.getElementById("INMS")

                    const M7 = document.getElementById("M7")
                    const FWHMSE = document.getElementById("FWHMSE")
                    const IESMSE = document.getElementById("IESMSE")
                    const ARFMSE = document.getElementById("ARFMSE")
                    const INMSE = document.getElementById("INMSE")

                    const M9 = document.getElementById("M9")
                    const FWHMN = document.getElementById("FWHMN")
                    const IESMN = document.getElementById("IESMN")
                    const ARFMN = document.getElementById("ARFMN")
                    const INMN = document.getElementById("INMN")

                    obj2 = data;
                    obj2.forEach((item) => {

                        if (M1.getAttribute("value") == item.StationNo) {
                            FWHMO.innerText = item.FullWaterHeight
                            IESMO.innerText = item.EffectiveCapacity
                            ARFMO.innerText = item.AccumulatedRainfall
                            INMO.innerText = item.InflowTotal
                        }
                        if (M2.getAttribute("value") == item.StationNo) {
                            FWHMT.innerText = item.FullWaterHeight
                            IESMT.innerText = item.EffectiveCapacity
                            ARFMT.innerText = item.AccumulatedRainfall
                            INMT.innerText = item.InflowTotal
                        }
                        if (M3.getAttribute("value") == item.StationNo) {
                            FWHMTH.innerText = item.FullWaterHeight
                            IESMTH.innerText = item.EffectiveCapacity
                            ARFMTH.innerText = item.AccumulatedRainfall
                            INMTH.innerText = item.InflowTotal
                        }
                        if (M4.getAttribute("value") == item.StationNo) {
                            FWHMF.innerText = item.FullWaterHeight
                            IESMF.innerText = item.EffectiveCapacity
                            ARFMF.innerText = item.AccumulatedRainfall
                            INMF.innerText = item.InflowTotal
                        }
                        if (M5.getAttribute("value") == item.StationNo) {
                            FWHMFI.innerText = item.FullWaterHeight
                            IESMFI.innerText = item.EffectiveCapacity
                            ARFMFI.innerText = item.AccumulatedRainfall
                            INMFI.innerText = item.InflowTotal
                        }
                        if (M6.getAttribute("value") == item.StationNo) {
                            FWHMS.innerText = item.FullWaterHeight
                            IESMS.innerText = item.EffectiveCapacity
                            ARFMS.innerText = item.AccumulatedRainfall
                            INMS.innerText = item.InflowTotal
                        }
                        if (M7.getAttribute("value") == item.StationNo) {
                            FWHMSE.innerText = item.FullWaterHeight
                            IESMSE.innerText = item.EffectiveCapacity
                            ARFMSE.innerText = item.AccumulatedRainfall
                            INMSE.innerText = item.InflowTotal
                        }
                        if (M9.getAttribute("value") == item.StationNo) {
                            FWHMN.innerText = item.FullWaterHeight
                            IESMN.innerText = item.EffectiveCapacity
                            ARFMN.innerText = item.AccumulatedRainfall
                            INMN.innerText = item.InflowTotal
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
        <label for="">中區</label>
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

<!-- 中區水庫 -->
            <!--永和山水庫 -->
            <tr>
                <td id="M1" value="10501">10501</td>
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

                <td id="M2" value="10503">10503</td>
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

                <td id="M3" value="10601">10601</td>
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

                <td id="M4" value="20101">20101</td>
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

                <td id="M5" value="20201">20201</td>
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

                <td id="M6" value="20501">20501</td>
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

                <td id="M7" value="20502">20502</td>
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
                <td id="M9" value="20509">20509</td>
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
        </table>
    </div>
</template>

<style lang="scss" scoped>
.content {
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
@media(max-width:992px){
    .content{
        label{
            margin-left: 6vmin;
            font-size: 24pt;
        }
        table{
            tr{
                font-size: 10pt;
            }
        }
    }
}
@media(max-width:768px){
    .content{
        label{
            font-size: 22pt;
        }
    }
}
@media(max-width:576px){
    .content{
        label{
            font-size: 14pt;
        }
        table{
            tr{
                font-size: 5pt;
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
                font-size: 4pt;
            }
        }
    }
}
</style>