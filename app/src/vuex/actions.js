import * as types from './mutation-types'
export const addToLibrary = ({dispatch}, id) => {
  dispatch(types.ADD_TO_LIBRARY, id)
}
// export const delVideoId = ({dispatch}, id) => {
//   dispatch(types.DEL_VIDEO_ID, id)
// }

// ADD_TO_LIBRARY  -> ADD_TO_LIBRARY
// addToLibrary -> ADD_TO_LIBRARY
