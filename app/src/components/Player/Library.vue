<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html {
    background-color: transparent!important;
    background: rgba(0, 0, 0, 0)!important;
    overflow: hidden!important;
  }

  .library-container {
    height: 350px;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .library-container {
    width: 600px;
    overflow-x: scroll;
  }
  // .table td:nth-child(2) {
  //   width: 100px!important;
  // }
  .title {
    width: 200px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
  // h3 {
  //     color: white!important;
  //     white-space: nowrap;
  //     overflow: hidden;
  //     text-overflow: ellipsis;
  //     height: 25px;
  // }
  // .title {
  //   height: 25px;
  //   text-align: center;
  //   margin-bottom: 0px!important;
  // }
  // .title, .artist {
  //   overflow: hidden;
  //   box-sizing: border-box;
  //   vertical-align: middle;
  //   padding-left: 15px;
  //   font-size: 1.5em;
  //   white-space: nowrap;
  //   text-overflow: ellipsis;
  //   text-align: center;
  // }
  // .title-container, .artist-container {
  //   white-space: nowrap;
  //   position: relative;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   left: -3%;
  //   width: 100%;
  //   height: 30px;
  //   -webkit-app-region: no-drag;
  // }
  // .title:hover .title-container, .artist:hover .artist-container {
  //   transition: left 1s, width 1s;
  //   left: -100%;
  //   width: 200%;
  // }
  //
  // h4 {
  //   margin-top: -10px;
  //   white-space: nowrap;
  //   overflow-x: hidden;
  //   text-overflow: ellipsis;
  //   font-size: .8em;
  //   color: white;
  // }
  // .artist {
  //   height: 25px;
  //   text-align: bottom;
  //   padding-top: 5px;
  //   margin-top: 10px!important;
  //   margin-bottom: 10px;
  // }
  // .artist-container {
  //   padding-top: 5px;
  //   padding-bottom: 5px;
  // }
  // <div class="title">
  //   <div class="title-container">
  //     <h3>{{ title }}</h3>
  //   </div>
  // </div>
</style>

<template>
  <div class="search">
    <p class="control">
      <input class="input" v-model="searchquery"type="text" placeholder="Search">
    </p>
  </div>

  <div class="library-container">
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
      <tbody>
        <!-- TODO change td id back to $index after testing -->
        <tr v-for="list in library  | filterBy searchquery" id="{{ library.indexOf(list) }}">
          <td>
            {{ library.indexOf(list) }}
          </td>
          <td @click="loadandplay(list)" class="title">{{ list.title }}</td>
          <td @click="loadandplay(list)">{{ list.artist }}</td>
          <td @click="loadandplay(list)">{{ list.album }}</td>
          <td>
            <button class="button is-danger" name="button" @click="delete(library.indexOf(list))">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
<!-- body > div.library-container > table > tbody > tr:nth-child(1) > td:nth-child(2) -->
</template>

<script>
  import store from 'src/vuex/store'
  import {library} from '../../vuex/getters'
  import {delFromLibrary} from '../../vuex/actions'
  export default {
    store,
    vuex: {
      getters: {
        library
      },
      actions: {
        delFromLibrary
      }
    },
    data () {
      return {
        searchquery: ''
      }
    },
    methods: {
      delete (item) {
        this.delFromLibrary(item)
      },
      loadandplay (list) {
        document.getElementById('domaudio').pause()
        document.getElementById('domaudio').src = list.location
        this.$parent.title = list.title
        this.$parent.artist = list.artist
        document.getElementById('domaudio').play()
        this.$parent.artwork = list.base64
      }
    }
  }
</script>
