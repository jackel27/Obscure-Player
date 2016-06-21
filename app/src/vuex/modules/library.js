import {
ADD_TO_LIBRARY
} from '../mutation-types'

const state = {
  main: JSON.parse(localStorage.getItem('library') || '[]')
}

const mutations = {
  [ADD_TO_LIBRARY] (state, id) {
    state.main.push(id)
  }
}

export default {
  state,
  mutations
}
