<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }
  .collapse {

  }
  button {
    -webkit-app-region: no-drag;
    height:25px;
    background: none;
    color: white;
    border: none;
    z-index: 9999;
  }
  button:hover {
    color: red;
  }
</style>

<template>
  <span class="icon collapse is-medium">
    <button type="button" name="button" class="button" @click="expand">  <i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
  </span>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store,
    data () {
      return {
        expanded: []
      }
    },
    ready () {
      this.expanded = this.$electron.remote.getCurrentWindow().getContentSize()
    },
    methods: {
      expand () {
        console.log(this.expanded)
        if (this.expanded[1] === 400) {
          this.$electron.remote.getCurrentWindow().setContentSize(600, 145)
          this.expanded[1] = 150
        } else {
          this.$electron.remote.getCurrentWindow().setContentSize(600, 500)
          this.expanded[1] = 400
        }
      }
    }
  }
</script>
