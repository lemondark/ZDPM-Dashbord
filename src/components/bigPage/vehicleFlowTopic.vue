<style lang="scss" scoped>
.lightMap {
  width: 100%;
  height: 675px;
  //  height:100%;
  position: relative;
}
.leftData {
  position: absolute;
  left: 20px;
  top: 100px;
  z-index: 9999;
  .status {
    // border:1px solid rgba(255,255,255,0.3);
    margin-top: 20px;
    padding-left: 16px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    line-height: 26px;
    padding-top: 3%;
    p {
      display: inline-block;
      width: 22px;
      font-size: 20px;
      color: white;
    }
    //  div {
    //    display:inline-block;
    //    width: 40px;
    //    height: 40px;
    //    line-height:40px;
    //    background:#DAEBF6;
    //    color: #2E3031;
    //    text-align:center;
    //    font-size:40px;
    //  }
  }
}
.title {
  color: white;
  position: absolute;
  top: 30px;
  text-align: center;
  z-index: 99999;
  width: 100%;
  line-height: 30px;
  height: 30px;
  font-size: 36px;
}
.otherStatus {
  div {
    margin-top: 30px;
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 35px;
    background: rgba(255, 255, 255, 0.3);
    text-align: center;
    margin-right: 10px;
    border-radius: 5px;
    p {
      font-size: 20px;
       color: white;
    }
    //  p:nth-child(2n) {
    //    color:rgba(255,255,255,0.6);
    //  }
  }
}
.buttonStyle {
  position: absolute;
  right: 200px;
  top: 60px;
  z-index: 99999;
}
</style>
<template>
   <div style="width:100%;height:100%;background:#1a1a1a">
     <Row style="width:100%;height:100%;">
      <p class="title">知 豆 车 辆 分 布 图</p>
     <i-col span="8">
        <div class="leftData">
         <p style="font-size:36px;height:36px;font-weight:normal;" >{{countryName}}</p>
         <div class="status">
           <p>在线</p>
           <div style="display:inline-block;width:90%">
             <hy-num-roll company="辆" :oneNumber="listAreaVehicle.onlineCount" priceNum="vechileFlow"></hy-num-roll>
           </div>
         </div>
         <div class="status">
           <p>充电</p>
           <div style="display:inline-block;width:90%">
             <hy-num-roll  company="辆" :oneNumber="listAreaVehicle.chargingCount" priceNum="vechileFlowData"></hy-num-roll>
           </div>
         </div>
         <div class="otherStatus">
           <div>
             <p>{{listAreaVehicle.offlineCount}}</p>
             <p>离线</p>
           </div>
           <div>
             <p>{{listAreaVehicle.totalCount - listAreaVehicle.offlineCount - listAreaVehicle.onlineCount}}</p>
             <p>异常</p>
           </div>
           <div>
             <p>{{listAreaVehicle.drivingCount}}</p>
             <p>行驶</p>
           </div>
           <div>
             <p>{{listAreaVehicle.standByCount}}</p>
             <p>待机</p>
           </div>
         </div>
       </div>
     </i-col>
     <i-col span="24">
        <div id="lightMap" class="lightMap" v-show="lightMapShow"></div>
        <box-map mapWidth="1920px" mapHeight="675px"  @ready="initReady"  @countData="initCount" v-if="cityMapShow" :autoPlay="cityPlay"></box-map>
        <ButtonGroup size="large" class="buttonStyle" >
          <Button type="ghost" @click="chooseName('country')" :style="{backgroundColor: lightMapShow? 'gray' : ''}" style="color:white;">全国</Button>
          <Button type="ghost" @click="chooseName('city')" :style="{backgroundColor: lightMapShow? '' : 'gray'}" style="color:white;">市</Button>
       </ButtonGroup>
       <!--<ul class="cityPosition" v-show="cityMapShow">
            <li v-for="(item,index) in listCityNum"  :key="index" :class="{chooseCity: changeColor === index}" @click="contrast(index)">
              <span>{{item.name}}</span>
            </li>
        </ul>-->
     </i-col>
     <i-col span="4">
     </i-col>
     </Row>
   </div>
</template>
<script>
import echarts from 'echarts';
import hyNumRoll from '@/components/bigPage/common/numRoll';
import boxMap from '@/components/bigPage/common/mapBox';
import {
  listVehicleState,
  listAreaVehicle
} from '@/service/bigPageService/vehicleTopic';
export default {
  name: 'vehicleFlowTopic',
  components: {
    hyNumRoll,
    boxMap
  },
  props: {
    autoPlay: Boolean
  },
  data () {
    return {
      countryName: '全国',
      mapboxMap: null,
      cityPlay: true,
      lightMapShow: true,
      cityMapShow: false,
      listAreaVehicle: {
        chargingCount: 0,
        drivingCount: 0,
        offlineCount: 0,
        onlineCount: 0,
        standByCount: 0,
        totalCount: 0
      },
      listAreaVehicleStore: {
      },
      lightMap: { echart: null, option: null } // 车辆流动
    };
  },
  watch: {
    autoPlay (curValue) {
      console.log(curValue);
      this.cityPlay = this.autoPlay;
    }
  },
  mounted () {
    this.getList();
    this.getFlowData();
    setTimeout(() => {
      this.cityMapShow = true;
      this.lightMapShow = false;
      this.countryName = '';
    }, 8000);
  },
  methods: {
    initReady ({ mapboxgl, mapboxMap }) {
      this.mapboxMap = mapboxMap;
    },
    initCount (mergeData) {
        this.listAreaVehicle = mergeData;
    },
    chooseName (flag) {
      if (flag === 'country') {
        this.cityMapShow = false;
        this.lightMapShow = true;
        this.countryName = '全国';
        this.listAreaVehicle = this.listAreaVehicleStore;
      }
      if (flag === 'city') {
        this.cityMapShow = true;
        this.lightMapShow = false;
        this.countryName = '';
      }
    },
    getFlowData () {
      listVehicleState(
        {},
        res => {
          this.lightMap.echart.setOption({
            series: [{ data: res[2] }, { data: res[1] }, { data: res[0] }]
          });
        },
        ret => {
          this.$Notice.error({
            title: '查询车辆点亮失败',
            desc: ret
          });
        }
      );
      listAreaVehicle(
        {},
        res => {
          this.listAreaVehicle = res.country;
          this.listAreaVehicleStore = res.country;
        },
        ret => {
          this.$Notice.error({
            title: '查询车辆点亮失败',
            desc: ret
          });
        }
      );
    },
    getList () {
      this.lightMap.echart = echarts.init(document.getElementById('lightMap')); // 车辆流动
      // 车辆流动
      $.get('/static/china.json', geoJson => {
        echarts.registerMap('china', geoJson);
        this.lightMap.option = {
          backgroundColor: 'transparent',
          // title: {
          //   text: '知 豆 车 辆 流 动 图',
          //   left: 700,
          //   top: 15,
          //   textStyle: {
          //     color: '#DAEBF6',
          //     fontSize: 36
          //   }
          // },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            right: 120,
            bottom: 100,
            data: ['强', '中', '弱'],
            textStyle: {
              color: '#ccc'
            }
          },
          geo: {
            name: '强',
            type: 'scatter',
            map: 'china',
            zoom: 0.7,
            left: '470',
            right: '17%',
            label: {
              emphasis: {
                show: false
              }
            },
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
              name: '弱',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 1,
              large: true,
              itemStyle: {
                normal: {
                  shadowBlur: 2,
                  shadowColor: 'rgba(37, 140, 249, 0.8)',
                  color: 'rgba(37, 140, 249, 0.8)'
                }
              },
              data: []
            },
            {
              name: '中',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 1,
              large: true,
              itemStyle: {
                normal: {
                  shadowBlur: 2,
                  shadowColor: 'rgba(14, 241, 242, 0.8)',
                  color: 'rgba(14, 241, 242, 0.8)'
                }
              },
              data: []
            },
            {
              name: '强',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 1,
              large: true,
              itemStyle: {
                normal: {
                  shadowBlur: 2,
                  shadowColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }
              },
              data: []
            }
          ]
        };
        this.lightMap.echart.clear();
        this.lightMap.echart.setOption(this.lightMap.option);
      });
    }
  }
};
</script>