<script>
export default{
    mounted(){   
                    // 北部
const IFTNO = document.getElementById("IFTNO")
const BRFNO = document.getElementById("BRFNO")
const ESNO = document.getElementById("ESNO")
const ECNO = document.getElementById("ECNO")

const IFTNT = document.getElementById("IFTNT")
const BRFNT = document.getElementById("BRFNT")
const ESNT = document.getElementById("ESNT")
const ECNT = document.getElementById("ECNT")

const IFTNTH = document.getElementById("IFTNTH")
const BRFNTH = document.getElementById("BRFTH")
const ESNTH = document.getElementById("ESNTH")
const ECNTH = document.getElementById("ECNTH")

const IFTNF = document.getElementById("IFTNF")
const BRFNF = document.getElementById("BRFNF")
const ESNF = document.getElementById("ESNF")
const ECNF = document.getElementById("ECNF")

const IFTNFI = document.getElementById("IFTNFI")
const BRFNFI = document.getElementById("BRFNFI")
const ESNFI = document.getElementById("ESNFI")
const ECNFI = document.getElementById("ECNFI")

const IFTNS = document.getElementById("IFTNS")
const BRFNS = document.getElementById("BRFNS")
const ESNS = document.getElementById("ESNS")
const ECNS = document.getElementById("ECNS")

// 中部

const IFTMO = document.getElementById("IFTMO")
const BRFMO = document.getElementById("BRFMO")
const ESMO = document.getElementById("ESMO")
const ECMO = document.getElementById("ECMO")

const IFTMT = document.getElementById("IFTMT")
const BRFMT = document.getElementById("BRFMT")
const ESMT = document.getElementById("ESMT")
const ECMT = document.getElementById("ECMT")

const IFTMTH = document.getElementById("IFTMTH")
const BRFMTH = document.getElementById("BRFMTH")
const ESMTH = document.getElementById("ESMTH")
const ECMTH = document.getElementById("ECMTH")

const IFTMF = document.getElementById("IFTMF")
const BRFMF = document.getElementById("BRFMF")
const ESMF = document.getElementById("ESMF")
const ECMF = document.getElementById("ECMF")

const IFTMFI = document.getElementById("IFTMFI")
const BRFMFI = document.getElementById("BRFMFI")
const ESMFI = document.getElementById("ESMFI")
const ECMFI = document.getElementById("ECMFI")

const IFTMS = document.getElementById("IFTMS")
const BRFMS = document.getElementById("BRFMS")
const ESMS = document.getElementById("ESMS")
const ECMS = document.getElementById("ECMS")

const IFTMSE = document.getElementById("IFTMSE")
const BRFMSE = document.getElementById("BRFMSE")
const ESMSE = document.getElementById("ESMSE")
const ECMSE = document.getElementById("ECMSE")

const IFTME = document.getElementById("IFTME")
const BRFME = document.getElementById("BRFME")
const ESME = document.getElementById("ESME")
const ECME = document.getElementById("ECME")

const IFTMN = document.getElementById("IFTMN")
const BRFMN = document.getElementById("BRFMN")
const ESMN = document.getElementById("ESMN")
const ECMN = document.getElementById("ECMN")

// 南部

const IFTSO = document.getElementById("IFTSO")
const BRFSO = document.getElementById("BRFSO")
const ESSO = document.getElementById("ESSO")
const ECSO = document.getElementById("ECSO")

const IFTST = document.getElementById("IFTST")
const BRFST = document.getElementById("BRFST")
const ESST = document.getElementById("ESST")
const ECST = document.getElementById("ECST")

const IFTSTH = document.getElementById("IFTSTH")
const BRFSTH = document.getElementById("BRFSTH")
const ESSTH = document.getElementById("ESSTH")
const ECSTH = document.getElementById("ECSTH")

const IFTSF = document.getElementById("IFTSF")
const BRFSF = document.getElementById("BRFSF")
const ESSF = document.getElementById("ESSF")
const ECSF = document.getElementById("ECSF")

const IFTSFI = document.getElementById("IFTSFI")
const BRFSFI = document.getElementById("BRFSFI")
const ESSFI = document.getElementById("ESSFI")
const ECSFI = document.getElementById("ECSFI")

const IFTSS = document.getElementById("IFTSS")
const BRFSS = document.getElementById("BRFSS")
const ESSS = document.getElementById("ESSS")
const ECSS = document.getElementById("ECSS")

const IFTSSE = document.getElementById("IFTSSE")
const BRFSSE = document.getElementById("BRFSSE")
const ESSSE = document.getElementById("ESSSE")
const ECSSE = document.getElementById("ECSSE")

// 北部

const N1 = document.getElementById("10201")
const N2 = document.getElementById("10203")
const N3 = document.getElementById("10204")
const N4 = document.getElementById("10205")
const N5 = document.getElementById("10401")
const N6 = document.getElementById("10405")

// 中部

const M1 = document.getElementById("10501")
const M2 = document.getElementById("10503")
const M3 = document.getElementById("10601")
const M4 = document.getElementById("20101")
const M5 = document.getElementById("20201")
const M6 = document.getElementById("20501")
const M7 = document.getElementById("20502")
const M8 = document.getElementById("20504")
const M9 = document.getElementById("20509")

// 南部

const S1 = document.getElementById("30302")
const S2 = document.getElementById("30401")
const S3 = document.getElementById("30502")
const S4 = document.getElementById("30501")
const S5 = document.getElementById("30503")
const S6 = document.getElementById("30802")
const S7 = document.getElementById("31201")

            fetch("https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data?size=1000&page=100")
            .then(response=>response.json())
            .then(data=>{
                console.log(data.responseData[0].Capacity);

                    //北部
                    IFTNO.innerText = "本日總進水量:" + data.responseData[0].Inflow
                    ECNO.innerText = "有效庫容量:" + data.responseData[0].Capacity
                    
                    IFTNT.innerText = "本日總進水量:" + data.responseData[1].Inflow
                    ECNT.innerText = "有效庫容量:" + data.responseData[1].Capacity

                    IFTNTH.innerText = "本日總進水量:" + data.responseData[2].Inflow
                    ECNO.innerText = "有效庫容量:" + data.responseData[2].Capacity

                    IFTNF.innerText = "本日總進水量:" + data.responseData[3].Inflow
                    ECNF.innerText = "有效庫容量:" + data.responseData[3].Capacity

                    IFTNFI.innerText = "本日總進水量:" + data.responseData[8].Inflow
                    ECNFI.innerText = "有效庫容量:" + data.responseData[8].Capacity

                    IFTNS.innerText = "本日總進水量:" + data.responseData[10].Inflow
                    ECNS.innerText = "有效庫容量:" + data.responseData[10].Capacity

                    //中部

                    IFTMO.innerText = "本日總進水量:" + data.responseData[11].Inflow
                    ECMO.innerText = "有效庫容量:" + data.responseData[11].Capacity

                    IFTMT.innerText = "本日總進水量:" + data.responseData[12].Inflow
                    ECMT.innerText = "有效庫容量:" + data.responseData[12].Capacity

                    IFTMTH.innerText = "本日總進水量:" + data.responseData[13].Inflow
                    ECMTH.innerText = "有效庫容量:" + data.responseData[13].Capacity

                    IFTMF.innerText = "本日總進水量:" + data.responseData[15].Inflow
                    ECMF.innerText = "有效庫容量:" + data.responseData[15].Capacity

                    IFTMFI.innerText = "本日總進水量:" + data.responseData[16].Inflow
                    ECMFI.innerText = "有效庫容量:" + data.responseData[16].Capacity

                    IFTMS.innerText = "本日總進水量:" + data.responseData[19].Inflow
                    ECMS.innerText = "有效庫容量:" + data.responseData[19].Capacity

                    IFTMSE.innerText = "本日總進水量:" + data.responseData[20].Inflow
                    ECMSE.innerText = "有效庫容量:" + data.responseData[20].Capacity

                    IFTMN.innerText = "本日總進水量:" + data.responseData[24].Inflow
                    ECMN.innerText = "有效庫容量:" + data.responseData[24].Capacity

                    //南部
                    
                    IFTSO.innerText = "本日總進水量:" + data.rsesponseData[26].Inflow
                    ECSO.innerText = "有效庫容量:" + data.responseData[26].Capacity

                    IFTST.innerText = "本日總進水量:" + data.responseData[28].Inflow
                    ECST.innerText = "有效庫容量:" + data.responseData[28].Capacity

                    IFTSF.innerText = "本日總進水量:" + data.responseData[30].Inflow
                    ECSF.innerText = "有效庫容量:" + data.responseData[30].Capacity
                    
                    IFTSTH.innerText = "本日總進水量:" + data.responseData[31].Inflow
                    ECSTH.innerText = "有效庫容量:" + data.responseData[31].Capacity

                    IFTSFI.innerText = "本日總進水量:" + data.responseData[32].Inflow
                    ECSFI.innerText = "有效庫容量:" + data.responseData[32].Capacity

                    IFTSS.innerText = "本日總進水量:" + data.responseData[37].Inflow
                    ECSS.innerText = "有效庫容量:" + data.responseData[37].Capacity

                    IFTSSE.innerText = "本日總進水量:" + data.responseData[41].Inflow
                    ECSSE.innerText = "有效庫容量:" + data.responseData[41].Capacity


})
    }
}

</script>

<template>
<!-- 搜尋欄 -->
    <div class="search" id="search">
        <input type="text" placeholder="開始搜尋">
        <button type="button">搜尋</button>

        <select class="form-control" onchange="location.href = this.options[this.selectedIndex].value">
    <option selected="" value="#search">----請選擇地區----</option>
    <option value="#north">北區</option>
    <option value="#middle">中區</option>
    <option value="#south">南區</option>

  </select>
    </div>
    <div class="content">
        

<!-- 北區 -->
    <label for="">北區</label>
        <div class="north" id="north">
            <!-- 石門水庫 -->
            <div class="northOne">
                <div class="nameOne">
                    <h2 id="10201" value="石門水庫">石門水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNO"></p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNO">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNO"></p>
                    </div>
                </div>
            </div>

            <!-- 西勢水庫 -->
            <div class="northTwo">
                <div class="nameTwo">
                    <h2 id="10203" value="西勢水庫">西勢水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNT">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNT">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNT">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNT">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNT"></p>
                    </div>
                </div>
            </div>

            <!-- 新山水庫 -->
            <div class="northThree">
                <div class="nameThree">
                    <h2 id="10204" value="新山水庫">新山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNTH">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNTH">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNTH">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNTH">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNTH"></p>
                    </div>
                </div>
            </div>

            <!-- 翡翠水庫 -->
            <div class="northFour">
                <div class="nameFour">
                    <h2 id="10205" value="翡翠水庫">翡翠水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNF">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNF">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNF">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNF">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNF"></p>
                    </div>
                </div>
            </div>

            <!-- 寶山水庫 -->
                <div class="northFive">
                <div class="nameFive">
                    <h2 id="10401" value="寶山水庫">寶山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNFI">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNFI">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNFI">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNFI">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNFI"></p>
                    </div>
                </div>
            </div>

            <!-- 寶山第二水庫 -->
            <div class="northSix">
                <div class="nameSix">
                    <h2 id="10405" value="寶山第二水庫">寶山第二水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTNS">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFNS">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESNS">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECNS">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSNS"></p>
                    </div>
                </div>
            </div>
        </div>
<!-- 中區 -->
    <label for="">中區</label>
        <div class="middle" id="middle">
            <!-- 永和山水庫 -->
            <div class="middleOne">
                <div class="nameOneM">
                    <h2 id="10501" value="永和山水庫">永和山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMO">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMO">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMO"></p>
                    </div>
                </div>
                
            </div>

            <!-- 大埔水庫 -->
            <div class="middleTwo">
                <div class="nameTwoM">
                    <h2 id="10503" value="大埔水庫">大埔水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMT">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMT">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMT">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMT">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMW"></p>
                    </div>
                </div> 
            </div>

            <!-- 明德水庫 -->
            <div class="middleThree">
                <div class="nameThreeM">
                    <h2 id="10601" value="明德水庫">明德水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMTH">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMTH">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMTH">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMTH">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMT"></p>
                    </div>
                </div> 
            </div>

            <!-- 鯉魚潭水庫 -->
            <div class="middleFour">
                <div class="nameFourM">
                    <h2 id="20101" value="鯉魚潭水庫">鯉魚潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMF">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMF">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMF">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMF">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMF"></p>
                    </div>
                </div> 
            </div>

            <!-- 德基水庫 -->
            <div class="middleFive">
                <div class="nameFiveM">
                    <h2 id="20201" value="德基水庫">德基水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMFI">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMFI">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMFI">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMFI">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMFI"></p>
                    </div>
                </div> 
            </div>

            <!-- 霧社水庫 -->
            <div class="middleSix">
                <div class="nameSixM">
                    <h2 id="20501" value="霧社水庫">霧社水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMS">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMS">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMS">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMS">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMS"></p>
                    </div>
                </div> 
            </div>

            <!-- 日月潭水庫 -->
            <div class="middleSeven">
                <div class="nameSevenM">
                    <h2 id="20502" value="日月潭水庫">日月潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMSE">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMSE">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMSE">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMSE">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMSE"></p>
                    </div>
                </div> 
            </div>

            <!-- 頭社水庫 -->
            <div class="middleEight">
                <div class="nameEightM">
                    <h2 id="20504" value="頭社水庫">頭社水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTME">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFME">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESME">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECME">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSME"></p>
                    </div>
                </div> 
            </div>

            <!-- 湖山水庫 -->
            <div class="middleNine">
                <div class="nameNineM">
                    <h2 id="20509" value="湖山水庫">湖山水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTMN">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFMN">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESMN">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECMN">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSMN"></p>
                    </div>
                </div> 
            </div>
        </div>
<!-- 南區-->
    <label for="">南區</label>
        <div class="south" id="south">
        <!-- 蘭潭水庫 -->
        <div class="southOne">
                <div class="nameOneS">
                    <h2 id="30302" value="蘭潭水庫">蘭潭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSO">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSO">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSO">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSO">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSO"></p>
                    </div>
                </div>
            </div>

        <!-- 白河水庫 -->
        <div class="southTwo">
                <div class="nameTwoS">
                    <h2 id="30401" value="白河水庫">白河水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTST">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFST">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESST">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECST">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSST"></p>
                    </div>
                </div>
            </div>

        <!-- 曾文水庫 -->
        <div class="southThree">
                <div class="nameThreeS">
                    <h2 id="30502" value="曾文水庫">曾文水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSTH">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSTH">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSTH">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECTH">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSTH"></p>
                    </div>
                </div>
            </div>

        <!-- 烏山頭水庫 -->
        <div class="southFour">
                <div class="nameFourS">
                    <h2 id="30501" value="烏山頭水庫">烏山頭水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSF">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSF">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSF">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSF">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSF"></p>
                    </div>
                </div>
            </div>

        <!-- 南化水庫 -->
        <div class="southFive">
                <div class="nameFiveS">
                    <h2 id="30503" value="南化水庫">南化水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSFI">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSFI">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSFI">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSFI">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSFI"></p>
                    </div>
                </div>
            </div>

        <!-- 阿公店水庫 -->
        <div class="southSix">
                <div class="nameSixS">
                    <h2 id="30802" value="阿公店水庫">阿公店水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSS">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSS">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSS">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSS">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSS"></p>
                    </div>
                </div>
            </div>

        <!-- 牡丹水庫 -->
        <div class="southSeven">
                <div class="nameSevenS">
                    <h2 id="31201" value="牡丹水庫">牡丹水庫</h2>
                </div>
            <!-- 本日累積雨量，Inflow Total -->
                <p id="IFTSSE">本日累積雨量</p>
            <!-- 昨日累積降雨量，Basin Rain Fall -->
                <p id="BRFSSE">昨日累積降雨量</p>
            <!-- 有效蓄水量，Effective Storage -->
                <p id="ESSSE">有效蓄水量</p>
            <!-- 有效庫容量，Effective Capacity -->
                <p id="ECSSE">有效庫容量</p>
            <!-- 蓄水比，Percentage Of Storage -->
                <div class="quan">
                    <div class="shui">
                        <p id="POSSE"></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
//搜尋欄
    .search{
        text-align: center;
        margin-bottom: 8vmin;
        input{
            width: 40vmin;
            height: 5vmin;
            border-radius: 5px;
            border-style: none;
            padding-left: 2vmin;
        }

        button{
            width: 10vmin;
            height: 5vmin;
            margin-left: 3vmin;
            border-radius: 5px;
            color: gray;
            border-style: none;
            background-color: aliceblue;
            box-shadow: 3px 3px 3px gray;

            &:hover{
                background-color: gray;
                color: aliceblue;
            }
            &:active{
                background-color: aliceblue;
                color: gray;
                }
            }
    }
//北中南水庫
    .content{
    width: 100vw;
    height: 100vh;

    label{
            font-size: 28pt;
            margin-left: 11vmin;
            color: aliceblue;
        }
        
//北部區域
    .north{
        width: 90vw;
        height: 104vh;
        margin: auto;
        border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;

        .quan {
        position: relative;
        width: 18vmin;
        height: 18vmin;
        border-radius: 50%;
        border: 3px solid aliceblue;
        box-shadow: 0 0 0 3px gray;
        }

        .shui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(23, 106, 201);
        border-radius: 50%;
        overflow: hidden;
        }   

        .shui::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 40%;
        background-color: aliceblue;
        animation: shi 5s linear infinite;
        }

        @keyframes shi {
        0% {
        transform: translate(-50%, -65%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -65%) rotate(360deg);
        }
        }

        .shui::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 42%;
        background-color: rgb(240, 228, 228, 0.2);
        animation: xu 7s linear infinite;
        }

        @keyframes xu {
        0% {
        transform: translate(-50%, -60%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -60%) rotate(360deg);
        }
        }

//石門水庫
        .northOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameOne{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;            
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//西勢水庫
        .northTwo{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameTwo{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//新山水庫
        .northThree{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameThree{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//翡翠水庫
        .northFour{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameFour{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//寶山水庫
        .northFive{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameFive{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//寶山第二水庫
        .northSix{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameSix{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
    }

//中部區域
    .middle{
        width: 90vw;
        height: 157vh;
        margin: auto;
        border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;

        .quan {
        position: relative;
        width: 18vmin;
        height: 18vmin;
        border-radius: 50%;
        border: 3px solid aliceblue;
        box-shadow: 0 0 0 3px gray;
        }

        .shui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(23, 106, 201);
        border-radius: 50%;
        overflow: hidden;
        }   

        .shui::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 40%;
        background-color: aliceblue;
        animation: shi 5s linear infinite;
        }

        @keyframes shi {
        0% {
        transform: translate(-50%, -65%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -65%) rotate(360deg);
        }
        }

        .shui::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 42%;
        background-color: rgb(240, 228, 228, 0.2);
        animation: xu 7s linear infinite;
        }

        @keyframes xu {
        0% {
        transform: translate(-50%, -60%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -60%) rotate(360deg);
        }
        }
        }

//永和山水庫
        .middleOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameOneM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;            
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//大埔水庫
        .middleTwo{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameTwoM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//明德水庫
        .middleThree{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameThreeM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//鯉魚潭水庫
        .middleFour{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameFourM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//德基水庫
        .middleFive{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameFiveM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//霧社水庫
        .middleSix{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameSixM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//日月潭水庫
        .middleSeven{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameSevenM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//頭社水庫
        .middleEight{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameEightM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//湖山水庫
        .middleNine{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameNineM{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//南部區域
    .south{
        width: 90vw;
        height: 105vh;
        margin: auto;
        border: 1px solid black;
        display: flex;
        gap: 3vmin;
        flex-wrap: wrap;

        
        .quan {
        position: relative;
        width: 18vmin;
        height: 18vmin;
        border-radius: 50%;
        border: 3px solid aliceblue;
        box-shadow: 0 0 0 3px gray;
        }

        .shui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(23, 106, 201);
        border-radius: 50%;
        overflow: hidden;
        }   

        .shui::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 40%;
        background-color: aliceblue;
        animation: shi 5s linear infinite;
        }

        @keyframes shi {
        0% {
        transform: translate(-50%, -65%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -65%) rotate(360deg);
        }
        }

        .shui::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 150%;
        border-radius: 42%;
        background-color: rgb(240, 228, 228, 0.2);
        animation: xu 7s linear infinite;
        }

        @keyframes xu {
        0% {
        transform: translate(-50%, -60%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -60%) rotate(360deg);
        }
        }

//蘭潭水庫
        .southOne{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameOneS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;            
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//白河水庫
        .southTwo{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameTwoS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//曾文水庫
        .southThree{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameThreeS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//烏山頭水庫
        .southFour{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameFourS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//南化水庫
        .southFive{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameFiveS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
//阿公店水庫
        .southSix{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameSixS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }

//牡丹水庫
        .southSeven{
            width: 20vw;
            height: 50vh;
            background-color: aliceblue;
            border-radius: 5px;
            .nameSevenS{
                width: 20vw;
                height: 7vh;
                border-radius: 5px;
                background-color: lightslategray;
                color: aliceblue;
                
                h2{
                    text-align: center;
                    margin: 0;
                    padding-top: 1vmin;
                }
            }
        }
    }
    }




</style>
