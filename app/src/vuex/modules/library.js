import {
ADD_TO_LIBRARY,
DEL_FROM_LIBRARY
} from '../mutation-types'

const state = {
  main: JSON.parse(localStorage.getItem('library') || '[]')
}

const mutations = {
  [ADD_TO_LIBRARY] (state, id) {
    state.main.push(id)
  },
  [DEL_FROM_LIBRARY] (state, id) {
    state.main.splice(id, 1)
  }
}

export default {
  state,
  mutations
}
