import Koa from 'koa';
import Router from '@koa/router';
import KaoStatic from 'koa-static';

const app = new Koa();
const router = new Router();

router.get('/world', (ctx, next) => {
  // ctx.router available
  ctx.body = "Hello World"
});
router.get('/hello', (ctx, next) => {
  // ctx.router available
  ctx.body = {
    message: "World Hello"
  }
});

// logger  => 2st like middleware
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time => 1st like middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(router.routes())
  .use(router.allowedMethods())
  .use(KaoStatic('./static'));

app.listen(3000);
console.log('listening on port 3000, please visit http://localhost:3000');