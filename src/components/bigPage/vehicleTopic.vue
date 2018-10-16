<style lang="scss" scoped>
  .contentPad {
    padding: 6px 6px 8px 6px;
  }
  .pageLeft {
    p {
      text-align:center;
    }
  }
  .todayMile_bar {
    height:200px;
    width:220px;
    position: absolute;
    top:-70px;
    left:0px
  }
  .totalMile_bar {
    height:200px;
    width:200px;
    position: absolute;
    top:-70px;
    right:0px
  }
  .mix_bar {
    width: 470px;
    height: 240px;
    margin-top: 5px;
  }
  .online_pie {
    height: 220px;
    width:400px;
  }
  .online_line {
    height: 240px;
    width:500px;
  }
  .heat_map {
    width: 950px;
    height: 410px;
    display: block;
  }
  .heat_ProvinceMap {
    width: 950px;
    height: 410px;
    margin:auto;
    // position:absolute;
    // top:0;
    display: none;
  }
  .cityMile_bar {
    width: 950px;
    height: 240px;
  }
  .left_text {    // 标题颜色
    color: rgba(224,249,253,0.5);
    font-size: 16px;
    line-height: 35px;
  }
  .left_show_text {   // 数值
    font-family:Arial-BoldMT;
    color: #E3E9ED;
    font-size: 36px;
    font-weight:bold;
    height:40px;
    line-height: 40px;
  }
  .left_company_text {  // 左侧单位
    color: rgba(224,249,253,0.5);
    font-size: 14px;
    line-height: 35px;
  }
  .title_text {
    color: #DAEBF6;
    font-size: 16px;
    margin-left: 15px;
    margin-top:5px;
  }
  .right_show_text {   // 数值
    color: #E3E9ED;
    font-size: 28px;
  }
  .rowStyle {
    // margin-top:10px;
    background-color: #202D40;
    .number {
           display:inline-block;
           margin-right:5px;
           margin-left:5px;
           border-radius: 50px;
            width:20px;
            height:20px;
            line-height:20px;
            color:white;
            text-align:center;
        }
        .NumZero {
           .numberNo {
            background:#912a57;
        }
        }
        .NumOne {
           .numberNo {
            background:#aa4f3d;
        }
       }
        .NumTwo {
           .numberNo {
            background:#CAB072;
        }
       }
        .numberNo {
            background:#317DD3;
        }
  }
  .rankStyle {
    height:31px;
    line-height:31px;
    margin-top:13px;
    // margin:auto;
    width:97%;
    background:rgba(218,235,246,0.2);
    color:rgba(224,249,253,0.5);
    .vinRank {
      display:inline-block;
     // margin-right:7%;
      // width:100px;
    }
    span:nth-child(3),span:nth-child(4){
    //  float: right;
      margin-left:58px;
    }
  }
  .treePalent {
    // border-bottom: 1px solid #E0FDF9;
    p:first-child {
      line-height: 30px;
       font-size:16px;
       margin-left: 10%;
      font-family:MicrosoftYaHei;
      color:rgba(224,249,253,0.5);
    }
    p:nth-child(2) {
      height: 40px;
      line-height: 40px;
      display:inline-block;
      font-size:28px;
      font-weight:bold;
      margin-left: 10%;
      font-family:Arial-BoldMT;
      color:rgba(227,233,237,1);
    }
    p:nth-child(3) {
      line-height: 30px;
      font-size:14px;
      font-weight:bold;
      margin-left: 13%;

    }
    .fine {
       color: #CFE2E5;
       text-align:center;
       line-height: 30px;
       span {
         color:#87E8F6;
         font-size:16px;
       }
    }
    span {
      // margin-left: 30%;
      font-family:MicrosoftYaHei;
      color:rgba(224,249,253,0.5);
    }
  }
  .greenSize {
    margin-left: -40%;
    img {
      width: 200px;
      //  height: 129px;
      position: absolute;
      bottom:0px;
      right: 0;
    }
  }
  .totalData {
     width: 35%;
   position:absolute;
   z-index: 9999;
   left:20px;
   top:30px;
   .status {
    //  width: 270px;
     margin-top:10px;
   //  margin-bottom: 10px;
    //  padding: 10px;
    //  border-radius:5px;
     line-height:20px;
     p {
       display:inline-block;
       width: 20px;
     }
    //  div {
    //    display:inline-block;
    //    width: 50px;
    //    height: 50px;
    //    line-height:50px;
    //    background:rgba(97,105,108,0.3);
    //    color: #FFFFFF;
    //    text-align:center;
    //    font-size:48px;
    //     margin-right: 5px;
    //  }
   }
 }
 .otherStatus {
   margin-top: -20px;
   .borderLine:after {
     content:'';
     border-right:1px solid rgba(224,249,253,0.5);
     border-bottom:1px solid rgba(224,249,253,0.5);
     width: 57px;
     height: 60px;
     position: absolute;
     right: -2px;
     bottom:0;
   }
   .drivingLine:after {
     content:'';
     border-bottom:1px solid rgba(224,249,253,0.5);
     width: 57px;
     position: absolute;
     left:0;
     bottom:0;
   }
   .standbyLine:after {
     content:'';
     border-right:1px solid rgba(224,249,253,0.5);
     height: 55px;
     position: absolute;
     right:-2px;
     top:0;
   }
   div {
     position: relative;
     display:inline-block;
     width:70px;
     height: 60px;
     line-height: 30px;
     background:#202D40;
     text-align:center;
     border-radius:5px;
     p {
       font-size: 16px;
     }
     p:nth-child(2n-1) {
       color:#88EAF8;
     }
   }
 }
 .dealer {
   background:#202D40;
   width: 170px;
   font-size: 14px;
   margin-top:5px;
   p {
     height:30px;
     color:#E0F9FD;
     span {
       float:right;
       margin-right:10%;
      color:#88EAF8;
     }
   }
 }
</style>
<template>
  <div>
    <Row>
      <i-col span="6" style="padding-right:10px" >
    <!--     <Row class="rowStyle pageLeft" style="padding-top:20px;">
          <i-col span="12" style="border-bottom:1px solid rgba(224,253,249,0.1);">
            <Row>
              <i-col span="12">
                <p class="left_text">当日行驶里程</p>
                <p class="left_show_text">{{mileage.mathData.todayMileage === null ? 0 : mileage.mathData.todayMileage}}</p>
                <p class="left_company_text">万km</p>
              </i-col>
              <i-col span="12">
                <p class="left_text">当日充电量</p>
                <p class="left_show_text">{{mileage.mathData.todayChargePower === null ? 0 : mileage.mathData.todayChargePower}}</p>
                <p class="left_company_text">千kW.h</p>
              </i-col>
            </Row>
          </i-col>
          <i-col span="12" style="border-bottom:1px solid rgba(224,253,249,0.1);border-left:1px solid rgba(224,253,249,0.1);">
            <Row style="margin-left: 5px;">
              <i-col span="12">
                <p class="left_text">平均百公里电耗</p>
                <p class="left_show_text">{{mileage.mathData.avgPowerConsumption === null ? 0 : mileage.mathData.avgPowerConsumption}}</p>
                <p class="left_company_text">kW.h/100km</p>
              </i-col>
              <i-col span="12">
                <p class="left_text">节能指数</p>
                <p class="left_show_text">{{mileage.mathData.saveEnergyIndex === null ? 0 : mileage.mathData.saveEnergyIndex}}</p>
                <p class="left_company_text">分(满分10分)</p>
              </i-col>
            </Row>
          </i-col>
        </Row>
        <Row style="background-color: #1F2E43;" class="pageLeft">
          <i-col span="12" style="border-bottom:1px solid #314354;">
            <Row>
              <i-col span="12">
                <p class="left_text">累计里程</p>
                <p class="left_show_text">{{mileage.mathData.totalMileage === null ? 0 : mileage.mathData.totalMileage}}</p>
                <p class="left_company_text">万km</p>
              </i-col>
              <i-col span="12">
                <p class="left_text">累计充电量</p>
                <p class="left_show_text">{{mileage.mathData.totalChargePower === null ? 0 : mileage.mathData.totalChargePower}}</p>
                <p class="left_company_text">万kW.h</p>
              </i-col>
            </Row>
          </i-col>
          <i-col span="12" style="border-bottom:1px solid #314354;border-left:1px solid rgba(224,253,249,0.1);">
            <Row style="margin-left: 5px;">
              <i-col span="12">
                <p class="left_text">月均充电量</p>
                <p class="left_show_text">{{mileage.mathData.avgMonthChargePower === null ? 0 : mileage.mathData.avgMonthChargePower}}</p>
                <p class="left_company_text">万kW.h</p>
              </i-col>
              <i-col span="12">
                <p class="left_text">月均行驶里程</p>
                <p class="left_show_text">{{mileage.mathData.avgMonthMileage === null ? 0 : mileage.mathData.avgMonthMileage}}</p>
                <p class="left_company_text">万km</p>
              </i-col>
            </Row>
          </i-col>
        </Row> -->
        <Row class="rowStyle" style="margin-top:10px;">
          <i-col span="24">
            <p class="title_text">当日里程排行</p>
            <vue-seamless-scroll :data="mileage.todayMileage" :class-option="classOption" style="overflow:hidden;height:185px;margin-left: 15px;">
                <p v-for="(item, index) in mileage.todayMileage" :key="index" :class="{'NumZero': index==0, 'NumOne': index==1, 'NumTwo': index==2}" class="rankStyle" style="">
                  <span class="number numberNo">{{index + 1}}</span>
                  <span class="vinRank">{{item.vinCode}}</span>
                  <span>{{item.mileage | initNumber}}km</span>
                  <span>{{item.area.slice(0,8)}}</span>
                </p>
            </vue-seamless-scroll>
          </i-col>
        </Row>
        <Row class="rowStyle" style="margin-top:10px;">
          <i-col span="24">
            <p class="title_text">当月里程排行</p>
            <div style="overflow:hidden;height:185px;margin-left: 15px;">
                <p v-for="(item, index) in mileage.monthMileage" :key="index" :class="{'NumZero': index==0, 'NumOne': index==1, 'NumTwo': index==2}" class="rankStyle" style="">
                  <span class="number numberNo">{{index + 1}}</span>
                  <span class="vinRank">{{item.vinCode}}</span>
                  <span>{{item.mileage | initNumber}}km</span>
                  <span>{{item.area.slice(0,8)}}</span>
                </p>
            </div>
          </i-col>
        </Row>
        <Row class="rowStyle" style="margin-top:10px;">
<!--           <i-col span="12" >
            <p class="title_text">当日里程排行(km)</p>
            <vue-seamless-scroll :data="mileage.todayMileage" :class-option="classOption" style="overflow:hidden;height:150px;margin-left: 15px;">
                <p v-for="(item, index) in mileage.todayMileage" :key="index" :class="{'NumZero': index==0, 'NumOne': index==1, 'NumTwo': index==2}" class="rankStyle">
                  <span class="number numberNo">{{index + 1}}</span>
                  <span class="vinRank">{{item.vincode}}</span>
                  <span>{{item.mileage | initNumber}}</span>
                </p>
            </vue-seamless-scroll>
          </i-col> -->
          <i-col span="24">
            <p class="title_text">总里程排行</p>
            <div style="overflow:hidden;height:185px;margin-left: 15px;">
                <p v-for="(item, index) in mileage.allMileage" :key="index" :class="{'NumZero': index==0, 'NumOne': index==1, 'NumTwo': index==2}" class="rankStyle" style="">
                  <span class="number numberNo">{{index + 1}}</span>
                  <span class="vinRank">{{item.vinCode}}</span>
                  <span>{{item.mileage | initNumber}}km</span>
                  <span>{{item.area.slice(0,8)}}</span>
                </p>
            </div>
          </i-col>
        </Row>
        <!-- <Row class="rowStyle" style="margin-top:10px;">
          <span class="title_text">近15日总里程统计</span>
          <div id="mix_bar" class="mix_bar"></div>
        </Row> -->
      </i-col>
      <i-col span="12" style="padding-right:10px;">
        <Row style="height: 410px;">
          <div class="totalData">
            <!--<p style="font-size:18px;">{{}}</p>-->
            <div class="status">
              <hy-num-roll company="辆" :oneNumber="totalCar" priceNum="vehicleTopic" :countType="countType"></hy-num-roll>
              <!--<div>3</div>
              <div>4</div>
              <div>8</div>
              <div>0</div>
              <div>7</div>
              <span style="font-size:14px;">辆</span>-->
            </div>
<!--             <div class="otherStatus">
              <div>
                <p class="borderLine">{{mileage.vehicleTopicState.onlineCount}}</p>
                <p>在线</p>
              </div>
              <div>
                <p class="drivingLine">{{mileage.vehicleTopicState.drivingCount}}</p>
                <p>行驶中</p>
              </div>
              <br />
              <div class="borderLine">
                <p>{{mileage.vehicleTopicState.offlineCount}}</p>
                <p>离线</p>
              </div>
              <div class="drivingLine">
                <p>{{mileage.vehicleTopicState.standByCount}}</p>
                <p>待机中</p>
              </div>
              <br />
              <div class="standbyLine">
                <p >{{mileage.vehicleTopicState.totalCount - mileage.vehicleTopicState.offlineCount - mileage.vehicleTopicState.onlineCount}}</p>
                <p>异常</p>
              </div>
              <div>
                <p>{{mileage.vehicleTopicState.chargingCount}}</p>
                <p>充电中</p>
              </div>
            </div> -->
            <div class="dealer">
              <p>经销商总数<span>{{mileage.listAreaVehicle.distributorInformation}}</span></p>
              <p>服务站总数<span>{{mileage.listAreaVehicle.serviceStation}}</span></p>
              <p>网点覆盖率<span>{{mileage.listAreaVehicle.rate}}</span></p>
            </div>
          </div>
          <div id="heat_map" class="heat_map"></div>
          <!--<div id="heat_ProvinceMap" class="heat_ProvinceMap"></div>-->
          <div  v-show="retMap" style="z-index:99999;position: absolute;top:33px;left:80px;">
						<a href="javascript:void(0);" @click="goBackProeMap" style="height:30px;background:#fff;line-height: 30px;border:1px solid #ccc;padding:5px 10px;margin-left:50px;margin-top:30px;border-radius:5px;cursor: pointer;color:#393939;text-decoration:none;">
							返回全国地图
						</a>
			   </div>
        </Row>
        <Row style="margin-top:20px;">
          <div id="cityMile_bar" class="cityMile_bar"></div>
        </Row>
      </i-col>
      <i-col span="6">
       <div class="rowStyle" style="padding-top:20px;">
        <Row class="" style="border-bottom: 1px solid rgba(224,249,253,0.3)">
          <i-col span="12">
            <Row class="treePalent">
                <p>植树量</p>
                <p>{{mileage.mathData.pantTreeNum === null ? 0 : mileage.mathData.pantTreeNum}}</p>
                <p>棵/年</p>
                <!-- <p class="fine">相当于宁波 <span>{{mileage.mathData.nbArea === null ? 0 : mileage.mathData.nbArea}}%</span> 的面积</p> -->
            </Row>
          </i-col>
          <i-col span="12">
            <Row class="treePalent greenSize" >
              <p>绿化面积</p>
              <p>{{mileage.mathData.greenArea === null ? 0 : mileage.mathData.greenArea}}</p>
              <p>k㎡/年</p>
            </Row>
          </i-col>
        </Row>
        <Row >
          <i-col span="12">
            <Row class="treePalent">
                <p >减少碳排放</p>
                <p >{{mileage.mathData.carbonReduction === null ? 0 : mileage.mathData.carbonReduction}}</p>
                <p >吨/年</p>
                <!-- <p class="fine">相当于节省煤炭 <span>{{mileage.mathData.coal === null ? 0 : mileage.mathData.coal}}</span> 吨/年</p> -->
            </Row>
          </i-col>
          <i-col span="12">
            <Row class="treePalent greenSize">
              <p >比汽油车节省</p>
              <p >{{mileage.mathData.saveMoney === null ? 0 : mileage.mathData.saveMoney}}</p>
              <p>元/人/年</p>
              <img src="/static/images/tree.gif" />
            </Row>
          </i-col>
        </Row>
        </div>
        <Row class="rowStyle" style="margin-top:10px;">
          <!--<span>车辆当日在线时长统计</span>-->
          <div id="online_pie" class="online_pie"></div>
        </Row>
        <Row class="rowStyle" style="margin-top:10px;">
          <div id="online_line" class="online_line"></div>
        </Row>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import vueSeamlessScroll from 'vue-seamless-scroll';
  import hyNumRoll from '@/components/bigPage/common/numRoll';
  import { listAllMileage, listVehicleData, listTodayMileage, listMonthMileage, listVehicleRunningMinutes, listOnLineTime } from '@/service/bigPageService/vehicleTopic';
  export default {
    name: 'hyVehicleTopic',
    components: {
      hyNumRoll,
      vueSeamlessScroll
    },
    props: {
      autoPlay: Boolean
    },
     computed: {
      classOption () {
        return {
          limitMoveNum: 3
        };
      }
     },
    data () {
      return {
        countType: '全国',   // 统计类型
        totalCar: 0,
        totalCarStore: 0,
        provinces: [],
        realTimeProvinces: [],
        heatData: [],
        cityData: [],
        mileCountryDataMile: [],
        mileCountryDataOnline: [],
        mileCountryDataOffline: [],
        mileCountryDataCityName: [],
        cityVehicleNum: [],
        retMap: false,  // 返回全国按钮
        mileage: {
          provinceData: [],
          allMileage: [],
          todayMileage: [],
          monthMileage: [],
          mathData: {},
          realTimeCities: [],
          listAreaVehicle: {
            distributorInformation: 0,
            rate: '',
            serviceStation: 0
          },
          listAreaVehicleStore: {
            distributorInformation: 0,
            rate: '',
            serviceStation: 0
          },
          vehicleTopicState: {
            chargingCount: 0,
            offlineCount: 0,
            onlineCount: 0,
            standByCount: 0,
            totalCount: 0,
            drivingCount: 0
          },
          vehicleTopicStateStore: {
            chargingCount: 0,
            offlineCount: 0,
            onlineCount: 0,
            standByCount: 0,
            totalCount: 0,
            drivingCount: 0
          }
        },
        mileCountryData: {
          cityName: [],
          mile: [],
          online: [],
          offline: []
        },
//        mix_bar: {echart: null, option: null},                 // 15日总里程
        online_line: {echart: null, option: null},                 // 24小时在线车辆统计
        online_pie: {echart: null, option: null},                 // 车辆每日在线时长统计
        heat_map: {echart: null, option: null},                 // 监控热力图
        // heat_ProvinceMap: {echart: null, option: null},                 // 监控热力图
        cityMile_bar: {echart: null, option: null}                 // 全国车辆
      };
    },
    mounted () {
      this.getList();
      this.cycleFlag = 1; // 进入页面,允许环状图轮播
      setTimeout(() => {
       this.getVehicleData();
       this.getStationAndVehicleData();
       }, 1000);
    },
    watch: {
        autoPlay (curValue) {
        if (curValue) {
          clearInterval(this.proCarousel);
          this.getCarousel(this.realTimeProvinces);
        } else {
          clearInterval(this.proCarousel);
           this.goBackProeMap();
          }
        }
    },
    methods: {
      getVehicleData () {
         listAllMileage({}, res => {
           this.mileage.allMileage = res;
            }, ret => {
          this.$Notice.error({
            title: '查询总里程失败',
            desc: ret
          });
        });
        listTodayMileage({limitCount: 9}, res => {
          this.mileage.todayMileage = res;
        }, ret => {
          this.$Notice.error({
            title: '查询当日里程排行失败',
            desc: ret
          });
        });
        listMonthMileage({limitCount: 9}, res => {
          this.mileage.monthMileage = res;
        }, ret => {
          this.$Notice.error({
            title: '查询当月里程排行失败',
            desc: ret
          });
        });
        listVehicleData({}, res => {
          this.mileage.mathData = res;
        }, ret => {
          this.$Notice.error({
            title: '查询基础数据失败',
            desc: ret
          });
        });
        // 近七日用车时长统计
        listVehicleRunningMinutes({}, res => {
        let timeData = [];
        let onlineData = [];
        res.map(item => {
           timeData.push(this._hyTool.DateFormat(new Date(+item.time), 'MM-dd'));
           onlineData.push(item.runningMinutes);
        });
        this.online_line.echart.setOption({
            xAxis: [{data: timeData}],
          series: [{data: onlineData}]
        });
        }, ret => {
          this.$Notice.error({
            title: '查询近7日用车时长统计失败',
            desc: ret
          });
        });
        listOnLineTime({}, res => {
          let onlinePieName = [];
          res.map(item => {
            onlinePieName.push(item.name);
          });
          this.online_pie.echart.setOption({
          legend: [{data: onlinePieName}],
          series: [{data: res}]
        });
        // 自动轮播
        this.cycleAnimate(res);
        }, ret => {
          this.$Notice.error({
            title: '查询车辆在线时长百分比失败',
            desc: ret
          });
        });
/*        listMileagePower({}, res => {
          let [powerData, mileData] = [[], []];
            res.map(item => {
              if (item !== null) {
                powerData.push(this._hyTool.DateFormat(new Date(+item.statisticsTime), 'MM/dd'));
                mileData.push(+item.dayMileage);
              }
            });
            this.mix_bar.echart.setOption({
              xAxis: [{data: powerData}],
              series: [{data: mileData}]
            });
        }, ret => {
          this.$Notice.error({
            title: '查询15日总里程失败',
            desc: ret
          });
        }); */
      },
      cycleAnimate (res) {
        let _this = this;
        let index = -1;
        let indexArr = res.map((item, index) => {
          return index;
        });
        let cycleFun = () => {
          if (this.cycleFlag) {
            if (index < res.length - 1) {
              index++;
            } else {
              index = 0;
            }
            clearTimeout(this.cycleTimer);
            if (index < res.length) {
              if (+res[index].value !== 0) {
                // 取消高亮的图形
                _this.online_pie.echart.dispatchAction({
                  type: 'downplay',
                  seriesIndex: 0,
                  dataIndex: indexArr
                });
                // 高亮当前的图形
                _this.online_pie.echart.dispatchAction({
                  type: 'highlight',
                  seriesIndex: 0,
                  dataIndex: index
                });
                this.cycleTimer = setTimeout(() => {
                  cycleFun();
                }, 5000);
              } else {
                this.cycleTimer = setTimeout(() => {
                  cycleFun();
                }, 0);
              }
            }
          };
        };
        this.cycleTimer = setTimeout(() => {
          cycleFun();
        }, 0);
      },
      getList () {
//        this.mix_bar.echart = echarts.init(document.getElementById('mix_bar'));// 初始化15日总里程
        this.online_pie.echart = echarts.init(document.getElementById('online_pie'));// 车辆每日在线时长统计
        this.online_line.echart = echarts.init(document.getElementById('online_line'));// 近7日运行时长统计
        this.heat_map.echart = echarts.init(document.getElementById('heat_map'));// 监控热力图
        // this.heat_ProvinceMap.echart = echarts.init(document.getElementById('heat_ProvinceMap'));// 监控热力图
        this.cityMile_bar.echart = echarts.init(document.getElementById('cityMile_bar'));// 城市车辆

        // 15日耗电量和总里程
/*        this.mix_bar.option = {
          tooltip: {
             trigger: 'axis',
             backgroundColor: 'rgba(69,121,172,0.6)',
             formatter: (params) => {
               return `${params[0].axisValue}<br />${params[0].seriesName.substring(0, 2)}：&nbsp${params[0].value.toFixed(4)}万km`;
                //   return `${params[0].axisValue}<br />${params[0].seriesName.substring(0, 2)}：&nbsp${params[0].value.toFixed(4)}万km<br/>${params[1].seriesName.substring(0, 3)}：&nbsp${params[1].value.toFixed(4)}千kW.h<br/>${params[2].seriesName}：&nbsp${params[2].value.toFixed(3)}kW.h/100km`;
            },
            axisPointer: {
              //  type: 'shadow'
              // crossStyle: {
              //     color: '#999'
              // }
            }
          },
          legend: {
            data: ['里程(万km)'],
            // , '耗电量(千kW.h)', '百公里电耗'
            right: 10,
            textStyle: {
              color: 'white'
            }
          },
          color: [
            // new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 1,
            //   color: '#485B5F'
            // }, {
            //   offset: 0,
            //   color: '#A6C7D8'
            // }]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#00DFC9'
            }, {
              offset: 0,
              color: '#90F4DE'
            }]),
            '#4169A9'
          ],
          xAxis: [
            {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
              // axisLabel: {
              //     textStyle: {
              //         color: '#fff'
              //     }
              // },
              // axisTick: {
              //     lineStyle: {
              //         color: '#fff'
              //     }
              // },
              data: [],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '万km',
              min: 0,
              // max: 250, 、千kW.h
              // interval: 50,
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              }
              // axisLabel: {
              //   // formatter: '{value}',
              //   textStyle: {
              //     color: '#fff'
              //   }
              // }
              // axisTick: {
              //     lineStyle: {
              //         color: '#fff'
              //     }
              // }
            }
            // {
            //   type: 'value',
            //   name: 'kW.h/100km',
            //   min: 0,
            //   // max: 25,
            //   // interval: 5,
            //   splitLine: {
            //     show: false
            //   },
            //   axisLine: {
            //     lineStyle: {
            //       color: 'rgba(211,227,238,0.5)'
            //     }
            //   }
            // }
          ],
          series: [
            {
              name: '里程(万km)',
              type: 'bar',
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              data: []
            }
            // {
            //   name: '耗电量(千kW.h)',
            //   type: 'bar',
            //   data: []
            // },
            // {
            //   name: '百公里电耗',
            //   type: 'line',
            //   yAxisIndex: 1,
            //   data: []
            // }
          ]
        };
        this.mix_bar.echart.clear();
        this.mix_bar.echart.setOption(this.mix_bar.option); */

        // 车辆每日在线时长统计
        this.online_pie.option = {
          title: {
            text: '车辆当日在线时长统计',
            left: 15,
            top: 5,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            right: 0,
            top: 70,
            selectedMode: false,
            textStyle: {
              color: 'white'
            },
            // bottom: 20,
            data: []
          },
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#28369F'
            }, {
              offset: 0,
              color: '#496ECC'
            }]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#4E96B1'
            }, {
              offset: 0,
              color: '#3A53A5'
            }]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#BA6D8F'
            }, {
              offset: 0,
              color: '#891E4D'
            }]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#666F7F'
            }, {
              offset: 0,
              color: '#232C3C'
            }]),
            '#287CF8'
          ],
          series: [
            {
              name: '在线时长',
              type: 'pie',
              center: ['35%', '55%'],
              radius: ['50%', '70%'],
              silent: true,
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  formatter: '{d}%',
                  textStyle: {
                    fontSize: '24',
                    color: '#FFFFFF'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: []
            }
          ]
        };
        this.online_pie.echart.clear();
        this.online_pie.echart.setOption(this.online_pie.option);

        // 近7日用车时长统计
        this.online_line.option = {
          title: {
            text: '近7日用车时长统计',
            left: 15,
            top: 5,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
            axisPointer: {
              type: 'shadow'
            },
            formatter: (params) => {
              return `${params[0].axisValue}<br />${params[0].seriesName}：&nbsp${params[0].value}千h`;
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            // axisTick: {
            //     show: false
            // },
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
            // axisLabel: {
            //   textStyle: {
            //     color: '#fff'
            //   }
            // },
            // axisTick: {
            //   lineStyle: {
            //     color: '#fff'
            //   }
            // },
            data: []
          },
          yAxis: {
            type: 'value',
             name: '千h',
            // axisTick: {
            //     show: false
            // },
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
            // axisLabel: {
            //   formatter: '{value}%',
            //   textStyle: {
            //     color: '#fff'
            //   }
            // },
            // axisTick: {
            //   lineStyle: {
            //     color: '#fff'
            //   }
            // },
            splitLine: {
              show: false
            },
            axisPointer: {
              snap: true
            }
          },
          series: [
            {
              name: '用车时长',
              type: 'line',
              smooth: true,
              symbol: 'none',
              // areaStyle: {
              //   normal: {
              //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //       offset: 1,
              //       color: '#6A8CE3'
              //     }, {
              //       offset: 0,
              //       color: '#203554'
              //     }])
              //   }
              // },
              data: [],
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                normal: {
                  color: '#00DFC9'
                }
              },
              emphasis: {
                itemStyle: {
                  color: '#87d857',
                  borderColor: '#fff',
                  borderWidth: 11,
                  borderType: 'solid',
                  opacity: 1
                }
              }
            }
          ]
        };
        this.online_line.echart.clear();
        this.online_line.echart.setOption(this.online_line.option);

        // 监控热力图
        this.getAllPro();
         // 通过该事件进行底图的变换
          this.heat_map.echart.on('click', (params) => {
              if (this.countType !== '全国' || this.autoPlay) return;
            let province = [];
            for (let item of this.chinaList.features) {
              if ((item.properties.name).startsWith(params.name) || (params.name).includes(item.properties.name)) {
                province = this.realTimeProvinces.filter(sub => {
                  return sub.id === item.id;
                });
                break;
              }
            }
          // 省份数据存在时，查询省份
          province.length && this.getStationAndVehicleData(province[0]);
          setTimeout(() => {
            this.retMap = true;
          }, 500);
        });
        // 城市总里程
        this.cityMile_bar.option = {
          title: {
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
            formatter: (params) => {
                    return `${params[0].axisValue}<br />${params[0].seriesName}：&nbsp${params[0].value}辆`;
            },
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
         /* legend: {
            data: ['车辆总量', '里程'],
            right: 40,
            textStyle: {
              color: 'white'
            }
          }, */
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#941A50'
            }, {
              offset: 0,
              color: '#DB6B93'
            }]),
/*            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#485B5F'
            }, {
              offset: 0,
              color: '#A6C7D8'
            }]), */
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#5B4EAF'
            }, {
              offset: 0,
              color: '#73CFD4'
            }])
          ],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
              axisLabel: {
                textStyle: {
                   color: 'rgba(211,227,238,0.5)'
                },
                interval: 0, // 横轴信息全部显示
                rotate: -45 // -45度角倾斜显示
              },
              // axisTick: {
              //   lineStyle: {
              //     color: '#fff'
              //   }
              // },
              data: []
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
              axisLabel: {
                textStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
              // axisTick: {
              //   lineStyle: {
              //     color: '#fff'
              //   }
              // },
              name: '数量'
            }
            // },
            // {
            //   type: 'value',
            //   name: '里程(万)',
            //    min: 0,
            //   // max: 250,
            //   // interval: 5,
            //   splitLine: {
            //     show: false
            //   },
            //   axisLine: {
            //     lineStyle: {
            //       color: 'rgba(211,227,238,0.5)'
            //     }
            //   },
            //   axisLabel: {
            //     formatter: '{value}',
            //     textStyle: {
            //       color: 'rgba(211,227,238,0.5)'
            //     }
            //   },
            //   axisTick: {
            //     lineStyle: {
            //       color: 'rgba(211,227,238,0.5)'
            //     }
            //   }
            // }
          ],
          series: [
            {
              name: '车辆总量',
              type: 'bar',
              barMaxWidth: 10, // 柱图宽度
              data: []
            }
            // },
            // {
            //   name: '里程',
            //   type: 'bar',
            //   barMaxWidth: 10, // 柱图宽度
            //   yAxisIndex: 1,
            //   data: []
            // }
          ]
        };
        this.cityMile_bar.echart.clear();
        this.cityMile_bar.echart.setOption(this.cityMile_bar.option);
      },
      // 省地图
      getAllPro () {
         $.getJSON('/static/china.json', (geoJson) => {
           this.chinaList = geoJson;
          echarts.registerMap('china', geoJson);
          let option = {
           backgroundColor: 'transparent',
            title: {
              text: '知 豆 车 辆 监 控',
              left: 'center',
              top: 15,
              textStyle: {
                color: 'white',
                fontWeight: 500,
                fontSize: 36
              }
            },
            tooltip: {
              trigger: 'item',
              backgroundColor: '#4579AC',
              formatter: (params) => {
                return `${params.data.name}<br/>${params.data.value[2]}辆`;
              }
            },
            legend: {
              orient: 'vertical',
              y: 'bottom',
              x: 'right',
              data: [''],
              textStyle: {
                color: '#fff'
              }
            },
            visualMap: {
              left: 'right',
              type: 'continuous',
              min: 0,
              max: 10000,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              textStyle: {
                color: 'white'
              },
              color: ['#88F1F6', '#4478CE']
            },
            geo: {
              map: 'china',
              left: '330',
              right: '5%',
              center: [113.98561551896913, 36.205000490896193],
              zoom: 0.9,
              label: {
                show: false
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: '#323c48',
                  borderColor: '#111'
                },
                emphasis: {
                  areaColor: '#2a333d'
                }
              }
            },
          series: [
              {
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  data: [],
                  symbolSize: function (val) {
                      if (val[2] <= 100) {
                          return 4;
                      }
                      if (val[2] > 100 && val[2] <= 200) {
                          return 8;
                      }
                      if (val[2] > 200 && val[2] <= 300) {
                          return 12;
                      }
                      if (val[2] > 300 && val[2] <= 400) {
                          return 16;
                      }
                      if (val[2] > 400 && val[2] <= 500) {
                          return 20;
                      }
                      if (val[2] > 500) {
                          return 24;
                      }
                  },
                  // symbolRotate: 35,
                  label: {
                      normal: {
                          formatter: '{b}',
                          position: 'right',
                          show: true
                      },
                      emphasis: {
                          show: true,
                          color: 'white'
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#F06C00'
                      }
                  }
              },
              {
                //  name: 'Top 5',
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [],
                // heatData.sort(function (a, b) {
                //           return b.value[2] - a.value[2];
                //       }).slice(0, 6),
                symbolSize: function (val) {
                      if (val[2] <= 100) {
                          return 4;
                      }
                      if (val[2] > 100 && val[2] <= 200) {
                          return 8;
                      }
                      if (val[2] > 200 && val[2] <= 300) {
                          return 12;
                      }
                      if (val[2] > 300 && val[2] <= 400) {
                          return 16;
                      }
                      if (val[2] > 400 && val[2] <= 500) {
                          return 20;
                      }
                      if (val[2] > 500) {
                          return 24;
                      }
                  },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
           }
          ]
          };
          this.heat_map.echart.clear();
          this.heat_map.echart.setOption(option);
         });
      },
      // 省轮播
      getCarousel (provinces) {
        if (provinces.length) {
          let num = 0;
          //  如果是自动，每5秒自动切换市级热力图
          this.proCarousel = setInterval(() => {
            this.retMap = false;
            this.getStationAndVehicleData(provinces[num]);
            if (num === 9 || num === provinces.length - 1) {
              num = 0;
            } else {
              num += 1;
            }
          }, 6000);
        }
      },
      goBackProeMap () {
        this.getAllPro();
         setTimeout(() => {
          this.getStationAndVehicleData();
         }, 1000);
        this.retMap = false;
			},
      getStationAndVehicleData (province) {
        var _this = this;
        this.$http.all([
          this.$http.get('/api/vehicleTopic/listDealerServiceStationAll', {params: {areaCode: province ? province.id : ''}}),
          this.$http.get('/api/vehicleTopic/listCityVehicleMileage', {params: {areaCode: province ? province.id : undefined}})
        ]).then(this.$http.spread(function (oftenResp, typeResp) {
          let res1 = oftenResp.data.data;
          let res2 = typeResp.data.data;
          _this.countType = province ? province.name : '全国';
          // 服务站和经销商总数统计
          const defaultValue = {
            distributorInformation: 0,
            rate: '0%',
            serviceStation: 0
          };
          if (!province) {
            _this.totalCar = parseInt(res1.vehicleNum);
          } else {
            _this.totalCar = parseInt(province.vehicleNum);
          }
          _this.mileage.listAreaVehicle = Object.keys(res1).length > 0 ? res1 : defaultValue;
          // 车辆总数与里程统计
          let chartData = [];
          _this.cityVehicleNum = [];
          _this.mileCountryDataCityName = [];
          _this.mileCountryDataMile = [];
          res2.map(item => {
            _this.cityVehicleNum.push(item.vehicleNum);
            _this.mileCountryDataCityName.push(item.cityName);
          //  _this.mileCountryDataMile.push(item.totalMileage);
            chartData.push({name: item.cityName.slice(0, 2), value: [item.longitude, item.latitude, item.vehicleNum]});
          });
          _this.cityMile_bar.echart.setOption({
            title: [{text: `${province ? province.name : '全国'}车辆数量统计`}],
            xAxis: [{data: _this.mileCountryDataCityName}],
            series: [{data: _this.cityVehicleNum}]
          });
          // 判断省份还是城市
          if (!province) {
            _this.heatData = chartData;
            _this.heat_map.echart.setOption({
              series: [{data: _this.heatData}, {data: _this.heatData.sort(function (a, b) {
                  return b.value[2] - a.value[2];
              }).slice(0, 6)}]
            });
            _this.realTimeProvinces = [];
            res2.map(item => {
              _this.realTimeProvinces.push({name: item.cityName.slice(0, -1), id: item.areaCode, vehicleNum: item.vehicleNum});
            });
            if (_this.autoPlay) _this.getCarousel(_this.realTimeProvinces);
          } else {
            _this.getChartOptions(province.name, chartData);
          }
        }));
      },
      getChartOptions (mapCode, chartData) {
          $.getJSON('/static/province/' + mapCode + '.json', (mapData) => {
              if (mapData) {
              echarts.registerMap(mapCode, mapData);
              let option = {
                   backgroundColor: 'transparent',
                    title: {
                      text: '知 豆 车 辆 监 控',
                      left: 'center',
                      top: 15,
                      textStyle: {
                        color: '#DAEBF6',
                        fontSize: 40
                      }
                    },
                    tooltip: {
                      trigger: 'item',
                      backgroundColor: '#4579AC',
                      formatter: (params) => {
                         return `${params.data.name}<br/>${params.data.value[2]}辆`;
                      }
                    },
                    legend: {
                      orient: 'vertical',
                      y: 'bottom',
                      x: 'right',
                      data: [''],
                      textStyle: {
                        color: '#fff'
                      }
                    },
                    visualMap: {
                      left: 'right',
                      type: 'continuous',
                      min: 0,
                      max: 10000,
                      text: ['High', 'Low'],
                      realtime: false,
                      calculable: true,
                      textStyle: {
                        color: 'white'
                      },
                      color: ['#88F1F6', '#4478CE']
                    },
                    geo: {
                      silent: true,
                      map: mapCode,
                    // left: '50%',
                    //  right: '50%',
                      // center: [113.98561551896913, 36.205000490896193],
                      zoom: 1.0,
                      label: {
                        normal: {
                          show: false,
                          textStyle: {
                            color: '#fff'
                          }
                        }
                      },
                      roam: true,
                      itemStyle: {
                        normal: {
                          areaColor: '#323c48',
                          borderColor: '#111'
                        },
                        emphasis: {
                          areaColor: '#2a333d'
                        }
                      }
                    },
                  series: [
                  {
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      data: [],
                      symbolSize: function (val) {
                          if (val[2] <= 100) {
                              return 4;
                          }
                          if (val[2] > 100 && val[2] <= 200) {
                              return 8;
                          }
                          if (val[2] > 200 && val[2] <= 300) {
                              return 12;
                          }
                          if (val[2] > 300 && val[2] <= 400) {
                              return 16;
                          }
                          if (val[2] > 400 && val[2] <= 500) {
                              return 20;
                          }
                          if (val[2] > 500) {
                              return 24;
                          }
                      },
                      // symbolRotate: 35,
                      label: {
                          normal: {
                              formatter: '{b}',
                              position: 'right',
                              show: true
                          },
                          emphasis: {
                              show: true
                          }
                      },
                      itemStyle: {
                          normal: {
                              color: '#F06C00'
                          }
                      }
                  },
                 {
                  name: 'Top 5',
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: [],
                  symbolSize: function (val) {
                    if (val[2] <= 100) {
                      return 6;
                    }
                    if (val[2] > 100 && val[2] <= 200) {
                      return 8;
                    }
                    if (val[2] > 200 && val[2] <= 300) {
                      return 12;
                    }
                    if (val[2] > 300 && val[2] <= 400) {
                      return 16;
                    }
                    if (val[2] > 400 && val[2] <= 500) {
                      return 20;
                    }
                    if (val[2] > 500) {
                      return 24;
                    }
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#f4e925',
                      shadowBlur: 10,
                      shadowColor: '#333'
                    }
                  },
                  zlevel: 1
                }
              ]};
              this.heat_map.echart.clear();
              this.heat_map.echart.setOption(option);
              this.heat_map.echart.setOption({
                series: [{data: chartData}, {data: chartData.sort(function (a, b) {
                    return b.value[2] - a.value[2];
                }).slice(0, 6)}]
              });
            } else {
                  alert('无法加载该地图');
              };
          });
      }
    },
    beforeDestroy () {
      if (this.proCarousel) clearInterval(this.proCarousel);
      this.cycleFlag = 0;
//      this.mix_bar.echart.dispose();
      this.online_line.echart.dispose();
      this.online_pie.echart.dispose();
      this.heat_map.echart.dispose();
      // this.heat_ProvinceMap.echart.dispose();
      this.cityMile_bar.echart.dispose();
    }
  };
</script>
