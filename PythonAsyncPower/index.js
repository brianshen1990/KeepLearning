const Koa = require('koa');
const axios = require('axios');
const app = new Koa();

app.use(async ctx => {
  console.log("hello");
  await axios.get('http://sina.com')
  ctx.body = 'Hello World';
});

app.listen(8000);

/**
Server Software:        
Server Hostname:        172.17.6.46
Server Port:            8000

Document Path:          /
Document Length:        11 bytes

Concurrency Level:      10
Time taken for tests:   20.804 seconds
Complete requests:      10
Failed requests:        0
Total transferred:      1470 bytes
HTML transferred:       110 bytes
Requests per second:    0.48 [#/sec] (mean)
Time per request:       20803.929 [ms] (mean)
Time per request:       2080.393 [ms] (mean, across all concurrent requests)
Transfer rate:          0.07 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   0.3      1       1
Processing:  5882 7219 1797.6   6501   11324
Waiting:     5881 7218 1797.4   6501   11323
Total:       5882 7220 1797.6   6502   11325

Percentage of the requests served within a certain time (ms)
  50%   6502
  66%   6627
  75%   7638
  80%   9480
  90%  11325
  95%  11325
  98%  11325
  99%  11325
 100%  11325 (longest request)
 */
