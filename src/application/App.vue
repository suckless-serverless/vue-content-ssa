<template>
  <transition name="router-transitions">
    <RouterView />
  </transition>
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
.page{
  position: fixed;
  top: 100px;
  width: inherit;
}
.content{
  position: absolute;
  margin: 0 25vw;
  width: 50vw;
  text-align: center;
}
.router-transitions-leave-active .icon-home{
  animation: gelatine 1s;
}
.router-transitions-enter-active .icon-home{
  animation: headimagehome 1s;
}
.router-transitions-enter-active {
  animation: page 1s;
}
.router-transitions-leave-active {
  animation: page 1s;
}
.router-transitions-enter-active .icon{
  animation: headimage 1s;
}
.router-transitions-enter-active .content {
  animation: fade 1s;
}
.router-transitions-leave-active .icon{
  animation: headimage 1s reverse;
}
.router-transitions-leave-active .content {
  animation: fade 1s reverse;
}
.icon{
  position: fixed;
  right: 100px;
  width: 50px;
}
.icon img{
  width: 100%;
}
.icon-home{
  position: fixed;
  width: 250px;
  right: calc(50% - 125px);
}
.icon-home img{
  width: 100%;
}

@keyframes headimagehome {
    0% {
      opacity: 0;
      right: calc(50% - 125px);
      width: 250px;
    }
    50% {
      opacity: 0;
      right: calc(50% - 125px);
      width: 250px;
    }
    51% {
      opacity: 1;
      right: calc(50% - 125px);
      width: 250px;
    }
    100% {
      opacity: 1;
      right: calc(50% - 125px);
      width: 250px;
    }
}
@keyframes headimage {
    0% {
      opacity: 0;
      right: calc(50% - 125px);
      width: 250px;
    }
    49% {
      opacity: 0;
      right: calc(50% - 125px);
      width: 250px;
    }
    50% {
      opacity: 1;
      right: calc(50% - 125px);
      width: 250px;
    }
    63% {
      opacity: 1;
      right: calc(50% - 125px);
      width: 250px;
    }
    100% {
      opacity: 1;
      right: 100px;
      width: 50px;
    }
}
@keyframes fade {
    0%,50%  {
      opacity: 0;
      transform: translateY(250px);
    }
    75% {
      transform: translateY(250px);
      opacity: 1;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
}
@keyframes page {
    0%, 100% {
      opacity: 1;
    }
}
@keyframes gelatine{
  0%{
    transform:scale(1, 1);
    opacity: 1;
  }
  13%{
    transform:scale(.9, 1.1);
    opacity: 1;
  }
  25%{
    transform:scale(1.1, .9);
    opacity: 1;
  }
  37%{
    transform:scale(.95, 1.05);
    opacity: 1;
  }
  50%{
    transform:scale(1, 1);
    opacity: 1;

  }
  51%, 100%{
    transform:scale(1, 1);
    opacity:0;
  }
}
</style>
