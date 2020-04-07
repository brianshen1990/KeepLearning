#!/usr/bin/python3
# -*- coding: UTF-8 -*-

from fastapi import FastAPI
import uvicorn
import httpx
import asyncio

_tip_httpClient = httpx.AsyncClient()

app = FastAPI()

@app.get("/api")
async def getBaidu():
  res =  await _tip_httpClient.get("http://sina.com" )
  return 'Hello, World!'

# python3 -m uvicorn fast_main:app --port=8000 --host=0.0.0.0 --workers=1

'''
 ab -n 10 -c 10 http://172.17.6.46:8000/api
This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 172.17.6.46 (be patient).....done


Server Software:        uvicorn
Server Hostname:        172.17.6.46
Server Port:            8000

Document Path:          /api
Document Length:        21 bytes

Concurrency Level:      10
Time taken for tests:   10.038 seconds
Complete requests:      10
Failed requests:        8
   (Connect: 0, Receive: 0, Length: 8, Exceptions: 0)
Non-2xx responses:      2
Total transferred:      1468 bytes
HTML transferred:       162 bytes
Requests per second:    1.00 [#/sec] (mean)
Time per request:       10038.182 [ms] (mean)
Time per request:       1003.818 [ms] (mean, across all concurrent requests)
Transfer rate:          0.14 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   0.2      1       1
Processing:   660 1683 1784.0    820    5028
Waiting:      660 1683 1783.8    820    5027
Total:        661 1684 1784.1    820    5029

Percentage of the requests served within a certain time (ms)
  50%    820
  66%    831
  75%   1684
  80%   5010
  90%   5029
  95%   5029
  98%   5029
  99%   5029
 100%   5029 (longest request)
'''