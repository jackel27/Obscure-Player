<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <img src="LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <select v-model="monitor">
      <option v-for="monitor in monitors" monitor>{{ $index }}</option>
    </select>
    <button class="button" @click="getWindowSize">Get Win Size</button>

  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'

  export default {
    components: {
      CurrentPage,
      Links,
      Versions
    },
    watch: {
      'monitor' (knew, old) {
        // new val, old val
        console.log(knew)
        this.changemonitor(knew)
      }
    },
    ready () {
      this.monitors = this.$electron.screen.getAllDisplays()
    },
    data () {
      return {
        monitors: [],
        monitor: ''
      }
    },
    methods: {
      getWindowSize () {
        console.log(this.monitor)
        console.log(this.monitors[this.monitor].size.width)
        console.log(this.$electron.remote.BrowserWindow.getFocusedWindow().getBounds())
      },
      changemonitor (monitor) {
        // padding 640
        let x = 0
        let y = 0
        if (monitor !== 0) {
          for (let w = 0; w < monitor; w++) {
            x += this.monitors[w].size.width
            x += 640
          }
        }
        let width = this.monitors[monitor].size.width
        let height = this.monitors[monitor].size.height
        this.$electron.remote.BrowserWindow.getFocusedWindow().setPosition(x + ((width / 2) / 2), y)
        this.$electron.remote.BrowserWindow.getFocusedWindow().setSize(width / 2, height / 4)
        console.log(this.$electron.remote.BrowserWindow.getFocusedWindow().getBounds())
      }
    }
  }
</script>
