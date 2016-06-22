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
    height: 6px;
    display: inline-block;
    bottom: 0;
  }

  .progress-bar-overlay {
    margin-top: -11px;
    position: fixed;
    height: 6px;
    background-color: rgba(255, 255, 255, .75);
    z-index: 44;
  }

</style>

<template>
  <div class="progress-bar"></div>
  <div class="progress-bar-overlay" v-bind:style="{ width:width + '%' }"></div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store,
    data () {
      return {
        duration: '',
        currenttime: '',
        width: ''
      }
    },
    ready () {
      document.getElementById('domaudio').addEventListener('timeupdate', (e) => {
        this.duration = e.target.duration
        this.currenttime = e.target.currentTime
        this.width = this.currenttime / this.duration * 100
        console.log(this.width)
      })
    }
  }
</script>
