import { all, put, call, takeLatest } from 'redux-saga/effects';

import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from './actions-types'
import commentsApiService from '../services/commentApi';

function* fetchComments() {
  try {
    const result = yield call(commentsApiService.getAll);
    yield put({
      type: FETCH_COMMENTS_SUCCESS,
      payload: { comments: result }
    });
  } catch (error) {
    yield put({
      type: FETCH_COMMENTS_ERROR,
      payload: { error }
    });
  }
}

function* watchFetchComments() {
  yield takeLatest(FETCH_COMMENTS, fetchComments);
}

function* addComment(action) {
  try {
    const result = yield call(commentsApiService.create, action.comment);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      payload: { comment: result }
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_ERROR,
      payload: { error }
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT, addComment);
}

function* commentSaga() {
  yield all([watchFetchComments(), watchAddComment()]);
}

export default commentSaga;
