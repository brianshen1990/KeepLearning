'''
415. Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

'''

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        if len(num1) < len(num2):
            num1 = '0' * ( len(num2) - len(num1) ) + num1
        elif len(num2) < len(num1):
            num2 = '0' * ( len(num1) - len(num2) ) + num2
        
        flag = 0
        ret = ""
        for i in range( len(num1)-1, -1, -1 ):
            temp = int(num1[i]) + int(num2[i]) + flag
            if temp >= 10:
                flag = 1
            else:
                flag = 0
            ret =  f'{temp%10}' + ret
        
        if flag == 1:
            ret = '1' + ret
        
        return ret


'''
"0"
"0"
"1"
"12312412"
"23423"
"98765"
'''
