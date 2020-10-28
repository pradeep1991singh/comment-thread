const Router = require('koa-router')
const commentRouter = require('./comment');

const router = new Router({ prefix: '/api' });
router.use(commentRouter.routes());

module.exports = router
