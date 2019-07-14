<template>
  <div class="page home">
    <div class="icon-home">
      <img :src="logo" alt="logo">
    </div>
    <div class="home-content">
      <h1>Vue SSA example application</h1>
      <p>
        This application has the only purpurse of demonstrate how to combine
         differents tecnologies as applications that can be composite into a
         single one
       </p>
       <h2>full application</h2>
       <p>you can checkout the complete application <a href="">here</a></p>
    </div>
  </div>
</template>

<script>
import { logo } from '../../assets/images'
export default {
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style lang="css" scoped>
  .home-content{
    position: absolute;
    top: 250px;
    margin: 0 25vw;
    width: 50vw;
    text-align: center;
  }
</style>
