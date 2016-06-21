const localStorageMiddleware = {
  onMutation (mutation, state) {
    localStorage.setItem('library', JSON.stringify(state.library.main))
  }
}
export default [localStorageMiddleware]
