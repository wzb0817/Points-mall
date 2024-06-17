<!-- 商品详情页 -->
<template>
  <view class="detail-page">
    <image src="https://cdn.uviewui.com/uview/swiper/swiper1.png" />
    <!-- 积分 -->
    <view class="detail-container">
      <view class="price">285积分</view>
      <view class="title1">xxx定制手机壳xxxxxxxxx</view>
      <view class="detail-content">
        <view class="title2">兑换说明：</view>
        <view class="condition">活动时间：2024-06-08 10:00:00 - 2024-06-30 23:59:59</view>
        <view class="condition">参与等级：全部会员</view>
        <view class="condition">兑换方式：285积分兑换xxx手机壳</view>
        <view class="rules">
          一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则一堆兑换规则
        </view>
      </view>
      <view class="pic-content">
        <view class="title3">商品详情</view>
        <image src="https://cdn.uviewui.com/uview/swiper/swiper1.png" />
      </view>
    </view>
    <view class="btn_box">
      <up-button v-if="!access_token" shape="circle" type="primary" open-type="getPhoneNumber"
        @getphonenumber="getPhone" @tap="getInfo" text="登录"></up-button>
      <up-button v-else shape="circle" type="primary" @click="exchange" text="兑换"></up-button>
    </view>
  </view>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { getPhoneNumber, getUserInfo, showToast } from '@/utils/index'
import useAppStore from "@/store/app"
let { access_token } = storeToRefs(useAppStore())
const exchange = () => {
  // 提示兑换成功
  showToast('兑换成功')
}
const getInfo = () => {
  getUserInfo()
}
const getPhone = (e) => {
  getPhoneNumber(e)
}
</script>
<style scoped lang="scss">
.detail-page {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #F0F0F0;

  image {
    width: 100% !important;
  }

  .detail-container {
    color: #CCCCCC;
    margin-top: 24rpx;
    margin-bottom: 158rpx;

    .price {
      color: red;
      font-size: 32rpx;
      background-color: #fff;
      padding: 24rpx 36rpx;
    }

    .title1 {
      width: 100%;
      background-color: #fff;
      font-weight: 500;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 32rpx;
      word-break: break-all;
      color: #333333;
      padding: 0rpx 36rpx 24rpx;

    }

    .detail-content {
      background-color: #fff;
      margin-top: 28rpx;
      padding: 36rpx;

      .title2 {
        font-size: 24rpx;
        color: #000;
        font-weight: 400;
        line-height: 42rpx;
      }

      .condition {
        font-size: 24rpx;
      }

      .rules {
        margin-top: 16rpx;
        font-size: 24rpx;
      }
    }

    .pic-content {
      margin-top: 28rpx;
      padding: 36rpx;
      background-color: #fff;

      .title3 {
        text-align: center;
        font-size: 24rpx;
        color: #000;
        font-weight: 400;
        line-height: 42rpx;
      }

      image {
        width: 100% !important;
      }
    }



  }

  .btn_box {
    padding: 36rpx;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>