<style scoped>
  .drag-bar {
    width: 100%;
    height: 20px;
    background-color: blue;
    margin-top: 0 auto;
  }
  p {
    color: black;
    font-weight: bold;
  }
  .container {
    display: block;
    margin: 0 auto;
  }

</style>

<template>
  <div class="drag-bar" id="drag-bar-click">
    <p>drag me</p>
  </div>
<br>
  <div class="container">
    <br>
    <p>Welcome.</p>
    <h1>Hi Greg, How are you? </h1>

    <button class="button">testing</button>
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
    },
    ready () {
      console.log('hello ')
      // this.$drag(document.getElementById('drag-bar'))
    },
    data () {
      return {
      }
    },
    methods: {
      dragwindow () {
      }
    }
  }
</script>
