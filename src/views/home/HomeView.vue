<script setup>
import PhotoCard from '@/components/photoCard/photo-card.vue'
import { ref } from 'vue'
const active = ref(0)
const images = [
  'https://img2.imgtp.com/2024/05/13/cVwRcidE.jpg',
  'https://img2.imgtp.com/2024/05/13/SoQsMmTa.jpg',
  'https://img2.imgtp.com/2024/05/13/XDUjD3j0.jpg',
  'https://img2.imgtp.com/2024/05/09/Gwvq1Elw.jpg'
]

const photoList = [
  {
    url: 'https://img2.imgtp.com/2024/05/13/cVwRcidE.jpg',
    title: 'Photo Title',
    description: 'Photo Description'
  },
  {
    url: 'https://img2.imgtp.com/2024/05/13/SoQsMmTa.jpg',
    title: 'Photo Title',
    description: 'Photo Description'
  },
  {
    url: 'https://img2.imgtp.com/2024/05/13/XDUjD3j0.jpg',
    title: 'Photo Title',
    description: 'Photo Description'
  },
  {
    url: 'https://img2.imgtp.com/2024/05/09/Gwvq1Elw.jpg',
    title: 'Photo Title',
    description: 'Photo Description'
  }
]
</script>
<template>
  <div class="home-view">
    <van-nav-bar
      style="background: #041037; color: #fff"
      :safe-area-inset-top="true"
      :fixed="true"
      :border="false"
      title="首页"
    />
    <div class="img-top">
      <van-space>
        <van-image
          round
          fit="cover"
          width="70px"
          height="70px"
          src="https://img2.imgtp.com/2024/05/17/OS5fMOUV.jpg"
        />
        <div class="time-start">在一起已经</div>
        <van-image
          round
          fit="cover"
          width="70px"
          height="70px"
          src="https://img2.imgtp.com/2024/05/10/SMLlmE9V.jpg"
        />
      </van-space>
    </div>
    <div class="banner-swiper">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img style="object-fit: cover" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="photo-list">
      <PhotoCard :photos="photoList"></PhotoCard>
    </div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/photo" icon="photo">相册</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped lang="scss">
/*::deep()深度选择器 */
::v-deep(.van-nav-bar__title) {
  color: #fff;
}
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 44px;
  padding-bottom: 52px;
  .img-top {
    width: 100%;
    height: 180px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
    background: url('https://img2.imgtp.com/2024/05/17/zrlBPZ2E.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .banner-swiper {
    width: 90%;
    height: 200px;
    margin-top: 10px;

    border-radius: 15px;
    overflow: hidden;
    .van-swipe {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .photo-list {
    width: 100%;
  }
}
</style>
