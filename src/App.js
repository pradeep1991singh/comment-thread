import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchComments, addComment } from "./comment/store/actions";
import CommentBox from './comment/CommentBox'
import CommentList from './comment/CommentList'

import './comment/comment.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const addNewComment = useCallback((newMessage) => {
    dispatch(addComment(newMessage));
  }, [dispatch]);

  return (
    <div className="App">
      <div className="comment-container">
        <CommentBox placeholderTxt="Join the conversation" handleNewComment={addNewComment} />
        <CommentList handleNewReply={addNewComment} />
      </div>
    </div>
  );
}

export default App;
