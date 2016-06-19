<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }

  h3 {
      color: white!important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .title {
    height: 20px;
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

  <div class="title">
    <div class="title-container">
      <h3>Good Morning</h3>
    </div>
  </div>

  <div class="artist">
    <div class="artist-container">
      <h4>By: The Nice Alarm Clark Guys</h4>
    </div>
  </div>

</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
