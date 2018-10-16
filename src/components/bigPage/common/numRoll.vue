/**
* 作者：szh
* 时间：2018-05-11
* 描述：div数字滚动
**/
<style lang="scss" scoped>
  .container {
    background: none;
    width: 100%;
    .font_class {
      font-size: 18px;
      color: rgba(230,251,251,0.6);
    }
  }

  .flip {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    padding-top: 5px;
    .right_class {
      line-height: 80px;
      font-size: 16px;
      margin-left: 8px;
      color: rgba(218,235,246,0.5);
    }
  }

  .price-div {
    font: 36px Arial-BoldMT, tahoma, Arial, Verdana, sans-serif;
  }

  .price-div > div,
  .total-price > div {
    float: left;
    text-align: center;
  }

  .price-icon {
    background: dimgrey;
    width: 25px;
    height: 30px;
    line-height: 30px;
    font-size: 26px;
    font-weight: bold;
    float: left;
    margin-right: 2px;
  }

  .price-div .number {
  //  background: #153366;
    font-family: Arial-BoldMT;
    background: #153366;
    width: 31px;
    height: 48px;
    line-height: 48px;
    font-size: 36	px;
    font-weight: bold;
    overflow: hidden;
    margin-right: 5px;
  }

  .price-div .sign {
    font-size: 30px;
    font-weight: bold;
    line-height: 68px;
    height: 48px;
  }
</style>
<template>
  <div class="container">
    <span class="font_class" :style="style1">{{countType}}</span>
    <div class="flip">
      <div class="price-div" :id="priceNum">
        <div class="h-k number" :style="styles" v-show="hkShow"></div>
        <div class="t-k number" :style="styles"></div>
        <div class="k number" :style="styles"></div>
        <div class="comma sign">,</div>
        <div class="h number" :style="styles"></div>
        <div class="t number" :style="styles"></div>
        <div class="single number" :style="styles"></div>
        <div class="sign dot" v-show="showFloat">.</div>
        <div class="t-d number" v-show="showFloat"></div>
        <div class="h-d number" v-show="showFloat"></div>
      </div>
      <span class="right_class">{{company}}</span>
    </div>
    <!--<button class="animate-btn" @click="aaa">模拟滚动</button>-->
  </div>
</template>
<script>
  export default {
    name: 'hyNumRoll',
    props: {
      oneNumber: {
        type: Number,
        default: 0
      },
      showFloat: {
        type: Boolean,
        default: false
      },
      countType: {
        type: String,
        default: ''
      },
      company: {
        type: String,
        default: ''
      },
      priceNum: {
        type: String
      },
      hkShow: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        numbers: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        targetClass: {},
        zero: {
          hk: 0,
          tk: 0,
          k: 0,
          h: 0,
          t: 0,
          single: 0,
          td: 0,
          hd: 0
        },
        numbersTmp: '',
        showType: '',
        style1: {}
      };
    },
    computed: {
      styles () {
        let style = {};
        if (this.priceNum === 'price_3' || this.priceNum === 'price_4') {
          style.width = '30px';
          style.color = '#FFFFFF';
          this.style1.color = '#DAEBF6';
        } else if (this.priceNum === 'price_1' || this.priceNum === 'price_2') {
          style.width = '50px';
          style.height = '50px';
          style.fontSize = '48px';
        } else if (this.priceNum === 'vechileFlow' || this.priceNum === 'vechileFlowData') {
          style.color = '#2E3031';
          style.width = '30px';
          style.marginLeft = '5px';
          style.background = 'rgba(218,235,246,0.6)';
        } else if (this.priceNum === 'vehicleTopic') {
          style.color = 'white';
          style.fontWeight = 'bold';
           style.width = '40px';
           style.height = '50px';
          style.background = 'rgba(97,105,108,0.3)';
        }
        return style;
      }
    },
    mounted () {
      this.showType = this.priceNum;
      for (let i = 0; i < 10; i++) {
        this.numbersTmp += this.numberDiv(i);
      }
      $(`#${this.priceNum} .number`).append("<div class='numbers-view'>" + this.numbersTmp + '</div>');
      this.$nextTick(() => {
        this.targetClass = {
            'hk': $(`#${this.priceNum} .h-k`),
            'tk': $(`#${this.priceNum} .t-k`),
            'k': $(`#${this.priceNum} .k`),
            'h': $(`#${this.priceNum} .h`),
            't': $(`#${this.priceNum} .t`),
            'single': $(`#${this.priceNum} .single`),
            'td': $(`#${this.priceNum} .t-d`),
            'hd': $(`#${this.priceNum} .h-d`)
        };
      });
    },
    methods: {
      aaa () {
        let num = parseFloat((Math.random() * 1000).toFixed(2));
        this.animateToPrice(num);
      },
      // 初始化
      numberDiv (num) {
        return `<div class='${this.numbers[num]}'>${num}</div>`;
      },
      animateToPrice (price) {
        let obj = this.priceToObj(price);
        for (let key in obj) {
          this.scrollToNumber(obj[key], key, this.targetClass[key]);
        }
      },
      priceToObj (price) {
        if (price === 0) {
          return this.zero;
        }
        let obj = {};
        obj.hd = Number.parseInt((this.mul(price, 100)) % 10);
        obj.td = Number.parseInt((this.mul(price, 10)) % 10);
        obj.single = Number.parseInt(price % 10);
        obj.t = Number.parseInt((this.div(price, 10)) % 10);
        obj.h = Number.parseInt((this.div(price, 100)) % 10);
        obj.k = Number.parseInt((this.div(price, 1000)) % 10);
        obj.tk = Number.parseInt((this.div(price, 10000)) % 10);
        obj.hk = Number.parseInt((this.div(price, 100000)) % 10);
        return obj;
      },
      // aaa () {
      //  let number = 9999999;
      //   this.animateToPrice(number);
      // },
      // 乘法函数
      accMul (arg1, arg2) {
        let [m, s1, s2] = [0, arg1.toString(), arg2.toString()];
        try {
          m += s1.split('.')[1].length;
        } catch (e) {
        }
        try {
          m += s2.split('.')[1].length;
        } catch (e) {
        }
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
      },
      // 除法函数
      accDiv (arg1, arg2) {
        let [t1, t2, r1, r2] = [0, 0];
        try {
          t1 = arg1.toString().split('.')[1].length;
        } catch (e) {
        }
        try {
          t2 = arg2.toString().split('.')[1].length;
        } catch (e) {
        }
        if (Math) {
          r1 = Number(arg1.toString().replace('.', ''));
          r2 = Number(arg2.toString().replace('.', ''));
          return (r1 / r2) * Math.pow(10, t2 - t1);
        }
      },
      // 加法
      accAdd (arg1, arg2) {
        let r1, r2, m;
        try {
          r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1.mul(m) + arg2.mul(m)).div(m);
      },
      // 减法
      Subtr (arg1, arg2) {
        let r1, r2, m, n;
        try {
          r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        // last modify by deeka
        // 动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return Number.parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
      },
      scrollToNumber (num, pos, node) {
        if (!num) num = 0;
        let $this = $(node);
        let target = this.numbers[num];

        $this.find('.numbers-view').stop(true, true);

        let top = num * $this.find('.zero').height();
        let currentTop = -parseFloat($this.find('.numbers-view').css('marginTop').split('px')[0]);
        if (top === currentTop) {
          return;
        } else if (currentTop < top) {
          $this.find('.numbers-view').animate({marginTop: -top}, 1500, 'swing');
        } else {
          $this.find('.numbers-view').append($(this.numbersTmp).addClass('temp'));
          top = $this.find('.' + target + '.temp').offset().top - $this.find('.numbers-view').offset().top;

          $this.find('.numbers-view').animate({marginTop: -top}, 1500, 'swing', function () {
            let size = $this.find('.zero');
            if (size.length > 1) {
              let top = $this.find('.' + target + ':not(.temp)').first().offset().top - $this.find('.numbers-view').offset().top;
              $this.find('.numbers-view').css({marginTop: -top});
              $this.find('.numbers-view .temp').remove();
            }
          });
        }
      },
      // 给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。
      mul (price, arg) {
      return this.accMul(arg, price);
      },
      div (price, arg) {
        return this.accDiv(price, arg);
      },
      add (price, arg) {
        return this.accAdd(arg, price);
      },
      sub (price, arg) {
        return this.Subtr(price, arg);
      }
    },
    watch: {
      oneNumber (num) {
        if (num < 0) return;
        if (!this.hkShow && num > 99999) num = 99999;
        this.animateToPrice(num);
      }
    }
  };
</script>
