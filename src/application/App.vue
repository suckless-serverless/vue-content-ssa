<template>
  <RouterView />
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      name: 'Number',
      number: 0
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.full-width{
  border-width: medium;
  border-color: red;
}
</style>
