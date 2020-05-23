#!/usr/bin/env python3

import re
import operator

line = "May 27 11:45:40 ubuntu.local ticky: INFO: Created ticket [#1234] (username)"
re.search(r"ticky: INFO: ([\w ]*) ", line)
re.search(r"ticky: ERROR: ([\w ]*) ", line)



fruit = {"oranges": 3, "apples": 5, "bananas": 7, "pears": 2}
sorted(fruit.items())
sorted(fruit.items(), key=operator.itemgetter(1), reverse=True)