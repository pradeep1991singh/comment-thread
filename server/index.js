const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const logger = require('./services/logger');
const appRouter = require('./router')
// const initDB = require('./db')
// initDB();

const port = parseInt(process.env.PORT, 10) || 9000;
const app = new Koa();

let router = new Router()
router.get('(.*)', async (ctx, next) => {
  if (!/comment/.test(ctx.path)) {
    ctx.body = `Hello, please try http://localhost:${port}/api/comment/*`
    ctx.res.statusCode = 200;
  }
  await next()
})

app.use(cors());
app.use(bodyParser());
app.use(appRouter.routes());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  logger.info(`> Ready on http://localhost:${port}`);
});
