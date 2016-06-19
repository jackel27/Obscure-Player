<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }
  button {
      -webkit-app-region: no-drag;
  }
  body {
    align-items: center;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
    -webkit-app-region: drag;
  }
</style>

<template>
  <router-view></router-view>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
