import React, { useState } from 'react';
import { useSelector } from "react-redux";

import CommentBox from './CommentBox'
import { buildNestedTree } from '../services/utils'

const CommentItem = React.memo(({comment, handleNewReply}) => {
  const [isReply, setIsReply] = useState(false)

  const handleReply = () => {
    setIsReply(!isReply);
  }

  const handleNewReplyComment = (newReply) => {
    setIsReply(false);
    handleNewReply(newReply)
  }

  return (
    <div className="comment-inner-container">
      <p className="comment-message">{comment.message}</p>
      <div className="reply-box">
        {isReply && <CommentBox replyId={comment.id} handleNewComment={handleNewReplyComment} />}
        { !isReply &&
          (<button type="button" onClick={handleReply}>Reply</button>)
        }
      </div>
    </div>
  )
})

const CommentList = React.memo(({handleNewReply}) => {
  let comments = useSelector(state => state.commentStore.comments)

  // todo: handle nested comment rendering
  const nestedCommentsTree = buildNestedTree(comments, 0);
  console.log(nestedCommentsTree);

  return (
    <React.Fragment>
      <h4 className="comments-count">{comments && comments.length} Comments</h4>
      {comments && comments.map((comment) =>
        <CommentItem key={comment.id} comment={comment} handleNewReply={handleNewReply} />
      )}
    </React.Fragment>
  )
})

export default CommentList;
