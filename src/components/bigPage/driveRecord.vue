<!-- 行车记录 -->
<style lang="scss" scoped>
  .page_main {
    height: 100%;
    width: 100%;
    margin-top:12px;
    box-sizing:border-box;
  //  background-color:#fff;
    .title{
      position:fixed;
      top:5px;
      z-index:99;
      color:#fff;
      font-size:36px;
      left:calc(50% - 135px)
    }
    .row-style{
      background-color:#202d40;
      margin-top:10px;
      .t-title{
        padding:10px 15px;
        font-size:16px;
        color:#fff;
      }
      .border{
        border-bottom:1px solid rgba(224, 253, 249, 0.2);
      }
      .info_nav{
        text-align:center;
        padding:6px 0;
        p:nth-child(1){
          font-size:14px;;
        }
        p:nth-child(2){
          font-size:30px;
          padding:10px 0;
          color:#fff;
        }
      }
      .info_nav:nth-child(1){
        border-right:1px solid rgba(224, 253, 249, 0.2);
      }
      .weather{
        padding:10px 15px;
        p:nth-child(1){
          font-size:15px;
          color:#fff;
        }
        .moreInfo span:nth-child(n+2){
          padding-left:35px;
          min-width:85px;
          display:inline-block;
        }
        .nav1{
          width:100%;
          height:55px;
          line-height:32px;
          vertical-align:top;
          text-align:right;
          .temp{
            font-size:45px;
            margin-right:20px;
            background: linear-gradient(to bottom, #4E96B1, #3A53A5);
            -webkit-background-clip: text;
            color: transparent;
            font-weight:bold;
            span{
              font-size: 14px;
              vertical-align: text-top;
              font-weight:bold;
            }
          }
        }
      }
      .chart_box{
        height:115px;
      }
    }
    .carBox{
      width:100%;
      height:348px;
      background-repeat:no-repeat;
    }
    #driveChart{
      height:460px;
    }
    .playBox{
      width:50%;
      height:60px;
      line-height:60px;
      background:rgba(75,75,75,0.5);
      position:absolute;
      z-index:99;
      bottom:10px;
      left:27%;
      padding:0 20px;
      overflow:hidden;
      box-sizing:border-box;
      img{
        margin:0 5px;
        margin-top: -8px;
        vertical-align: middle;
        cursor:pointer;
      }
      .time{
        font-size:22px;
        font-weight:bold;
        color:#4384B7;
        margin:0 18px; 
      }
      .timeline{
        position:absolute;
        right:20px;
        padding:5px 0;
        transition: all 1s;
        line-height:15px;
      }
      //.ivu-timeline-item-content
    }
    .mgleft10{
      margin-left:10px;
    }
    .detail{
      height:183px;
      .tb_nav{
        min-height:30px;
        margin-bottom:10px;
        padding:0px 10px;
      }
      .tb_info{
        background:#29384D;
        span{
          color:#DAEBF6;
        }
      }
      span{
        display: inline-block;
        width: 8.3%;
        text-align: center;
        padding: 7px 25px;
        box-sizing: border-box;
      }
    }
  }
  .info_ul{
    width:100%;
    position: relative;
    transition:all 1s;
  }
  .list-enter-active, .list-leave-active, .list-move {
    transition: all 0.5s;
  }
  .list-enter{
    opacity: 0;
    transform: translateY(30px);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
<template>
  <div class="page_main">
    <h2 class="title">知 豆 行 车 日 记</h2>
    <Row>
      <Col span="3">
        <Row>
          <Col span="24" class="row-style carBox" :style="{backgroundImage:backImg}">
            <div style="text-align:center">
                <Select icon="ios-search" class="select"  placeholder="请输入VIN码"  style="width:200px;margin-top:15px;" v-model="vinCode" filterable remote clearable :remote-method="vinMethod" ref="select" @on-change="search" :loading="loading">
                <Option v-for="(option, index) in optionsVin" :value="option.value" :key="index" :label="option.value">{{option.label}}</Option>
              </Select>
            </div>
            <p style="position:absolute;bottom:5%;left:16%;font-size:12px;color:#fff">VIN码：{{carVinCode}}</p>
          </Col>
        </Row>
        <Row>
          <Col span="24" class="row-style">
            <h3 class="t-title">当日信息</h3>
            <Row class="border">
              <Col span="12" class="info_nav">
                <p>里 程</p>
                <p>{{dayInfo.runningMileage}}</p>
                <p><hy-icon type="youbiao_" :showContent="true" size="18" color="#4E96B1"></hy-icon>km</p>
              </Col>
              <Col span="12" class="info_nav">
                <p>用车时长</p>
                <p>{{dayInfo.runningMinutes}}</p>
                <p><hy-icon type="shijianzhongbiao" :showContent="true" size="18" color="#4e96b1"></hy-icon>min</p>
              </Col>
            </Row>
            <Row>
              <Col span="12" class="info_nav">
                <p>充电量</p>
                <p>{{dayInfo.chargePower}}</p>
                <p><hy-icon type="dianchi" :showContent="true" size="18" color="#90f4de"></hy-icon>kw·h</p>
              </Col>
              <Col span="12" class="info_nav">
                <p>耗电量</p>
                <p>{{dayInfo.consumptionPower}}</p>
                <p><hy-icon type="dianlianghaojinnew" :showContent="true" size="18" color="#de9595"></hy-icon>kw·h</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span="21">
        <Row>
          <Col span="6">
            <Row class="row-style mgleft10">
              <Col span="24" class="weather">
                <p>{{choseDay.split('-')[0]}}年{{choseDay.split('-')[1]}}月{{choseDay.split('-')[2]}}日&nbsp&nbsp&nbsp周{{textTop[new Date(choseDay).getDay()]}}&nbsp&nbsp&nbsp{{weather.city}}</p>
                <div class="nav1">
                  <span class="temp">{{weather.temperature}}<span>℃</span></span>
                  <img v-if="weather.weather.indexOf('晴')>=0" src="/static/images/new/record/sun.png">
                  <img v-else-if="weather.weather.indexOf('雨')>=0" src="/static/images/new/record/rain.png">
                  <img v-else-if="weather.weather.indexOf('雪')>=0" src="/static/images/new/record/snow.png">
                  <img v-else src="/static/images/new/record/cloud.png">
                </div>
                <div class="moreInfo"><span>风力{{weather.windpower}}级</span><span>空气质量：{{weather.aqi}}</span><span>{{weather.temperatureRange}}</span><span>{{weather.weather}}</span></div>
              </Col>
            </Row>
            <Row class="row-style mgleft10">
              <Col span="24" style="height:335px">
                <Calendar ref="Calendar" :defaultChoseDay="defaultChoseDay" :markDate="arr" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
              </Col>
            </Row>
          </Col>
          <Col span="11">
            <div class="row-style mgleft10" id="driveChart"></div>
            <div class="playBox">
              <Tooltip v-show="isPlay" content="暂停" placement="top" theme="light">
                <img id="pause" src="/static/images/new/record/stop2.png">
              </Tooltip>
              <Tooltip v-show="!isPlay" content="播放" placement="top" theme="light">
                <img id="play" src="/static/images/new/record/play.png">
              </Tooltip>
              <Tooltip content="复位" placement="top" theme="light">
                <img id="stop" src="/static/images/new/record/stop1.png">
              </Tooltip>
              <span class="time">{{timePoint}}</span>
                <Timeline class="timeline" :style="{top:timelineTop + 'px'}">
                  <TimelineItem v-for="(item,index) in splitArr" :color="splitIndex === index ?'red':''" :key="index">{{item.label}}</TimelineItem>
                </Timeline>
            </div>
          </Col>
          <Col span="7">
            <div class="row-style mgleft10">
              <div class="chart_box" id="recordChart1"></div>
              <div class="chart_box" id="recordChart2"></div>
              <div class="chart_box" id="recordChart3"></div>
              <div class="chart_box" id="recordChart4"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <div class="row-style mgleft10 detail">
              <div class="tb_nav">
                <span>采集时间</span><span>接收时间</span><span>绝缘电阻(kΩ)</span><span>驱动电机温度(℃)</span><span>驱动电机转速(r/min)</span><span>驱动电机转矩(N·m)</span><span>驱动电机控制器温度(℃)</span><span>电机控制器输入电压(V)</span><span>电机控制器直流母线电流(A)</span><span>电池电</span><span>电池电流</span><span>累计行驶里程</span>
              </div>
              <div style="overflow: hidden;position: relative;">
                <ul class="info_ul" :style="{top:top + 'px'}">
                  <li class="tb_nav tb_info" v-for="(item,index) in detailInfo" :key="index">
                    <span>{{item.collectTime.split(' ')[1] || '-'}}</span><span>{{item.reciveTime.split(' ')[1] || '-'}}</span><span>{{item.issueValue || '-'}}</span><span>{{item.motorTempature  || '-'}}</span><span>{{item.motorSpeed || '-'}}</span><span>{{item.torque || '-'}}</span><span>{{item.controllerTemprature || '-'}}</span><span>{{item.controllerInputVoltage || '-'}}</span><span>{{item.controllerDirectCurrent || '-'}}</span><span>{{item.totalVoltage || '-'}}</span><span>{{item.totalCurrent || '-'}}</span><span>{{item.totalMileage || '-'}}</span>
                  </li>
              </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>
<script>
  import AMap from 'AMap';
  import AMapUI from 'AMapUI';
  import echarts from 'echarts';
  import fixAMAP from '@/js/core/utils/fixAMAP09';
  import Calendar from '../common/vue-calendar-component/index';
  import timeUtil from '../common/vue-calendar-component/calendar';
  /* import vueSeamlessScroll from 'vue-seamless-scroll'; */
  import { getWeather, getDayInfo, getVehicleStatus, getDrivingInfo, getDetailInfo } from '@/service/bigPageService/driveRecord';
  import { getVinCode } from '@/service/bigPageService/statisticsTopic';
  import { vehicleList } from '@/service/vehicleManageService/vehicleService';

  export default {
    name: 'hyDriveRecord',
    components: {
     Calendar
    },
    data () {
      return {
        textTop: ['日', '一', '二', '三', '四', '五', '六'],
        monthDate: timeUtil.getMonthList(new Date()),
        vinCode: '',
        optionsVin: [],
        loading: false,
        carVinCode: '',
        dayInfo: {
          chargePower: '0',
          consumptionPower: '0',
          runningMileage: '0',
          runningMinutes: '0'
        },
        choseDay: '',
        defaultChoseDay: '',
        defaultflag: false,
        weather: {
          windpower: '-',
          aqi: '-',
          city: '-',
          temperature: '0',
          temperatureRange: '-',
          weather: '-'
        },
        arr: [],
        isPlay: false,
        isStart: true,
        path: [],
        point: [],
        splitArr: [],
        splitIndex: 0,
        timelineTop: 20,
        // navgOptions: {},
        timePoint: '--:--:--',
        chartData1: [],
        chartData2: [],
        chartData3: [],
        chartData4: [],
        chartLength: 10,
        recordChart1: {echart: null, option: null},           // 车速
        recordChart2: {echart: null, option: null},           // 电压
        recordChart3: {echart: null, option: null},           // 电流
        recordChart4: {echart: null, option: null},            // SOC
        detailInfo: [],
        top: 0
      };
    },
    computed: {
      backImg: function () {
        if (this.weather.weather.indexOf('晴') >= 0 && this.defaultflag) {
          if (this.isPlay) {
            return "url('/static/images/new/record/sun.gif')";
          } else {
            return "url('/static/images/new/record/sun_s.gif')";
          }
        } else if (this.weather.weather.indexOf('雨') >= 0 && this.defaultflag) {
          if (this.isPlay) {
            return "url('/static/images/new/record/rain.gif')";
          } else {
            return "url('/static/images/new/record/rain_s.gif')";
          }
        } else if (this.weather.weather.indexOf('雪') >= 0 && this.defaultflag) {
          if (this.isPlay) {
            return "url('/static/images/new/record/snow.gif')";
          } else {
            return "url('/static/images/new/record/snow_s.gif')";
          }
        } else if (this.defaultflag) {
          if (this.isPlay) {
            return "url('/static/images/new/record/cloud.gif')";
          } else {
            return "url('/static/images/new/record/cloud_s.png')";
          }
        } else {
          return "url('/static/images/new/record/car1.png')";
        }
      }
    },
    mounted () {
      this.getVinCode();
      this._initMap();
      this._initChart();
      this._initAMapUI();
    },
    methods: {
      search () {
        if (!this.vinCode) {
          return;
        }
        this.carVinCode = this.vinCode;
        this.defaultChoseDay = '';
        this.defaultflag = false; // 查询车辆时,传入初始选择日
        this.getStatus();
      },
      // 初始化vin码
      getVinCode () {
        getVinCode({}, res => {
          this.vinCode = res[0];
          this.$refs.select.setQuery(res[0]);
        });
      },
      // 日历信息初始化
      getStatus () {
        let params = {
          vinCode: this.carVinCode,
          beginDate: this.monthDate[0].date,
          endDate: this.monthDate[this.monthDate.length - 1].date
        };
        getVehicleStatus(params, res => {
          this.arr = res;
          if (!this.defaultflag) {
            let running = res.filter(item => item.running);
            if (running.length > 0) {
              this.defaultChoseDay = running[running.length - 1].date;
              this.defaultflag = true;
            } else {
              var yesterday = timeUtil.dateFormat(new Date(new Date().getTime() - 24 * 60 * 60 * 1000));
              this.getInfo(yesterday);
            }
          }
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
      getInfo (date) {
        if (this.navg) {
          this.navg.stop();
        }
        this.path = [];
        this.point = [];
        this.chartData1 = [];
        this.chartData2 = [];
        this.chartData3 = [];
        this.chartData4 = [];
        this.splitArr = [];
        this.detailInfo = [];
        if (date) {
          this.choseDay = date;
          // 获取天气信息
          getWeather({vinCode: this.carVinCode, date: date}, res => {
            this.weather = {
              windpower: res[0].windpower ? res[0].windpower : '-',
              aqi: res[0].aqi ? res[0].aqi : '-',
              city: res[0].city ? res[0].city : '-',
              temperature: res[0].temperature ? res[0].temperature : '0',
              temperatureRange: res[0].temperatureRange ? res[0].temperatureRange : '-',
              weather: res[0].weather ? res[0].weather : '-'
            };
          });
          // 获取当日信息
          getDayInfo({vinCode: this.carVinCode, date: date}, res => {
            this.dayInfo.chargePower = res.chargePower || 0;
            this.dayInfo.consumptionPower = res.consumptionPower || 0;
            this.dayInfo.runningMileage = res.runningMileage || 0;
            this.dayInfo.runningMinutes = res.runningMinutes || 0;
          });
          // 历史轨迹
          getDrivingInfo({vinCode: this.carVinCode, date: date}, res => {
            if (res.length > 0) {
              this.splitByTime(res);
              // 轨迹纠偏
              fixAMAP.fixAmap(res, 1, 1, (data) => {
                res.map((item, index) => {
                  this.path.push([item.longitude.toString(), item.latitude.toString()]);
                  this.point.push({time: item.collectTime, lnglat: [item.longitude, item.latitude]});
                  this.chartData1.push([item.collectTime, +item.speed]);
                  this.chartData2.push([item.collectTime, +item.totalVoltage]);
                  this.chartData3.push([item.collectTime, +item.totalCurrent]);
                  this.chartData4.push([item.collectTime, +item.soc]);
                });
                this.chartLength = Math.sqrt(res.length) < 5 ? Math.sqrt(res.length) : 10;
                this.drivingTarck();
              });
            } else {
              this.timePoint = '--:--:--';
              this.drivingTarck();  // 也要执行，初始化chart和map
            }
          });
          // 详细信息
          getDetailInfo({vinCode: this.carVinCode, date: date}, res => {
            this.top = 0;
            this.detailInfo = res;
          });
        } else {
          this.$Notice.error({
            title: '没有查找到车辆历史轨迹信息！'
          });
          this.drivingTarck();
        }
      },
      // 时间段拆分
      splitByTime (data) {
        var count = 0;
        var first = data[0].collectTime.split(' ')[1].slice(0, -3);
        var last;
        for (var i = 0, len = data.length; i < len - 1; i++) {
          var data1 = new Date(data[i].collectTime).getTime();
          var data2 = new Date(data[i + 1].collectTime).getTime();
          count++;
          if (data2 - data1 > 60000) {
            last = data[i].collectTime.split(' ')[1].slice(0, -3);
            this.splitArr.push({label: first + '-' + last, pointEnd: count});
            first = data[i + 1].collectTime.split(' ')[1].slice(0, -3);
          } else {
            if (i === len - 2) {
              last = data[i + 1].collectTime.split(' ')[1].slice(0, -3);
              this.splitArr.push({label: first + '-' + last, pointEnd: count});
            }
          }
        }
      },
      // 初始化地图
      _initMap () {
        this.map = new AMap.Map('driveChart', {
          resizeEnable: true,
          mapStyle: 'amap://styles/darkblue'
        });
      },
      _initAMapUI () {
        var _this = this;
        AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {
          _this.pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            map: _this.map, // 所属的地图实例
            getPath: function (pathData, pathIndex) {
              return _this.path;
            },
            getHoverTitle: function (pathData, pathIndex, pointIndex) {
              return;
            },
            renderOptions: {
                renderAllPointsIfNumberBelow: -1, // 绘制路线节点，如不需要可设置为-1
                pathLineStyle: {
                  lineWidth: 3,
                  strokeStyle: '#3DCFBA',
                  borderWidth: 1,
                  borderStyle: '#3197D1',
                  dirArrowStyle: false
                }
            }
          });
          _this.navgOptions = {
            loop: false, // 循环播放
            speed: 500, // 巡航速度，单位千米/小时
            pathNavigatorStyle: {
              width: 24,
              height: 39,
              // 使用图片
              content: PathSimplifier.Render.Canvas.getImageContent('../../../static/images/new/record/car.png', onload, onerror)
            }
          };
        });
      },
      // 地图轨迹
      drivingTarck () {
        // 初始化数据
        this.map.clearMap();
        document.getElementById('play').removeEventListener('click', this.handlePlay);
        document.getElementById('pause').removeEventListener('click', this.handlePause);
        document.getElementById('stop').removeEventListener('click', this.handleStop);
        this.isPlay = false;
        this.isStart = true;
        // this.pathSimplifierIns.getRender()._baseCanvasCxt.clearRect(0, 0, 758, 460);
        // 设置数据
        this.pathSimplifierIns.setData([{
            name: '行车轨迹',
            point: this.point
        }]);
        // chart初始化
        this.defaultchart1 = this.chartData1.slice(0, this.chartLength);
        this.defaultchart2 = this.chartData2.slice(0, this.chartLength);
        this.defaultchart3 = this.chartData3.slice(0, this.chartLength);
        this.defaultchart4 = this.chartData4.slice(0, this.chartLength);
        this.recordChart1.echart.setOption({
              series: [{
                  data: this.defaultchart1
              }]
        });
        this.recordChart2.echart.setOption({
              series: [{
                  data: this.defaultchart2
              }]
        });
        this.recordChart3.echart.setOption({
              series: [{
                  data: this.defaultchart3
              }]
        });
        this.recordChart4.echart.setOption({
              series: [{
                  data: this.defaultchart4
              }]
        });
        if (this.path.length > 0) {  // 当轨迹存在时
          /* eslint-disable no-new */
          new AMap.Marker({
            map: this.map,
            position: this.path[0],
            icon: '../../../static/images/new/record/start.png',
            offset: new AMap.Pixel(-12, -30),
            autoRotation: true
          });
          /* eslint-disable no-new */
          new AMap.Marker({
            map: this.map,
            position: this.path[this.path.length - 1],
            icon: '../../../static/images/new/record/end.png',
            offset: new AMap.Pixel(-13, -28),
            autoRotation: true
          });
          // 创建一个巡航器
          this.navg = this.pathSimplifierIns.createPathNavigator(0, this.navgOptions);
          var _this = this;
          var deDuplication = [0];
          this.handlePlay = function () {
            if (_this.isStart) {
              // chart初始化
              _this.defaultchart1 = _this.chartData1.slice(0, _this.chartLength);
              _this.defaultchart2 = _this.chartData2.slice(0, _this.chartLength);
              _this.defaultchart3 = _this.chartData3.slice(0, _this.chartLength);
              _this.defaultchart4 = _this.chartData4.slice(0, _this.chartLength);
              _this.recordChart1.echart.setOption({
                    series: [{
                        data: _this.defaultchart1
                    }]
              });
              _this.recordChart2.echart.setOption({
                    series: [{
                        data: _this.defaultchart2
                    }]
              });
              _this.recordChart3.echart.setOption({
                    series: [{
                        data: _this.defaultchart3
                    }]
              });
              _this.recordChart4.echart.setOption({
                    series: [{
                        data: _this.defaultchart4
                    }]
              });
              _this.isStart = false;
              _this.navg.start();
              deDuplication = [];
            } else {
              _this.navg.resume();
            }
            _this.isPlay = true;
          };
          this.handlePause = function () {
             _this.isPlay = false;
            _this.navg.pause();
          };
          this.handleStop = function () {
            _this.navg.start(); // 车子回到起点
            _this.navg.stop();
            _this.isPlay = false;
            _this.isStart = true;
          };
          // 数据初始化
          this.moveFun(0, this.point);
          this.navg.on('move', function (e, info) {
            // 去重复数值点
            let index = info.dataItem.pointIndex;
            if (!deDuplication.includes(index)) {
              deDuplication.push(index);
              _this.moveFun(info.dataItem.pointIndex, info.dataItem.pathData.point);
            }
          });
          // play
          document.getElementById('play').addEventListener('click', this.handlePlay);
          // pause
          document.getElementById('pause').addEventListener('click', this.handlePause);
          // stop
          document.getElementById('stop').addEventListener('click', this.handleStop);
        }
      },
      moveFun (pointIndex, pointData) {
        for (var i = 0; i < this.splitArr.length; i++) {
          if (pointIndex < this.splitArr[i].pointEnd) {
            this.splitIndex = i;
            break;
          }
        }
        this.timePoint = pointData[pointIndex].time.split(' ')[1];  // 当前时间点
        // 时间点&下方国标数据滚动
        if (pointIndex > 1) {
          this.top = -42 * (pointIndex - 2);
          this.timelineTop = 20 + (-38 * this.splitIndex);
        }
        // chart刷新
        if (pointIndex > this.chartLength - 1) {
          this.defaultchart1.shift();
          this.defaultchart1.push(this.chartData1[pointIndex]);
          this.recordChart1.echart.setOption({
              series: [{
                  data: this.defaultchart1
              }]
          });
          this.defaultchart2.shift();
          this.defaultchart2.push(this.chartData2[pointIndex]);
          this.recordChart2.echart.setOption({
              series: [{
                  data: this.defaultchart2
              }]
          });
          this.defaultchart3.shift();
          this.defaultchart3.push(this.chartData3[pointIndex]);
          this.recordChart3.echart.setOption({
              series: [{
                  data: this.defaultchart3
              }]
          });
          this.defaultchart4.shift();
          this.defaultchart4.push(this.chartData4[pointIndex]);
          this.recordChart4.echart.setOption({
              series: [{
                  data: this.defaultchart4
              }]
          });
          if (pointIndex === this.path.length - 1) {
            // 到终点时暂停，且设置开始为真
            this.isStart = true;
            this.isPlay = false;
            this.navg.pause();
          }
        }
      },
      _initChart () {
        this.recordChart1.echart = echarts.init(document.getElementById('recordChart1'));
        this.recordChart2.echart = echarts.init(document.getElementById('recordChart2'));
        this.recordChart3.echart = echarts.init(document.getElementById('recordChart3'));
        this.recordChart4.echart = echarts.init(document.getElementById('recordChart4'));
        // 车速
        this.recordChart1.option = {
          title: {
            text: '车速',
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
              return `${params[0].axisValueLabel}<br />${params[0].seriesName}：&nbsp${params[0].value[1]}km/h`;
            }
          },
          grid: [{
            top: 35,
            left: 50,
            bottom: 20
          }],
          xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              }
          },
          yAxis: {
            type: 'value',
            name: '',
            min: 0,
            max: 80,
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
            splitLine: {
              show: false
            },
            axisPointer: {
              snap: true
            }
          },
          series: [
            {
              name: '车速',
              type: 'line',
              smooth: true,
              symbol: 'none',
              data: [],
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#BA6D8F'
                  }, {
                    offset: 0,
                    color: '#891E4D'
                  }])
                }
              }
            }
          ]
        };
        this.recordChart1.echart.clear();
        this.recordChart1.echart.setOption(this.recordChart1.option);

        // 电压
        this.recordChart2.option = {
          title: {
            text: '电压',
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
              return `${params[0].axisValueLabel}<br />${params[0].seriesName}：&nbsp${params[0].value[1]}V`;
            }
          },
          grid: [{
            top: 35,
            left: 50,
            bottom: 20
          }],
          xAxis: {
            type: 'time',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              }
          },
          yAxis: {
            type: 'value',
             name: '',
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
            splitLine: {
              show: false
            },
            axisPointer: {
              snap: true
            }
          },
          series: [
            {
              name: '电压',
              type: 'line',
              smooth: true,
              symbol: 'none',
              data: [],
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#0DA798'
                  }, {
                    offset: 0,
                    color: '#90F4DE'
                  }])
                }
              }
            }
          ]
        };
        this.recordChart2.echart.clear();
        this.recordChart2.echart.setOption(this.recordChart2.option);
        // 电流
        this.recordChart3.option = {
          title: {
            text: '电流',
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
              return `${params[0].axisValueLabel}<br />${params[0].seriesName}：&nbsp${params[0].value[1]}A`;
            }
          },
          grid: [{
            top: 35,
            left: 50,
            bottom: 20
          }],
          xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              }
          },
          yAxis: {
            type: 'value',
            name: '',
            min: -20,
            max: 130,
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
            splitLine: {
              show: false
            },
            axisPointer: {
              snap: true
            }
          },
          series: [
            {
              name: '电流',
              type: 'line',
              smooth: true,
              symbol: 'none',
              data: [],
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#4E96B1'
                  }, {
                    offset: 0,
                    color: '#3A53A5'
                  }])
                }
              }
            }
          ]
        };
        this.recordChart3.echart.clear();
        this.recordChart3.echart.setOption(this.recordChart3.option);
        // SOC
        this.recordChart4.option = {
          title: {
            text: 'SOC',
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
              return `${params[0].axisValueLabel}<br />${params[0].seriesName}：&nbsp${params[0].value[1]}`;
            }
          },
          grid: [{
            top: 35,
            left: 50,
            bottom: 20
          }],
          xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              }
          },
          yAxis: {
            type: 'value',
             name: '',
            axisLine: {
                lineStyle: {
                  color: 'rgba(211,227,238,0.5)'
                }
              },
            splitLine: {
              show: false
            },
            axisPointer: {
              snap: true
            }
          },
          series: [
            {
              name: 'SOC',
              type: 'line',
              smooth: true,
              symbol: 'none',
              data: [],
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#51666B'
                  }, {
                    offset: 0,
                    color: '#A6C7D8'
                  }])
                }
              }
            }
          ]
        };
        this.recordChart4.echart.clear();
        this.recordChart4.echart.setOption(this.recordChart4.option);
      },
      // 日历操作函数
      clickDay (date) {
        // console.log('choseDay', date);
        if (!this.vinCode) {
          return;
        } else {
          this.getInfo(date);
        }
      },
      changeDate (date) {
        this.monthDate = timeUtil.getMonthList(new Date(date));
        this.getStatus();
        // console.log('左右点击切换月份', data); // 左右点击切换月份
      }
    },
    beforeDestroy () {
    }
  };
</script>
