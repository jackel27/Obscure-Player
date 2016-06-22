<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }

  html,
  body { height: 100%; }
  button, is-primary {
  }

  body {
    font-family: Lato, Helvetica, sans-serif;
    // -webkit-app-region: drag;
    background-color: rgba(0, 0, 0, .5)!important;
  }

  .albumimg {
    height: 100px;
    width: 100px;
    z-index: 99;
  }

  .body-background {
    // background-size: cover;
    // width: 100%;
    // height: 100px;
    // position: fixed;
    // z-index: -4;
    // filter: blur(45px) brightness(.9);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -4;
    -webkit-filter: blur(35px) brightness(0.9);
    filter: blur(45px) brightness(0.9);
    background-size: 100%;
    background-position-y: 180%;
  }

  .collapse-container {
    -webkit-app-region: drag;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .columns.is-gapless:not(:last-child) {
    margin-bottom: -10px;
  }

  .icon {
    color: white;
  }

  .left {
    width: 50%;
  }

  .img-column {
    width: 255px;
  }

</style>
<style scoped>

  h3 {
      color: white!important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 25px;
  }
  .title {
    height: 25px;
    text-align: center;
    margin-bottom: 0px!important;
  }
  .title, .artist {
    overflow: hidden;
    box-sizing: border-box;
    vertical-align: middle;
    padding-left: 15px;
    font-size: 1.5em;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  .title-container, .artist-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    left: -3%;
    width: 100%;
    height: 30px;
    -webkit-app-region: no-drag;
  }
  .title:hover .title-container, .artist:hover .artist-container {
    transition: left 1s, width 1s;
    left: -100%;
    width: 200%;
  }

  h4 {
    margin-top: -10px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: .8em;
    color: white;
  }
  .artist {
    height: 25px;
    text-align: bottom;
    padding-top: 5px;
    margin-top: 10px!important;
    margin-bottom: 10px;
  }
  .artist-container {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  </style>

<template>
  <div class="body-background" v-bind:style="{ backgroundImage: 'url(' + artwork + ')' }">

  </div>
  <div class="columns is-gapless is-mobile">

    <div class="column is-2">
      <img class="albumimg" id="thumbid" :src="artwork" alt="" />
    </div>

    <div class="column is-6">


        <div class="title">
          <div class="title-container">
            <h3>{{ title }}</h3>
          </div>
        </div>

        <div class="artist">
          <div class="artist-container">
            <h4>{{ artist }}</h4>
          </div>
        </div>

      <timer-and-menu></timer-and-menu>
    </div>

    <div class="column is-4">
      <controls>
      </controls>
    </div>

  </div>

  <progress-bar></progress-bar>
  <div class="collapse-container">
    <collapse></collapse>
  </div>
  <library></library>

</template>

<script>
  import {library} from './vuex/getters'
  import store from 'src/vuex/store'
  import Controls from 'components/Player/Controls'
  import TimerAndMenu from 'components/Player/TimerAndMenu'
  import ArtistAndTitle from 'components/Player/ArtistAndTitle'
  import Collapse from 'components/Player/Collapse'
  import ProgressBar from 'components/Player/ProgressBar'
  import Library from 'components/Player/Library'

  export default {
    store,
    components: {
      Controls,
      TimerAndMenu,
      ArtistAndTitle,
      Collapse,
      ProgressBar,
      Library
    },
    ready () {
    },
    data () {
      return {
        artwork: '',
        title: '',
        artist: '',
        loadedIndex: ''
      }
    },
    vuex: {
      getters: {
        library
      }
    },
    methods: {
    }
  }

</script>
