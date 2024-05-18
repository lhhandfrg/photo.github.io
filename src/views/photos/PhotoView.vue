<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const active = ref(0)
const router = useRouter()
const onClickRight = () => {
  router.push('/addimg')
}

const goToAll = () => {
  console.log('go to all')
  // 跳转到全部页面
  router.push('/allimgs')
}
</script>

<template>
  <div class="photo-view">
    <van-nav-bar :fixed="true" :border="false" title="相册" @click-right="onClickRight">
      <template #right>
        <van-icon name="plus" size="18" />
      </template>
    </van-nav-bar>
    <div class="all-imgs" @click="goToAll">
      <p>查看全部</p>
    </div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/photo" icon="photo">相册</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped lang="scss">
.photo-view {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  box-sizing: border-box;
  padding: 54px 0 52px 0;
  background: #f3f3f3;
  flex-direction: column;
  align-items: center;
  .all-imgs {
    width: 95%;
    height: 150px;
    background: red;
    margin-top: 7px;
    background: url('https://img2.imgtp.com/2024/05/15/MqvPM8CY.png') no-repeat 100% 100%;
    background-size: cover;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 34px;
      letter-spacing: 15px;
      color: #fff;
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
