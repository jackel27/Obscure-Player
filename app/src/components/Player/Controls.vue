<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }

  .controls {
    background-color: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .icon {
    color: white;
  }
</style>

<template>

    <div class="controls container">
      <span class="icons icon is-medium">
        <i class="fa fa-fast-backward"></i>
      </span>
      <span class="icons icon is-medium">
        <i class="fa" v-bind:class="{ 'fa-play': isplaying, 'fa-pause': !isplaying }" @click='playpause'></i>
      </span>
      <span class="icons icon is-medium">
        <i class="fa fa-fast-forward" @click='cutvolume'></i>
      </span>
    </div>

</template>

<script>
  import store from 'src/vuex/store'
  export default {
    store,
    data () {
      return {
        isplaying: ''
      }
    },
    methods: {
      playpause () {
        let player = document.getElementById('domaudio')
        this.isplaying = !player.paused
        if (this.isplaying) {
          player.pause()
        } else {
          player.play()
        }
      },
      cutvolume () {
        document.getElementById('domaudio').volume = 0.5
      }
    }
  }
</script>
