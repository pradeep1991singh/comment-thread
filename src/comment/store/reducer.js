import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from './actions-types'

const initialState = {
  comments: [],
  loading: false,
  error: null
}

export default function comment(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        loading: true
      }

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case ADD_COMMENT:
      return {
        ...state,
        loading: true
      }

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments,
          {...action.payload.comment}
        ],
        loading: false
      };
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state
  }
}
