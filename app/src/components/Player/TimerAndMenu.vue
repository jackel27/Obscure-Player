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
  <audio src="" id="domaudio"></audio>
  <div class="timer">
    <span class="timerd"> {{ currenttime }} </span>
    <span class="icon menu">
      <i class="fa fa-bars" @click="loadfile"></i>
    </span>
  </div>
</template>

<script>
  import {library} from '../../vuex/getters'
  import store from 'src/vuex/store'
  import mm from 'musicmetadata'
  import fs from 'fs'
  import {addToLibrary} from '../../vuex/actions'
  import base64Arraybuffer from 'base64-arraybuffer'
  // import blobUtil from 'blob-util'
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
        duration: '0:00',
        artwork: ''
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
          this.test()
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
      setArtwork (metadata) {
        let artwork = `data:image/${metadata.picture[0].format};base64,` + btoa(String.fromCharCode.apply(null, (metadata.picture[0].data)))
      },
      test () {
        // img.src = 'data:image/jpeg;base64,' + btoa('your-binary-data');
        // console.log(btoa(this.library[0].picture[0].data.data))
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
            let filteredObj = {}
            if (!exists) {
              this.loadMusic(this.array[x])
                .then(duration => {
                  metadata.duration = duration
                  metadata.location = this.array[x]
                  if (metadata.picture.length > 0) {
                    filteredObj.base64 = (`data:image/${metadata.picture[0].format};base64,` + base64Arraybuffer.encode(metadata.picture[0].data))
                  } else {
                    // default img url
                    filteredObj.base64 = ('http://www.imusausa.com/wp-content/uploads/2012/11/no-photo.png')
                  }
                  if (metadata.artist.length > 0) {
                    filteredObj.artist = metadata.artist
                  } else {
                    filteredObj.artist = 'Artist not found'
                  }
                  if (metadata.album.length > 0) {
                    filteredObj.album = metadata.album
                  } else {
                    filteredObj.album = 'Album Not Found'
                  }
                  if (metadata.title.length > 0) {
                    filteredObj.title = metadata.title
                  } else {
                    // making filename the title if title in meta does not exist
                    filteredObj.title = this.array[x].match(/\\[^\\]+$/).toString().slice(1)
                  }
                  filteredObj.location = this.array[x]
                  filteredObj.duration = duration

                  this.addToLibrary(filteredObj)
                })
            } else {
              console.log('FILE EXISTS!!!')
            }
          })
        }
        // this.playandextractmeta(this.library[0])
      },
      playandextractmeta (song) {
        // this.audio = song.split('%').join('/')
      }
    }
  }

</script>
