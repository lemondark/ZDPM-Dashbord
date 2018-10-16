<style scoped>
  .wh_item_date:hover {
    border:1px solid #4E96B1;
    cursor: pointer;
  }
* {
  margin: 0;
  padding: 0;
}

.wh_container {
  width: 100%;
  margin: auto;
}

li {
  list-style-type: none;
}
.wh_top_changge {
  display: flex;
}

.wh_top_changge li {
  cursor: pointer;
  display: flex;
  color: #DAEBF6;
  font-size: 18px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
}

.wh_top_changge .wh_content_li {
  cursor: auto;
  flex: 2.5;
}
.wh_content_all {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  background-color: #202D40;
  width: 100%;
  overflow: hidden;
/*  padding-bottom: 8px;*/
}

.wh_content {
  display: flex;
  flex-wrap: wrap;
/*  padding: 0 3% 0 3%;*/
  width: 100%;
}
.wh_title{
  background: #314054;
}
.wh_title .wh_content_item {
  color: #ddd;
  font-size: 16px;
  border:1px solid rgba(0,0,0,0);
}

.wh_content_item {
  font-size: 15px;
  width: 14.28%;
  border-right:1px solid #3e3e3e;
  border-bottom:1px solid #3e3e3e;
  box-sizing: border-box;
  text-align: center;
  color: #55656F;
  position: relative;
}
.wh_content_item:nth-child(7n){
  border-right: none;
}

.wh_content:last-child .wh_content_item:nth-child(n+36){
  border-bottom: none;
}

.wh_top_tag {
  width: 40px;
  height: 40px;
  line-height: 40px;
  color:#8098A7;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wh_item_date {
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wh_jiantou1 {
  width: 12px;
  height: 12px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  transform: rotate(-45deg);
}

.wh_jiantou1:active,
.wh_jiantou2:active {
  border-color: #DAEBF6;
}

.wh_jiantou2 {
  width: 12px;
  height: 12px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
}
.wh_content_item .wh_other_dayhide {
  color: #55656F;
}
.wh_content_item .wh_want_dayhide {
  color: #55656F;
  cursor: not-allowed;
}
.wh_content_item .wh_isToday:after {
  content:'';
  width: 15px;
  height: 5px;
  border-radius:3px 15px;
  background:#eee;
  position: absolute;
  bottom: 0;
}
.wh_content_item .wh_chose_day {
  background: linear-gradient(to bottom, #4E96B1, #3A53A5);
  color:#fff;
}
.wh_content_item .wh_active {
  color:#fff;
}
  .mark1:after{
    width: 6px;
    height: 20px;
    content: '';
    position: absolute;
    background: url('../../../../static/images/new/record/alarm.png') no-repeat;
    left: 10px;
    bottom: 0;
  }
  .mark2:before {
    width: 6px;
    height: 20px;
    content: '';
    position: absolute;
    background: url('../../../../static/images/new/record/charge.png') no-repeat;
    left: 2px;
    bottom: 0;
  }
</style>
<template>
  <section class="wh_container">
    <div class="wh_content_all">
      <div class="wh_top_changge">
        <li @click="PreMonth(myDate,false)">
          <div class="wh_jiantou1"></div>
        </li>
        <li class="wh_content_li">{{dateTop}}</li>
        <li @click="NextMonth(myDate,false)">
          <div class="wh_jiantou2"></div>
        </li>
      </div>
      <div class="wh_content wh_title">
        <div class="wh_content_item" v-for="tag in textTop">
          <div class="wh_top_tag">
            {{tag}}
          </div>
        </div>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" @click="clickDay(item,index)">
          <div class="wh_item_date" v-bind:class="[{ mark1: item.alarm},{ mark2: item.charge},{ wh_active: item.running},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay}]">
            {{item.id}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import timeUtil from './calendar';
export default {
  data () {
    return {
      textTop: ['一', '二', '三', '四', '五', '六', '日'],
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: ''
    };
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    defaultChoseDay: {type: String, default: ''},
    agoDayHide: { type: String, default: `0` },
    futureDayHide: { type: String, default: `new Date().getTime()` }
  },
  created () {
    this.myDate = new Date();
  },
  methods: {
    clickDay: function (item, index) {
      if (!item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      /* if (item.otherMonth !== 'nowMonth') {
        item.otherMonth === 'preMonth'
          ? this.PreMonth(item.date)
          : this.NextMonth(item.date);
      } */
    },
    ChoseMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = new Date(date);
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    PreMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth');
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth');
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    getList: function (date, chooseDay, isChosedDay = true) {
      const markDate = this.markDate;
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let arr = timeUtil.getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let k = arr[i];
        k.chooseDay = false;
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        // 看每一天的状态
        for (const c of markDate) {
          if (c.date === nowTime) {
            k.alarm = c.alarm;
            k.charge = c.charge;
            k.running = c.running;
          }
        }
        // 无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide || !k.running;
        let flag = !k.dayHide;
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit('choseDay', nowTime);
          this.historyChose.push(nowTime);
          k.chooseDay = true;
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag
        ) {
          k.chooseDay = true;
        }
      }
      this.list = arr;
    }
  },
  mounted () {
    this.getList(this.myDate);
  },
  watch: {
    markDate (val, oldVal) {
      this.getList(this.myDate);
    },
    defaultChoseDay (val, oldVal) {
      if (val) {
        this.getList(this.myDate, val);
      }
    },
    agoDayHide (val, oldVal) {
      this.agoDayHide = parseInt(val);
      this.getList(this.myDate);
    },
    futureDayHide (val, oldVal) {
      this.futureDayHide = parseInt(val);
      this.getList(this.myDate);
    }
  }
};
</script>