const { keyBy } = require('lodash')

const logger = require('../../services/logger');
const { commentTableService } = require('../../services/db-service');

let comments = require('../../constants/comments.json')

class CommentController {
  constructor () {}

  async getAll (ctx, next) {
    try {
      // const comments =  await commentTableService.getAll();
      __successHandler(ctx, comments);
      await next();
    } catch (error) {
      __errorHandler(ctx, {active: false});
      await next();
    }
  }

  async get (ctx, next) {
    try {
      // const found =  await commentTableService.get({id});
      const commentById = keyBy(comments, 'id')
      const found = commentById[ctx.params.id]
      __successHandler(ctx, found);
      await next();
    } catch (error) {
      __errorHandler(ctx, {active: false});
      await next();
    }
  }

  async create (ctx, next) {
    try {
      const payload = ctx.request.body
      // const response = await commentTableService.post(payload);
      comments.push(payload)
      __successHandler(ctx, payload);
      await next();
    } catch (error) {
      __errorHandler(ctx, error, {}, null);
      await next();
    }
  }
}

function __successHandler (ctx, data, statusCode) {
  logger.info({message: 'success', data});
  ctx.body = {status: 'success', data};
  ctx.res.statusCode = statusCode || 200;
}

function __errorHandler (ctx, error, data, statusCode) {
  logger.error({message: error.message, error})
  ctx.body = {status: 'error', data};
  ctx.res.statusCode = statusCode || 400;
}

module.exports = new CommentController();
