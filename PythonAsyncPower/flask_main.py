#!/usr/bin/python3
# -*- coding: UTF-8 -*-

from flask import Flask
import requests

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def hello_world():
  r = requests.get('http://sina.com')
  print("here")
  return 'Hello, World!'

##  gunicorn -w 1 flask_main:app --bind '0.0.0.0:8000'

## ab -n 10 -c 10 http://172.17.6.46:8000/api
'''
Server Software:        gunicorn
Server Hostname:        172.17.6.46
Server Port:            8000

Document Path:          /api
Document Length:        13 bytes

Concurrency Level:      10
Time taken for tests:   26.374 seconds
Complete requests:      10
Failed requests:        0
Total transferred:      1660 bytes
HTML transferred:       130 bytes
Requests per second:    0.38 [#/sec] (mean)
Time per request:       26374.032 [ms] (mean)
Time per request:       2637.403 [ms] (mean, across all concurrent requests)
Transfer rate:          0.06 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        1    1   0.1      1       1
Processing:   608 8230 7864.3   5599   20775
Waiting:      608 8230 7864.4   5597   20775
Total:        609 8231 7864.3   5599   20775

Percentage of the requests served within a certain time (ms)
  50%   5599
  66%   7663
  75%  16428
  80%  20200
  90%  20775
  95%  20775
  98%  20775
  99%  20775
 100%  20775 (longest request)
'''