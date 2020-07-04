# Generate array with n(e.g. 100) pos and neg integers, like [-123,456...] in Python
import random

def gene_ran(n = 100 , _ran = 100):
  ret = []
  for i in range(n):
    ran = random.randint(-_ran, _ran)
    ret.append(ran)
  return ret

def sort_ran():
  res = gene_ran()
  comp = lambda a, b : (a-b)
  return sorted(res, comp )

def add_zero():
  res = sort_ran()
  return [ i for i in res if i < 0 ] + [ 0 ] + [ i for i in res if i >= 0 ]

res = add_zero()
print(res)