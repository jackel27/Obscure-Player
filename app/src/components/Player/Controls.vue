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
        <i class="fa" v-bind:class="{ 'fa-play': !isplaying, 'fa-pause': isplaying }" @click='playpause'></i>
      </span>
      <span class="icons icon is-medium">
        <i class="fa fa-fast-forward" @click='forward'></i>
      </span>
    </div>

</template>

<script>
  import store from 'src/vuex/store'
  import {library} from '../../vuex/getters'
  export default {
    store,
    vuex: {
      getters: {
        library
      }
    },
    data () {
      return {
        isplaying: false,
        artwork: ''
      }
    },
    ready () {
      document.getElementById('domaudio').addEventListener('playing', () => {
        console.log('playing started')
        this.isplaying = true
      })
      document.getElementById('domaudio').addEventListener('pause', () => {
        console.log('playing started')
        this.isplaying = false
      })
    },
    methods: {
      playpause () {
        let player = document.getElementById('domaudio')
        if (this.isplaying) {
          player.pause()
        } else {
          player.play()
        }
        this.isplaying = !player.paused
      },
      forward () {
        // let player = document.getElementById('domaudio')
        // document.getElementById('domaudio').volume = 0.5
      }
    }
  }
</script>
