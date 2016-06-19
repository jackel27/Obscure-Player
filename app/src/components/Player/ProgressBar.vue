<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }

  .progress-bar {
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 10px;
    display: inline-block;
    bottom: 0;
  }
  
  .progress-bar-overlay {
    margin-top: -15px;
    width: 50%;
    position: fixed;
    height: 10px;
    background-color: rgba(255, 255, 255, .75);
  }

</style>

<template>
  <div class="progress-bar"></div>
  <div class="progress-bar-overlay"></div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
