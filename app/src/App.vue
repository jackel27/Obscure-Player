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
    background-image: url("https://s-media-cache-ak0.pinimg.com/736x/ae/48/2b/ae482b380fda4d2b051adb2dd7311278.jpg");
    background-size: cover;
    width: 100%;
    height: 100px;
    position: fixed;
    z-index: -4;
    filter: blur(45px) brightness(.4);
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

<template>
  <div class="body-background">

  </div>
  <div class="columns is-gapless is-mobile">

    <div class="column is-2">
      <img class="albumimg" src="https://s-media-cache-ak0.pinimg.com/736x/ae/48/2b/ae482b380fda4d2b051adb2dd7311278.jpg" alt="" />
    </div>

    <div class="column is-6">
      <artist-and-title></artist-and-title>
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

</template>

<script>
  import store from 'src/vuex/store'
  import Controls from 'components/Player/Controls'
  import TimerAndMenu from 'components/Player/TimerAndMenu'
  import ArtistAndTitle from 'components/Player/ArtistAndTitle'
  import Collapse from 'components/Player/Collapse'
  import ProgressBar from 'components/Player/ProgressBar'

  export default {
    store,
    components: {
      Controls,
      TimerAndMenu,
      ArtistAndTitle,
      Collapse,
      ProgressBar
    }
  }

</script>
