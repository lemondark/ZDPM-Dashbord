/**
* 分析专题
**/
<style lang="scss" scoped>
  .page_main {
    height: 100%;
    width: 100%;
    .rowHeight {
      width: 100%;
      height: 100%;
      .title_class {
        fontFamily: 'MicrosoftYaHei';
        position: absolute;
        color: #ffffff;
        left: 40%;
        font-size: 36px;
        z-index: 999;
      }
      .col_row {
        margin-top: 20px;
        height: calc(100% - 20px);
        .row {
          background-color: #202D40;
          //  border:1px solid #202D40;
          min-height: 330px;
          height: 50%;
          .firstChart {
            min-height: 330px;
            height: 100%;
            min-width: 450px;
            width: 100%;
          }
        }
        .topRow {
          margin-bottom: 10px;
          margin-right: 10px;
          height: calc(50% - 10px);
        }
        .bottomRow {
          margin-right: 10px;
        }
      }
    }
  }
</style>
<template>
  <div class="page_main">
    <Row class="rowHeight">
      <span class="title_class">知 豆 车 辆 数 据 分 析</span>
      <Col span="12" class="col_row">
        <!--近15日充电次数统计-->
        <Row class="row topRow">
          <div class="firstChart" id="firstChart"></div>
        </Row>
        <!--近15日充电量统计-->
        <Row class="row topRow">
          <div class="firstChart" id="secondChart"></div>
        </Row>
      </Col>

      <Col span="6" class="col_row">
        <!--近15日车辆耗电量统计-->
        <Row class="row topRow">
          <div class="firstChart" id="thirdChart"></div>
        </Row>
        <!--车辆充电时段统计-->
        <Row class="row bottomRow">
          <div class="firstChart" id="fifthChart"></div>
        </Row>
        <!--车辆总里程分段统计-->
       <!--  <Row class="row bottomRow">
          <div class="firstChart" id="seventhChart"></div>
        </Row> -->
      </Col>

      <Col span="6" class="col_row">
        <!--近15日充电时长统计-->
        <Row class="row topRow" style="margin-right: 0;">
          <div class="firstChart" id="fourthChart"></div>
        </Row>
         <!--车辆充电起始SOC区间统计-->
        <Row class="row bottomRow">
          <div class="firstChart" id="sixthChart"></div>
        </Row>
        <!--电池SOH分段统计-->
        <!-- <Row class="row bottomRow" style="margin-right: 0;">
          <div class="firstChart" id="lastChart"></div>
        </Row> -->
      </Col>
    </Row>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import { listChargePowerInterval, listSOCInterval, listCharge } from '@/service/bigPageService/analysisTopic';

  export default {
    name: 'hyAnalysisTopic',
    data () {
      return {
        colorList: [
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
        firstChart: {echart: null, option: null},               // 近15日充电次数统计
        secondChart: {echart: null, option: null},              // 近15日充电量统计
        thirdChart: {echart: null, option: null},               // 近15日车辆耗电量统计
        fourthChart: {echart: null, option: null},              // 近15日充电时长统计
        fifthChart: {echart: null, option: null},               // 车辆充电时段统计
        sixthChart: {echart: null, option: null}                // 车辆充电起始SOC区间统计
//        seventhChart: {echart: null, option: null},             // 车辆总里程分段统计
//        lastChart: {echart: null, option: null}                 // 电池SOH分段统计
      };
    },
    mounted () {
      this._initCharts();
      setTimeout(() => {
        this.getPowerNum();  // 近15日充电次数统计
        this.getChargePowerInterval();   // 车辆充电时段统计
        this.getSocInterval();   // 车辆充电起始SOC区间统计
//        this.getVehicleMileage();   // 车辆总里程分段统计
//        this.getSohInterval();   // 电池SOH分段统计
      }, 1000);
    },
    methods: {
      // 近15日数据统计
      getPowerNum () {
        // 请求30日的&15日的
        listCharge({limit: 31}, res => {
          let xData = [];
          let chargePower = [];
          let chargeTimes = [];
          let chargeMinutes = [];
          let dayPowerConsumption = [];
          res.map((item, index) => {
            xData.push(this._hyTool.DateFormat(new Date(+item.dayStart), 'MM-dd'));
            chargePower.push(item.chargePower);
            chargeTimes.push(item.chargeTimes);
            if (index > 14) {
              chargeMinutes.push(item.chargeMinutes);
              dayPowerConsumption.push(item.dayPowerConsumption);
            }
          });
          this.firstChart.echart.setOption({
            xAxis: {data: xData},
            series: [{data: chargeTimes}]
          });
          this.secondChart.echart.setOption({
            xAxis: {data: xData},
            series: [{data: chargePower}]
          });
          this.thirdChart.echart.setOption({
            xAxis: {data: xData.slice(-15)},
            series: [{data: dayPowerConsumption}]
          });
          this.fourthChart.echart.setOption({
            xAxis: {data: xData.slice(-15)},
            series: [{data: chargeMinutes}]
          });
        });
      },

      // 车辆充电时段统计
      getChargePowerInterval () {
        listChargePowerInterval(null, res => {
          let [lData, list] = [[], []];
          for (let item of res) {
            for (let key in item) {
              lData.push(key);
              list.push({name: key, value: item[key]});
            }
          }
          this.fifthChart.echart.setOption({
            legend: {data: lData},
            series: [{data: list}]
          });
        });
      },

      // 车辆充电起始SOC区间统计
      getSocInterval () {
        listSOCInterval(null, res => {
          let [lData, list] = [[], []];
          for (let key in res) {
            lData.push(key);
            list.push({name: key, value: res[key]});
          }
          this.sixthChart.echart.setOption({
            legend: {data: lData},
            series: [{data: list}]
          });
        });
      },

      // 车辆总里程分段统计
      // getVehicleMileage () {
      //   listAllMileage(null, res => {
      //     let [lData, list] = [[], []];
      //     for (let key in res) {
      //       if (key === '≥30000') {
      //         lData.unshift(key);
      //         list.unshift({name: key, value: res[key]});
      //       } else {
      //         lData.push(key);
      //         list.push({name: key, value: res[key]});
      //       }
      //     }
      //     this.seventhChart.echart.setOption({
      //       legend: {data: lData},
      //       series: [{data: list}]
      //     });
      //   });
      // },

      // 电池SOH分段统计
      // getSohInterval () {
      //   listSOHInterval(null, res => {
      //     let [lData, list] = [[], []];
      //     for (let key in res) {
      //       lData.push(key);
      //       list.push({name: key, value: res[key]});
      //     }
      //     this.lastChart.echart.setOption({
      //       legend: {data: lData},
      //       series: [{data: list}]
      //     });
      //   });
      // },

      // 初始化所有报表
      _initCharts () {
        // 近15日充电次数统计
        this.firstChart.echart = echarts.init(document.getElementById('firstChart'));
        this.firstChart.option = {
          title: {
            text: '近30日充电次数统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          color: ['#01A1FD'],
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#4579AC',
            formatter: function (param) {
              return `${param[0].name}<br/>${param[0].seriesName}:${param[0].value}次`;
            }
          },
          grid: {
            bottom: 40
          },
          xAxis: {
            type: 'category',
            data: [],
            splitLine: {show: false},
            boundaryGap: false,
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
              show: false,
              lineStyle: {
                color: '#DAEBF6'
              }
            }
          },
          yAxis: {
            name: '次',
            splitLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.3)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(218,235,246, 0.8)',
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            }
          },
          series: [{
            name: '充电次数',
            symbol: 'none',
            type: 'line',
            data: []
          }]
        };
        this.firstChart.echart.clear();
        this.firstChart.echart.setOption(this.firstChart.option);

        // 近15日充电量统计
        this.secondChart.echart = echarts.init(document.getElementById('secondChart'));
        this.secondChart.option = {
          title: {
            text: '近30日充电量统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          color: ['#01A1FD'],
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#4579AC',
            formatter: function (param) {
              return `${param[0].name}<br/>${param[0].seriesName}:${param[0].value}千kw·h`;
            }
          },
          grid: {
            bottom: 40
          },
          xAxis: {
            type: 'category',
            data: [],
            boundaryGap: false,
            nameTextStyle: {
              padding: [0, 0, 0, -10]
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
                fontSize: 12
              }
            },
            axisTick: {
              lineStyle: {
                color: '#DAEBF6'
              }
            }
          },
          yAxis: {
            name: '千kw·h',
            splitLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.3)'
              }
            },
            axisLabel: {
              color: 'rgba(218,235,246, 0.8)',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            }
          },
          series: [{
            type: 'line',
            symbol: 'none',
            name: '充电量',
            data: []
          }]
        };
        this.secondChart.echart.clear();
        this.secondChart.echart.setOption(this.secondChart.option);

        // 近15日车辆耗电量统计
        this.thirdChart.echart = echarts.init(document.getElementById('thirdChart'));
        this.thirdChart.option = {
          title: {
            text: '近15日车辆耗电量统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 30
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#4579AC',
            formatter: (param) => {
              return `${param[0].name}<br/>${param[0].seriesName}:${param[0].value}千kw·h`;
            }
          },
          color: ['#01A1FD'],
          grid: {
            bottom: 40
          },
          xAxis: {
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
                color: '#DAEBF6'
              }
            },
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: {
            name: '千kw·h',
            splitLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.3)'
              }
            },
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
                color: '#DAEBF6'
              }
            },
            type: 'value'
          },
          series: [
            {
              name: '耗电量',
              type: 'line',
            //  smooth: true,
              symbol: 'none',   // 是否有点
              data: []
            }]
        };
        this.thirdChart.echart.clear();
        this.thirdChart.echart.setOption(this.thirdChart.option);

        // 近15日充电时长统计
        this.fourthChart.echart = echarts.init(document.getElementById('fourthChart'));
        this.fourthChart.option = {
          title: {
            text: '近15日充电时长统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          color: ['#01A1FD'],
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#4579AC',
            formatter: function (param) {
              return `${param[0].name}<br/>${param[0].seriesName}:${param[0].value}千h`;
            }
          },
          grid: {
            bottom: 40
          },
          xAxis: {
            type: 'category',
            data: [],
            boundaryGap: false,
            nameTextStyle: {
              padding: [0, 0, 0, -10]
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
                fontSize: 12
              }
            },
            axisTick: {
              lineStyle: {
                color: '#DAEBF6'
              }
            }
          },
          yAxis: {
            name: '千h',
            splitLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.3)'
              }
            },
            axisLabel: {
              color: 'rgba(218,235,246, 0.8)',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(218,235,246, 0.4)'
              }
            }
          },
          series: [
            {
              type: 'line',
              symbol: 'none',
              name: '充电时长',
              data: []
            }
          ]
        };
        this.fourthChart.echart.clear();
        this.fourthChart.echart.setOption(this.fourthChart.option);

        // 车辆充电时段统计
        this.fifthChart.echart = echarts.init(document.getElementById('fifthChart'));
        this.fifthChart.option = {
          title: {
            text: '车辆充电时段统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          tooltip: {
            trigger: 'item',
            backgroundColor: '#4579AC',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data: []
          },
          color: this.colorList,
          series: [
            {
              name: '充电时段',
              // minAngle: 50,
              center: ['50%', '55%'],
              type: 'pie',
              radius: ['40%', '50%'],
              labelLine: {
                normal: {
                  //  length: 20,
                  length2: 70,
                  lineStyle: {
                    color: 'rgba(218,235,246, 0.4)'
                  }
                }
              },
              label: {
                normal: {
                  formatter: '{a|{d}%}\n{b|{b}}',  // {d}%{b}
                  padding: [0, -50],
                  rich: {
                    b: {      // 时间段
                      fontSize: 12,
                      color: 'rgba(218,235,246, 0.4)',
                      lineHeight: 25
                    },
                    a: {    // 百分比
                      fontSize: 22,
                      color: '#DAEBF6',
                      lineHeight: 25
                    }
                  }
                }
              },
              data: []
            }
          ]
        };
        this.fifthChart.echart.clear();
        this.fifthChart.echart.setOption(this.fifthChart.option);

        // 车辆充电起始SOC区间统计
        this.sixthChart.echart = echarts.init(document.getElementById('sixthChart'));
        this.sixthChart.option = {
          title: {
            text: '车辆充电起始SOC区间统计',
            textStyle: {
              color: '#DAEBF6',
              fontSize: 16
            },
            left: 15,
            top: 10
          },
          tooltip: {
            trigger: 'item',
            backgroundColor: '#4579AC',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data: []
          },
          color: this.colorList,
          series: [
            {
              name: 'SOC区间',
            //  minAngle: 50,
              center: ['50%', '55%'],
              type: 'pie',
              radius: ['40%', '50%'],
              labelLine: {
                normal: {
                  //  length: 20,
                  length2: 80,
                  lineStyle: {
                    color: 'rgba(218,235,246, 0.4)'
                  }
                }
              },
              label: {
                normal: {
                  formatter: '{a|{d}%}\n{b|{b}}',  // {d}%{b}
                  padding: [0, -50],
                  rich: {
                    b: {      // 时间段
                      fontSize: 12,
                      color: 'rgba(218,235,246, 0.4)',
                      lineHeight: 25
                    },
                    a: {    // 百分比
                      fontSize: 22,
                      color: '#DAEBF6',
                      lineHeight: 25
                    }
                  }
                }
              },
              data: []
            }
          ]
        };
        this.sixthChart.echart.clear();
        this.sixthChart.echart.setOption(this.sixthChart.option);

        // 车辆总里程分段统计
        // this.seventhChart.echart = echarts.init(document.getElementById('seventhChart'));
        // this.seventhChart.option = {
        //   title: {
        //     text: '车辆总里程分段统计',
        //     textStyle: {
        //       color: '#DAEBF6',
        //       fontSize: 16
        //     },
        //     left: 15,
        //     top: 10
        //   },
        //   tooltip: {
        //     trigger: 'item',
        //     backgroundColor: '#4579AC',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
        //   legend: {
        //     show: false,
        //     orient: 'vertical',
        //     x: 'left',
        //     data: []
        //   },
        //   color: this.colorList,
        //   series: [
        //     {
        //       name: '里程分段',
        //     //  minAngle: 50,
        //       center: ['50%', '55%'],
        //       type: 'pie',
        //       radius: ['40%', '50%'],
        //       labelLine: {
        //         normal: {
        //           //  length: 20,
        //           length2: 80,
        //           lineStyle: {
        //             color: 'rgba(218,235,246, 0.4)'
        //           }
        //         }
        //       },
        //       label: {
        //         normal: {
        //           formatter: '{a|{d}%}\n{b|{b}km}',  // {d}%{b}
        //           padding: [0, -50],
        //           rich: {
        //             b: {      // 时间段
        //               fontSize: 12,
        //               color: 'rgba(218,235,246, 0.4)',
        //               lineHeight: 25
        //             },
        //             a: {    // 百分比
        //               fontSize: 22,
        //               color: '#DAEBF6',
        //               lineHeight: 25
        //             }
        //           }
        //         }
        //       },
        //       data: []
        //     }
        //   ]
        // };
        // this.seventhChart.echart.clear();
        // this.seventhChart.echart.setOption(this.seventhChart.option);

        // 电池SOH分段统计
        // this.lastChart.echart = echarts.init(document.getElementById('lastChart'));
        // this.lastChart.option = {
        //   title: {
        //     text: '电池SOH分段统计',
        //     textStyle: {
        //       color: '#DAEBF6',
        //       fontSize: 16
        //     },
        //     left: 15,
        //     top: 10
        //   },
        //   tooltip: {
        //     trigger: 'item',
        //     backgroundColor: '#4579AC',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
        //   legend: {
        //     show: false,
        //     orient: 'vertical',
        //     x: 'left',
        //     data: []
        //   },
        //   color: this.colorList,
        //   series: [
        //     {
        //       name: 'SOH分段',
        //     //  minAngle: 50,
        //       center: ['50%', '55%'],
        //       type: 'pie',
        //       radius: ['40%', '50%'],
        //       labelLine: {
        //         normal: {
        //           //  length: 20,
        //           length2: 80,
        //           lineStyle: {
        //             color: 'rgba(218,235,246, 0.4)'
        //           }
        //         }
        //       },
        //       label: {
        //         normal: {
        //           formatter: '{a|{d}%}\n{b|{b}}',  // {d}%{b}
        //           padding: [0, -50],
        //           rich: {
        //             b: {      // 时间段
        //               fontSize: 12,
        //               color: 'rgba(218,235,246, 0.4)',
        //               lineHeight: 25
        //             },
        //             a: {    // 百分比
        //               fontSize: 22,
        //               color: '#DAEBF6',
        //               lineHeight: 25
        //             }
        //           }
        //         }
        //       },
        //       data: []
        //     }
        //   ]
        // };
        // this.lastChart.echart.clear();
        // this.lastChart.echart.setOption(this.lastChart.option);
      }
    },
    beforeDestroy () {
      this.firstChart.echart.dispose();
      this.secondChart.echart.dispose();
      this.thirdChart.echart.dispose();
      this.fourthChart.echart.dispose();
      this.fifthChart.echart.dispose();
      this.sixthChart.echart.dispose();
//      this.seventhChart.echart.dispose();
//      this.lastChart.echart.dispose();
    }
  };
</script>
