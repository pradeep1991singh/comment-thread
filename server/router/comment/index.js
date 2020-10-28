const Router = require('koa-router');
const commentController = require('./commentController');

const router = new Router();
router.get('/comment', commentController.getAll);
router.get('/comment/:id', commentController.get);
router.post('/comment', commentController.create);

module.exports = router;
