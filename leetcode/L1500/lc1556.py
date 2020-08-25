'''

1556. Thousand Separator

Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 

Example 1:

Input: n = 987
Output: "987"
Example 2:

Input: n = 1234
Output: "1.234"
Example 3:

Input: n = 123456789
Output: "123.456.789"
Example 4:

Input: n = 0
Output: "0"
 

Constraints:

0 <= n < 2^31

'''

class Solution:
    def thousandSeparator(self, n: int) -> str:
        strN = f'{n}'[::-1]
        ret = ''
        LEN = len(strN)
        for i in range(1, LEN+1):
            ret = ( ('.' + strN[i-1])  if i % 3 == 0 and i != LEN else strN[i-1] ) + ret 
        return ret 
        
        
'''
987
1234
123456789
'''