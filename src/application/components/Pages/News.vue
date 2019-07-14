<template>
  <div class="page news">
    <div class="icon">
      <img :src="logo" alt="logo">
    </div>
    <div class="content">
      <h1>News</h1>
      <p>This is just an example and none of the information below will be updated</p>

      <div class="grid">
        <div class="cell"><img :src="news.first" alt="first"></div>
        <div class="cell"><img :src="news.second" alt="second"></div>
        <div class="cell"><img :src="news.third" alt="third"></div>
        <div class="cell"><img :src="news.fourth" alt="fourth"></div>
        <div class="cell"><img :src="news.fifth" alt="fifth"></div>
        <div class="cell"><img :src="news.sixth" alt="sixth"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { logo, news } from '../../assets/images'
export default {
  data () {
    return {
      logo: logo,
      news: news,
    }
  }
}
</script>

<style lang="css" scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .cell{
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(100, 100, 100, 0.8);
    border-radius: 10px;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
</style>
