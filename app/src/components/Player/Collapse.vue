<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }
  .collapse {

  }
</style>

<template>
  <span class="icon collapse is-medium">
    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
  </span>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
