<style lang="scss" scoped>
  @import 'src/styles/mixins';
  .content {
    margin-left: 0px;
    height: 100%;
    color: white;
  }
  .autoHeight {
    height: 100%;
    font-family: MicrosoftYaHei;
    //  background: url(/static/images/screen.jpeg) repeat center;
    background-color: #13243B;
    background-size: cover;
    color: #8DA3AA;
    //  width: 100%;

  }
  .topHover {
    height: 20px;
    position: fixed;
    top:0;
    width:100%;
    background:rgba(76,76,76,0.2);
    z-index:99;
    span{
      color: #E6FBFB;
      font-size: 14px;
      cursor:pointer;
    }
    span:first-child{
      margin-left:10px;
    }
    .firstSpan {
      margin-left:20px;
      margin-right:20px;
      position: relative;
    }
    .firstSpan:after {
      content:'';
      height: 13px;
      border-right: 1px solid #E6FBFB;
      position: absolute;
      right: -13px;
      top: 3px;
    }
  }
</style>
<template>
  <div class="content">
    <div class="autoHeight">
      <div class="topHover">
        <span @click="modal = true">退出</span>
        <span class="firstSpan" @click="autoClick" :style="{color: autoplay ? '' : 'gray'}">自动</span>
        <span @click="handClick" :style="{color: autoplay ? 'gray' : ''}">手动</span>
        <Select
           @on-change="toggle"
           size="small"
           style="width:100px;height:20px;margin-left:20px;vertical-align:top;"
           ref="select"
           :style="{display: autoplay ? 'none' : 'inline-block'}"
           >
          <Option v-for="item in pageList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select>
      </div>
     <!--  登出弹窗 -->
      <Modal v-model="modal" width="30%">
        <div style="text-align:center;">
            <p><Icon style="color:#f60;font-size:25px;margin-right:20px;vertical-align:sub" type="information-circled"></Icon>确定要退出系统吗？</p>
        </div>
        <div slot="footer">
            <Button type="info" size="large" long :loading="modal_loading" @click="loginOut">退 出</Button>
        </div>
      </Modal>
      <el-carousel :interval="83000" :autoplay="autoplay" height='675px' :arrow="arrow" indicator-position="none" @change="changeItem" ref="carousel">
        <el-carousel-item >
           <hy-vehicle-topic v-if="showIndex === 0" :autoPlay="autoplay"></hy-vehicle-topic>
        </el-carousel-item>
      <!--   <el-carousel-item >
           <vehicle-flow-topic v-if="showIndex === 1" :autoPlay="autoplay"></vehicle-flow-topic>
        </el-carousel-item> -->
        <el-carousel-item >
           <hy-analysis-topic v-if="showIndex === 1"></hy-analysis-topic>
        </el-carousel-item>
        <el-carousel-item >
           <hy-user-topic v-if="showIndex === 2" :autoPlay="autoplay"></hy-user-topic>
        </el-carousel-item> 
        <el-carousel-item >
           <hy-monitor-topic v-if="showIndex === 3"></hy-monitor-topic>
        </el-carousel-item>
        <el-carousel-item >
           <statistics-topic v-if="showIndex === 4"></statistics-topic>
        </el-carousel-item>
        <el-carousel-item>
          <hy-drive-record v-if="showIndex === 5"></hy-drive-record>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import { logout } from '@/service/userService/user';
  import hyVehicleTopic from '@/components/bigPage/vehicleTopic';
  import hyUserTopic from '@/components/bigPage/userTopic';
  import statisticsTopic from '@/components/bigPage/statisticsTopic';
  import hyAnalysisTopic from '@/components/bigPage/analysisTopic';
  import hyMonitorTopic from '@/components/bigPage/monitorTopic';
// import vehicleFlowTopic from '@/components/bigPage/vehicleFlowTopic';
  import hyDriveRecord from '@/components/bigPage/driveRecord';

  export default {
    components: {
      hyVehicleTopic,
      hyUserTopic,
      statisticsTopic,
      hyAnalysisTopic,
      hyMonitorTopic,
    //  vehicleFlowTopic,
      hyDriveRecord
    },
    data () {
      return {
        indexKey: 0,
        showIndex: null,
        autoplay: true,
        arrow: 'never',
        modal: false,
        modal_loading: false,
        pageList: [
          {
            value: 0,
            label: '车辆监控'
          },
         /* {
            value: 1,
            label: '车辆分布'
          }, */
          {
            value: 1,
            label: '车辆分析'
          },
          {
            value: 2,
            label: '用户分析'
          },
          {
            value: 3,
            label: '单车监控'
          },
          {
            value: 4,
            label: '单车统计'
          },
          {
            value: 5,
            label: '行车日记'
          }
        ]
      };
    },
    mounted () {
      setTimeout(() => {
        this.showIndex = 0;
      }, 500);
    },
    methods: {
      toggle (key) {
        this.showIndex = key;
        this.$refs.carousel.setActiveItem(key);
      },
      changeItem (index, oldIndex) {
        this.showIndex = index;
        this.$refs.select.selectedSingle = this.$refs.select.localePlaceholder;
      },
      autoClick () {
        this.autoplay = true;
        this.arrow = 'never';
      },
      handClick () {
        this.autoplay = false;
        this.arrow = 'always';
      },
      loginOut () {
        this.modal_loading = true;
        logout({}, null, res => {
          this.modal_loading = false;
          this._hyTool.removeStore('loginInfo');
          this.$router.push('/login');
          this.modal = false;
        });
      }
    }
  };
</script>
