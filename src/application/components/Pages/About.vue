<template>
  <div class="page about">
    <div class="icon">
      <img :src="logo" alt="logo">
    </div>
    <div class="content">
      <h1>About suckless serverless applications</h1>
      <p>For questions about managing your applications, services and more, check out our FAQs. If you still have questions, see below for more ways to connect with us.</p>

      <h2>mor about us in github</h2>
      <p>you can take a look at <a href="">here</a> </p>
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
</style>
