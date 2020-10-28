const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment scheme
// "_id": auto_generated,
// "message": String,
// "replyId": String,
// "status": Number {0, 1},
// "createdAt": timestamp,
// "updatedAt": timestamp}

const CommentSchema = new Schema({
  message: String,
  replyId: String,
  status: Number
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
