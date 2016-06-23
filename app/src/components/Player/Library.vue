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

  .title {
    width: 200px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  .title, .album, .artist, .id {
    color: white;
  }

  .tablehead:hover {
    cursor: pointer;
    // background-color: rgba(0, 0, 200, .1);
    color: white;

  }

  .fa.fa-sort {
    display: inline;
  }

  .tablehead.two {
    text-align: center;
  }

  tr:hover {
    background-color: rgba(0, 0, 200, .2);
    // color:black;
    cursor: pointer;
  }

  table {
    background-color: transparent!important;
    // color: white!important;
  }

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
          <th class="tablehead one" @click="orderfunc('list')"><i class="fa fa-sort">&nbsp</i></th>
          <th class="tablehead two" @click="orderfunc('title')">Title&nbsp<i class="fa fa-sort"></i></th>
          <th class="tablehead three" @click="orderfunc('artist')">Artist&nbsp<i class="fa fa-sort"></i></th>
          <th class="tablehead four" @click="orderfunc('album')">Album&nbsp<i class="fa fa-sort"></i></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <!-- TODO change td id back to $index after testing -->
        <tr v-for="list in library  | filterBy searchquery | orderBy order" id="{{ library.indexOf(list) }}" track-by="$index">
          <td class="id">{{ library.indexOf(list) }} </td>
          <td @click="loadandplay(list)" class="title">{{ list.title }}</td>
          <td @click="loadandplay(list)" class="artist">{{ list.artist }}</td>
          <td @click="loadandplay(list)" class="album">{{ list.album }}</td>
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
        searchquery: '',
        order: ''
      }
    },
    methods: {
      orderfunc (ordered) {
        if (this.order.slice(-2) === '-1') {
          this.order = ordered.slice(1, -3)
        } else {
          this.order = ordered + ' -1'
        }
      },
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
