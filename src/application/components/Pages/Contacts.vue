<template>
  <div class="page contacts">
    <div class="icon">
      <img :src="logo" alt="logo">
    </div>
    <div class="content">
      <h1>Contacts us</h1>
      <h2 class="green">We are here to help.</h2>
      <p>For questions about managing your applications, services and more, check out our FAQs. If you still have questions, see below for more ways to connect with us.</p>

      <h2>contact us via github</h2>
      <p>you can submit tickets <a href="">here</a> </p>
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

<style>
h1 {
  color:#808080;
}
</style>
