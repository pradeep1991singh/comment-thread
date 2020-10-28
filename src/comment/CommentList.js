import React, { useState } from 'react';
import { useSelector } from "react-redux";

import CommentBox from './CommentBox'
import { buildNestedTree } from '../services/utils'

const CommentItem = ({comment, handleNewReply, children}) => {
  const [isReply, setIsReply] = useState(false)

  const handleReply = () => {
    setIsReply(!isReply);
  }

  const handleNewReplyComment = (newReply) => {
    setIsReply(false);
    handleNewReply(newReply)
  }

  const nestedComments = (comment.children || []).map(comment => {
    return <CommentItem key={comment.id} comment={comment} handleNewReply={handleNewReply} />
  })

  return (
    <div className="comment-inner-container">
      <p className="comment-message">{comment.message}</p>
      <div className="reply-box">
        {isReply && <CommentBox replyId={comment.id} handleNewComment={handleNewReplyComment} />}
        { !isReply &&
          (<button type="button" onClick={handleReply}>Reply</button>)
        }
      </div>
      {nestedComments}
    </div>
  )
}

const CommentList = React.memo(({handleNewReply}) => {
  const comments = useSelector(state => state.commentStore.comments)
  const nestedCommentsTree = buildNestedTree(comments, 0);

  return (
    <React.Fragment>
      <h4 className="comments-count">{comments && comments.length} Comments</h4>
      {nestedCommentsTree && nestedCommentsTree.map((comment) =>
        <CommentItem key={comment.id} comment={comment} handleNewReply={handleNewReply} />
      )}
    </React.Fragment>
  )
})

export default CommentList;
