<style lang="scss" scoped>
.cityPosition {
  position: absolute;
  right: 14%;
  top: 18%;
  z-index: 99999;
  li {
    width: 60px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    margin-bottom: 10px;
    border-radius: 9999px;
    span {
      font-size: 14px;
    }
  }
  .chooseCity {
    background: white;
    span {
      color: gray;
    }
  }
}
</style>
<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" :style="mapSize">
      <slot/>
    </div>
    <ul class="cityPosition" >
        <li v-for="(item,index) in listCityNum"  :key="index" :class="{chooseCity: changeColor === index}" :style="{cursor: autoPlay ? 'default' : 'pointer'}" @click="contrast(index)">
            <span>{{item.name}}</span>
        </li>
    </ul>
    <p style="position:absolute;bottom:10%;left:2%;font-size:24px;">{{dataTime}}</p>
  </div>
</template>
<script>
import echarts from 'echarts';
import mapboxgl from 'mapbox-gl';
// import mapboxgl from '../../../../static/mapbox.js';
// import MapboxLanguage from '@mapbox/mapbox-gl-language'
import 'echarts-gl';
import {
  listCityState,
  listCityNum
} from '@/service/bigPageService/vehicleTopic';
export default {
  name: 'boxMap',
  props: {
    mapWidth: {
      type: String
    },
    autoPlay: Boolean,
    mapHeight: {
      type: String
    }
  },
  watch: {
    autoPlay (curValue) {
      if (curValue) {
        clearInterval(this.flowCar);
        this.getData(0);
        this.Carousel();
      } else {
        clearInterval(this.flowCar);
        this.getData(0);
        this.changeColor = 0;
      }
    }
  },
  data () {
    return {
      dataTime: '',
      allData: [],
      countData: [],
      timeD: [],
      changeColor: 0,
      listCityNum: [],
      chart: null,
      options: null
    };
  },
  mounted () {
    // setTimeout(() => {
      this.getRank();
    // }, 500);
  },
  methods: {
    getRank () {
      listCityNum(
        {},
        res => {
          this.countData = res.splice(0, 1);
          console.log(this.countData);
          this.countData.map(item => {
            this.listCityNum.push({
              name: item.name,
              lng: item.center
            });
          });
          setTimeout(() => {
             this.init();
          }, 500);
        },
        ret => {
          this.$Notice.error({
            title: '查询城市排名失败',
            desc: ret
          });
        }
      );
    },
    // 初始化
    init () {
      mapboxgl.accessToken =
        'pk.eyJ1Ijoiemhhbmd5ZWJpbiIsImEiOiJjamg4dmVqYTUwN2FjMzBtbXhiNWprMm9sIn0.LuCjt7ueCJWSZhsmHbWGMw';
      this.chart = echarts.init(this.$refs.basicMapbox);
      listCityState(
        { city: this.listCityNum[0].name },
        res => {
          let dataAll = JSON.parse(res);
           console.log(dataAll);
           let vehicleStatus = [
             {'onlineCount': 107113, 'offlineCount': 6, 'drivingCount': 0, 'standByCount': 1, 'chargingCount': 0, 'totalCount': 600},
             {'onlineCount': 4, 'offlineCount': 2, 'drivingCount': 23, 'standByCount': 32, 'chargingCount': 321, 'totalCount': 600},
             {'onlineCount': 14, 'offlineCount': 221, 'drivingCount': 931, 'standByCount': 322, 'chargingCount': 301, 'totalCount': 600},
             {'onlineCount': 1, 'offlineCount': 222, 'drivingCount': 731, 'standByCount': 3, 'chargingCount': 1, 'totalCount': 600},
             {'onlineCount': 2, 'offlineCount': 221, 'drivingCount': 831, 'standByCount': 2, 'chargingCount': 1, 'totalCount': 600},
             {'onlineCount': 3, 'offlineCount': 223, 'drivingCount': 31, 'standByCount': 2, 'chargingCount': 3, 'totalCount': 600},
             {'onlineCount': 4, 'offlineCount': 224, 'drivingCount': 31, 'standByCount': 328, 'chargingCount': 81, 'totalCount': 600}
           ];
           let n = 0;
           this.ciclData = setInterval(() => {
             let mergeData = vehicleStatus[n];
              this.$emit('countData', mergeData);
              n++;
              if (n === vehicleStatus.length - 1) {
                n = 0;
              };
           }, 200);
          this.dataTime = dataAll.time;
          for (let key in dataAll.data) {
            if (dataAll.data[key].length) {
              this.timeD.push(key);
              this.allData.push(dataAll.data[key]);
            }
          }
          this.loadFirst();
        },
        ret => {
          this.$Notice.error({
            title: '查询车辆详细位置失败',
            desc: ret
          });
        }
      );
      //  this.getData(0, true)
        if (this.listCityNum.length > 1) {
          setTimeout(() => {
            this.Carousel();
          }, 2000);
        }
    },
    // 轮播
    Carousel () {
      let num = 1;
      this.flowCar = setInterval(() => {
        this.getData(num);
        this.changeColor = num;
        num++;
        if (num === this.listCityNum.length) {
          num = 0;
        }
      }, 10000);
    },
    contrast (index) {
      this.changeColor = index;
      this.getData(index);
    },
    loadFirst () {
       this.option = {
          baseOption: {
            timeline: {
              axisType: 'category',
              orient: 'vertical',
              autoPlay: true,
              inverse: true,
              playInterval: 200,
              left: null,
              right: 180,
              top: null,
              bottom: 50,
              width: 55,
              height: '75%',
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                },
                emphasis: {
                  textStyle: {
                    color: '#aaa'
                  }
                }
              },
              symbol: 'circle',
              lineStyle: {
                color: '#555'
              },
              checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
              },
              controlStyle: {
                normal: {
                  color: '#666',
                  borderColor: '#666'
                },
                emphasis: {
                  color: '#aaa',
                  borderColor: '#aaa'
                }
              },
              data: this.timeD
            },
            title: {
              text: this.listCityNum[0].name,
              textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 36
              },
              left: '1%',
              top: '15%'
            },
            visualMap: {
              show: false,
              calculable: true,
              realtime: false,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026'
                ]
              },
              outOfRange: {
                colorAlpha: 0
              }
            },
            mapbox3D: {
              center: this.listCityNum[0].lng,
              zoom: 7,
              pitch: 40,
              // bearing: -0,
              // style: MapboxStyle,
              style: 'mapbox://styles/mapbox/dark-v9',
              boxHeight: 25,
              // altitudeScale: 1,
              postEffect: {
                enable: true,
                SSAO: {
                  enable: true,
                  radius: 2,
                  intensity: 1.5
                }
              },
              light: {
                main: {
                  intensity: 1,
                  shadow: false,
                  shadowQuality: 'high'
                },
                ambient: {
                  intensity: 0
                },
                ambientCubemap: {
                  // texture: '/static/data-1491896094618-H1DmP-5px.hdr',
                  exposure: 1,
                  diffuseIntensity: 0.5
                }
              }
            },
            series: [
              {
                type: 'bar3D',
                shading: 'realistic',
                coordinateSystem: 'mapbox3D',
                barSize: 0.5,
                silent: true
              }
            ]
          },
          options: [] // timeline所用的多个option存放处，读取数据后添加
        };
        this.allData.map(item => {
          item.push({
            value: [83, 29, 2000]
          });
          this.option.options.push({
            visualMap: {
                max: 500
            },
            series: [
              {
                data: item
              }
            ]
          });
        });
        global.mapboxgl = mapboxgl;
        global.mapboxChart = this.chart;
        global.mapboxOption = this.option;
        this.$nextTick(() => {
          const { mapboxOption, mapboxChart } = global;
          mapboxChart.setOption(mapboxOption, true);
          // 获取地图map对象
          const mapboxMap = mapboxChart
            .getModel()
            .getComponent('mapbox3D')
            .getMapbox();
          global.mapboxMap = mapboxMap;
          // this.$store.commit('SET_MAPBOXMAP', mapboxMap);
          this.$emit('ready', { mapboxgl, mapboxMap });
          // 设置地图语言
          // let lang = this.getLocalStorage('I18N_LANG') || 'zh';
          // mapboxMap.addControl(new MapboxLanguage({
          //   defaultLanguage: lang
          // }))
        });
      //   let mergeData = this.countData[0];
      //  this.$emit('countData', mergeData);
    },
    getData (num) {
      // let mergeData = this.countData[num];
      // this.$emit('countData', mergeData);
      this.allData = [];
      this.timeD = [];
      this.option.options = [];
      listCityState(
        { city: this.listCityNum[num].name },
        res => {
          let dataAll = JSON.parse(res);
           console.log(dataAll);
          this.dataTime = dataAll.time;
          for (let key in dataAll.data) {
            if (dataAll.data[key].length) {
              this.timeD.push(key);
              this.allData.push(dataAll.data[key]);
            }
          }
        },
        ret => {
          this.$Notice.error({
            title: '查询车辆详细位置失败',
            desc: ret
          });
        }
      );
      setTimeout(() => {
        this.option = {
          baseOption: {
            timeline: {
              axisType: 'category',
              orient: 'vertical',
              autoPlay: true,
              inverse: true,
              playInterval: 200,
              left: null,
              right: 180,
              top: null,
              bottom: 50,
              width: 55,
              height: '75%',
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                },
                emphasis: {
                  textStyle: {
                    color: '#aaa'
                  }
                }
              },
              symbol: 'circle',
              lineStyle: {
                color: '#555'
              },
              checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
              },
              controlStyle: {
                normal: {
                  color: '#666',
                  borderColor: '#666'
                },
                emphasis: {
                  color: '#aaa',
                  borderColor: '#aaa'
                }
              },
              data: this.timeD
            },
            title: {
              text: this.listCityNum[num].name,
              textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 36
              },
              left: '1%',
              top: '15%'
            },
            visualMap: {
              show: false,
              calculable: true,
              realtime: false,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026'
                ]
              },
              outOfRange: {
                colorAlpha: 0
              }
            },
            mapbox3D: {
              center: this.listCityNum[num].lng,
              zoom: 7,
              pitch: 40,
              // bearing: -0,
              // style: MapboxStyle,
              style: 'mapbox://styles/mapbox/dark-v9',
              boxHeight: 25,
              // altitudeScale: 1,
              postEffect: {
                enable: true,
                SSAO: {
                  enable: true,
                  radius: 2,
                  intensity: 1.5
                }
              },
              light: {
                main: {
                  intensity: 1,
                  shadow: false,
                  shadowQuality: 'high'
                },
                ambient: {
                  intensity: 0
                },
                ambientCubemap: {
                  // texture: '/static/data-1491896094618-H1DmP-5px.hdr',
                  exposure: 1,
                  diffuseIntensity: 0.5
                }
              }
            },
            series: [
              {
                type: 'bar3D',
                shading: 'realistic',
                coordinateSystem: 'mapbox3D',
                barSize: 0.5,
                silent: true
              }
            ]
          },
          options: [] // timeline所用的多个option存放处，读取数据后添加
        };
        this.allData.map(item => {
          item.push({
            value: [83, 29, 2000]
          });
          this.option.options.push({
            visualMap: {
                max: 500
            },
            series: [
              {
                data: item
              }
            ]
          });
        });
        this.chart.setOption(this.option);
          }, 1000);
    }
  },
  beforeDestroy () {
    if (this.flowCar) clearInterval(this.flowCar);
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      };
      return styleObj;
    }
  }
};
</script>
