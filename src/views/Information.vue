<script>


</script>

<template>
    <table>
        <tr>
            <th>水庫編號</th>
            <th>水庫名稱</th>
            <th>水情時間</th>
            <th>本日集水區累積降雨量(mm)</th>
            <th>進流量(cms)</th>
            <th>水位(公尺)</th>
            <th>滿水位(公尺)</th>
            <th>有效蓄水量(萬立方公尺)</th>
            <th>蓄水百分比(%)</th>
        </tr>

<!-- 北區水庫 -->

        <!--石門水庫-->
        <tr>
            <th>10201</th>
            <th>石門水庫</th>
        <!--水情時間-->
            <th id="TNO"></th>
        <!--本日集水區累積降雨量(mm)-->
            <th id="ARFNO"></th>
        <!--進流量(cms)-->
            <th id="INNO"></th>
        <!--水位(公尺)-->
            <th id="WHNO"></th>
        <!--滿水位(公尺)-->
            <th id="FWHNO"></th>
        <!--有效蓄水量(萬立方公尺)-->
            <th id="IESNO"></th>
        <!--蓄水百分比(%)-->
            <th id="IPOSNO"></th>
        </tr>

        <!--西勢水庫-->
        <tr>
            <th>10203</th>
            <th>西勢水庫</th>
        <!--水情時間-->
            <th id="TNT"></th>
        <!--本日集水區累積降雨量(mm)-->
            <th id="ARFNT"></th>
        <!--進流量(cms)-->
            <th id="INNT"></th>
        <!--水位(公尺)-->
            <th id="WHNT"></th>
        <!--滿水位(公尺)-->
            <th id="FWHNT"></th>
        <!--有效蓄水量(萬立方公尺)-->
            <th id="IESNT"></th>
        <!--蓄水百分比(%)-->
            <th id="IPOSNT"></th>
        </tr>

        <!--新山水庫-->
        <tr>
            <th>10204</th>
            <th>新山水庫</th>
        <!--水情時間-->
            <th id="TNTH"></th>
        <!--本日集水區累積降雨量(mm)-->
            <th id="ARFNOTH"></th>
        <!--進流量(cms)-->
            <th id="INNTH"></th>
        <!--水位(公尺)-->
            <th id="WHNTH"></th>
        <!--滿水位(公尺)-->
            <th id="FWHNTH"></th>
        <!--有效蓄水量(萬立方公尺)-->
            <th id="IESNTH"></th>
        <!--蓄水百分比(%)-->
            <th id="IPOSTH"></th>
        </tr>

        <!--翡翠水庫-->
        <tr>
            <th>10205</th>
            <th>翡翠水庫</th>
        <!--水情時間 -->
            <th id="TNF"></th>
        <!--本日集水區累積降雨量(mm)-->
            <th id="ARFNF"></th>
        <!--進流量(cms)-->
            <th id="INNF"></th>
        <!--水位(公尺)-->
            <th id="WHNF"></th>
        <!--滿水位(公尺)-->
            <th id="FWHNF"></th>
        <!--有效蓄水量(萬立方公尺)-->
            <th id="IESNF"></th>
        <!--蓄水百分比(%)-->
            <th id="IPOSNF"></th>
        </tr>

        <!--寶山水庫-->
        <tr>
            <th>10401</th>
            <th>寶山水庫</th>
        <!--水情時間-->
            <th id="TNFI"></th>
        <!--本日集水區累積降雨量(mm)-->
            <th id="ARFNFI"></th>
        <!--進流量(cms)-->
            <th id="INNFI"></th>
        <!--水位(公尺)-->
            <th id="WHNFI"></th>
        <!--滿水位(公尺)-->
            <th id="FWHNFI"></th>
        <!--有效蓄水量(萬立方公尺)-->
            <th id="IESNFI"></th>
        <!--蓄水百分比(%)-->
            <th id="IPOSNFI"></th>
        </tr>

        <!--寶山第二水庫-->
        <tr>
            <th>10405</th>
            <th>寶山第二水庫</th>
        <!--水情時間-->
            <th id="TNS"></th>
        <!--本日集水區累積降雨量(mm)-->
            <th id="ARFNS"></th>
        <!--進流量(cms)-->
            <th id="INNS"></th>
        <!--水位(公尺)-->
            <th id="WHNS"></th>
        <!--滿水位(公尺)-->
            <th id="FWHNS"></th>
        <!--有效蓄水量(萬立方公尺)-->
            <th id="IESNS"></th>
        <!--蓄水百分比(%)-->
            <th id="IPOSNS"></th>
        </tr>

<!-- 中區水庫 -->

        <!--永和山水庫 -->
        <tr>
            <th>10501</th>
            <th>永和山水庫</th>
        <!-- 水情時間-->
            <th id="TMO"></th>
        <!-- 本日集水區累積降雨量(mm)-->
            <th id="ARFMO"></th>
        <!-- 進流量(cms)-->
            <th id="INMO"></th>
        <!-- 水位(公尺)-->
            <th id="WHMO"></th>
        <!-- 滿水位(公尺)-->
            <th id="FWHMO"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMO"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMO"></th>
        </tr>

        <!-- 大埔水庫 -->
        <tr>
            <th>10503</th>
            <th>大埔水庫</th>
        <!-- 水情時間 -->
            <th id="TMT"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMT"></th>
        <!-- 進流量(cms) -->
            <th id="INMT"></th>
        <!-- 水位(公尺) -->
            <th id="WHMT"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHMT"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMT"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMT"></th>
        </tr>

        <!-- 明德水庫 -->
        <tr>
            <th>10601</th>
            <th>明德水庫</th>
        <!-- 水情時間 -->
            <th id="TMTH"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMTH"></th>
        <!-- 進流量(cms) -->
            <th id="INMTH"></th>
        <!-- 水位(公尺) -->
            <th id="WHMTH"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHMTH"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMTH"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMTH"></th>
        </tr>

        <!-- 鯉魚潭水庫 -->
        <tr>
            <th>20101</th>
            <th>鯉魚潭水庫</th>
        <!-- 水情時間 -->
            <th id="TMF"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMF"></th>
        <!-- 進流量(cms) -->
            <th id="INMF"></th>
        <!-- 水位(公尺) -->
            <th id="WHMF"></th>
        <!-- 滿水位(公尺)  -->
            <th id="FWHMF"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMF"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMF"></th>
        </tr>

        <!-- 德基水庫 -->
        <tr>
            <th>10201</th>
            <th>德基水庫</th>
        <!-- 水情時間 -->
            <th id="TMFI"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMFI"></th>
        <!-- 進流量(cms) -->
            <th id="INMFI"></th>
        <!-- 水位(公尺) -->
            <th id="WHMFI"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHMFI"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMFI"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMFI"></th>
        </tr>

        <!-- 霧社水庫 -->
        <tr>
            <th>20501</th>
            <th>霧社水庫</th>
        <!-- 水情時間 -->
            <th id="TMS"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMS"></th>
        <!-- 進流量(cms) -->
            <th id="INMS"></th>
        <!-- 水位(公尺) -->
            <th id="WHMS"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHMS"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMS"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMS"></th>
        </tr>

        <!-- 日月潭水庫 -->
        <tr>
            <th>20502</th>
            <th>日月潭水庫</th>
        <!-- 水情時間 -->
            <th id="TMSE"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMSE"></th>
        <!-- 進流量(cms) -->
            <th id="INMSE"></th>
        <!-- 水位(公尺) -->
            <th id="WHMSE"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHMSE"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMSE"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMSE"></th>
        </tr>

        <!-- 頭社水庫 -->
        <tr>
            <th>20504</th>
            <th>頭社水庫</th>
        <!-- 水情時間 -->
            <th id="TME"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFME"></th>
        <!-- 進流量(cms) -->
            <th id="INME"></th>
        <!-- 水位(公尺) -->
            <th id="WHME"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHME"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESME"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSME"></th>
        </tr>

        <!-- 湖山水庫 -->
        <tr>
            <th>20509</th>
            <th>湖山水庫</th>
        <!-- 水情時間 -->
            <th id="TMN"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFMN"></th>
        <!-- 進流量(cms) -->
            <th id="INMN"></th>
        <!-- 水位(公尺) -->
            <th id="WHMN"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHMN"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESMN"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSMN"></th>
        </tr>

<!-- 南區水庫 -->        

        <!-- 蘭潭水庫 -->
        <tr>
            <th>30302</th>
            <th>蘭潭水庫</th>
        <!-- 水情時間 -->
            <th id="TSO"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFSO"></th>
        <!-- 進流量(cms) -->
            <th id="INSO"></th>
        <!-- 水位(公尺) -->
            <th id="WHSO"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHSO"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESSO"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSSO"></th>
        </tr>

        <!-- 白河水庫 -->
        <tr>
            <th>30401</th>
            <th>白河水庫</th>
        <!-- 水情時間 -->
            <th id="TST"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFST"></th>
        <!-- 進流量(cms) -->
            <th id="INST"></th>
        <!-- 水位(公尺) -->
            <th id="WHST"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHST"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESST"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSST"></th>
        </tr>

        <!-- 曾文水庫 -->
        <tr>
            <th>30502</th>
            <th>曾文水庫</th>
        <!-- 水情時間 -->
            <th id="TSTH"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFSTH"></th>
        <!-- 進流量(cms) -->
            <th id="INSTH"></th>
        <!-- 水位(公尺) -->
            <th id="WHSTH"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHSTH"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESSTH"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSSTH"></th>
        </tr>

        <!-- 烏山頭水庫 -->
        <tr>
            <th>30501</th>
            <th>烏山頭水庫</th>
        <!-- 水情時間 -->
            <th id="TSF"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFSF"></th>
        <!-- 進流量(cms) -->
            <th id="INSF"></th>
        <!-- 水位(公尺) -->
            <th id="WHSF"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHSF"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESSF"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSSF"></th>
        </tr>

        <!-- 南化水庫 -->
        <tr>
            <th>30503</th>
            <th>南化水庫</th>
        <!-- 水情時間 -->
            <th id="TSFI"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFSFI"></th>
        <!-- 進流量(cms) -->
            <th id="INSFI"></th>
        <!-- 水位(公尺) -->
            <th id="WHSFI"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHSFI"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESSFI"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSSFI"></th>
        </tr>

        <!-- 阿公店水庫 -->
        <tr>
            <th>30802</th>
            <th>阿公店水庫</th>
        <!-- 水情時間 -->
            <th id="TSS"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFSS"></th>
        <!-- 進流量(cms) -->
            <th id="INSS"></th>
        <!-- 水位(公尺) -->
            <th id="WHSS"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHSS"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESSS"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSSS"></th>
        </tr>

        <!-- 牡丹水庫 -->
        <tr>
            <th>31201</th>
            <th>牡丹水庫</th>
        <!-- 水情時間 -->
            <th id="TSSE"></th>
        <!-- 本日集水區累積降雨量(mm) -->
            <th id="ARFSSE"></th>
        <!-- 進流量(cms) -->
            <th id="INSSE"></th>
        <!-- 水位(公尺) -->
            <th id="WHSSE"></th>
        <!-- 滿水位(公尺) -->
            <th id="FWHSSE"></th>
        <!-- 有效蓄水量(萬立方公尺) -->
            <th id="IESSSE"></th>
        <!-- 蓄水百分比(%) -->
            <th id="IPOSSSE"></th>
        </tr>
    </table>
</template>

<style lang="scss" scoped>

</style>