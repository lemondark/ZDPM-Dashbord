<style lang="scss" scoped>
.rowStyle {
  //  border:1px solid #314354;
  margin-top:10px;
  background-color: #202D40;
  .mixMile {
    width: 560px;
    height: 325px;
  }  
}
.charingStyle {
  //  margin-left:10px;
  width: 100%;
  height: 220px;
}
.charingPie {
 width: 370px;
 height: 200px;
}
.mathCenter {
 p {
   text-align: center;
   font-size: 14px;
   color:rgba(218,235,246,0.5);
 }
 p:nth-child(2n) {
   height: 36px;
   font-size: 24px;
   color:rgba(218,235,246,1);
 }
 span {
   margin-left: 60%;
   color:rgba(218,235,246,0.5);
 }
}
.mathData  {
  margin-top:0;
  .ivu-col:nth-child(1){
    border-right:1px solid rgba(224, 253, 249, 0.2);
    box-sizing:border-box;
  }
  p {
   line-height: 43px;
   text-align:center;
   color:rgba(218,235,246,0.5);
 }
 p:nth-child(2n){
   height: 43px;
   font-size: 28px;
   color:rgba(218,235,246,1);
 }
}
.mathData:nth-child(2){
  border:1px solid rgba(224, 253, 249, 0.2);
  border-left:0;
  border-right:0;
}
.clutchStatus {
 position: absolute;
 top: 22%;
 left: 42%;
 width: 30px;
 height: 30px;
 line-height: 30px;
 background:white;
 border-radius:50px;
 color:black;
 text-align:center;
}
.clutchStatus:before, .onlineGif:before, .offlineGif:before{
 content:'';
 width: 50px;
 border-top:1px solid white;
 position: absolute;
 top: 45%;
 left: -150%;
}
.clutchStatus:after{
 font-size:14px;
 content:'档位';
 position: absolute;
 top: 0;
 left: -230%;
 color: white;
}
.onlineGif:after{
 font-size:14px;
 content:'在线';
 position: absolute;
 top: 0;
 left: -230%;
 color: white;
}
.offlineGif:after{
 font-size:14px;
 content:'离线';
 position: absolute;
 top: 0;
 left: -230%;
 color: white;
}
.gifStyle {
  // overflow:hidden;
  width: 30px;
  height: 30px;
  line-height: 30px;
  background:white;
  border-radius:50px;
  position: absolute;
  left: 42%;
}
.onlineGif, .offlineGif{
 top: 38%;
 img {
   width: 30px;
   height: 30px;
   border-radius:50px;
 }
}
.offlineGif {
 img {
   width: 20px;
   height: 25px;
 }
}
.divingGif {
 top: 54%;
 img {
   margin-top:5px;
   width: 20px;
   height: 20px;
 }
}
.divingGif:before, .charingGif:before {
 content:'';
 width: 50px;
 border-top:1px solid white;
 position: absolute;
 top: 45%;
 left: 100%;
}
.divingGif:after {
  content: '行驶';
  position: absolute;
  top: 0;
  left: 230%;
  color: white;
  font-size:14px;
  width: 40px;
}
.charingGif:after {
  content: '充电';
  position: absolute;
  top: 0;
  left: 230%;
  color: white;
  font-size:14px;
  width: 40px;
}
.charingGif {
 top: 69%;
 img {
   margin-top:8px;
   width: 20px;
   height: 20px;
 }
}
</style>
<template>
  <div>
    <Row>
      <i-col span="14" style="padding-right:10px">
        <Row style="height:400px">
         <i-col span="12" style="padding-right:10px;">
          <Row>
            <i-col span="11">
             <Row class="rowStyle vehicle_photo">
               <div style="text-align:center">
                <Select
                icon="ios-search"
                placeholder="请输入VIN码"
                style="width: 200px;margin-top:15px;margin-left:15px;"
                v-model="vinCode"
                filterable
                remote
                clearable
                :remote-method="vinMethod"
                ref="select"
                @on-change="search"
                :loading="loading">
                <Option v-for="(option, index) in optionsVin" :value="option.value" :key="index" :label="option.value">{{option.label}}</Option>
              </Select>
            </div>
            <div style="text-align:center;position:relative;height:342px;">
            <!--   <p style="position:absolute;top:5%;left:37%;font-size:16px;">车辆状态</p> -->
              <img src="/static/images/screen.png" />
              <p style="position:absolute;bottom:10%;left:16%;font-size:12px;i-color:rgba(218,235,246,0.5)">VIN码：{{singleCarStatus.vinCode}}</p>
<!--               <div class="clutchStatus">
               {{singleCarStatus.clutchStatus | bigClutch}}
             </div>
             <div class="onlineGif gifStyle"  v-if="showOnlineGif">
              <img style="padding-left:3px;" src="/static/images/big/wifi.gif" />
            </div>
            <div class="offlineGif gifStyle"  v-else-if="singleCarStatus.runningStatus === 'tbox:connections:exception' || singleCarStatus.runningStatus === 'tbox:connections:offline'">
              <img style="padding-top:5px;" src="/static/images/big/off.png" />
            </div>
            <div class="divingGif gifStyle" v-if="singleCarStatus.runningStatus === 'tbox:connections:driving'">
              <img src="/static/images/big/direction.png" />
            </div>
            <div class="charingGif gifStyle" v-if="singleCarStatus.runningStatus === 'tbox:connections:charging'">
              <img src="/static/images/big/charging.png" />
            </div> -->
          </div>
        </Row>
      </i-col>
      <i-col span="13" style="padding-left:10px;margin-top: 10px;">
        <Row class="rowStyle mathData" >
          <i-col span="12">
            <p>总充电量</p>
            <p>{{statisticsData.carInfo.totalChargePower}}</p>
            <p>kW.h</p>
          </i-col>
          <i-col span="12">
            <p>总充电次数</p>
            <p>{{statisticsData.carInfo.totalChargeTimes}}</p>
            <p>次</p>
          </i-col>
        </Row>
        <Row class="rowStyle mathData" >
          <i-col span="12">
            <p>充电量(30天)</p>
            <p>{{statisticsData.carInfo.avgMonthChargePower}}</p>
            <p>kW.h</p>
          </i-col>
          <i-col span="12">
            <p>充电次数(30天)</p>
            <p>{{statisticsData.carInfo.avgMonthChargeTimes}}</p>
            <p>次</p>
          </i-col>
        </Row>
        <Row class="rowStyle mathData" >
          <i-col span="12">
            <p>月均用车时长</p>
            <p>{{statisticsData.carInfo.avgMonthRunningMinutes}}</p>
            <p>h</p>
          </i-col>
          <i-col span="12">
            <p>月均行驶里程</p>
            <p>{{statisticsData.carInfo.avgMonthRunningMileage}}</p>
            <p>km</p>
          </i-col>
        </Row>
      </i-col>
    </Row>
  </i-col>
  <i-col span="12">
    <Row>
      <!--<p style="height:10px;"></p>-->
      <p style="fontSize:36px;text-align:right;padding-top:10px;color:#FFFFFF">知 豆 单 车 统 计 </p>
    </Row>
    <Row class="rowStyle">
      <div id="mixMile" class="mixMile"></div>
    </Row>
  </i-col>
</Row>
<Row style="height:260px">
  <i-col span="12" style="padding-right:10px;">
    <Row class="rowStyle">
      <div id="alarmCount" style="height:260px;width:560px"></div>
    </Row>
  </i-col>
  <i-col span="12" class="rowStyle">
    <div id="fiftyDay" style="height:260px;width:560px"></div>
  </i-col>
</Row>
</i-col>
<i-col span="5" style="padding-right:10px">
  <Row class="rowStyle">
    <div id="chargingSoc" class="charingStyle"></div>
  </Row>
  <Row class="rowStyle socStyle">
    <div id="mileSoh" class="charingStyle"></div>
  </Row>
  <Row class="rowStyle">
    <!--<span>车辆充电起始SOC区间统计</span>-->
    <div id="charingSocPie" class="charingPie"></div>
  </Row>
</i-col>
<i-col span="5">
 <Row class="rowStyle">
  <div id="mileSoc" class="charingStyle"></div>
</Row>
<Row class="rowStyle">
  <div id="chargingSoh" class="charingStyle"></div>
</Row>
<Row class="rowStyle">
  <!--<span>车辆充电时段统计</span>-->
  <div id="charingPie" class="charingPie"></div>
</Row>
</i-col>
</Row>
</div>
</template>
<script>
  import echarts from 'echarts';
  import { getVinCode, carInfo, chargeInterval, day15VehicleRunning, countCharge, countConsum, socByChargeTime, socByMileage, socChargeInterval, weekVehicleRunning, weekChargeMinutes } from '@/service/bigPageService/statisticsTopic';
  import { vehicleList } from '@/service/vehicleManageService/vehicleService';

  export default {
    name: 'statisticsTopic',
    data () {
      return {
       statisticsData: {
        carInfo: {},
        chargeInterval: {}
      },
      showOnlineGif: false,
      alarmMay: '',
      singleCarStatus: {},
      optionsVin: [],
      alarmData: [],
      vinCode: '',
      vehicleData: {},     // 车辆档案信息
      loading: false,
      chargingSoc: {echart: null, option: null},                 // 一次充电和SOC变化
      mileSoh: {echart: null, option: null},                 // SOH和里程
      charingSocPie: {echart: null, option: null},                 // 充电起始和soc
      mileSoc: {echart: null, option: null},                 // 里程和soc
      chargingSoh: {echart: null, option: null},                 // soh和充电次数
      charingPie: {echart: null, option: null},                 // 充电时段
      alarmCount: {echart: null, option: null},                 // 近15日用车时长统计
      mixMile: {echart: null, option: null},                 // 15日耗电量和总里程
      fiftyDay: {echart: null, option: null}                 // 15日充电放电
    };
  },
  mounted () {
      this.getList();
      this.getVinCode();  // 初始化vin码
    },
    methods: {
      search () {
        if (!this.vinCode) {
          return;
        }
        this.singleCarStatus.vinCode = this.vinCode;
        this.getStasticsData(this.vinCode);
      },
      getVinCode () {
        getVinCode({}, res => {
          this.vinCode = res[0];
          this.$refs.select.setQuery(res[0]);
        });
      },
      getStasticsData (vinCode) {
         // 数据信息
         carInfo({vinCode: vinCode}, res => {
          this.statisticsData.carInfo = res;
        }, ret => {
          this.$Notice.error({
            title: '查询车辆统计数据失败',
            desc: ret
          });
        });
         chargeInterval({vinCode: vinCode}, res => {
          let [chargeInterval, chargeIntervalY, chargeIntervalStore] = [[], [], []];
          let num = 0;
          let data = JSON.parse(res);
          for (let key in data) {
           chargeInterval.push(key);
           chargeIntervalY.push({value: data[key], name: key});
           chargeIntervalStore.push({value: 0, name: key});
           if (data[key] === 0) num++;
         }
         if (num !== 5) {
          this.charingPie.echart.setOption({
            legend: [{data: chargeInterval}],
            series: [{data: chargeIntervalY}]
          });
        } else {
         this.charingPie.echart.setOption({
          legend: [{data: chargeInterval}],
          color: ['#3d475b'],
          series: [{data: chargeIntervalStore}]
        });
       }
       this.animateShow(this.charingPie, 'charingPieLun');
     }, ret => {
      this.$Notice.error({
        title: '查询车辆充电时段失败',
        desc: ret
      });
    });
         // 近15日用车时长统计
         day15VehicleRunning({vinCode: vinCode}, res => {
          let [alarmMonth, alarmCount30] = [[], []];
          res.map(item => {
            alarmMonth.push(Object.keys(item)[0]);
            alarmCount30.push(Object.values(item)[0]);
          });
          this.alarmCount.echart.setOption({
            xAxis: [{data: alarmMonth}],
            series: [{data: alarmCount30}]
          });
        }, ret => {
          this.$Notice.error({
            title: '近15日用车时长统计查询失败',
            desc: ret
          });
        });
         countCharge({vinCode: vinCode}, res => {
          let [countChargeMile, countChargeTime] = [[], []];
          res.map(item => {
            countChargeTime.push(Object.keys(item)[0]);
            countChargeMile.push(Object.values(item)[0]);
          });
          this.mixMile.echart.setOption({
            xAxis: [{data: countChargeTime}],
            series: [{data: countChargeMile}]
          });
        }, ret => {
          this.$Notice.error({
            title: '15日行驶里程统计失败',
            desc: ret
          });
        });
         countConsum({vinCode: vinCode}, res => {
          let [countConsumMonth, countConsumCharge] = [[], []];
          res.map(item => {
            countConsumMonth.push(Object.keys(item)[0]);
            countConsumCharge.push(Object.values(item)[0]);
          });
          this.fiftyDay.echart.setOption({
            xAxis: [{data: countConsumMonth}],
            series: [{data: countConsumCharge}]
          });
        }, ret => {
          this.$Notice.error({
            title: '近15日充电统计失败',
            desc: ret
          });
        });
         socByChargeTime({vinCode: vinCode}, res => {
           let [socByTime, socByData] = [[], [], []];
           res.map(item => {
            socByTime.push(this._hyTool.DateFormat(new Date(+item.collectTime), 'hh:mm'));
            socByData.push(item.SOC);
          });
           this.chargingSoc.echart.setOption({
            xAxis: [{data: socByTime}],
            series: [{data: socByData}]
          });
         }, ret => {
          this.$Notice.error({
            title: '最近一次SOC充电变化获取失败',
            desc: ret
          });
        });
         socByMileage({vinCode: vinCode}, res => {
          let [socByMileageData, socByMileageX] = [[], []];
          res.map(item => {
            socByMileageData.push(item.SOC);
            socByMileageX.push(this._hyTool.DateFormat(new Date(+item.collectTime), 'hh:mm'));
          });
          this.mileSoc.echart.setOption({
            xAxis: [{data: socByMileageX}],
            series: [{data: socByMileageData}]
          });
        }, ret => {
          this.$Notice.error({
            title: '最近一次行驶时间与SOC变化获取失败',
            desc: ret
          });
        });
         weekVehicleRunning({vinCode: vinCode}, res => {
          let [weekVehicleData, weekVehicleDataY] = [[], []];
          res.map(item => {
            weekVehicleData.push(this._hyTool.weekToGbk(Object.keys(item)[0]));
            weekVehicleDataY.push(Object.values(item)[0]);
          });
          this.mileSoh.echart.setOption({
            xAxis: [{data: weekVehicleData}],
            series: [{data: weekVehicleDataY}]
          });
        }, ret => {
          this.$Notice.error({
            title: '用车时长分布失败',
            desc: ret
          });
        });
         weekChargeMinutes({vinCode: vinCode}, res => {
          let [ChargeMinutes, ChargeMinutesY] = [[], []];
          res.map(item => {
            ChargeMinutes.push(this._hyTool.weekToGbk(Object.keys(item)[0]));
            ChargeMinutesY.push(Object.values(item)[0]);
          });
          this.chargingSoh.echart.setOption({
            xAxis: [{data: ChargeMinutes}],
            series: [{data: ChargeMinutesY}]
          });
        }, ret => {
          this.$Notice.error({
            title: '充电量分布失败',
            desc: ret
          });
        });
         socChargeInterval({vinCode: vinCode}, res => {
          var data = JSON.parse(res);
          let [socChargeInterval, socChargeIntervalY, socChargeIntervalStore] = [[], [], []];
          let num = 0;
          for (let key in data) {
           socChargeInterval.push(key);
           socChargeIntervalY.push({value: data[key], name: key});
           socChargeIntervalStore.push({value: 0, name: key});
           if (data[key] === 0) num++;
         }
         if (num !== 5) {
            this.charingSocPie.echart.setOption({
              legend: [{data: socChargeInterval}],
              series: [{data: socChargeIntervalY}]
            });
          } else {
           this.charingSocPie.echart.setOption({
            legend: [{data: socChargeInterval}],
            color: ['#3d475b'],
            series: [{data: socChargeIntervalStore}]
          });
         }
         this.animateShow(this.charingSocPie, 'circlePie');
       }, ret => {
        this.$Notice.error({
          title: '车辆充电SOC变化曲线失败',
          desc: ret
        });
      });
       },
      // VIN搜索
      vinMethod (query) {
        if (query !== '') {
          this.loading = true;
          let params = {
            pageSize: 10,
            pageNum: 1,
            vinCode: query
          };
          vehicleList(params, res => {
            const vinList = res.map(item => {
              return {value: item.vinCode, label: `【${item.vinCode}】【${!item.plateNo === true ? '无车主' : item.plateNo}】`};
            });
            setTimeout(() => {
              this.loading = false;
              this.optionsVin = vinList.filter(item => {
                return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          });
        } else {
          this.optionsVin = [];
        }
      },
      getList () {
        this.chargingSoc.echart = echarts.init(document.getElementById('chargingSoc'));// 一次充电和SOC变化
        this.mileSoh.echart = echarts.init(document.getElementById('mileSoh'));// SOH和里程
        this.charingSocPie.echart = echarts.init(document.getElementById('charingSocPie'));// 充电起始和soc
        this.mileSoc.echart = echarts.init(document.getElementById('mileSoc'));// 里程和soc
        this.chargingSoh.echart = echarts.init(document.getElementById('chargingSoh'));// 充电量分布
        this.charingPie.echart = echarts.init(document.getElementById('charingPie'));// 充电时段
        this.alarmCount.echart = echarts.init(document.getElementById('alarmCount'));// 30日报警统计
        this.fiftyDay.echart = echarts.init(document.getElementById('fiftyDay'));// 15日充电放电
        this.mixMile.echart = echarts.init(document.getElementById('mixMile'));// 初始化15日耗电量和总里程

        // 近一次充电时间与SOC的变化曲线
        this.chargingSoc.option = {
          title: {
            text: '近一次充电时间与SOC的变化曲线',
            left: 10,
            top: 15,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  },
                  formatter: (params) => {
                   return `${params[0].name}<br/>${params[0].value}%`;
                 }
               },
               xAxis: {
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(211,227,238,0.2)'
                  }
                },
                boundaryGap: false,
                data: []
              },
              yAxis: [
              {
                min: 0,
                max: 100,
                type: 'value',
                axisLabel: {
                  formatter: '{value}%'
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                   color: 'rgba(230,251,251,0.2)',
                   type: 'solid'
                 }
               },
               axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            },
            {
              type: 'value',
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            }
            ],
            series: [{
              name: '',
              symbol: 'none',
              type: 'line',
              lineStyle: {
                normal: {
                    color: '#00DFC9'  // 连线颜色
                  }
                },
                smooth: true,
                data: []
              }
            ]};
        this.chargingSoc.echart.clear();
        this.chargingSoc.echart.setOption(this.chargingSoc.option);

        // 用车时长分布
        this.mileSoh.option = {
          title: {
            text: '用车时长分布',
            left: 10,
            top: 15,
            textStyle: {
              color: 'rgba(211,227,238,1)',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: (params) => {
                return `${params[0].name}<br/>${params[0].seriesName}：&nbsp${params[0].value}h`;
              }
          },
               xAxis: {
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(211,227,238,0.2)'
                  }
                },
                boundaryGap: false,
                data: []
              },
              yAxis: [
              {
                name: 'h',
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                   color: 'rgba(230,251,251,0.2)',
                   type: 'solid'
                 }
               },
               axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            },
            {
              type: 'value',
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            }
            ],
            series: [
            {
              name: '用车时长',
              type: 'line',
              lineStyle: {
                normal: {
                color: '#4E96B1'  // 连线颜色
              }
            },
            smooth: true,
            symbol: 'none',
            data: []
          }]
        };
        this.mileSoh.echart.clear();
        this.mileSoh.echart.setOption(this.mileSoh.option);

        // 车辆充电起始SOC区间统计
        this.charingSocPie.option = {
          title: {
            text: '车辆充电起始SOC区间统计',
            left: 10,
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
            color: '#3443B2'
          }, {
            offset: 0,
            color: '#496ECC'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: '#25C1B8'
          }, {
            offset: 0,
            color: '#2870C2'
          }]),
          '#3F64A8',
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: '#BA6D8F'
          }, {
            offset: 0,
            color: '#9C2E55'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: '#666F7F'
          }, {
            offset: 0,
            color: '#232C3C'
          }])
          ],
          series: [
          {
            name: '用车时段',
            type: 'pie',
            center: ['25%', '57%'],
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
        this.charingSocPie.echart.clear();
        this.charingSocPie.echart.setOption(this.charingSocPie.option);

        // 近一次行驶时间与SOC的变化曲线
        this.mileSoc.option = {
          title: {
            text: '近一次行驶时间与SOC的变化曲线',
            left: 10,
            top: 15,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  },
                  formatter: (params) => {
                   return `${params[0].name}<br/>${params[0].value}%`;
                 }
               },
               xAxis: {
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(211,227,238,0.2)'
                  }
                },
                boundaryGap: false,
                data: []
              },
              yAxis: [
              {
                min: 0,
                max: 100,
                type: 'value',
                axisLabel: {
                  formatter: '{value}%'
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                   color: 'rgba(230,251,251,0.2)',
                   type: 'solid'
                 }
               },
               axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            },
            {
              type: 'value',
              // axisLabel: {
              //     formatter: '{value} %'
              // },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            }
            ],
            series: [
            {
              name: '',
              symbol: 'none',
              type: 'line',
              lineStyle: {
                normal: {
                          color: '#00DFC9'  // 连线颜色
                        }
                      },
                      smooth: true,
                      data: []
                    }
                    ]
                  };
                  this.mileSoc.echart.clear();
                  this.mileSoc.echart.setOption(this.mileSoc.option);

        // 充电量分布
        this.chargingSoh.option = {
          title: {
            text: '充电量分布',
            left: 10,
            top: 15,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: (params) => {
                   return `${params[0].name}<br/>${params[0].seriesName}：&nbsp${params[0].value}kw·h`;
                 }
               },
               xAxis: {
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(211,227,238,0.2)'
                  }
                },
                boundaryGap: false,
                data: []
              },
              yAxis: [
              {
                name: 'kw·h',
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                   color: 'rgba(230,251,251,0.2)',
                   type: 'solid'
                 }
               },
               axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            },
            {
              type: 'value',
              // axisLabel: {
              //     formatter: '{value} %'
              // },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            }
            ],
            series: [
            {
              name: '充电量',
              type: 'line',
              lineStyle: {
                normal: {
                  color: '#00DFC9'  // 连线颜色
                }
              },
              smooth: true,
              symbol: 'none',
              data: []
          }]
        };
        this.chargingSoh.echart.clear();
        this.chargingSoh.echart.setOption(this.chargingSoh.option);

        // 车辆充电时段统计
        this.charingPie.option = {
          title: {
            text: '车辆充电时段统计',
            left: 10,
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
            color: '#3443B2'
          }, {
            offset: 0,
            color: '#496ECC'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: '#25C1B8'
          }, {
            offset: 0,
            color: '#2870C2'
          }]),
          '#3F64A8',
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: '#BA6D8F'
          }, {
            offset: 0,
            color: '#9C2E55'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: '#666F7F'
          }, {
            offset: 0,
            color: '#232C3C'
          }])
          ],
          series: [
          {
            name: '用车时段',
            type: 'pie',
            center: ['25%', '57%'],
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
        this.charingPie.echart.clear();
        this.charingPie.echart.setOption(this.charingPie.option);

        // 近15日用车时长统计
        this.alarmCount.option = {
          title: {
            text: '近15日用车时长统计',
            left: 10,
            top: 15,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(69,121,172,0.6)',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  },
                  formatter: (params) => {
                   return `${params[0].name}<br/>${params[0].seriesName}：&nbsp${params[0].value}h`;
                 }
               },
               xAxis: {
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(211,227,238,0.2)'
                  }
                },
                boundaryGap: false,
                data: []
              },
              yAxis: [
              {
                name: 'h',
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                   color: 'rgba(230,251,251,0.2)',
                   type: 'solid'
                 }
               },
               axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            },
            {
              type: 'value',
              // axisLabel: {
              //     formatter: '{value} %'
              // },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            }],
            series: [{
              name: '用车时长',
              symbol: 'none',
              type: 'line',
              lineStyle: {
                normal: {
                          color: '#00DFC9'  // 连线颜色
                        }
                      },
                smooth: true,
                data: []
              }
            ]};
          this.alarmCount.echart.clear();
          this.alarmCount.echart.setOption(this.alarmCount.option);

        // 15日充电耗电统计
        this.itemStyle = {
          normal: {
            color: (params) => {
              let colorList;
              if (params.data >= 0) {
                colorList = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 1,
                  color: '#4E96B1'
                }, {
                  offset: 0,
                  color: '#3A53A5'
                }])
                ;
              } else {
                colorList = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 1,
                  color: '#485B5F'
                }, {
                  offset: 0,
                  color: '#A6C7D8'
                }]);
              }
              return colorList;
            }
          }
        };
        this.itemStyleOther = {
          normal: {
            color: (params) => {
              let colorList;
              if (params.data <= 0) {
                colorList = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 1,
                  color: '#485B5F'
                }, {
                  offset: 0,
                  color: '#A6C7D8'
                }]);
              } else {
               colorList = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 1,
                color: '#4E96B1'
              }, {
                offset: 0,
                color: '#3A53A5'
              }]);
             }
             return colorList;
           }
         }
       };
       this.fiftyDay.option = {
        title: {
          text: '近15日充电统计',
          left: 10,
          top: 15,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(69,121,172,0.6)',
                formatter: (params) => {
                   return `${params[0].axisValue}<br />${params[0].seriesName}：&nbsp${params[0].value}kw.h`;
                },
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
                },
           /* grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              }, */
              color: [
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 1,
                color: '#5B4EAF'
              }, {
                offset: 0,
                color: '#73CFD4'
              }])
              ],
              xAxis: [
              {
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(211,227,238,0.2)'
                  }
                },
                splitLine: {show: false},
                data: []
              }],
              yAxis: [
              {
                name: 'kw·h',
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                   color: 'rgba(230,251,251,0.2)',
                   type: 'solid'
                 }
               },
               axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              }
            },
            {
              type: 'value',
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisPointer: {
                snap: true
              }
            }],
            series: [{
              name: '充电量',
              type: 'bar',
              data: []
            }]
          };
          this.fiftyDay.echart.clear();
          this.fiftyDay.echart.setOption(this.fiftyDay.option);

        // 15日行驶里程统计
        this.mixMile.option = {
          title: {
            text: '15日行驶里程统计',
            left: 10,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          },
          tooltip: {
           trigger: 'axis',
           backgroundColor: 'rgba(69,121,172,0.6)',
           formatter: (params) => {
             return `${params[0].axisValue}<br />${params[0].seriesName}：&nbsp${params[0].value}km<br/>`;
           },
           axisPointer: {
              //  type: 'shadow'
              // crossStyle: {
              //     color: '#999'
              // }
            }
          },
          color: [
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
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(211,227,238,0.2)'
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
              name: 'km',
              min: 0,
              // max: 250,
              // interval: 50,
              axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                 color: 'rgba(230,251,251,0.2)',
                 type: 'solid'
               }
             },
             axisLabel: {
                // formatter: '{value}',
                textStyle: {
                  color: 'rgba(211,227,238,0.2)'
                }
              },
              axisTick: {
               show: false,
               lineStyle: {
                color: '#fff'
              }
            }
          }, {
            type: 'value',
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(211,227,238,0.2)'
              }
            },
            axisPointer: {
              snap: true
            }
          }],
          series: [
          {
            name: '里程',
            type: 'bar',
            barWidth: 10,
            label: {
              normal: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            data: []
          }
          ]
        };
        this.mixMile.echart.clear();
        this.mixMile.echart.setOption(this.mixMile.option);
      },
      animateShow (mainPie, tervalName) {
        // 自动轮播
        let index = 0;
        // 清空之前的定时器
        clearInterval(this[tervalName]);
        setTimeout(() => {
          // 高亮当前图形
          mainPie.echart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index
          });
        }, 500);
          this[tervalName] = setInterval(() => {
          // 取消之前高亮的图形
          mainPie.echart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
          });
           if (index === 4) index = 0;
           else index++;
          // 高亮当前图形
          mainPie.echart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index
          });
        }, 5000);
       }
     },
     beforeDestroy () {
      if (this.circlePie) clearInterval(this.circlePie);
      if (this.charingPieLun) clearInterval(this.charingPieLun);
      this.chargingSoc.echart.dispose();
      this.mileSoh.echart.dispose();
      this.charingSocPie.echart.dispose();
      this.mileSoc.echart.dispose();
      this.chargingSoh.echart.dispose();
      this.charingPie.echart.dispose();
      this.alarmCount.echart.dispose();
      this.fiftyDay.echart.dispose();
      this.mixMile.echart.dispose();
    }
  };
</script>
