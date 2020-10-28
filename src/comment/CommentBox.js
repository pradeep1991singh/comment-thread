import { useState, useCallback } from 'react'

export default function CommentBox ({message = '', replyId = 0, placeholderTxt = 'Type your message', handleNewComment}) {
  const [newMessage, setNewMessage] = useState(message)
  const [newReplyId] = useState(replyId)
  const [placeholder] = useState(placeholderTxt)

  const onMessageChange = event => {
    setNewMessage(event.target.value);
  }

  const addNewMessage = useCallback(() => {
    if (!newMessage.trim()) {
      return;
    }

    const newComment = {
      id: Date.now(),
      message: newMessage,
      replyId: newReplyId,
      status: 1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    handleNewComment(newComment);

    setNewMessage('');
  }, [newMessage, newReplyId, handleNewComment])

  return (
    <div className="comment-box">
      <input type="text" value={newMessage} placeholder={placeholder} onChange={onMessageChange} />
      <button type="button" onClick={addNewMessage}>Add</button>
    </div>
  )
}
