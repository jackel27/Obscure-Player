<style lang="scss">
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
    <span class="timerd"> {{ currenttime }} </span>
    <span class="icon menu">
      <i class="fa fa-bars" @click="loadfile"></i>
    </span>
  </div>
  <button class="button is-primary" @click="test">sync</button>
</template>

<script>
  import {library} from '../../vuex/getters'
  import store from 'src/vuex/store'
  import mm from 'musicmetadata'
  import fs from 'fs'
  import {addToLibrary} from '../../vuex/actions'
  export default {
    store,
    vuex: {
      getters: {
        library
      },
      actions: {
        addToLibrary
      }
    },
    data () {
      return {
        array: [],
        audio: '',
        isplaying: false,
        currenttime: '0:00 / 0:00',
        duration: '0:00'
      }
    },
    ready () {
      document.getElementById('domaudio').addEventListener('playing', () => {
        console.log('playing started')
        this.isplaying = true
      })
      document.getElementById('domaudio').addEventListener('pause', () => {
        clearInterval(this.intervalfunction)
      })
      document.getElementById('domaudio').addEventListener('timeupdate', (e) => {
        this.duration = this.timeStamp(e.target.duration)
        this.currenttime = (this.timeStamp(e.target.currentTime) + ' / ' + this.duration)
        console.log(this.currenttime)
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
      timeStamp (time) {
        time = Math.floor(time)
        let mins = time >= 60 ? ~~(time / 60) : 0
        let secs = time - (mins * 60)
        if (secs < 10) {
          return `${mins}:0${secs}`
        }
        return `${mins}:${secs}`
      },
      loadMusic (url) {
        return new Promise((resolve, reject) => {
          /*eslint-disable*/
          let ctx = new AudioContext()
          let req = new XMLHttpRequest()
          req.open('GET', url, true)
          req.responseType = 'arraybuffer'

          req.onload = function () {
            ctx.decodeAudioData(req.response, function (buffer) {
              console.log(buffer)
              console.log(buffer.duration) // 116
              resolve(buffer.duration)
            })
          }
          req.send()
          ctx.close()
        })
      },
      test () {
        /*eslint-disable no-new*/
        for (let x = 0; x < this.array.length; x++) {
          let exists = false

          mm(fs.createReadStream(this.array[x]), (err, metadata) => {
            if (err) throw err
            console.log(metadata)

            if (this.library.length) {
              for (let y = 0; y < this.library.length; y++) {
                if (this.library[y].location === this.array[x]) {
                  exists = true
                }
              }
            }
            console.log(this.array[x])
            if (!exists) {
              this.loadMusic(this.array[x])
                .then(duration => {
                  metadata.duration = duration
                  metadata.location = this.array[x]
                  this.addToLibrary(metadata)
                })
            } else {
              console.log('FILE EXISTS!!!')
            }
          })
        }
        this.playandextractmeta(this.array[0])
      },
      playandextractmeta (song) {
        this.audio = song.split('%').join('/')
        console.log(this.audio)
        console.log(song.split('%').join('/'))
      }
    }
  }

</script>
