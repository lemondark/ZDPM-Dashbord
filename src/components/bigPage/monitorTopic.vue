/**
* 单车监控专题
**/
<style lang="scss" scoped>
  .page_main {
    height: 100%;
    padding-top: 20px;
    width: 100%;
    .rowHeight {
      width: 100%;
      height: 100%;
      .title_class {
        background-image:url('/static/images/big/zh.png');
        background-repeat:no-repeat;
        background-size:440px 41px;
        width: 440px;
        height: 41px;
        text-align: center;
        position: absolute;
        left: calc(62.6% - 440px);
        z-index: 9999;
        .font_class {
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
        //  position: absolute;
        //  left: calc(60.6% - 400px);
        //  z-index: 9999;
          line-height: 18px;
        //  height: 41px;
          font-size: 36px;
        }
      }
      .col_class {
        height: 100%;
        .topRow {
          margin-bottom: 10px;
          //  margin-right: 10px;
          height: calc(58% - 10px);
          .vehicle_position {
            z-index: 9999;
            padding-left: 10px;
            color: rgba(218,235,246,0.6);
            height: 30px;
            width: 650px;
            font-size: 12px;
            line-height: 30px;
            background: rgba(105,111,118,0.7);
            position: absolute;
            top: 88%;
            left: 28%;
          }
          .move{
            background:url('./../../../static/images/road.gif')  45% !important;
          }
          .vehicle_photo {
            z-index: 9999;
            color: #DAEBF6;
            min-height: 340px;
            height: 76%;
            min-width: 243px;
            width: 20%;
            font-size: 10px;
            background: rgba(58,67,79,0.7);
            //  opacity: 0.3;
            //  -moz-opacity: 0.3;
            //  -khtml-opacity: 0.3;
            position: absolute;
            top: 3%;
            left: 2%;
            text-align: center;
            .public_class {
              color: #DAEBF6;
              height: 30px;
              width: 100px;
              text-align: center;
              line-height: 30px;
              position: inherit;
              .hr_class {
                height: 1px;
                border: none;
                border-top: 1px solid rgba(224, 253, 249, 0.1);
                width: 45px;
                margin-top: 15px;
                float: left;
              }
              .div_class {
                float: left;
                width: 30px;
                height: 100%;
                border-radius: 50px;
                background: #FFFFFF;
                font-size: 16px;
                color: #384E5C;
                line-height: 30px;
              }
            }
            .dang_class {
              top: 32%;
              left: 13%;
            }
            .status_class {
              top: 45%;
              left: 13%;
            }
            .driving_class {
              margin-left: 70px;
              top: 58%;
              left: 13%;
            }
            .dian_class {
              margin-left: 70px;
              top: 71%;
              left: 13%;
            }
          }
          .vehicle_map {
            min-height: 305px;
            height: 100%;
            min-width: 956px;
            width: 100%;
          }
        }
        .bottomRow {
          //  margin-right: 10px;
          min-height: 259px;    // 13px
          height: 42%;
          .vehicle_gauge {
            min-height: 145px;
            height: 60%;
            .border_class {
              height: 100%;
              border:1px solid rgba(224, 253, 249, 0.2);
              border-top: none;
              border-left: none;
              .vehicle_speed {
                min-height: 144px;
                height: 100%;
                width: 100%;
                min-width: 240px;
              }
            }
          }
          .vehicle_gauge_detail {
            min-height: 106px;
            height: 40%;
            text-align: left;
            .bottom_border_class {
              border-right:1px solid rgba(224, 253, 249, 0.1);
              min-height: 106px;
              height: 100%;
              .insulation {
                padding-left: 10px;
                color: rgba(218,235,246,0.8);
                height: 30px;
                width: 85%;
                font-size: 10px;
                line-height: 30px;
                background: rgba(218,235,246,0.1);
                .font_title {
                  color: rgba(218,235,246,0.6);
                }
              }
              .one {
                position: absolute;
                left: 8%;
                top: 22%;
              }
              .two {
                position: absolute;
                left: 8%;
                top: 60%;
              }
              .thermometer {
                min-height: 106px;
                height: inherit;
                min-width: 239px;
                width: inherit;
              }
            }
          }
        }
        .top_center {
          margin-left: 10px;
          margin-right: 10px;
          min-height: 375px;
          height: 60%;
          .top_title {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(218,235,246,0.6);
          }
          .top_value {
            font-size: 30px;
            font-family: ArialMT;
          }
          .top_company {
            font-size: 10px;
            color: rgba(218,235,246,0.4);
          }
          .row_more{
            height:calc(100%/3*2);
            .one_class{
              height:100%;
            };
            .half_class{
              height:50%;
            }
            .soc_chart {
              min-height: 170px;
              height: 100%;
              min-width: 180px;
              width: 100%;
            }
          }
          .row_class {
            height: calc(100%/3);
            .today_title {
              position: absolute;
              width: 100px;
              font-size: 18px;
              right: 27%;
              top: -10%;
              color: rgb(218, 235, 246);
            }
            .three_class {
              min-height: 125px;
              height: 100%;
            }
          }
        }
        .bottom_center {
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
          min-height: 269px;
          height: calc(40% - 10px);
          .driving_params {
            min-height: 269px;
            height: 100%;
            min-width: 450px;
            width: 100%;
          }
        }
        .right_top {
          min-height: 140px;
          height: 25%;
          //  min-width: 480px;
          .right_left {
            min-height: 140px;
            height: 100%;
            padding-top: 5px;
            padding-left: 20px;
            .right_title {
              font-family: MicrosoftYaHei;
              font-weight: bold;
              font-size: 16px;
              color: #DAEBF6;
              padding-bottom: 8px;
              letter-spacing:2px;
            }
            .right_name {
              font-size: 14px;
              color: #DAEBF6;
              opacity:0.6;
              -moz-opacity:0.6;
              -khtml-opacity: 0.6;
            }
            .right_value {
              word-break: break-all;
              font-size: 12px;
              color: #DAEBF6;
              opacity:0.3;
              -moz-opacity:0.3;
              -khtml-opacity: 0.3;
            }
          }
        }
        .row {
          background-color: #202D40;
          //  border:1px solid #202D40;
          .right_center {
            min-height: 210px;
            height: 100%;
            min-width: 480px;
            width: 100%;
          }
          .right_detail {
            color: rgba(218,235,246,0.8);
            height: 15px;
            position: relative;
            top: -12%;
            padding-left: 5%;
            font-size: 10px;
            .wn_class {
              color: rgba(218,235,246,0.4);
            }
          }
          .monomers {
            min-height: 245px;
            height: 100%;
            min-width: 480px;
            width: 100%;
          }
        }
      }
    }
  }
</style>
<template>
  <div  class="page_main">
    <Row class="rowHeight">
      <div class="title_class">
        <span class="font_class">知 豆 单 车 监 控</span>
      </div>
      <i-col span="12" class="col_class">
        <Row class="row topRow">
          <div class="vehicle_position">
            <span>车辆位置：{{vehicleInfo.address}}</span>
            <span style="float: right; padding-right: 10px;">采集时间：{{vehicleInfo.collectTime}}</span>
          </div>
          <div class="vehicle_photo" :class="carStatus.index === 1 ? 'move':''">
            <Select
              icon="search"
              placeholder="请输入VIN码"
              style="width: 200px;margin-top:15px;margin-left:0px;"
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
            <p style="position: inherit;left: 41%;top: 19%;">车辆状态</p>
            <div class="public_class dang_class">
              <span style="float: left">档位 </span>
              <hr class="hr_class"/>
              <div class="div_class">
                <span>{{carStatus.clutchStatus | bigClutch}}</span>
              </div>
            </div>
            <div class="public_class status_class">
              <span style="float: left">{{carStatus.index >= 0 ? '在线' : carStatus.index === -1 ? '离线' : carStatus.index === -2 ? '异常' : '未知'}} </span>
              <hr class="hr_class"/>
              <div class="div_class" style="line-height: 31px;">
                <img src="/static/images/big/wifi.gif" style="margin-left: -8px;margin-top: -14px;" v-if="carStatus.index >= 0"/>
                <img src="/static/images/big/off.png" style="margin-left: -2px;margin-top: 6px;" v-if="carStatus.index === -1"/>
              </div>
            </div>
            <img src="/static/images/screen.png" style="height: 76%"/>
            <div class="public_class driving_class"  v-show="carStatus.index === 1">
              <span style="float: right"> 行驶</span>
              <hr class="hr_class" style="float: right"/>
              <div class="div_class" style="float: left;line-height: 31px;">
                <img src="/static/images/big/direction.png" style="padding-top: 4px;"/>
              </div>
            </div>
            <div class="public_class dian_class"  v-show="carStatus.index === 2">
              <span style="float: right"> 充电</span>
              <hr class="hr_class" style="float: right"/>
              <div class="div_class" style="float: left;line-height: 31px;">
                <img src="/static/images/big/charging.png"  style="padding-top: 5px;"/>
              </div>
            </div>
            <p style="position: inherit;left: 14%;bottom: 7%;color: rgba(218,235,246,0.6);">VIN码：{{vehicleInfo.vinCode}}</p>
          </div>
          <div class="vehicle_map" id="vehicle_map"></div>
        </Row>
        <Row class="row bottomRow">
          <Row class="vehicle_gauge">
            <i-col span="6" class="border_class">
              <div class="vehicle_speed" id="vehicle_speed"></div>
            </i-col>
            <i-col span="6" class="border_class">
              <div class="vehicle_speed" id="vehicle_current"></div>
            </i-col>
            <i-col span="6" class="border_class">
              <div class="vehicle_speed" id="vehicle_voltage"></div>
            </i-col>
            <i-col span="6" class="border_class" style="border-right: none;">
              <div class="vehicle_speed" id="vehicle_motorSpeed"></div>
            </i-col>
          </Row>
          <Row class="vehicle_gauge_detail">
            <i-col span="6" class="bottom_border_class">
              <div class="insulation one">
                <span class="font_title">绝缘电阻：</span>
                <span>{{vehicleInfo.issueValue}}kΩ</span>
              </div>
              <div class="insulation two">
                <span class="font_title">DC-DC状态：</span>
                <span>{{vehicleInfo.dcdcStatus | dcdcStatus}}</span>
              </div>
            </i-col>
            <i-col span="6" class="bottom_border_class">
              <div class="insulation one">
                <span class="font_title">电池包均衡状态：</span>
                <span>{{vehicleInfo.batteryBalanceStatus | batteryBalanceStatus}}</span>
              </div>
              <div class="insulation two">
                <span class="font_title">空调启动状态：</span>
                <span>{{vehicleInfo.rtStatus | rtStatus}}</span>
              </div>
            </i-col>
            <i-col span="6" class="bottom_border_class">
              <div class="insulation one">
                <span class="font_title">空调功率：</span>
                <span>{{vehicleInfo.power}}W</span>
              </div>
              <div class="insulation two">
                <span class="font_title">空调风机档位：</span>
                <span>{{vehicleInfo.hvacLevel | hvacLevel}}</span>
              </div>
            </i-col>
            <i-col span="6" class="bottom_border_class" style="border-right: none;">
              <div class="thermometer" id="thermometer"></div>
            </i-col>
          </Row>
        </Row>
      </i-col>
      <i-col span="6" class="col_class">
        <Row class="row top_center">
          <Row class="row_class">
            <div class="today_title">当日信息</div>
            <i-col span="12" class="three_class" style="padding-top: 45px;">
              <hy-num-roll countType="总里程" company="km" :oneNumber="Number.parseInt(vehicleInfo.mileage)" :hkShow="false" priceNum="price_3" style="padding-left: 5%"></hy-num-roll>
            </i-col>
            <i-col span="12" class="three_class" style="border-left: 1px solid rgba(224, 253, 249, 0.1);">
              <i-col span="12" style="padding-left: 10px;padding-top: 15px;text-align: center;">
                <p class="top_title">里 程</p>
                <p class="top_value">{{todayInfo.mileage}}</p>
                <p class="top_company">
                  <hy-icon type="youbiao_" :showContent="true" size="18" color="#4E96B1"></hy-icon>
                  km</p>
              </i-col>
              <i-col span="12" style="padding-left: 10px;padding-top: 15px;text-align: center;">
                <p class="top_title">充电量</p>
                <p class="top_value">{{todayInfo.chargePower ? todayInfo.chargePower : 0}}</p>
                <p class="top_company">
                  <hy-icon type="dianchi" :showContent="true" size="18" color="#90F4DE"></hy-icon>
                  kw/h</p>
              </i-col>
            </i-col>
          </Row>
          <Row class="row_more">
            <i-col span="12" class="one_class" style="border-bottom: 1px solid rgba(224, 253, 249, 0.1);border-top: 1px solid rgba(224, 253, 249, 0.1);">
              <Row>
                <i-col span="24" class="three_class" >
                  <hy-num-roll countType="续航里程" company="km" :oneNumber="exMileage" :hkShow="false" priceNum="price_4" style="padding-left: 5%;height:90px"></hy-num-roll>
                </i-col>
              </Row>
              <Row>
                <i-col span="24">
                  <div class="soc_chart" id="soc_chart"></div>
                </i-col>
              </Row>
            </i-col>
            <i-col span="12" class="one_class">
              <Row class="half_class" style="border: 1px solid rgba(224, 253, 249, 0.1);border-right: none; padding-left: 10px;padding-top: 10px;">
                <i-col span="12" style="padding-left: 10px;padding-top: 15px;text-align: center;">
                  <p class="top_title">用车时长</p>
                  <p class="top_value">{{todayInfo.userCarMinites}}</p>
                  <p class="top_company">
                    <hy-icon type="shijianzhongbiao" :showContent="true" size="18" color="#4E96B1"></hy-icon>
                    min</p>
                </i-col>
                <i-col span="12" style="padding-left: 10px;padding-top: 15px;text-align: center;">
                  <p class="top_title">耗电量</p>
                  <p class="top_value">{{todayInfo.powerConsumption}}</p>
                  <p class="top_company">
                    <hy-icon type="dianlianghaojinnew" :showContent="true" size="18" color="#DE9595"></hy-icon>
                    kw/h</p>
                </i-col>
              </Row>
              <Row class="half_class" style="border: 1px solid rgba(224, 253, 249, 0.1);border-right: none; padding-left: 10px;padding-top: 10px;">
               <i-col span="12" style="padding-left: 10px;padding-top: 15px;text-align: center;">
                  <p class="top_title">新增报警次数</p>
                  <p class="top_value">{{todayInfo.alarmCount}}</p>
                  <p class="top_company">
                    <hy-icon type="baojing" :showContent="true" size="18" color="#DB6B93"></hy-icon>
                    次</p>
                </i-col>
                <i-col span="12" style="padding-left: 10px;padding-top: 15px;text-align: center;">
                  <p class="top_title">新增报警类型</p>
                  <p style="font-size: 14px;margin-top: 10px;margin-bottom: 5px;">{{todayInfo.alarmType}}</p>
                  <p class="top_company" :style="{marginTop: (todayInfo.alarmType && todayInfo.alarmType.length) >= 8 ? '-17px' : '0'}">
                    <hy-icon type="zhixingyichang" :showContent="true" size="18" color="#892020"></hy-icon>
                  </p>
                </i-col>
              </Row>
            </i-col>
          </Row>
        </Row>
        <!--近12小时行驶参数分析-->
        <Row class="row bottom_center">
          <div class="driving_params" id="driving_params"></div>
        </Row>
      </i-col>
      <i-col span="6" class="col_class">
        <Row class="row right_top">
          <i-col span="12"  class="right_left" style="border-right: 1px solid rgba(224, 253, 249, 0.1);">
            <Row>
              <span class="right_title">车辆档案</span>
            </Row>
            <Row>
              <span class="right_name">车系车型 ：</span><span class="right_value">{{vehicleData.carSeries}}&nbsp;&nbsp;&nbsp;&nbsp;{{vehicleData.carType}}</span>
            </Row>
            <Row>
              <span class="right_name">GPRS号 ：</span><span class="right_value">{{vehicleData.gprsNo}}</span>
            </Row>
            <Row>
              <span class="right_name">电池类型 ：</span><span class="right_value">{{vehicleData.batteryType === '1' ? '锂电池' : vehicleData.batteryType === '2' ? '铅酸电池' : ''}}</span>
            </Row>
            <Row>
              <span class="right_name">电池组编号 ：</span><span class="right_value">{{vehicleData.batteryPackNumber}}</span>
            </Row>
            <!--<p class="right_title">车辆档案</p>-->
            <!--<p><span class="right_name">车系车型：</span><span class="right_value">{{vehicleData.carSeries}}&nbsp;&nbsp;&nbsp;&nbsp;{{vehicleData.carType}}</span></p>-->
            <!--<p><span class="right_name">GPRS号：</span><span class="right_value">{{vehicleData.gprsNo}}</span></p>-->
            <!--<p><span class="right_name">电池类型：</span><span class="right_value">{{vehicleData.batteryType === 1 ? '锂电池' : vehicleData.batteryType === 2 ? '铅酸电池' : ''}}</span></p>-->
            <!--<p><span class="right_name">电池组编号：</span><span class="right_value">{{vehicleData.batteryPackNumber}}</span></p>-->
          </i-col>
          <i-col span="12" class="right_left" style="padding-top: 29px;">
            <Row>
              <span class="right_title"></span>
            </Row>
            <Row>
              <span class="right_name">电机号 ：</span><span class="right_value">{{vehicleData.machineNo}}</span>
            </Row>
            <Row>
              <span class="right_name">控制器号 ：</span><span class="right_value">{{vehicleData.controlNo}}</span>
            </Row>
            <Row>
              <span class="right_name">下线日期 ：</span><span class="right_value">{{vehicleData.releaseTime | formatDate}}</span>
            </Row>
            <Row>
              <span class="right_name">销售日期 ：</span><span class="right_value">{{vehicleData.soldDate | formatDate}}</span>
            </Row>
            <!--<p><span class="right_name">电机号：</span><span class="right_value">{{vehicleData.machineNo}}</span></p>-->
            <!--<p><span class="right_name">控制器号：</span><span class="right_value">{{vehicleData.controlNo}}</span></p>-->
            <!--<p><span class="right_name">下线日期：</span><span class="right_value">{{vehicleData.releaseTime | formatDate}}</span></p>-->
            <!--<p><span class="right_name">销售日期：</span><span class="right_value">{{vehicleData.soldDate | formatDate}}</span></p>-->
          </i-col>
        </Row>
        <Row class="row" style="margin-top: 10px;height: calc(35% - 10px);">
          <div class="right_center" id="probe_temperature"></div>
          <div class="right_detail">
            <span class="wn_class">最高温度：</span><span>{{temp.highestTemp ? temp.highestTemp : '--'}}℃ ({{temp.highestNum ? temp.highestNum : '--'}})&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="wn_class">最低温度：</span><span>{{temp.lowestTemp ? temp.lowestTemp : '--'}}℃ ({{temp.lowestNum ? temp.lowestNum : '--'}})&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="wn_class">平均温度：</span><span>{{temp.avgTemp ? temp.avgTemp : '--'}}℃&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="wn_class">温差：</span><span>{{temp.rangeTemp ? temp.rangeTemp : 0}}℃</span>
          </div>
        </Row>
        <Row class="row" style="margin-top: 10px;height: calc(40% - 10px);">
          <div class="monomers" id="monomers"></div>
          <div class="right_detail" style="padding-left: 2%">
            <span class="wn_class">最高电压：</span><span>{{mInfo.highestVoltage ? mInfo.highestVoltage : '--'}}V ({{mInfo.highestNum ? mInfo.highestNum : '--'}})&nbsp;&nbsp;&nbsp;</span>
            <span class="wn_class">最低电压：</span><span>{{mInfo.lowestVoltage ? mInfo.lowestVoltage : '--'}}V ({{mInfo.lowestNum ? mInfo.lowestNum : '--'}})&nbsp;&nbsp;&nbsp;</span>
            <span class="wn_class">平均电压：</span><span>{{mInfo.avgVoltage ? (isNaN(mInfo.avgVoltage) ? '--' : mInfo.avgVoltage) : '--'}}V&nbsp;&nbsp;&nbsp;</span>
            <span class="wn_class">压差：</span><span>{{mInfo.rangeVoltage ? (isNaN(mInfo.rangeVoltage) ? '--' : mInfo.rangeVoltage) : '--'}}V</span>
          </div>
        </Row>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import 'echarts-liquidfill';
  import AMap from 'AMap';
  import {mapState} from 'vuex';
  import hyNumRoll from '@/components/bigPage/common/numRoll';
  import { monitor, listOneVehicleHistory, listOneVehicleAlarm, listVin, listOneVehicleArchives } from '@/service/bigPageService/monitorTopic';
  import { vehicleList } from '@/service/vehicleManageService/vehicleService';
  import { vehicleMonitor } from '@/service/monitor/realMonitor';
  import { amapGregeoOne } from '@/service/serviceStationService/serviceStation';

  export default {
    name: 'hyMonitorTopic',
    components: {
      hyNumRoll
    },
    data () {
      return {
        map: null,
        before: {
          longitude: '',
          latitude: ''
        },
        vinCode: '',
        loading: false,
        matrixVersion: null,
        vehicleInfo: {
          vinCode: '--',                  // vin码
          mileage: 0,                     // 总里程
          address: '--',                 // 位置
          collectTime: '--',              // 采集时间
          status: '--',                   // 车辆状态
          gear: '--',                     // 档位
          issueValue: 0,                  // 绝缘电阻
          dcdcStatus: '--',               // DC-DC状态
          batteryBalanceStatus: '--',     // 电池包均衡状态
          rtStatus: '--',                 // 空调启动状态
          power: 0,                       // 空调功率(W)
          hvacLevel: '--',                // 空调风机档位
          speedGauge: 0,                  // 仪表车速
          motorGauge: 0,                  // 仪表总电流
          voltageGauge: 0,                // 仪表总电压
          currentGauge: 0                 // 仪表电机转速
        },
        vehicleData: {},     // 车辆档案信息
        todayInfo: {
          mileage: 0,
          chargePower: 0,
          userCarMinites: 0,
          powerConsumption: 0,
          alarmCount: 0,
          alarmType: '无报警'
        },
        carStatus: {  // 车辆状态
          clutchStatus: 0,  // 档位
          carStatus: null,     // 车辆状态
          runningStatus: null   // 运行状态
        },
        temp: {    // 探针信息
          temperatureNum: 0,  // 探针个数
          highestTemp: 0,   // 最高温度
          highestNum: '--',    // 最高温度探针序号
          lowestTemp: 0,    // 最低温度
          lowestNum: '--',    // 最低温度探针序号
          avgTemp: 0,       // 平均温度
          rangeTemp: 0      // 温差
        },
        mInfo: {  // 单体信息
          monomerNum: 0,    // 单体个数
          highestVoltage: 0,  // 最高电压
          highestNum: '--',   // 最高序号
          lowestVoltage: 0,   // 最低电压
          lowestNum: '--',    // 最低序号
          avgVoltage: 0,      // 平均电压
          rangeVoltage: 0     // 压差
        },
        exMileage: 0,         // 续航里程
        onData: {
          commProtocolVersion: 0,       // 0 : 三期, 1 : 二期
          matrixVersion: 0,       // 0 : D3, 1 : D2_100, 2 : D2_80
          overview: {
            mileage: '',
            currentMileage: '',
            chargeStatus: null,
            carStatus: 0,
            driveBrakeStatus: null,
            soc: 0,
            issueValue: '--',
            dcdcStatus: '--',
            clutchStatus: null,
            vehicleSpeed: 0,
            totalVoltage: 0,
            totalCurrent: 0,
            collectTime1: null,
            receiveTime1: null
          },
          position: {
            mileage: '',
            collectTime1: null,
            receiveTime1: null
          },
          bms: {
            collectTime1: null,
            receiveTime1: null,
            temps1: '',
            temps2: '',
            batteryTypeCode: '',
            batteryBalanceStatus: '--',
            highestTemp: 0,
            tempLowest: 0,  // 无值
            batteryTempcount: 0,  // 无值
            highestVoltage: 0,
            lowestVoltage: 0,
            voltageCount: 0,    // 无值
            voltageTotal: 0,
            currentTotal: 0
          },
          havc: {
            rtStatus: '--',
            power: '--',
            hvacLevel: '--'
          },
          peak: {
            highTemperature: 0,
            lowTemperature: 0,
            highProbeCode: null, // 最高温度探针序号
            lowProbeCode: null,  // 最低温度探针序号
            highBatteryCode: null,  // 最高电压电池单体代号
            lowBatteryCode: null,  // 最低电压电池单体代号
            highVoltage: 0,
            lowVoltage: 0,
            collectTime1: null,
            receiveTime1: null
          },
          temperature: {
            number: 0,
            temperatures: ''
          },
          battery: {
            collectTime1: null,
            receiveTime1: null,
            batterySysNumber: 0,
            batteryVoltages: '',
            batteryNumber: 0
          },
          motor: [
            {
              speed: 0,
              collectTime1: null,
              receiveTime1: null,
              motorTemperature: 0,
              controllerTemperature: 0
            }
          ],
          mc: {
            collectTime1: null,
            receiveTime1: null,
            motorRpm: 0,
            motorTemp: 0,
            mcTemp: 0
          },
          vms: {
            speed: '',
            gearStatus: null,
            readyLampState: 1
          },
          msg: {
            collectTime1: null,
            receiveTime1: null,
            geerPositon: null,
            readyLampStatus: 1
          },
          icu: {
            totalMile: ''  // d2 总里程
          },
          // 自定义值
          custom: {
            probeHighest: 0,   // 最高温度探针个数
            probeLowest: 0,    // 最低温度探针个数
            voltageHighest: 0,   // 最高电压个数
            voltageLowest: 0,    // 最低电压个数
            motorTemp: 0,    // 电机平均温度
            motorContTemp: 0,    // 电机控制器平均温度
            temperatureAverage: 0    // 电池平均温度
          },
          noCreated: true    // 是否接收了webSocket数据
        },   // onMessage 获取的数据
        optionsVin: [],
        socketNum: 0,  // websocket推送次数
        vehicle_speed: {echart: null, option: null},        // 车速仪表盘
        vehicle_current: {echart: null, option: null},      // 总电流仪表盘
        vehicle_voltage: {echart: null, option: null},      // 总电压仪表盘
        vehicle_motorSpeed: {echart: null, option: null},   // 电机转速仪表盘
        thermometer: {echart: null, option: null},          // 温度计
        soc_chart: {echart: null, option: null},            // soc
      //  soh_chart: {echart: null, option: null},            // soh
        driving_params: {echart: null, option: null},       // 近12小时行驶参数分析
        probe_temperature: {echart: null, option: null},    // 探针温度
        monomers: {echart: null, option: null}              // 单体
      };
    },
    computed: {
      ...mapState([
        'latestVehicleSocketUrl'
      ])
    },
    mounted () {
      this._initCharts();
      this._initMap();
      listVin(null, res => {
        this.vinCode = res;
        setTimeout(() => {
          this.$refs.select.setQuery(this.vinCode);
        }, 1000);
        this.search();
      }, ret => {
        this.$Notice.error({
          title: '获取默认VIN码失败',
          desc: ret
        });
      });
    },
    methods: {
      search () {
        if (!this.vinCode) {
          return;
        }
        if (this.webSocket) {
          this.webSocket.close();
        }
      //  this.getSoh();  // soh
      //  this.getDrivingParams();  // 行驶参数
        this.getVehicle();  // 车辆档案信息
        let loginInfo = JSON.parse(this._hyTool.getStore('loginInfo'));
        let params = {
          userId: loginInfo.id,
          vinCode: this.vinCode
        };
        let _this = this;
        this.socketNum = 0;
        this.webSocket = monitor(this.latestVehicleSocketUrl, params, res => {
          this.getToday();
          this.getDrivingParams();  // 刷新行驶参数
          let data = JSON.parse(res);
          this.socketNum = this.socketNum + 1;
          if (data.commProtocolVersion === 0 && data.matrixVersion === 0) {
            this.$set(this, 'onData', data);
            this.carStatus.clutchStatus = data.msg ? data.msg.geerPositon : this.carStatus.clutchStatus;
          } else {
          if (this.socketNum === 1) {
            this.$set(this, 'onData', data);
          } else {
            for (let key in this.onData) {
               for (let item in data) {
                 if (key === item) {
                    this.onData[key] = data[item];
                 }
               }
            }
          }
            this.carStatus.clutchStatus = data.vms ? data.vms.gearStatus : this.carStatus.clutchStatus;
          }
          if (this.onData.status.indexOf('tbox:connections:online') > -1) {    // 待机
            this.carStatus.index = 0;
          } else if (this.onData.status.indexOf('tbox:connections:driving') > -1) { // 行驶
            this.carStatus.index = 1;
          } else if (this.onData.status.indexOf('tbox:connections:charging') > -1) { // 充电
            this.carStatus.index = 2;
          } else if (this.onData.status.indexOf('tbox:connections:offline') > -1) {  // 离线
            this.carStatus.index = -1;
          } else if (this.onData.status.indexOf('tbox:connections:exception') > -1) {  // 异常
            this.carStatus.index = -2;
          }
          this.matrixVersion = data.matrixVersion;
          // console.log(data);
          _this.getVehicleText(this.onData);       // 获取各种文本信息
          _this.getAddress(data.position);  // 获取车辆位置信息
          let socGauge = 0;
          this.exMileage = 0;
          // 仪表盘数据，当没有数据时调用前一次数据
          if (this.onData.matrixVersion === 0) {   // 0-D3, 1-双100, 2-双80
          //  sohGauge = data.bms ? data.bms.soh ? data.bms.soh : 0 : 0;
            this.vehicleInfo.speedGauge = this.onData.overview ? this.onData.overview.vehicleSpeed : 0;
            this.vehicleInfo.motorGauge = this.onData.motor && this.onData.motor.length ? this.onData.motor[0].speed / 1000 : 0;
            this.vehicleInfo.voltageGauge = this.onData.overview && this.onData.overview.totalVoltage ? this.onData.overview.totalVoltage : 0;
            this.vehicleInfo.currentGauge = this.onData.overview && this.onData.overview.totalCurrent ? this.onData.overview.totalCurrent : 0;
          } else if (this.onData.matrixVersion === 1 && this.onData.bms) {
            this.vehicleInfo.speedGauge = this.onData.vms ? this.onData.vms.speed : 0;
            this.vehicleInfo.motorGauge = this.onData.mc ? this.onData.mc.motorRpm / 1000 : 0;
            this.vehicleInfo.voltageGauge = this.onData.bms.totalVoltage ? this.onData.bms.totalVoltage : 0;
            this.vehicleInfo.currentGauge = this.onData.bms.totalCurrent ? this.onData.bms.totalCurrent : 0;
          } else {
            socGauge = 0;
            this.vehicleInfo.speedGauge = 0;
            this.vehicleInfo.motorGauge = 0;
            this.vehicleInfo.voltageGauge = 0;
            this.vehicleInfo.currentGauge = 0;
          }
          // 通讯协议
          if (this.onData.commProtocolVersion === 0) {
            socGauge = this.onData.overview ? this.onData.overview.soc : 0;
            // 续航里程计算
            this.exMileage = Number.parseInt(17 / 10.8 * socGauge);   // d3按满电17度计算
            // 探针信息
            // 探针个数，最高温度，最高探针序号，最低温度，最低探针序号，平均温度，温差
            //  temperatureNum, highestTemp, highestNum, lowestTemp, lowestNum, avgTemp, rangeTemp
            this.temp.temperatureNum = this.onData.temperature ? this.onData.temperature.number : 0;
            this.temp.highestTemp = this.onData.peak ? (this.onData.peak.highTemperature === '无效' || this.onData.peak.highTemperature === '异常') ? '--' : this.onData.peak.highTemperature : 0;
            this.temp.highestNum = this.onData.peak ? this.onData.peak.highProbeCode : '--';
            this.temp.lowestTemp = this.onData.peak ? (this.onData.peak.lowTemperature === '无效' || this.onData.peak.lowTemperature === '异常') ? '--' : this.onData.peak.lowTemperature : 0;
            this.temp.lowestNum = this.onData.peak ? this.onData.peak.lowProbeCode : '--';
            this.temp.rangeTemp = isNaN((this.onData.peak ? this.onData.peak.highTemperature : 0) - (this.onData.peak ? this.onData.peak.lowTemperature : 0)) ? '--' : ((this.onData.peak ? this.onData.peak.highTemperature : 0) - (this.onData.peak ? this.onData.peak.lowTemperature : 0));

            // 单体
            // monomerNum 单体个数, highestVoltage 最高电压, highestNum 最高序号, lowestVoltage  最低电压,  lowestNum  最低序号, avgVoltage 平均电压, rangeVoltage  压差
            this.mInfo.monomerNum = this.onData.battery ? this.onData.battery.batteryNumber : 0;
            this.mInfo.highestVoltage = this.onData.peak ? (this.onData.peak.highVoltage ? (this.onData.peak.highVoltage === '无效' || this.onData.peak.highVoltage === '异常') ? '--' : this.onData.peak.highVoltage : 0) : '--';
            this.mInfo.highestNum = this.onData.peak ? this.onData.peak.highBatteryCode : '--';
            this.mInfo.lowestVoltage = this.onData.peak ? (this.onData.peak.lowVoltage ? (this.onData.peak.lowVoltage === '无效' || this.onData.peak.lowVoltage === '异常') ? '--' : this.onData.peak.lowVoltage : 0) : '--';
            this.mInfo.lowestNum = this.onData.peak ? this.onData.peak.lowBatteryCode : '--';
            this.mInfo.rangeVoltage = isNaN((this.onData.peak ? this.onData.peak.highVoltage : 0) - (this.onData.peak ? this.onData.peak.lowVoltage : 0)) ? '--' : ((this.onData.peak ? this.onData.peak.highVoltage : 0) - (this.onData.peak ? this.onData.peak.lowVoltage : 0)).toFixed(3);
          } else if (this.onData.commProtocolVersion === 1) {
            socGauge = this.onData.bms ? this.onData.bms.soc ? this.onData.bms.soc : 0 : 0;
            this.exMileage = Number.parseInt(15 / 10.8 * socGauge);
            // 探针信息
            this.temp.temperatureNum = this.onData.bms ? this.onData.bms.batteryTempCount : 0;
            this.temp.highestTemp = this.onData.bms ? this.onData.bms.highestTemp : 0;
            this.temp.highestNum = this.onData.bms ? this.onData.bms.batteryTempCount : 0;
            this.temp.lowestTemp = this.onData.bms ? this.onData.bms.tempLowest : 0;
            this.temp.lowestNum = this.onData.bms ? this.onData.bms.batteryTempCount : 0;
            this.temp.rangeTemp = (this.onData.bms ? this.onData.bms.highestTemp : 0) - (this.onData.bms ? this.onData.bms.tempLowest : 0);

            // 单体
            if (this.onData.bms) {
              this.mInfo.highestVoltage = this.onData.bms.highestVoltage ? this.onData.bms.highestVoltage : 0;
              this.mInfo.lowestVoltage = this.onData.bms.lowestVoltage ? this.onData.bms.lowestVoltage : 0;
            } else {
              this.mInfo.highestVoltage = 0;
              this.mInfo.lowestVoltage = 0;
            }
            this.mInfo.monomerNum = this.onData.bms ? this.onData.bms.voltageCount : 0;
            this.mInfo.highestNum = this.onData.bms ? this.onData.bms.voltageCount : 0;
            this.mInfo.lowestNum = this.onData.bms ? this.onData.bms.voltageCount : 0;
            this.mInfo.rangeVoltage = ((this.onData.bms ? this.onData.bms.highestVoltage : 0) - (this.onData.bms ? this.onData.bms.lowestVoltage : 0)).toFixed(3);
          }

          // 车速仪表盘
          _this.vehicle_speed.echart.setOption({
            series: [{
              data: [{value: this.vehicleInfo.speedGauge, name: '车速'}]
            }]
          });

          // 总电流仪表盘
          _this.vehicle_current.echart.setOption({
            series: [{
              data: [{value: this.vehicleInfo.currentGauge, name: '总电流'}]
            }]
          });

          // 总电压仪表盘
          _this.vehicle_voltage.echart.setOption({
            series: [{
              data: [{value: this.vehicleInfo.voltageGauge, name: '总电压'}]
            }]
          });

          // 电机转速仪表盘
          _this.vehicle_motorSpeed.echart.setOption({
            series: [{
              data: [{value: this.vehicleInfo.motorGauge, name: '电机转速'}]
            }]
          });

          // soc
          let soc = this.soc_chart.echart.getOption();
          if (Number.parseInt(soc.series[0].data[0].value) !== Number.parseInt(socGauge)) {
            soc.series[0].data[0].value = socGauge;
            soc.series[0].data[1].value = 100 - Number.parseInt(socGauge);
            this.soc_chart.echart.setOption(soc);
          }

          // soh
        /*  let soh = this.soh_chart.echart.getOption();
          if (soh.series[0].data[0].value !== Number.parseInt(sohGauge)) {
            soh.series[0].data[0].value = Number.parseInt(sohGauge);
            soh.series[0].data[1].value = 100 - Number.parseInt(sohGauge);
            this.soh_chart.echart.setOption(soh);
          } */

          // 探针信息
          let tData = [];
          if (this.onData.commProtocolVersion === 0) {
            tData = this.onData.temperature ? this.onData.temperature.temperatures ? this.onData.temperature.temperatures.split(',') : [] : [];
            for (let i = 0; i < tData.length; i++) {
              if (tData[i] === '-8000' || tData[i] === '-9000') {
                tData[i] = 0;
              }
            }
            let [dataShadow, xData] = [[], []];
            let mathMun = 0;
            for (let i = 0; i < tData.length; i++) {
              mathMun += Number.parseFloat(tData[i]);
              dataShadow.push(tData[i]);
              xData.push(i + 1);
            }
            this.temp.avgTemp = mathMun / (this.temp.temperatureNum ? this.temp.temperatureNum : 0);
            this.probe_temperature.echart.setOption({
              title: {text: `温度探针：${this.temp.temperatureNum ? this.temp.temperatureNum : '--'}个`},
              xAxis: [{data: xData}],
              series: [{data: dataShadow}]
            });
          } else {
            this.temp.avgTemp = 0;
            this.probe_temperature.echart.setOption({
              title: {text: '温度探针：--个'},
              xAxis: [{data: []}],
              series: [{data: []}]
            });
          }

          // 单体信息
          let dataAxis1 = [];
          let data1 = [];
        //  let yMax1 = 15;
          if (this.onData.commProtocolVersion === 0) {   // 0 - 三期 1 - 二期
            data1 = this.onData.battery ? (this.onData.battery.batteryVoltages ? this.onData.battery.batteryVoltages.split(',') : []) : [];
            for (let i = 0; i < data1.length; i++) {
              if (data1[i] === '-8000' || data1[i] === '-9000') {
                data1[i] = 0;
              }
              dataAxis1.push(i + 1);
            }
            let dataShadow1 = [];
            let mathMum = 0;
            for (let i = 0; i < data1.length; i++) {
              mathMum += Number.parseFloat(data1[i]);
              dataShadow1.push(data1[i]);
            }
            // let minD = Math.min.apply(Math, dataShadow1) - (this.mInfo.rangeVoltage * 0.1);
            // (minD - this.mInfo.rangeVoltage * 0.1)
            // let maxD = Math.max.apply(Math, dataShadow1) + (this.mInfo.rangeVoltage * 0.1);
            this.mInfo.avgVoltage = Number.parseFloat(mathMum / this.mInfo.monomerNum).toFixed(3);
            this.monomers.echart.setOption({
              title: {text: `单体：${this.mInfo.monomerNum ? this.mInfo.monomerNum : '--'}个`},
              xAxis: [{data: dataAxis1}],
              //  yAxis: [{min: minD.toFixed(3), max: maxD.toFixed(3)}],
              series: [{data: dataShadow1}]
            });
          } else {
            this.mInfo.avgVoltage = 0;
            this.monomers.echart.setOption({
              title: {text: '单体：--个'},
              xAxis: [{data: []}],
              series: [{data: []}]
            });
          }
        }, ret => {
          console.log(ret);
        });
      },

      // 文字信息
      getVehicleText (data) {
      //  console.log(data);
        if (data.overview) {
          this.vehicleInfo.issueValue = data.overview.issueValue;   // 绝缘电阻
          this.vehicleInfo.dcdcStatus = data.overview.dcdcStatus;   // DC-DC状态
        } else {
          this.vehicleInfo.issueValue = '--';   // 绝缘电阻
          this.vehicleInfo.dcdcStatus = '--';   // DC-DC状态
        }
        if (data.bms) {
          this.vehicleInfo.batteryBalanceStatus = data.bms.batteryBalanceStatus;  // 电池包均衡状态
        } else {
          this.vehicleInfo.batteryBalanceStatus = '--';  // 电池包均衡状态
        }
        if (data.hvac) {
          this.vehicleInfo.rtStatus = data.hvac.rtStatus;  // 空调启动状态
          this.vehicleInfo.power = data.hvac.power;  // 空调功率(W)
          this.vehicleInfo.hvacLevel = data.hvac.hvacLevel;  // 空调风机档位
        } else {
          this.vehicleInfo.rtStatus = '--';  // 空调启动状态
          this.vehicleInfo.power = '--';  // 空调功率(W)
          this.vehicleInfo.hvacLevel = '--';  // 空调风机档位
        }
        let [motorTemp, temperaturesSum, motorContTemp] = [0, 0, 0];
        let [avgMotorTemp, avgTemperaturesSum, avgMotorContTemp] = [0, 0, 0];
        if (data.commProtocolVersion === 0) {   // 0-三期, 1-二期
          // 总里程
          this.vehicleInfo.mileage = data.overview ? (data.overview.mileage ? ((String(data.overview.mileage).indexOf('.') > -1 ? data.overview.mileage : data.overview.mileage)) : 0) : 0;

          if (data.motor) {
            data.motor.forEach(val => {
              // 电机温度
              motorTemp = motorTemp + val.motorTemperature;
              // 电机控制器温度
              motorContTemp = motorContTemp + val.controllerTemperature;
            });
            avgMotorTemp = isNaN(motorTemp / data.motor.length) ? 0 : motorTemp / data.motor.length;
            avgMotorContTemp = isNaN(motorContTemp / data.motor.length) ? 0 : motorContTemp / data.motor.length;
          }
          // 电池温度 D3
          let dataArr = data.temperature ? (data.temperature.temperatures ? data.temperature.temperatures.split(',') : []) : [];
          dataArr.forEach(val => {
            if (val === '-8000' || val === '-9000') {
              val = 0;
            };
            temperaturesSum = temperaturesSum + Number(val);
          });

          avgTemperaturesSum = isNaN(temperaturesSum / dataArr.length) ? 0 : temperaturesSum / dataArr.length;
        } else if (data.commProtocolVersion === 1) {
          this.vehicleInfo.mileage = data.icu ? (data.icu.totalMile ? ((String(data.icu.totalMile).indexOf('.') > -1 ? data.icu.totalMile.toFixed(2) : data.icu.totalMile) + 'km') : 0) : 0;
          // 电池温度 D2
          let dataArr1 = data.bms ? data.bms.temps1 ? data.bms.temps1.split(',') : [] : [];
          let dataArr2 = data.bms ? data.bms.temps2 ? data.bms.temps2.split(',') : [] : [];
          let dataArr = dataArr1.concat(dataArr2);
          dataArr.forEach(val => {
            temperaturesSum = temperaturesSum + Number(val);
          });
          avgMotorTemp = data.mc ? data.mc.motorTemp : 0;
          avgMotorContTemp = data.mc ? data.mc.mcTemp : 0;
          avgTemperaturesSum = isNaN(temperaturesSum / dataArr.length) ? 0 : temperaturesSum / dataArr.length;
        }
        let options = this.thermometer.echart.getOption().series;
        if (options.length && options[0].data[0].value !== avgMotorTemp / 100 && options[1].data[0].value !== avgTemperaturesSum / 100 && options[2].data[0].value !== avgMotorContTemp / 100) {
          // 温度计
          this.thermometer.option = {
            title: [
              {
                text: '电机温度',
                show: true,
                left: '10%',
                bottom: '3%',
                textStyle: {
                  fontSize: 10,
                  color: 'rgba(218,235,246,0.4)'
                }
              },
              {
                text: '电池温度',
                show: true,
                left: '40%',
                bottom: '3%',
                textStyle: {
                  fontSize: 10,
                  color: 'rgba(218,235,246,0.4)'
                }
              },
              {
                text: '电机控制器温度',
                show: true,
                left: '65%',
                bottom: '3%',
                textStyle: {
                  fontSize: 10,
                  color: 'rgba(218,235,246,0.4)'
                }
              }
            ],
            series: [
              {
                type: 'liquidFill',
                radius: '45%',
                center: ['20%', '55%'],
                data: [{
                  value: avgMotorTemp ? avgMotorTemp / 100 : 0,
                  itemStyle: {
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
                }],
                amplitude: 0,
                shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
                backgroundStyle: {
                  borderColor: '#3A53A5',
                  color: '#202D40',
                  borderWidth: 3
                },
                itemStyle: {
                  normal: {
                    opacity: 1,
                    shadowBlur: 0
                  }
                },
                outline: {
                  show: false
                },
                label: {
                  normal: {
                    position: ['55%', '-25%'],
                    formatter: function (data) {
                      //  console.log(data);
                      return (Number.isInteger(avgMotorTemp) ? avgMotorTemp : Number.parseFloat(avgMotorTemp).toFixed(1)) + '°C';
                    },
                    color: 'rgba(218,235,246,0.6)',
                    fontSize: 14,
                    rich: {
                      a: {
                        fontSize: 14
                      }
                    }
                  }
                }
              },
              {
                type: 'liquidFill',
                radius: '45%',
                center: ['50%', '55%'],
                data: [{
                  value: avgTemperaturesSum ? avgTemperaturesSum / 100 : 0,
                  itemStyle: {
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
                }],
                amplitude: 0,
                shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
                backgroundStyle: {
                  borderColor: '#3A53A5',
                  color: '#202D40',
                  borderWidth: 3
                },
                itemStyle: {
                  normal: {
                    opacity: 1,
                    shadowBlur: 0
                  }
                },
                outline: {
                  show: false
                },
                label: {
                  normal: {
                    position: ['55%', '-25%'],
                    formatter: function (data) {
                      //  console.log(data);
                      return (Number.isInteger(avgTemperaturesSum) ? avgTemperaturesSum : Number.parseFloat(avgTemperaturesSum).toFixed(1)) + '°C';
                    },
                    color: 'rgba(218,235,246,0.6)',
                    fontSize: 14,
                    rich: {
                      a: {
                        fontSize: 14
                      }
                    }
                  }
                }
              },
              {
                type: 'liquidFill',
                radius: '45%',
                center: ['80%', '55%'],
                data: [{
                  value: avgMotorContTemp ? avgMotorContTemp / 100 : 0,
                  itemStyle: {
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
                }],
                amplitude: 0,
                shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
                backgroundStyle: {
                  borderColor: '#3A53A5',
                  color: '#202D40',
                  borderWidth: 3
                },
                itemStyle: {
                  normal: {
                    opacity: 1,
                    shadowBlur: 0
                  }
                },
                outline: {
                  show: false
                },
                label: {
                  normal: {
                    position: ['55%', '-25%'],
                    formatter: function (data) {
                      //  console.log(data);
                      return (Number.isInteger(avgMotorContTemp) ? avgMotorContTemp : Number.parseFloat(avgMotorContTemp).toFixed(1)) + '°C';
                    },
                    color: 'rgba(218,235,246,0.6)',
                    fontSize: 14,
                    rich: {
                      a: {
                        fontSize: 14
                      }
                    }
                  }
                }
              }
            ]
          };
          this.thermometer.echart.clear();
          this.thermometer.echart.setOption(this.thermometer.option);
        }
      },
      // 单车SOH
    /*  getSoh () {
        listOneVehicleSOH({vinCode: this.vinCode}, res => {
        //  console.log(res);
          // soh
          let soh = this.soh_chart.echart.getOption();
          if (soh.series[0].data[0].value !== res) {
            soh.series[0].data[0].value = res;
            soh.series[0].data[1].value = 100 - res;
            this.soh_chart.echart.setOption(soh);
          }
        });
      },
*/
      // 获取今日信息
      getToday () {
        vehicleMonitor({vinCode: this.vinCode}, res => {
          this.$set(this.todayInfo, 'alarmCount', res.alarmCount);
          this.$set(this.todayInfo, 'chargePower', res.chargePower);
          this.$set(this.todayInfo, 'mileage', res.mileage);
          this.$set(this.todayInfo, 'powerConsumption', res.powerConsumption);
          this.$set(this.todayInfo, 'userCarMinites', res.userCarMinites);
          this.getAlarmType();
    //  this.todayInfo = res;
        }, ret => {
          this.todayInfo = {
            mileage: 0,
            chargePower: 0,
            userCarMinites: 0,
            powerConsumption: 0,
            alarmCount: 0
          };
         });
      },

      // 新增报警类型
      getAlarmType () {
        let _that = this;
        listOneVehicleAlarm({vinCode: this.vinCode}, res => {
          let name = res;
          if (res.length > 12) {
            name = `${res.substring(0, 12)}...`;
          }
          if (name !== _that.todayInfo.alarmType) _that.$set(_that.todayInfo, 'alarmType', name);
        }, ret => {
          this.$set(_that.todayInfo, 'alarmType', '无报警');
        });
      },

      // 单车近24小时历史行驶参数曲线
      getDrivingParams () {
        listOneVehicleHistory({vinCode: this.vinCode}, res => {
          // soc, 车速，电流，电压
          let [socData, speedData, aData, vData, xData] = [[], [], [], [], []];
          for (let item of res) {
            socData.push(item['soc']);
            speedData.push(item['速度']);
            aData.push(item['电流']);
            vData.push(item['电压']);
            xData.push(this._hyTool.DateFormat(new Date(+item['采集时间']), 'hh:mm'));
          }
          this.driving_params.echart.setOption({
            xAxis: {data: xData},
            series: [{data: socData}, {data: speedData}, {data: aData}, {data: vData}],
            yAxis: [{}, {
            //  name: xData[xData.length - 1],
              data: [
                {
                  textStyle: {
                    fontSize: 10,
                    color: '#D3E3EE'
                  },
                  value: socData.length ? socData[socData.length - 1] + '%' : ''  // SOC
                },
                {
                  textStyle: {
                    fontSize: 10,
                    color: '#D3E3EE'
                  },
                  value: speedData.length ? speedData[speedData.length - 1] + 'km/h' : ''  // 车速
                },
                {
                  textStyle: {
                    fontSize: 10,
                    color: '#D3E3EE'
                  },
                  value: aData.length ? aData[aData.length - 1] + 'A' : ''  // 电流
                },
                {
                  textStyle: {
                    fontSize: 10,
                    color: '#D3E3EE'
                  },
                  value: vData.length ? vData[vData.length - 1] + 'V' : ''  // 电压
                }
              ]
            }]
          });
        });
      },

      // 位置
      getAddress (position) {
        this.vehicleInfo.vinCode = this.vinCode;
        this.map.clearMap();
        if (!position) {
          this.vehicleInfo.address = '--';
          return;
        }
      //  let str = position.longitude + ',' + position.latitude;
        let ln = this._hyTool.converAmap(position.latitude, position.longitude);
        let str = ln.lon + ',' + ln.lat;
        if (this.before.longitude !== position.longitude || this.before.latitude !== position.latitude) {
          /* eslint-disable no-new */
          new AMap.Marker({
            map: this.map,
            position: [ln.lon, ln.lat],
            icon: '../static/images/big/mark.png',
            offset: new AMap.Pixel(-13, -30),
            autoRotation: true
          });
        }
        this.before = {
          longitude: position.longitude,
          latitude: position.latitude
        };
        this.map.setZoomAndCenter(14, [ln.lon, ln.lat]);
        this.vehicleInfo.collectTime = position.collectTime === null ? '' : this._hyTool.DateFormat(new Date(+position.collectTime), 'yyyy-MM-dd hh:mm:ss');
        if (position.longitude >= 0.0 && position.longitude < 180.0 && position.latitude >= 0.0 && position.latitude < 90.0) {
          this.getGregeoOne([str], value => {
            this.vehicleInfo.address = value[0].formatted_address;
          });
        }
      },
      // 通过经纬度获取详细地址
      getGregeoOne (list, cb) {
        let vals = [];
        amapGregeoOne(list, res => {
          res.forEach(val => {
            val.data.regeocodes.forEach(va => {
              vals.push(va);
            });
          });
          cb(vals);
        });
      },
      // 查询车辆档案信息
      getVehicle () {
        listOneVehicleArchives({vinCode: this.vinCode}, res => {
          this.vehicleData = res;
        }, ret => {
          this.vehicleData = {};
        });
      },
      // 初始化报表
      _initCharts () {
        this.vehicle_speed.echart = echarts.init(document.getElementById('vehicle_speed'));           // 车速仪表盘
        this.vehicle_current.echart = echarts.init(document.getElementById('vehicle_current'));       // 总电流仪表盘
        this.vehicle_voltage.echart = echarts.init(document.getElementById('vehicle_voltage'));       // 总电压仪表盘
        this.vehicle_motorSpeed.echart = echarts.init(document.getElementById('vehicle_motorSpeed')); // 电机转速仪表盘
        this.thermometer.echart = echarts.init(document.getElementById('thermometer'));               // 温度计
        this.soc_chart.echart = echarts.init(document.getElementById('soc_chart'));                   // soc
       // this.soh_chart.echart = echarts.init(document.getElementById('soh_chart'));                   // soh
        this.driving_params.echart = echarts.init(document.getElementById('driving_params'));         // 近12小时行驶参数分析
        this.probe_temperature.echart = echarts.init(document.getElementById('probe_temperature'));   // 探针温度
        this.monomers.echart = echarts.init(document.getElementById('monomers'));                     // 单体

        // 车速仪表盘
        this.vehicle_speed.option = {
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} km/h'
          },
          series: [
            {
              name: '车速',
              type: 'gauge',
              data: [{value: 0, name: '车速'}],
              radius: '90%',
              center: ['50%', '50%'],
              min: 0,
              max: 120,
              splitNumber: 5,
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  width: 5,
                  color: [[1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#81A7B5'
                  }, {
                    offset: 0,
                    color: '#2041AC'
                  }])]]
                }
              },
              axisTick: {            // 坐标轴小标记
                length: 0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
                }
              },
              splitLine: {           // 分隔线
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
                }
              },
              axisLabel: {
                color: '#666'
              },
              detail: {
                formatter: '{value}km/h',
                fontSize: 14,
                color: '#BCCDF8',
                offsetCenter: [0, '70%']
              },
              title: {
                fontSize: 8,
                color: '#BDCDF8',
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 2            // 指针大小
              }
            }
          ]
        };
        this.vehicle_speed.echart.clear();
        this.vehicle_speed.echart.setOption(this.vehicle_speed.option);

        // 总电流仪表盘
        this.vehicle_current.option = {
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} A'
          },
          series: [
            {
              name: '总电流',
              type: 'gauge',
              data: [{value: 0, name: '总电流'}],
              radius: '90%',
              center: ['50%', '50%'],
              min: -100,
              max: 100,
              splitNumber: 5,
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  width: 5,
                  color: [[1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#7A1743'
                  }, {
                    offset: 0,
                    color: '#DB6B93'
                  }])]]
                }
              },
              axisTick: {            // 坐标轴小标记
                length: 0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
                }
              },
              splitLine: {           // 分隔线
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
                }
              },
              axisLabel: {
                color: '#666'
              },
              detail: {
                formatter: '{value}A',
                fontSize: 14,
                color: '#FDDDE7',
                offsetCenter: [0, '70%']
              },
              title: {
                fontSize: 8,
                color: '#FDDDE7',
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 2            // 指针大小
              }
            }
          ]
        };
        this.vehicle_current.echart.clear();
        this.vehicle_current.echart.setOption(this.vehicle_current.option);

        // 总电压仪表盘
        this.vehicle_voltage.option = {
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} V'
          },
          series: [
            {
              name: '总电压',
              type: 'gauge',
              data: [{value: 0, name: '总电压'}],
              radius: '90%',
              center: ['50%', '50%'],
              min: 0,
              max: 200,
              splitNumber: 5,
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  width: 5,
                  color: [[1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#4E96B1'
                  }, {
                    offset: 0,
                    color: '#3A53A5'
                  }])]]
                }
              },
              axisTick: {            // 坐标轴小标记
                length: 0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
                }
              },
              splitLine: {           // 分隔线
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
                }
              },
              axisLabel: {
                color: '#666'
              },
              detail: {
                formatter: '{value}V',
                fontSize: 14,
                color: '#477DAC',
                offsetCenter: [0, '70%']
              },
              title: {
                fontSize: 8,
                color: '#477DAC',
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 2            // 指针大小
              }
            }
          ]
        };
        this.vehicle_voltage.echart.clear();
        this.vehicle_voltage.echart.setOption(this.vehicle_voltage.option);

        // 电机转速仪表盘
        this.vehicle_motorSpeed.option = {
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} krpm'
          },
          series: [
            {
              name: '电机转速',
              type: 'gauge',
              data: [{value: 0, name: '电机转速'}],
              radius: '90%',
              center: ['50%', '50%'],
              min: 0,
              max: 8,
              splitNumber: 5,
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  width: 5,
                  color: [[1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#2D6462'
                  }, {
                    offset: 0,
                    color: '#A8D2D3'
                  }])]]
                }
              },
              axisTick: {            // 坐标轴小标记
                length: 0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
                }
              },
              splitLine: {           // 分隔线
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
                }
              },
              axisLabel: {
                color: '#666'
              },
              detail: {
                formatter: '{value}krpm',
                fontSize: 14,
                color: '#98C3C4',
                offsetCenter: [0, '70%']
              },
              title: {
                fontSize: 8,
                color: '#98C3C4',
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 2            // 指针大小
              }
            }
          ]
        };
        this.vehicle_motorSpeed.echart.clear();
        this.vehicle_motorSpeed.echart.setOption(this.vehicle_motorSpeed.option);

        // 温度计
        this.thermometer.option = {
          title: [
            {
              text: '电池温度',
              show: true,
              left: '10%',
              bottom: '3%',
              textStyle: {
                fontSize: 10,
                color: '#DAEBF6'
              }
            },
            {
              text: '电机温度',
              show: true,
              left: '40%',
              bottom: '3%',
              textStyle: {
                fontSize: 10,
                color: '#DAEBF6'
              }
            },
            {
              text: '电机控制器温度',
              show: true,
              left: '65%',
              bottom: '3%',
              textStyle: {
                fontSize: 10,
                color: '#DAEBF6'
              }
            }
          ],
          series: [
            {
              type: 'liquidFill',
              radius: '45%',
              center: ['20%', '55%'],
              data: [{
                value: 0,
                itemStyle: {
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
              }],
              amplitude: 0,
              shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
              backgroundStyle: {
                borderColor: '#3A53A5',
                color: '#202D40',
                borderWidth: 3
              },
              itemStyle: {
                normal: {
                  opacity: 1,
                  shadowBlur: 0
                }
              },
              outline: {
                show: false
              },
              label: {
                normal: {
                  position: ['55%', '-25%'],
                  formatter: function (data) {
                  //  console.log(data);
                    return 0 + '°C';
                  },
                  color: '#DAEBF6',
                  fontSize: 14,
                  rich: {
                    a: {
                      fontSize: 14
                    }
                  }
                }
              }
            },
            {
              type: 'liquidFill',
              radius: '45%',
              center: ['50%', '55%'],
              data: [{
                value: 0,
                itemStyle: {
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
              }],
              amplitude: 0,
              shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
              backgroundStyle: {
                borderColor: '#3A53A5',
                color: '#202D40',
                borderWidth: 3
              },
              itemStyle: {
                normal: {
                  opacity: 1,
                  shadowBlur: 0
                }
              },
              outline: {
                show: false
              },
              label: {
                normal: {
                  position: ['55%', '-25%'],
                  formatter: function (data) {
                  //  console.log(data);
                    return 0 + '°C';
                  },
                  color: '#DAEBF6',
                  fontSize: 14,
                  rich: {
                    a: {
                      fontSize: 14
                    }
                  }
                }
              }
            },
            {
              type: 'liquidFill',
              radius: '45%',
              center: ['80%', '55%'],
              data: [{
                value: 0,
                itemStyle: {
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
              }],
              amplitude: 0,
              shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
              backgroundStyle: {
                borderColor: '#3A53A5',
                color: '#202D40',
                borderWidth: 3
              },
              itemStyle: {
                normal: {
                  opacity: 1,
                  shadowBlur: 0
                }
              },
              outline: {
                show: false
              },
              label: {
                normal: {
                  position: ['55%', '-25%'],
                  formatter: function (data) {
                  //  console.log(data);
                    return 0 + '°C';
                  },
                  color: '#DAEBF6',
                  fontSize: 14,
                  rich: {
                    a: {
                      fontSize: 14
                    }
                  }
                }
              }
            }
          ]
        };
        this.thermometer.echart.clear();
        this.thermometer.echart.setOption(this.thermometer.option);

        // soc
        this.soc_chart.option = {
          tooltip: {
            show: false,
            trigger: 'axis'
          },
          itemStyle: {
            normal: {
              color: '#aaa'
            },
            emphasis: {
              color: '#aaa'
            }
          },
          color: '#7696a2',
          series: [{
          //  name: '任务进度',
            type: 'pie',
            radius: ['65%', '75%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            silent: true,   // 不响应鼠标事件
          //  hoverAnimation: false,
            data: [{
              value: 0,
              name: 'soc',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#4E96B1'
                  }, {
                    offset: 0,
                    color: '#3A53A5'
                  }])
                }
              },
              label: {
                formatter: '{d}%',
                padding: [-15, 0, 0, 0],
                color: '#FFFFFF',
                fontSize: 23,
                fontFamily: 'ArialMT',
                fontWeight: 'bolder'
              }
            }, {
              value: 100,
              name: '占位',
              tooltip: {
                show: false
              },
              label: {
                padding: [-15, 0, 0, 0],
                formatter: '\nSOC',
                color: '#DAEBF6',
                fontFamily: 'Helvetica',
                fontSize: 24
              }
            }]
          }]
        };
        this.soc_chart.echart.clear();
        this.soc_chart.echart.setOption(this.soc_chart.option);

        // soh
/*        this.soh_chart.option = {
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#aaa'
            },
            emphasis: {
              color: '#aaa'
            }
          },
          color: '#7696a2',
          series: [{
          //  name: '任务进度',
            type: 'pie',
            radius: ['80%', '90%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            silent: true,   // 不响应鼠标事件
          //  legendHoverLink: false,
            data: [{
              value: 0,
              name: 'soh',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#485B5F'
                  }, {
                    offset: 0,
                    color: '#A6C7D8'
                  }])
                }
              },
              label: {
                formatter: '{d}%',
                padding: [-15, 0, 0, 0],
                color: '#FFFFFF',
                fontSize: 23,
                fontFamily: 'ArialMT',
                fontWeight: 'bolder'
              }
            }, {
              value: 100,
              name: '占位',
              tooltip: {
                show: false
              },
              label: {
                formatter: '\nSOH',
                padding: [-15, 0, 0, 0],
                color: '#DAEBF6',
                fontFamily: 'Helvetica',
                fontSize: 24
              }
            }]
          }]
        };
        this.soh_chart.echart.clear();
        this.soh_chart.echart.setOption(this.soh_chart.option); */

        // 近一次行驶参数分析
        this.driving_params.option = {
          title: {
            text: '近一次行驶参数分析(熄火前2小时)',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 5,
            top: 10
          },
          tooltip: {
            backgroundColor: '#4579AC',
            trigger: 'axis'
          },
          dataZoom: [{
            type: 'inside'
          }],
          legend: {
            itemWidth: 15,
            itemHeight: 15,
            data: [
              {
                name: 'SOC',
                icon: 'rect'
              },
              {
                name: '车速',
                icon: 'rect'
              },
              {
                name: '电流',
                icon: 'rect'
              },
              {
                name: '电压',
                icon: 'rect'
              }
            ],
            right: 20,
            top: 30,
            textStyle: {
              color: '#cee2f6',
              fontSize: 10
            }
          },
          grid: {
            left: '5%',
            //  top: '16%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            boundaryGap: false,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(218,235,246, 0.8)'
              }
            },
            data: []
          //  data: ['0:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
          },
          yAxis:
            [
              {
                type: 'value',
                show: false,
                splitLine: {show: false},
                axisLabel: {
                  formatter: '{value}',
                  textStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 1,
                      color: '#485B5F'
                    }, {
                      offset: 0,
                      color: '#A6C7D8'
                    }])
                  }
                }
              },
              {
                type: 'category',
                show: true,
                nameTextStyle: {
                  color: '#D3E3EE',
                  padding: [0, 0, -15, 30]  // [上, 右, 下, 左]
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(218,235,246, 0.4)'
                  }
                },
                axisTick: {
                  show: false,
                  lineStyle: {
                    color: 'rgba(218,235,246, 0.4)'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: 'rgba(218,235,246, 0.4)'
                  }
                },
                position: 'right',
                data: []
              },
              {
                type: 'value',
                show: false,
                axisLabel: {
                  formatter: '{value}',
                  textStyle: {
                    color: 'rgba(218,235,246, 0.8)'
                  }
                }
              },
              {
                type: 'value',
                show: false,
                position: 'left',
                axisLabel: {
                  formatter: '{value}',
                  textStyle: {
                    color: 'rgba(218,235,246, 0.8)'
                  }
                }
              }
            ],
            series: [
              {
                name: 'SOC',
                type: 'line',
                smooth: true,
                symbol: 'none',   // 是否有点
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 1,
                      color: '#485B5F'
                    }, {
                      offset: 0,
                      color: '#A6C7D8'
                    }])
                  }
                },
                data: []
              },
              {
                name: '车速',
                type: 'line',
                smooth: true,
                symbol: 'none',   // 是否有点
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 1,
                      color: '#00DFC9'
                    }, {
                      offset: 0,
                      color: '#90F4DE'
                    }])
                  }
                },
                data: []
              },
              {
                name: '电流',
                type: 'line',
                smooth: true,
                symbol: 'none',   // 是否有点
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 1,
                      color: '#4E96B1'
                    }, {
                      offset: 0,
                      color: '#3A53A5'
                    }])
                  }
                },
                data: []
              },
              {
                name: '电压',
                type: 'line',
                symbol: 'none',   // 是否有点
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 1,
                      color: '#BA6D8F'
                    }, {
                      offset: 0,
                      color: '#891E4D'
                    }])
                  }
                },
                data: []
              }
            ]
        };
        this.driving_params.echart.clear();
        this.driving_params.echart.setOption(this.driving_params.option);

        // 探针温度
        this.probe_temperature.option = {
          title: {
            left: 10,
            top: 15,
            text: '温度探针：--个',
            textStyle: {
              color: '#DAEAF6',
              fontSize: 16
            }
          },
          tooltip: {
            backgroundColor: '#4579AC',
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: (params) => {
            //  console.log(params);
              return `探针：${params[0].name}</br>温度：${params[0].value}°C`;
            }
          },
          legend: {
            data: ['用户数量'],
            textStyle: {
              color: 'white'
            }
          },
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#485B5F'
            }, {
              offset: 0,
              color: '#A6C7D8'
            }])
          ],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
          },
          xAxis: [
            {
              name: '',
              type: 'category',
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: 'rgba(218,235,246, 0.8)'
                }
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
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
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              axisLabel: {
                textStyle: {
                  color: 'rgba(218,235,246, 0.8)'
                }
              },
              axisTick: {
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              }
            }
          ],
          series: [
            {
              name: '温度',
              type: 'bar',
              barWidth: 10, // 柱图宽度
              data: []
            }
          ]
        };
        this.probe_temperature.echart.clear();
        this.probe_temperature.echart.setOption(this.probe_temperature.option);

        // 单体
        this.monomers.option = {
          title: {
            left: 10,
            top: 15,
            text: '单体：--个',
            textStyle: {
              color: '#DAEAF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#4579AC',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: (params) => {
            //  console.log(params);
              return `单体：${params[0].name}</br>电压：${params[0].value}V`;
            }
          },
          legend: {
            data: ['用户数量'],
            textStyle: {
              color: 'white'
            }
          },
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#00DFC9'
            }, {
              offset: 0,
              color: '#90F4DE'
            }])
          ],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: 'rgba(218,235,246, 0.8)'
                }
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
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
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              axisLabel: {
                textStyle: {
                  color: 'rgba(218,235,246, 0.8)'
                }
              },
              axisTick: {
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              }
            }
          ],
          series: [
            {
              name: '电压',
              type: 'bar',
              barMaxWidth: 4, // 柱图宽度
              // stack: '广告',
              data: []
            }
          ]
        };
        this.monomers.echart.clear();
        this.monomers.echart.setOption(this.monomers.option);
      },

      // 初始化地图
      _initMap () {
        this.map = new AMap.Map('vehicle_map', {
          resizeEnable: true,
          mapStyle: 'amap://styles/darkblue'
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
      }
    },
    beforeDestroy () {
      if (this.webSocket) this.webSocket.close();
      this.vehicle_speed.echart.dispose();
      this.vehicle_current.echart.dispose();
      this.vehicle_voltage.echart.dispose();
      this.vehicle_motorSpeed.echart.dispose();
      this.thermometer.echart.dispose();
      this.soc_chart.echart.dispose();
    //  this.soh_chart.echart.dispose();
      this.driving_params.echart.dispose();
      this.probe_temperature.echart.dispose();
      this.monomers.echart.dispose();
    }
  };
</script>
