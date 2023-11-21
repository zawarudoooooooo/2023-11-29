<script>


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
                <td>石門水庫</td>
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
                <td>西勢水庫</td>
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
                <td>新山水庫</td>
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
                <td>翡翠水庫</td>
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
                <td>寶山水庫</td>
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
                <td>寶山第二水庫</td>
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
                <td>永和山水庫</td>
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
                <td>大埔水庫</td>
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
                <td>明德水庫</td>
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
                <td>鯉魚潭水庫</td>
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
                <td>德基水庫</td>
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
                <td>霧社水庫</td>
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
                <td>日月潭水庫</td>
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
                <td>湖山水庫</td>
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
                <td>蘭潭水庫</td>
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
                <td>白河水庫</td>
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
                <td>曾文水庫</td>
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
                <td>烏山頭水庫</td>
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
                <td>南化水庫</td>
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
                <td>阿公店水庫</td>
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
                <td>牡丹水庫</td>
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