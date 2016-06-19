<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }

  .menu {
    text-align: right;
    display: inline-block;
  }
  .fa-bars {
    margin-left: 180px;
  }
  .icon {
    color: white;
  }
  .timer {
    margin-left: 10px;
    color: white;
  }
  .timerd {
    color: white;
  }
</style>

<template>
  <audio :src="audio" id="domaudio"></audio>
  <div class="timer">
    <span class="timerd"> {{ timer }} </span>
    <span class="icon menu">
      <i class="fa fa-bars" @click="loadfile"></i>
    </span>
  </div>
  <button class="button is-primary" @click="test">sync</button>
</template>

<script>
  import store from 'src/vuex/store'
  import mm from 'musicmetadata'
  import fs from 'fs'
  export default {
    store,
    data () {
      return {
        array: [],
        audio: '',
        isplaying: false,
        timerinterval: 100,
        timer: 0
      }
    },
    ready () {
      document.getElementById('domaudio').addEventListener('playing', () => {
        console.log('playing started')
        this.isplaying = true
        this.starttimeout()
      })
      document.getElementById('domaudio').addEventListener('pause', () => {
        clearTimeout(this.timerinterval)
      })
    },
    methods: {
      loadfile () {
        this.$electron.remote.dialog.showOpenDialog({
          properties: [
            // 'openFile',
            'multiSelections'
          ]
        }, (filenames) => {
          this.array = filenames
          console.log(this.array)
        })
      },
      test () {
        /*eslint-disable no-new*/
        for (let x = 0; x < this.array.length; x++) {
          mm(fs.createReadStream(this.array[x]), (err, metadata) => {
            if (err) throw err
            console.log(metadata)
          })
        }
        this.playandextractmeta(this.array[0])
      },
      playandextractmeta (song) {
        this.audio = song.split('%').join('/')
        console.log(this.audio)
        console.log(song.split('%').join('/'))
        // document.getElementById('domaudio').play()
      },
      starttimeout () {
        let this_ = this
        setTimeout(() => {
          this_.timer = document.getElementById('domaudio').currentTime
        }, 300)
      }
    }
  }
//
// // create a new parser from a node ReadStream
// var parser = mm(fs.createReadStream('sample.mp3'), function (err, metadata) {
//   if (err) throw err;
//   console.log(metadata);
// });
</script>
