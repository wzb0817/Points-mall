<template>
  <view class="content">
    <up-swiper :list="swiperList" @click="swiperClick"></up-swiper>
    <up-waterfall v-model="flowList">
      <template v-slot:left="{ leftList }">
        <view v-for="(item, index) in leftList" :key="index" class="product_item">
          <up-image radius="10rpx" :show-loading="true" :src="item.url" width="100%" height="80"
            @click="itemClick"></up-image>

          <view class="title">{{ item.title }}</view>
          <view class="price">{{ item.price }}积分</view>

          <view class="btn">
            <up-button type="primary" @click="exchange" :plain="true" text="兑换"></up-button>
          </view>
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view v-for="(item, index) in rightList" :key="index" class="product_item">
          <up-image radius="10rpx" :show-loading="true" :src="item.url" width="100%" height="80"
            @click="itemClick"></up-image>

          <view class="title">{{ item.title }}</view>
          <view class="price">{{ item.price }}积分</view>

          <view class="btn">
            <up-button type="primary" @click="exchange" :plain="true" text="兑换"></up-button>
          </view>
        </view>
      </template>
    </up-waterfall>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const swiperList = reactive([
  'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  'https://cdn.uviewui.com/uview/swiper/swiper2.png',
  'https://cdn.uviewui.com/uview/swiper/swiper3.png',
]);
let flowList = reactive([
  {
    id: 1,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    price: 298,
    title: '商品1商品1商品1商品1商品1商品1商品1'
  },
  {
    id: 2,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    price: 500,
    title: '商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2'
  },
  {
    id: 3,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    price: 199,
    title: '商品3'
  },
  {
    id: 4,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    price: 298,
    title: '商品4商品4商品4商品4商品4'
  },
  {
    id: 5,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    price: 500,
    title: '商品5商品5'
  },
  {
    id: 6,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    price: 199,
    title: '商品6商品6商品6商品6'
  },
  {
    id: 7,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    price: 298,
    title: '商品7商品7商品7商品7商品7'
  },
  {
    id: 8,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    price: 500,
    title: '商品8商品8商品8商品8商品8商品8商品8'
  },
  {
    id: 9,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    price: 199,
    title: '商品9商品9'
  },
  {
    id: 10,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    price: 298,
    title: '商品10'
  },
  {
    id: 11,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    price: 500,
    title: '商品11商品11'
  },
  {
    id: 12,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    price: 199,
    title: '商品12'
  },
  {
    id: 13,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    price: 298,
    title: '商品13'
  },
  {
    id: 14,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    price: 500,
    title: '商品14'
  },
  {
    id: 15,
    url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    price: 199,
    title: '商品15'
  }

])
const swiperClick = () => {
  console.log('change')
}
const itemClick = () => {

}
const exchange = () => {
  //跳转到详情页
  uni.navigateTo(
    {
      url: '/pages/detail/index'
    }
  )

}
// const addRandomData=()=>{
//   for (let i = 0; i < 10; i++) {
//     let index = uni.random(0, flowList.length-1);
//     // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
//     let item = JSON.parse(JSON.stringify(flowList[index]))
//     item.id = uni.guid();
//     flowList.push(item);
//   }
// }
</script>
<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  padding: 10rpx 20rpx;
  background-color: #F0F0F0;

  .u-waterfall {
    margin-top: 20rpx;
    // gap: 12rpx;

    .u-column {
      .product_item {
        border-radius: 16rpx;
        margin: 14rpx;
        background-color: #fff;
        padding: 16rpx;
        position: relative;
        cursor: pointer;

        .title {
          font-size: 26rpx;
          line-height: 42rp;
          word-break: break-all; // 允许单词内自动换行，如果一个单词很长的话
          text-overflow: ellipsis; // 溢出用省略号显示
          overflow: hidden; // 超出的文本隐藏
          display: -webkit-box; // 作为弹性伸缩盒子模型显示
          -webkit-line-clamp: 3; // 显示的行
          -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
        }

        .price {
          font-size: 28rpx;
          color: red;
          line-height: 50rpx;
          text-align: right;
        }
      }



    }
  }
}
</style>