<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/photo" icon="photo">相册</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style></style>
