import Koa from 'koa';
import Router from '@koa/router';
import KaoStatic from 'koa-static';
import WebSocket from 'ws';
import sse from './sse.js';
import subscribe from './db.js';

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

router.get('/sse' , (ctx) => {
  ctx.req.setTimeout( Number.MAX_VALUE );
  // some header setting 
  ctx.type = 'text/event-stream; charset=utf-8';
  ctx.set('Cache-Control', 'no-cache');
  ctx.set('Connection', 'keep-alive');

  // subscribe to a readable interface
  const body = ctx.body = sse();
  const stream = subscribe('some event');
  stream.pipe(body);

  // if the connection closes or errors,
  // we stop the SSE.
  const socket = ctx.socket;
  socket.on('error', close);
  socket.on('close', close);

  function close() {
    console.log("sse close")
    stream.unpipe(body);
    socket.removeListener('error', close);
    socket.removeListener('close', close);
  }

});

app.use(router.routes())
  .use(router.allowedMethods())
  .use(KaoStatic('./static'));

app.listen(3000);

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  ws.send('something');
});

console.log('listening on port 3000, please visit http://localhost:3000 and ws on 8080 ');
