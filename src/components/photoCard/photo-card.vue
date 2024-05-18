<template>
  <div class="photo-card">
    <div class="card" v-for="item in this.photos" :key="item.url">
      <img :src="item.url" alt="" />
      <p>{{ item.title }}</p>
      <b>{{ item.description }}</b>
    </div>
    <div style="width: 170px; height: 0px" v-for="k in photos.length" :key="k"></div>
  </div>
</template>
<script>
export default {
  name: 'PhotoCard',
  props: {
    photos: {
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.photo-card {
  width: 100%;
  min-height: 400px;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;

  .card {
    width: 170px;
    height: 240px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 90%;
      height: 160px;
      object-fit: cover;
      border-radius: 10px;
    }
    p {
      font-size: 14px;
      color: black;
      text-align: center;
    }
    b {
      font-size: 12px;
      color: #aaa;
      text-align: center;
    }
  }
}
</style>
