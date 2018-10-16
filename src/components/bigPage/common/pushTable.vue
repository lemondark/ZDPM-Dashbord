/**
 * 作者：yeshengqiang
 * 时间：2017-10-24
 * 描述：推送部分
 */
<style lang="scss" scoped>
    $msg_box_radius: 5px;
	.push {
		box-size: border-box;
		overflow: hidden;
		padding: 5px 0;
		height: calc(100% - 10px);
		.msg_box{
			position: relative;
      margin-top: 30px;
			height: 100%;
			overflow: hidden;
			ul.list-wrapper {
				width: 80%;
				margin: 0 auto;
        padding:10px 0;
				box-sizing: border-box;
        opacity: 0.5;
        height: 120px;
        overflow: hidden;
				li {
          &.noData {
              text-align: center;
          }
          &.slide-enter {
              opacity: 0;
              transform: translateY(-36px);
          }
          transition: all 0.6s;
          width: 100%;
          box-sizing: border-box;
          font-size: 16px;
          color: #f4f4f4;
          height: 36px;
          line-height: 36px;
          text-align: center;
				}
			}
		}
	}
</style>
<template>
    <div class="push">
        <slot name="title">
            <!-- 头部信息 -->
        </slot>
		<div class="msg_box">
        <transition-group name="slide" tag="ul" class="list-wrapper">
            <li v-for="item in result" :key="item.name">
                <slot :row="item"></slot>
            </li>
            <li v-show="isShow" class="noData" key="noData">暂无最新消息</li>
        </transition-group>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'pushTable',
    computed: {
      // 是否展示noData
      isShow () {
          return !this.result.length;
      }
    },
		props: {
      result: {
          type: Array,
          default () {
              return [];
          }
      }
    }
  };
</script>
