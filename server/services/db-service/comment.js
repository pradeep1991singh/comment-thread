const logger = require('../logger')
const { Comment } =  require('../../db/models');

class CommentService {
  constructor () {}

  async getAll (filter) {
    try {
      let commentsFound = await Comment.find();
      logger.info({message: 'allComments', commentsFound});
      return commentsFound
    } catch (error) {
      logger.error({message: error.message, error});
      throw error;
    }
  }

  async get (filter) {
    try {
      let commentFound = await Comment.findOne(filter);
      logger.info({message: 'getComment', commentFound});
      return commentFound
    } catch (error) {
      logger.error({message: error.message, error});
      throw error;
    }
  }

  async post (payload) {
    try {
      const newComment = await Comment.create(payload)
      logger.info({message:'newComment', newComment});
      return newComment;
    } catch (error) {
      logger.error({message: error.message, error});
      throw error;
    }
  }
}

module.exports = new CommentService()
