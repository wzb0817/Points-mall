<template>
  <view class="content">
    <view class="user-center-card">
      <view class="user-center-card__header">
        <up-image width="96rpx" height="96rpx" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl"
          shape="circle"></up-image>
        <up-image width="96rpx" height="96rpx" v-else src="https://cdn.uviewui.com/uview/album/1.jpg"
          shape="circle"></up-image>
        <text class="name" v-if="userInfo.nickName">{{ userInfo.nickName }}</text>
        <view style="width:240rpx" v-else>
          <up-button shape="circle" type="primary" open-type="getPhoneNumber" @getphonenumber="getPhone" @tap="exchange"
            text="会员登录"></up-button>
        </view>

      </view>
    </view>
    <view class="content-wrap">
      <view class="order-group-wrapper">
        <view class="order-group">
          <view class="order-group__item">
            <text class="label">我的订单</text>
            <view style="display: flex;">
              <text class="right">全部订单 </text>
              <up-icon name="arrow-right" color="#bfbfbf" size="24"></up-icon>
            </view>

          </view>
          <view class="order-block">
            <view class="order-block__item">
              <image src="@/static/image/card1.png" /><text>待付款</text>
            </view>
            <view class="order-block__item">
              <image src="@/static/image/card2.png" /><text>待发货</text>
            </view>
            <view class="order-block__item">
              <image src="@/static/image/card3.png" /><text>待收货</text>
            </view>
            <view class="order-block__item">

              <image src="@/static/image/card4.png" /><text>待评价</text>
            </view>
            <view class="order-block__item">
              <image src="@/static/image/card5.png" /><text>退款/售后</text>
            </view>
          </view>
        </view>

      </view>
      <view class="cell-box">
        <view class="box-item">
          <text class="label">收获地址</text>
          <view><up-icon name="arrow-right" color="#bfbfbf" size="24"></up-icon></view>
        </view>
      </view>
      <view class="cell-box">
        <view class="box-item">
          <text class="label">帮助中心</text>
          <view><up-icon name="arrow-right" color="#bfbfbf" size="24"></up-icon></view>
        </view>
        <view class="box-item">
          <text class="label">客服热线</text>
          <view><up-icon name="phone" color="#bfbfbf" size="24"></up-icon></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useAppStore from "@/store/app"
import { getPhoneNumber, getUserInfo } from '@/utils/index'
import { storeToRefs } from 'pinia'
const appStore = useAppStore();
const { phoneNumber, access_token, userInfo } = storeToRefs(appStore);
const exchange = () => {
  getUserInfo()
}
const getPhone = (e) => {
  getPhoneNumber(e)
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #F0F0F0;
  height: 100vh;
  overflow-y: auto;

  .user-center-card {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 480rpx;
    background-image: url(https://cdn-we-retail.ym.tencent.com/miniapp/template/user-center-bg-v1.png);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 24rpx;

    .user-center-card__header {
      margin-top: 192rpx;
      margin-bottom: 48rpx;
      height: 96rpx;
      line-height: 48rpx;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #333;
      position: relative;

      .name {
        font-size: 36rpx;
        line-height: 48rpx;
        color: #333;
        font-weight: bold;
        margin-left: 24rpx;
        margin-right: 16rpx;
      }
    }

  }

  .content-wrap {
    margin-top: 340rpx;
    position: relative;
    padding: 0 30rpx;

    .order-group-wrapper {
      margin-bottom: 16rpx;

      .order-group {
        margin-bottom: 24rpx;
        background-color: #ffffff;
        border-radius: 16rpx 16rpx 0 0;

        .order-group__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32rpx;

          .label {
            font-weight: 400;
          }

          .right {}
        }
      }


      .order-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32rpx;

        .order-block__item {
          display: flex;
          flex-direction: column;
          align-items: center;

          image {
            width: 48rpx;
            height: 48rpx;
          }

          text {
            font-size: 24rpx;
            color: #666;
            line-height: 32rpx;
            margin-top: 12rpx;
          }
        }
      }
    }

    .cell-box {
      border-radius: 10rpx;
      overflow: hidden;
      margin-bottom: 20rpx;

      background-color: #fff;

      .box-item {
        padding: 32rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .label {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
