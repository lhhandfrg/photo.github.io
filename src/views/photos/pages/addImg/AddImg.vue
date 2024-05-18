<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { showSuccessToast, showFailToast } from 'vant'
const fileList = ref([])
const afterRead = (file) => {
  file.status = 'uploading'
  file.message = '上传中...'

  axios
    .post(
      'https://www.imgtp.com/api/upload',
      { image: file.file },
      {
        headers: {
          'content-type': 'multipart/form-data',
          token: '8f61c7bfe77e125d54e13ee754d00a78'
        }
      }
    )
    .then((res) => {
      if (res.data.data.url !== '') {
        showSuccessToast('上传成功')
        file.status = 'done'
        file.message = '上传成功'
      } else {
        showFailToast('上传失败')
      }
    })
}
</script>

<template>
  <div class="add-img">
    <van-nav-bar title="添加图片" left-text="返回" left-arrow @click-left="() => $router.go(-1)" />
    <van-uploader
      v-model="fileList"
      :multiple="true"
      :max-count="1"
      :after-read="afterRead"
      preview-size="150px"
      class="uploader"
      ref="file"
      :preview-image="true"
      :preview-full-image="true"
      capture="camera"
      image-fit="cover"
    />
  </div>
</template>

<style scoped lang="scss">
.add-img {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
