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
  .image {
    width: 25px;
    height: auto;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>

<template>
  <div class="search">
    <p class="control">
      <input class="input" type="text" placeholder="Search">
    </p>
  </div>

  <div class="library-container">
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Album</th>
          <th>Controls</th>
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
        <tr v-for="list in library" id="{{ library.indexOf(list) }}">
          <td>
            {{ library.indexOf(list) }}
          </td>
          <td @click="loadandplay(list)">{{ list.title }}</td>
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
