import * as types from './actions-types'

export const fetchComments = () => ({ type: types.FETCH_COMMENTS})
export const addComment = comment => ({ type: types.ADD_COMMENT, comment })
