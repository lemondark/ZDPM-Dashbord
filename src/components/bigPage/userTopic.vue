/**
* 用户专题
**/
<style lang="scss" scoped>
  .page_main {
    height: 100%;
    width: 100%;
    .pageLeft {
      padding-right:10px;
      height: 100%;
      .left_top {
      //  margin-top: 20px;
        position:relative;
        min-height:270px;
        height: 40%;
        background-color: #202D40;
        .userAge_bar {
          min-height:270px;
          height: 100%;
          min-width:469px;
          width: 100%;
        }
      }
      .left_center {
        margin-top:10px;
        margin-bottom:10px;
        min-height: 250px;
        height: calc(40% - 20px);
        background-color: #202D40;
        .vehicleColor_bar {
          min-height:250px;
          height: 100%;
          min-width:469px;
          width: 100%;
        }
      }
      .left_bottom {
        min-height: 135px;
        height: 20%;
        background-color: #202D40;
        .sex_color {
          height: 100%;
          margin-left: 5px;
          .woman_bar {
            min-width: 469px;
            width: 100%;
            min-height: 135px;
            height: 100%;
          }
        }
      }
    }
    .pageCenter {
      padding-right:10px;
      height: 100%;
      .center_top {
      //  margin-top: 20px;
      //  background-color: #202D40;
        height: 64%;
        .user_map {
          min-height:420px;
          height: 100%;
          min-width:950px;
          width: 100%;
        }
        /*.user_ProvinceMap {*/
          /*min-height:420px;*/
          /*height: 100%;*/
          /*min-width:950px;*/
          /*width: 100%;*/
          /*margin:auto;*/
        /*}*/
        .user_class {
          width: 400px;
          z-index: 999;
          position: absolute;
          left: 2%;
          top: 15%;
        }
        .second_class {
          width: 400px;
          z-index: 999;
          position: absolute;
          left: 2%;
          top: 43%;
        }
      }
      .center_bottom {
        margin-top:10px;
        background-color: #202D40;
        height: calc(36% - 10px);
        .cityUser_bar {
          min-height:245px;
          height: 100%;
          min-width:950px;
          width: 100%;
          padding-bottom: 10px;
        }
      }
    }
    .pageRight {
      height: 100%;
      .right_top {
        min-height: 165px;
        height: 24%;
        background-color: #202D40;
        .title_text {
          padding-top: 25px;
          padding-left: 16px;
          color: #DAEBF6;
          font-size: 16px;
          font-weight: bold;
        }
        .rankStyle {
          height:45px;
          line-height: 45px;
          margin-top:10px;
          display:inline-block;
          margin-left:15px;
          width:210px;
          background:rgba(218,235,246,0.2);
          color:#D2F8FE;
          .icon_img {
            display:inline-block;
            vertical-align:middle;
            margin-left:10px;
          }
          .vinRank {
            display:inline-block;
            margin-left:25%;
            font-size:14px;
          }
          .percent{
            float: right;
            padding-right: 15px;
            font-size:14px;
            font-weight: bold;
          }
        }
      }
      .right_center {
        margin-top:10px;
        height: calc(40% - 10px);
        background-color: #202D40;
        .scatter_line {
          min-height:240px;
          height: 100%;
          min-width:473px;
          width: 100%;
        }
      }
      .right_bottom {
        height: calc(36% - 10px);
        margin-top:10px;
        background-color: #202D40;
        .hour_pie {
          min-height:244px;
          height: 100%;
          min-width:473px;
          width: 100%;
        }
      }
    }
  }
</style>
<template>
  <div class="page_main">
    <Row class="page_main">
      <Col span="6" class="pageLeft">
        <Row class="left_top">
          <!--用户年龄分布与性别统计-->
          <div id="userAge_bar" class="userAge_bar"></div>
        </Row>
        <Row class="left_center">
          <!--用户年龄分段与车辆颜色统计-->
          <div id="vehicleColor_bar" class="vehicleColor_bar"></div>
        </Row>
        <Row class="left_bottom">
          <!--用户性别与车辆颜色统计-->
          <Row class="sex_color">
            <div class="woman_bar" id="woman_bar"></div>
          </Row>
        </Row>
      </Col>
      <Col span="12" class="pageCenter">
        <Row class="center_top">
          <div id="user_map" class="user_map"></div>
          <!--<div id="user_ProvinceMap" class="user_ProvinceMap" v-show="!proShow"></div>-->
          <div v-show="retMap" style="z-index:999;position: absolute;top:45px;left:75px;">
            <a href="javascript:void(0);" @click="goBackProeMap" style="height:30px;background:#fff;line-height: 30px;border:1px solid #ccc;padding:5px 10px;margin-left:20px;border-radius:5px;cursor: pointer;color:#393939;text-decoration:none;">
              返回全国地图
            </a>
          </div>
          <div class="user_class">
            <hy-num-roll :countType="countType" company="人" :oneNumber="allUser" priceNum="price_1"></hy-num-roll>
          </div>
          <div class="second_class">
            <hy-num-roll countType="活跃用户数" company="人" :oneNumber="activeUser" priceNum="price_2"></hy-num-roll>
          </div>
        </Row>
        <Row class="center_bottom">
          <div id="cityUser_bar" class="cityUser_bar"></div>
        </Row>
      </Col>
      <Col span="6" class="pageRight">
        <Row class="right_top">
          <Col span="24">
            <p class="title_text">用户星座统计</p>
               <Carousel
                v-model="value3" autoplay
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
                <CarouselItem v-for="(item, index) in listData" :key="index">
                    <div class="demo-carousel">
                      <p v-for="(sub, sIndex) in item" :key="index+'_'+sIndex" class="rankStyle">
                        <img class="icon_img" :src="'./../../../static/images/' + sub.name+  '.png'" />
                        <span class="vinRank">{{sub.name | Constellation}}座:</span>
                        <span class="percent">{{sub.value}}</span>
                      </p>
                    </div>
                </CarouselItem>
            </Carousel> 
            <!--  <vue-seamless-scroll :data="constellation" :class-option="classOption" style="overflow:hidden;height:115px;">
                <p v-for="(item, index) in constellation" :key="index" class="rankStyle">
                  <img class="icon_img" :src="'./../../../static/images/' + item.name+  '.png'" />
                  <span class="vinRank">{{item.name | Constellation}}座:</span>
                  <span class="percent">{{item.value}}</span>
                </p>
            </vue-seamless-scroll> -->
          </Col>
        </Row>
        <Row class="right_center">
          <!--用户年龄分段和里程统计-->
          <div id="scatter_line" class="scatter_line"></div>
        </Row>
        <Row class="right_bottom">
          <!--用户用车时段分布-->
          <div id="hour_pie" class="hour_pie"></div>
        </Row>
      </Col>
    </Row>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import hyNumRoll from '@/components/bigPage/common/numRoll';
  import vueSeamlessScroll from 'vue-seamless-scroll';
  import { selectGenderByAge, selectVehicleColor, countByVehicleColorAndGender, selectPosition, selectAll, selectActiveNum, selectCarProvince, selectCarCity, countConstellationRank, selectTotalMile, selectByTiemInterval } from '@/service/bigPageService/userTopic';

  export default {
    name: 'hyUserTopic',
    components: {
      hyNumRoll,
      vueSeamlessScroll
    },
    props: {
      autoPlay: Boolean
    },
    data () {
      return {
        value3: 0,
        setting: {
            autoplaySpeed: 2000,
            dots: 'inside',
            radiusDot: true,
            trigger: 'click',
            arrow: 'never'
        },
        allUser: 0,   // 全国用户
        countType: '全国',   // 统计类型
        activeUser: 0,   // 活跃用户
        mileage: {
          todayMileage: [],
          useVehicle: []
        },
        constellation: [],
        proData: [],
        ageColor: {},
        cityUserData: {},
        mapData: [],
        proShow: true,
        retMap: false,  // 返回全国丢按钮
        colors: [
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{   // 蓝色
            offset: 1,
            color: '#4E96B1'
          }, {
            offset: 0,
            color: '#3A53A5'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{   // 白色
            offset: 1,
            color: '#DCDCDC'
          },
            {
              offset: 0.5,
              color: '#C0F2F9'
            },
            {
              offset: 0,
              color: '#DCDCDC'
            }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{     // 黄色
            offset: 1,
            color: '#8F7662'
          }, {
            offset: 0,
            color: '#DDC176'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{     // 灰色
            offset: 1,
            color: '#696F78'
          }, {
            offset: 0,
            color: '#313844'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{    // 红色
            offset: 1,
            color: '#941A50'
          }, {
            offset: 0,
            color: '#DB6B93'
          }]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [{   // 黑色
            offset: 1,
            color: '#202E44'
          }, {
            offset: 0,
            color: '#010A1A'
          }])
        ],
        userAge_bar: {echart: null, option: null},                 // 用户年龄分布与性别统计
        vehicleColor_bar: {echart: null, option: null},            // 用户年龄分段与车辆颜色统计
        woman_bar: {echart: null, option: null},                  // 用户性别与车辆颜色统计
        hour_pie: {echart: null, option: null},                   // 用户用车时段分布
        scatter_line: {echart: null, option: null},               // 用户年龄分段和里程统计
        user_map: {echart: null, option: null},                   // 监控热力图
      //  user_ProvinceMap: {echart: null, option: null},                   // 监控热力图
        cityUser_bar: {echart: null, option: null}                // 城市用户数量统计
      };
    },
    computed: {
      classOption () {
        return {
          limitMoveNum: 2
        };
      },
      listData () {
        var arr = [];
        for (var i = 0; i < this.constellation.length; i = i + 4) {
          arr.push(this.constellation.slice(i, i + 4));
        }
        return arr;
      }
     },
    mounted () {
      this.$nextTick(() => {
        this._initCharts();
        setTimeout(() => {
          this.getAgeSex(); // 用户年龄分布与性别统计
          this.getAgeColor();   // 用户年龄分段与车辆颜色统计
          this.getSexColor();   // 用户性别与车辆颜色统计
          this.getMap();   // 监控热力图
          this.getCityUser();   // 城市用户数量统计
          this.getConstellationRank();   // 用户星座排行
          this.getAgeMile();   // 用户年龄分段和里程统计
          this.getHour();   // 用户用车时段分布
        }, 1000);
        // if (this.autoPlay) {
        //   setTimeout(() => {
        //     this.initMove();
        //     this.initOtherMove();
        //   }, 5000);
        // }
      });
    },
    methods: {
      // 用户年龄分布与性别统计
      getAgeSex () {
        selectGenderByAge(null, res => {
          let [manData, womanData, yData, manCount, womanCount] = [[], [], [], 0, 0];
          for (let item of res) {
            yData.push({value: +item.group});
            for (let i = 0; i < item.groupList.length; i++) {
              if (item.groupList.length === 1) {
                if (item.groupList[i].gender === '0') {
                  womanCount += (+item.groupList[i].count);
                  womanData.push({'value': +item.group, 'count': +item.groupList[i].count, 'num': +item.groupList[i].count});
                  manData.push({'value': +item.group, 'count': null, 'num': +item.groupList[i].count});
                } else if (item.groupList[i].gender === 1) {
                  manCount += (+item.groupList[i].count);
                  manData.push({'value': +item.group, 'count': `-${+item.groupList[i].count}`, 'num': +item.groupList[i].count});
                  womanData.push({'value': +item.group, 'count': null, 'num': +item.groupList[i].count});
                }
              } else {
                if (item.groupList[i].gender === '0') {
                  womanCount += (+item.groupList[i].count);
                  womanData.push({'value': +item.group, 'count': +item.groupList[i].count});
                } else {
                  manCount += (+item.groupList[i].count);
                  manData.push({'value': +item.group, 'count': `-${+item.groupList[i].count}`});
                }
              }
            }
          }
          for (let j of manData) {
            for (let k of womanData) {
              if (j.value === k.value) {
                j.num = Math.abs(j.count) + k.count;
                k.num = Math.abs(j.count) + k.count;
                break;
              }
            }
          }
          let count = womanCount + manCount;
          this.userAge_bar.echart.setOption({
            yAxis: [{data: yData}],
            legend: {
              formatter: (params) => {
                if (params === '男') return `${Number.isInteger(manCount / count * 100) ? manCount / count * 100 : Number.parseFloat(manCount / count * 100).toFixed(2)}%`;
                else return `${Number.isInteger(womanCount / count * 100) ? womanCount / count * 100 : Number.parseFloat(womanCount / count * 100).toFixed(2)}%`;
              }
            },
            series: [
              {
                data: womanData.map((item) => {
                return (item.count / item.num * 100).toFixed(2);
                })
              },
              {
                data: manData.map((item) => {
                  return -(Math.abs(item.count) / item.num * 100).toFixed(2);
                })
              }
            ]
          });
        });
      },

      // 用户年龄分段与车辆颜色统计
      getAgeColor () {
        selectVehicleColor(null, res => {
          let [blue, white, yellow, gray, red, black] = [[], [], [], [], [], []];
          res.forEach(item => {
            blue.push(item.blue);
            white.push(item.white);
            yellow.push(item.yellow);
            gray.push(item.gray);
            red.push(item.red);
            black.push(item.black);
          });
          this.ageColor = {blue, white, yellow, gray, red, black};
          this.vehicleColor_bar.echart.setOption({
            series: [
              {
                data: blue
              },
              {
                data: white
              },
              {
                data: yellow
              },
              {
                data: gray
              },
              {
                data: red
              },
              {
                data: black
              }
            ]
          });
          if (this.autoPlay) {
            this.ageColorCarousel();
          }
        });
      },

      // 轮播
      ageColorCarousel () {
        let num = 0;
        let _this = this;
        this.ageColorCar = setInterval(() => {
          if (num < 6) {
          _this.vehicleColor_bar.echart.setOption({
              series: [
                {
                  data: num === 0 ? _this.ageColor['blue'] : []
                },
                {
                  data: num === 1 ? _this.ageColor['white'] : []
                },
                {
                  data: num === 2 ? _this.ageColor['yellow'] : []
                },
                {
                  data: num === 3 ? _this.ageColor['gray'] : []
                },
                {
                  data: num === 4 ? _this.ageColor['red'] : []
                },
                {
                  data: num === 5 ? _this.ageColor['black'] : []
                }
              ]
            });
          } else {
            _this.vehicleColor_bar.echart.setOption({
              series: [
                {
                  data: _this.ageColor['blue']
                },
                {
                  data: _this.ageColor['white']
                },
                {
                  data: _this.ageColor['yellow']
                },
                {
                  data: _this.ageColor['gray']
                },
                {
                  data: _this.ageColor['red']
                },
                {
                  data: _this.ageColor['black']
                }
              ]
            });
         }
          if (num === 6) {
            num = 0;
          } else {
            num += 1;
          }
        }, 3500);
      },
      // 用户性别与车辆颜色统计
      getSexColor () {
        countByVehicleColorAndGender(null, res => {
        //  console.log(res);
          // blue, white, yellow, gray, red, black
          let man = [{name: 'blue', value: 0}, {name: 'white', value: 0}, {name: 'yellow', value: 0}, {name: 'gray', value: 0}, {name: 'red', value: 0}, {name: 'black', value: 0}];
          let woman = [{name: 'blue', value: 0}, {name: 'white', value: 0}, {name: 'yellow', value: 0}, {name: 'gray', value: 0}, {name: 'red', value: 0}, {name: 'black', value: 0}];
          for (let item of res) {
            if (Number.parseInt(item.group) === 0 || Number.parseInt(item.group) === 1) {   // 女 | 男
              for (let it of item.groupList) {
                for (let i of Number.parseInt(item.group) === 0 ? woman : man) {
                  if (it.gender === i.name) {
                    i.value = it.count;
                  }
                }
              }
            }
          }
          this.woman_bar.echart.setOption({
            series: [
              {
                data: man
              },
              {
                data: woman
              }
            ]
          });
        });
      },

      // 热力图
      getMap () {
        selectAll(null, res => {    // 统计所有人数
          this.allUser1 = Number.parseInt(res);
          this.allUser = Number.parseInt(res);
        });
        selectActiveNum(null, res => {    // 用户活跃人数
        //  console.log(res);
          this.activeUser1 = Number.parseInt(res);
          this.activeUser = Number.parseInt(res);
        });
        selectPosition(null, res => {   // 查询车辆的位置信息，包含省份，城市经纬度信息
          this.mapData = this._hyTool.deepCopy(res.slice(0, -1));
          let [data, position] = [[], []];
          for (let item of res) {
            if (item.city) {
              position = item.city.position.split(',');
              data.push({name: item.city.province, value: [position[0], position[1], item.provinceTotal]});
            }
          }
          this.proData = data;
          this.user_map.echart.setOption({
            series: [
              {data: data},
              {data: data.sort((a, b) => {
                  return b.value[2] - a.value[2];
                }).slice(0, 6)
              }
            ]
          });
          this.mapData.sort(this._hyTool.compare('provinceTotal', false));
          if (this.autoPlay) this.getCarousel(this.mapData);
        });
      },

      // 省轮播
      getCarousel (topTen) {
        let num = 0;
        let proName = '';
        //  如果是自动，每10秒自动切换市级热力图
        this.proCarousel = setInterval(() => {
          for (let item of this.chinaList.features) {
            if ((item.properties.name).startsWith(topTen[num].city.province) || (topTen[num].city.province).includes(item.properties.name)) {
              proName = item.properties.name;
              break;
            }
          }
        //  $('#retMap').css('display', 'none');
          this.retMap = false;
          this.countType = proName;
          this.allUser = Number.parseInt(topTen[num].provinceTotal);
          this.getChartOptions(proName, topTen[num].city.province);
          if (num === 9 || num === topTen.length - 1) {
            num = 0;
          } else {
            num += 1;
          }
        }, 10000);
      },

      // 省份用户数量统计报表
      async getCityUser () {
        try {
          let list = await this.getByProvince();
        //  console.log(list);
          let [xData, mans] = [[], []];
          for (let item of list) {
            if (item.group) {
              xData.push(item.group);
              let num = 0;
              for (let i = 0; i < item.groupList.length; i++) {
                num += Number.parseInt(item.groupList[i].count);
              }
              mans.push(num);
            }
          }
          this.cityUserData = {xData, mans};
        //  console.log(this.cityUserData);
          this.cityUser_bar.echart.setOption({
            xAxis: {
              data: xData
            },
            series: [
              {
                data: mans
              }
            ]
          });
        } catch (e) {
        }
      },

      // 省份,和性别分别统计用户数量
      getByProvince () {
        return new Promise((resolve, reject) => {
          try {
            selectCarProvince(null, res => {
              resolve(res);
            }, ret => {
              reject([]);
            });
          } catch (e) {
            reject([]);
          }
        });
      },

      // 市级热力图
      getByCity (carProvince) {
        let params = {
          carProvince: carProvince
        };
        selectCarCity(params, res => {
          let [data, position] = [[], []];    // 热力图
          let [xData, mans] = [[], [], []]; // 报表
          let sum = 0;
          if (res) {
            for (let item of res) {
              // 报表
              xData.push(item.city);
              mans.push(item.total.toString());
              // 热力图
              sum += Number.parseInt(item.total);
              if (item.content.length && item.content[0].groupList.length) {
                position = item.content[0].groupList[0].position.split(',');
                data.push({name: item.city, value: [position[0], position[1], item.total]});
                carProvince = item.content[0].groupList[0].province;
              }
            }
          }
          this.allUser = sum;
          this.user_map.echart.setOption({
            series: [
              {data: data},
              {data: data.sort((a, b) => {
                  return b.value[2] - a.value[2];
                }).slice(0, 6)
              }
            ]
          });
        //  this.cityUser_bar.echart.clear();
          this.cityUser_bar.echart.setOption({
            title: {
              text: `${carProvince}用户数量统计`
            },
            xAxis: {
              data: xData
            },
            series: [
              {
                data: mans
              }
            ]
          });
          selectActiveNum({province: carProvince}, res => {    // 省用户活跃人数
            // console.log(res);
            this.activeUser = Number.parseInt(res);
          });
        }, ret => {
        });
      },

      // 用户星座排行
      getConstellationRank () {
        countConstellationRank(null, res => {
          for (var item in res) {
            this.constellation.push({name: item, value: res[item]});
          }
         /* this.mileage.todayMileage = res;
          if (res.length === 4 || res.length === 7) {
            this.mileage.todayMileage.push({}, {});
          } else if (res.length === 5 || res.length === 8) {
            this.mileage.todayMileage.push({});
          } */
        }, ret => {
          this.$Notice.error({
            title: '用户星座排行查询失败',
            desc: ret
          });
        });
      },

      // 用户年龄分段和里程统计
      getAgeMile () {
        selectTotalMile(null, res => {
          let [x1Data, mileage] = [[], [], []];
          res.map(item => {
            x1Data.push(Object.keys(item)[0]);
            mileage.push(Object.values(item)[0]);
          });
          this.scatter_line.echart.setOption({
            xAxis: [{data: x1Data}],
            series: [{data: mileage}]
          });
        });
      },

      // 用户用车时段分布
      getHour () {
        selectByTiemInterval(null, res => {
          let list = [];
          for (let item of res) {
            if (item.timeInterval >= '1' && item.timeInterval <= '5') {
              list.push({name: +item.timeInterval, value: item.count ? +item.count : 0});
            }
          }
          this.hour_pie.echart.setOption({
            series: [{data: list}]
          });

          // 自动轮播
          let _this = this;
          this.index = 0;
          setTimeout(() => {
            // 高亮当前图形
            _this.hour_pie.echart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: this.index
            });
          }, 500);
          this.lunbo = setInterval(() => {
            // 取消之前高亮的图形
            _this.hour_pie.echart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: this.index
            });
            if (this.index === list.length - 1) this.index = 0;
            else this.index++;
            // 高亮当前图形
            _this.hour_pie.echart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: this.index
            });
          }, 5000);
        });
      },

      // 初始化所有报表
      _initCharts () {
        // 用户年龄分布与性别统计
        let _this = this;
        this.userAge_bar.echart = echarts.init(document.getElementById('userAge_bar'));// 用户年龄分布与性别统计
        this.userAge_bar.option = {
          title: {
            text: '用户年龄分布与性别统计',
            left: 15,
            top: 25,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'item',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              return _this.ageType(params.name) + '( ' + params.seriesName + '): ' + Math.abs(params.value) + '%';
            }
          },
          grid: {
            //  left: '3%',
            right: '1%',
            bottom: '3%',
            containLabel: true
          },
          legend: {
            right: 10,
            top: 25,
            itemWidth: 25,
            itemHeight: 22,
            selectedMode: false, // 不可点击
            formatter: (params) => {
              if (params === '男') return '  ';
              else return '  ';
            },
            data: [
              {
                name: '男',
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/man.png'
              },
              {
                name: '女',
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/woman.png'
              }
            ]
          },
          xAxis: [
            {
              type: 'value',
              show: false,
              axisLabel: {
                formatter: function (value) {
                  return Math.abs(value);
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel: {
                textStyle: {
                  color: '#E6FBFB'
                },
                formatter: (value) => {
                  return _this.ageType(value);
                }
              },
              data: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]
            }
          ],
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#BA6D8F'
            }, {
              offset: 0,
              color: '#891E4D'
            }]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#4E96B1'
            }, {
              offset: 0,
              color: '#3A53A5'
            }])
          ],
          series: [
            {
              name: '女',
              type: 'bar',
              stack: '总数',
              barMinHeight: 50, // 最小高度，防止数值展示在外面
              barWidth: 18, // 柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'insideRight',
                  color: '#E6FBFB',
                  formatter: (params) => {
                    if (params.value) {
                      return `${Math.abs(params.value)}%`;
                    } else {
                      return '';
                    }
                  }
                }
              },
              data: []
            },
            {
              name: '男',
              type: 'bar',
              stack: '总数',
              barMinHeight: 50,
              barWidth: 18, // 柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  color: '#E6FBFB',
                  formatter: (params) => {
                    if (params.value) {
                      return `${Math.abs(params.value)}%`;
                    } else {
                      return '';
                    }
                  }
                }
              },
              data: []
            }
          ]
        };
        this.userAge_bar.echart.clear();
        this.userAge_bar.echart.setOption(this.userAge_bar.option);

        // 用户年龄分段与车辆颜色统计
        this.vehicleColor_bar.echart = echarts.init(document.getElementById('vehicleColor_bar'));
        this.vehicleColor_bar.option = {
          title: {
            text: '用户年龄分段与车辆颜色统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: (params) => {
              let spanStyle = '<br /><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:';
              if (params.length === 6) {
                return `${params[0].axisValue}
                  ${spanStyle}#4E96B1"></span> ${params[0].seriesName}：${params[0].value}辆
                  ${spanStyle}#DCDCDC"></span>${params[1].seriesName}：${params[1].value}辆
                  ${spanStyle}#8F7662"></span>${params[2].seriesName}：${params[2].value}辆
                  ${spanStyle}#696F78"></span>${params[3].seriesName}：${params[3].value}辆
                  ${spanStyle}#941A50"></span>${params[4].seriesName}：${params[4].value}辆
                  ${spanStyle}#202E44"></span>${params[5].seriesName}：${params[5].value}辆`;
              } else {
                return `${params[0].axisValue}<br />${params[0].seriesName}：${params[0].value}辆`;
              }
            }
          },
          color: this.colors,
          legend: {
            right: 10,
            top: 35,
            itemWidth: 25,
            itemHeight: 22,
            selectedMode: true, // 不可点击
            formatter: (params) => {
              return '  ';
            },
            data: [   // blue, white, yellow, gray, red, black
              {
              //  name: 'blue', // 蓝色
                name: '蓝色', // 蓝色
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/car1.png'
              },
              {
              //  name: 'white',  // 白色
                name: '白色',  // 白色
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/car2.png'
              },
              {
              //  name: 'yellow', // 黄色
                name: '黄色', // 黄色
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/car3.png'
              },
              {
              //  name: 'gray', // 灰色
                name: '灰色', // 灰色
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/car4.png'
              },
              {
              //  name: 'red',  // 红色
                name: '红色',  // 红色
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/car5.png'
              },
              {
              //  name: 'black',  // 黑色
                name: '黑色',  // 黑色
                textStyle: {
                  fontSize: 12,
                  color: '#E6FBFB'
                },
                icon: 'image://../static/images/big/car6.png'
              }
            ]
          },
          grid: {
            bottom: 30,
            top: 80
          },
          xAxis: {
            type: 'category',
            left: 10,
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(218,235,246, 0.8)',
                fontSize: 12
              }
            },
            axisTick: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            data: ['18~25岁', '26~35岁', '36~45岁', '46~55岁', '55岁以上']
          },
          yAxis: {
            type: 'value',
            name: '(辆)',
            nameTextStyle: {
            //  color: '#67E9E4',
              fontSize: 14,
              fontFamily: 'MicrosoftYaHei',
              padding: [10, 0, 0, 20]
            },
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(218,235,246, 0.8)',
                fontSize: 14
              }
            },
            axisTick: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: 30, // 柱图宽度
            //  name: 'blue', // 蓝色
              name: '蓝色', // 蓝色
              data: [],
              stack: '1'
            },
            {
              type: 'bar',
            //  name: 'white',  // 白色
              name: '白色',  // 白色
              barWidth: 30, // 柱图宽度
              data: [],
              stack: '1'
            },
            {
              type: 'bar',
            //  name: 'yellow', // 黄色
              name: '黄色', // 黄色
              barWidth: 30, // 柱图宽度
              data: [],
              stack: '1'
            },
            {
              type: 'bar',
            //  name: 'gray',  // 灰色
              name: '灰色',  // 灰色
              barWidth: 30, // 柱图宽度
              data: [],
              stack: '1'
            },
            {
              type: 'bar',
            //  name: 'red',  // 红色
              name: '红色',  // 红色
              barWidth: 30, // 柱图宽度
              data: [],
              stack: '1'
            },
            {
              type: 'bar',
            //  name: 'black',  // 黑色
              name: '黑色',  // 黑色
              barWidth: 30, // 柱图宽度
              data: [],
              stack: '1'
            }
          ]
        };
        this.vehicleColor_bar.echart.clear();
        this.vehicleColor_bar.echart.setOption(this.vehicleColor_bar.option);

        // 用户性别与车辆颜色统计
        this.woman_bar.echart = echarts.init(document.getElementById('woman_bar'));// 用户性别与车辆颜色统计
        this.woman_bar.option = {
          title: {
            text: '用户性别与车辆颜色统计',
            left: 15,
            top: 10,
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            }
          },
          color: this.colors,
          legend: [
            {
              selectedMode: false,
              // formatter: function (name) {
              //   return '';
              // },
              itemWidth: 0,
              itemHeight: 0,
              data: [{
                name: '男',
                textStyle: {
                  color: '#DAEAF6'
                }
              }],
              left: '71.5%',
              top: '56%'
            //  icon: 'image://../static/images/big/small_man.png'
            },
            {
              selectedMode: false,
              // formatter: function (name) {
              //   return '';
              // },
              itemWidth: 0,
              itemHeight: 0,
              data: [{
                name: '女',
                textStyle: {
                  color: '#DAEAF6'
                }
              }],
              left: '21.5%',
              top: '56%'
            //  icon: 'image://../static/images/big/small_woman.png'
            }
          ],
          tooltip: {
            trigger: 'item',
            backgroundColor: '#4579AC',
            formatter: (params) => {
              return `${_this.vehicleColor(params.name)}: ${params.value}(${params.percent}%)`;
            }
          },
          series: [
            {
              name: '男',
              type: 'pie',
              radius: ['25%', '35%'],
              center: ['75%', '65%'],
              label: {
                normal: {
                  formatter: '{d}%',
                  color: '#DAEBF6'
                }
              },
              data: []
            },
            {
              name: '女',
              type: 'pie',
              radius: ['25%', '35%'],
              center: ['25%', '65%'],
              label: {
                normal: {
                  formatter: '{d}%',
                  color: '#DAEBF6'
                }
              },
              data: []
            }
          ]
        };
        this.woman_bar.echart.clear();
        this.woman_bar.echart.setOption(this.woman_bar.option);

        // 监控热力图
        this.user_map.echart = echarts.init(document.getElementById('user_map'));// 监控热力图
        this.getAllPro();
      //  this.user_ProvinceMap.echart = echarts.init(document.getElementById('user_ProvinceMap'));// 监控热力图

        // 热力图点击事件
        this.user_map.echart.on('click', (params) => {
        //  console.log(params);
        //  echarts.registerMap('', );
          if (this.countType !== '全国' || this.autoPlay) return;
          let proName = '';
          for (let item of _this.chinaList.features) {
            if ((item.properties.name).startsWith(params.name) || (params.name).includes(item.properties.name)) {
              proName = item.properties.name;
              break;
            }
          }
          setTimeout(() => {
          //  $('#retMap').css('display', 'block');
            this.retMap = true;
          }, 500);
          this.countType = proName;
          this.getChartOptions(proName, params.name);
        });

        // 城市用户数量统计
        this.cityUser_bar.echart = echarts.init(document.getElementById('cityUser_bar'));// 城市用户数量统计
        this.cityUser_bar.option = {
          title: {
            text: '全国用户数量统计',
            left: 15,
            top: 10,
            textStyle: {
              color: '#DAEAF6',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (param) {
              return `${param[0].name}<br/>${param[0].seriesName}:${param[0].value}人`;
            }
          },
          // legend: {
          //   data: ['男', '女'],
          //   right: 10,
          //   textStyle: {
          //     color: '#CFE2E5'
          //   }
          // },
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#4E96B1'
            }, {
              offset: 0,
              color: '#3A53A5'
            }])
            // new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 1,
            //   color: '#BA6D8F'
            // }, {
            //   offset: 0,
            //   color: '#891E4D'
            // }])
          ],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              axisLabel: {
                textStyle: {
                  color: 'rgba(218,235,246, 0.8)',
                  fontSize: 10
                },
                interval: 0, // 横轴信息全部显示
                rotate: -45 // -45度角倾斜显示
              },
              axisTick: {
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
                  color: 'rgba(218,235,246, 0.8)',
                  fontSize: 14
                }
              },
              axisTick: {
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              name: ''
            }
          ],
          series: [
            {
              name: '总数',
              type: 'bar',
              barWidth: 10, // 柱图宽度
              data: []
            }
            // {
            //   name: '女',
            //   type: 'bar',
            //   barWidth: 10, // 柱图宽度
            //   data: []
            // }
          ]
        };
        this.cityUser_bar.echart.clear();
        this.cityUser_bar.echart.setOption(this.cityUser_bar.option);

        // 用户年龄分段和里程统计
        this.scatter_line.echart = echarts.init(document.getElementById('scatter_line'));// 用户年龄分段和里程统计
        this.scatter_line.option = {
          title: {
            text: '用户年龄分段和里程统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            right: 'center',
            left: 15,
            top: 10
          },
          color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#5B4EAF'
            }, {
              offset: 0,
              color: '#73CFD4'
            }])
          ],
          tooltip: {
            trigger: 'item',
            backgroundColor: '#4579AC',
            formatter: function (param) {
               return `${param.name}<br/>${param.seriesName}:${param.value}万km`;
            }
          },
          grid: {
            bottom: 40
          },
          xAxis: [
            {
              name: '（岁）',
              nameTextStyle: {
                padding: [0, 0, 0, -10]
              },
              position: 'bottom',
              splitLine: {show: false},
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              axisLabel: {
                show: true,
                showMaxLabel: true,
                textStyle: {
                  color: 'rgba(218,235,246, 0.8)'
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: 'rgba(218,235,246, 0.4)'
                }
              },
              data: []
            }],
          yAxis: {
            name: '万km',
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(218,235,246, 0.8)'
              }
            }
          },
          series: [{
            name: '里程',
            type: 'bar',
            barWidth: 30,
            data: []
          }]
        };
        this.scatter_line.echart.clear();
        this.scatter_line.echart.setOption(this.scatter_line.option);

        // 用户用车时段分布
        this.hour_pie.echart = echarts.init(document.getElementById('hour_pie'));
        this.hour_pie.option = {
          title: {
            text: '用户用车时段分布',
            margin: [5, 100, 5, 5], // 设置标题内边距,上，右，下，左
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            right: 20,
            top: 70,
            textStyle: {
              color: 'rgba(230,251,251,0.8)'
            },
            // bottom: 20,
            data: [1, 2, 3, 4, 5],
            formatter: (value) => {
              return _this.timeType(value);
            }
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
              radius: ['40%', '55%'],
              center: ['40%', '50%'],
              silent: true,
              avoidLabelOverlap: false,
              minAngle: 20,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  position: 'center',
                  formatter: '{d}%',
                  textStyle: {
                    fontSize: 24,
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
        this.hour_pie.echart.clear();
        this.hour_pie.echart.setOption(this.hour_pie.option);
      },

      // 省地图
      getAllPro () {
        let _this = this;
        $.get('/static/china.json', (geoJson) => {
          _this.chinaList = geoJson;
          echarts.registerMap('china', geoJson);
          this.user_map.option = {
            backgroundColor: 'transparent',
            title: {
              text: '知 豆 车 辆 用 户 分 析',
              left: 'center',
              top: 20,
              textStyle: {
                color: '#FFFFFF',
                fontSize: 36,
                fontFamily: 'MicrosoftYaHei'
              }
            },
            tooltip: {
              trigger: 'item',
              backgroundColor: '#4579AC',
              formatter: (params) => {
                return `${params.data.name}<br/>${params.data.value[2]}人`;
              }
            },
            // legend: {
            //   orient: 'vertical',
            //   y: 'bottom',
            //   x: 'right',
            //   data: ['pm2.5'],
            //   textStyle: {
            //     color: '#fff'
            //   }
            // },
            visualMap: {
              type: 'continuous',
              right: 50,
              bottom: 50,
              min: 0,
              max: 36200,
              text: ['高', '低'],
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
              zoom: 0.8,
              // label: {
              //   emphasis: {
              //     show: false
              //   }
              // },
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
                name: 'pm2.5',
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
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#ddb926'
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
          this.user_map.echart.clear();
          this.user_map.echart.setOption(this.user_map.option);
        });
      },

      // 年龄分段
      ageType (type) {
        let text = '';
        switch (Number.parseInt(type)) {
          case 1:
            text = '18~25岁';
            break;
          case 2:
            text = '26~35岁';
            break;
          case 3:
            text = '36~45岁';
            break;
          case 4:
            text = '46~55岁';
            break;
          case 5:
            text = '55岁以上';
            break;
        }
        return text;
      },

      // 车辆颜色
      vehicleColor (type) {
        let text = '';
        switch (type) {
          case 'blue':
            text = '蓝色';
            break;
          case 'white':
            text = '白色';
            break;
          case 'yellow':
            text = '黄色';
            break;
          case 'gray':
            text = '灰色';
            break;
          case 'red':
            text = '红色';
            break;
          case 'black':
            text = '黑色';
            break;
        }
        return text;
      },

      // 时间分段
      timeType (type) {
        let text = '';
        switch (Number.parseInt(type)) {
          case 1:
            text = '6:00~10:00';
            break;
          case 2:
            text = '10:00~14:00';
            break;
          case 3:
            text = '14:00~18:00';
            break;
          case 4:
            text = '18:00~22:00';
            break;
          case 5:
            text = '22:00~6:00';
            break;
        }
        return text;
      },

      // 返回全国地图
      goBackProeMap () {
        this.countType = '全国';
        this.allUser = this.allUser1;
        this.activeUser = this.activeUser1;
        this.getAllPro();
        setTimeout(() => {
          this.user_map.echart.setOption({
            series: [
              {data: this.proData},
              {data: this.proData.sort((a, b) => {
                  return b.value - a.value;
                }).slice(0, 6)
              }
            ]
          });
          //  console.log(this.cityUserData);
          this.cityUser_bar.echart.setOption({
            title: {
              text: '全国用户数量统计'
            },
            xAxis: {
              data: this.cityUserData.xData
            },
            series: [
              {
                data: this.cityUserData.mans
              }
            ]
          });
        }, 1000);
      //  $('#retMap').css('display', 'none');
        this.retMap = false;
      },

      // 市地图
      getChartOptions (mapCode, name) {
        // let mapName = this.cityMap[mapCode];
        $.getJSON('/static/province/' + mapCode + '.json', (mapData) => {
          if (mapData) {
            echarts.registerMap(mapCode, mapData);
            let option = {
              backgroundColor: 'transparent',
              title: {
                text: '知 豆 车 辆 用 户 分 析',
                left: 'center',
                top: 20,
                textStyle: {
                  color: '#FFFFFF',
                  fontSize: 36,
                  fontFamily: 'MicrosoftYaHei'
                }
              },
              tooltip: {
                trigger: 'item',
                backgroundColor: '#4579AC',
                formatter: (params) => {
                  return `${params.data.name}<br/>${params.data.value[2]}人`;
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
                right: 50,
                bottom: 50,
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
                  show: true,
                  position: 'left',
                  color: '#fff',
                  fontSize: 10
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
                  name: 'pm2.5',
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
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#ddb926'
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
              ]
            };
            this.user_map.echart.clear();
            this.user_map.echart.setOption(option);
            // 获取省下面的人数
            this.getByCity(name);
          } else {
            alert('无法加载该地图');
          }
        });
      }
    },
    watch: {
      autoPlay (value) {
      //  console.log(value);
        if (value) {
          this.retMap = false;
          clearInterval(this.proCarousel);
          this.getCarousel(this.mapData);
          this.ageColorCarousel();
          // setTimeout(() => {
          //   this.initMove();
          //   this.initOtherMove();
          // }, 1000);
        } else {
          clearInterval(this.proCarousel);
          clearInterval(this.ageColorCar);
          this.goBackProeMap();
          this.vehicleColor_bar.echart.setOption({
            series: [
              {
                data: this.ageColor['blue']
              },
              {
                data: this.ageColor['white']
              },
              {
                data: this.ageColor['yellow']
              },
              {
                data: this.ageColor['gray']
              },
              {
                data: this.ageColor['red']
              },
              {
                data: this.ageColor['black']
              }
            ]
          });
        }
      }
    },
    beforeDestroy () {
      if (this.lunbo) clearInterval(this.lunbo);
      if (this.proCarousel) clearInterval(this.proCarousel);
      if (this.ageColorCar) clearInterval(this.ageColorCar);
      this.userAge_bar.echart.dispose();
      this.vehicleColor_bar.echart.dispose();
      this.woman_bar.echart.dispose();
      this.hour_pie.echart.dispose();
      this.scatter_line.echart.dispose();
      this.user_map.echart.dispose();
      this.cityUser_bar.echart.dispose();
    }
  };
</script>
