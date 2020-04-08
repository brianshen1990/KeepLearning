#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import asyncio
import time

#### Basic

async def helloWorld():
  print('hello')
  # around 2 seconds
  await asyncio.sleep(2)
  print('world')

# asyncio.run(helloWorld())

async def say_after(delay, what):
  await asyncio.sleep(delay)
  print(what)

#### Async Series

async def async_series():
  print(f"started at {time.strftime('%X')}")

  await say_after(1, 'hello')
  await say_after(2, 'world')
  # around 3 seconds
  print(f"finished at {time.strftime('%X')}")

# asyncio.run(async_series())


#### Async Parallel

async def async_parallel():
  print(f"started at {time.strftime('%X')}")

  task1 = asyncio.create_task( say_after(1, 'hello') )
  task2 = asyncio.create_task( say_after(2, 'world') )
  # around 2 seconds
  await task1
  await task2

  print(f"finished at {time.strftime('%X')}")

# asyncio.run(async_parallel())

async def async_parallel2():
  print(f"started at {time.strftime('%X')}")

  await asyncio.gather( say_after(1, 'hello'), 
    say_after(2, 'world') )
  # around 2 seconds

  print(f"finished at {time.strftime('%X')}")

asyncio.run(async_parallel2())