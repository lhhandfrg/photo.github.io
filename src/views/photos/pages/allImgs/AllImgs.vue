<script setup>
import axios from 'axios'

import { ref, onMounted } from 'vue'
const show = ref(true)
const token = ref('')
const imgs = ref([])
const getImgUrl = async () => {
  const res = await axios.post('https://www.imgtp.com/api/token', {
    email: 'lhhandfrg1124@163.com',
    password: 'Liu668800',
    refresh: 0
  })
  token.value = res.data.data.token
  const list = await axios.post(
    'https://www.imgtp.com/api/images',
    {
      page: 1,
      rows: 20
    },
    {
      headers: {
        token: token.value
      }
    }
  )
  imgs.value = list.data.data.data
}

onMounted(() => {
  getImgUrl()
})
</script>

<template>
  <div class="all-imgs">
    <van-nav-bar
      @click-left="() => $router.go(-1)"
      @click-right="() => $router.push('/addimg')"
      title="全部图片"
      left-text="返回"
      left-arrow
      :fixed="true"
    >
      <template #right>
        <van-icon name="plus" size="18" />
      </template>
    </van-nav-bar>
    <van-overlay
      v-if="imgs.length === 0"
      style="display: flex; justify-content: center; align-items: center"
      :show="show"
      @click="show = false"
    >
      <van-loading type="spinner" color="#1989fa" />
    </van-overlay>
    <div class="img-content" v-else>
      <img v-for="item in imgs" :src="item.url" :key="item.id" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.all-imgs {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 46px;
  .img-content {
    display: flex;
    width: 100%;
    min-height: 100px;
    overflow: scroll;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    img {
      width: 150px;
      height: 150px;
      margin: 5px;
      object-fit: cover;
    }
  }
}
</style>
