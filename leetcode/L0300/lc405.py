'''
405. Convert a Number to Hexadecimal
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
Example 1:

Input:
26

Output:
"1a"
Example 2:

Input:
-1

Output:
"ffffffff"
'''


class Solution:
    MAP = { 0: "0",1: "1",2: "2",3: "3",4: "4",5: "5",
        6: "6",7: "7",8: "8",9: "9",
        10: "a", 11: "b",12: "c", 13: "d", 14: "e", 15: "f"}
    MAP_REVERSE = { "0": 0 ,"1": 1, "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6, "7": 7,"8": 8, "9": 9,
        "a": 10, "b": 11, "c": 12 , "d": 13, "e": 14, "f": 15}
    def toHex(self, num: int) -> str:
        
        if num >= 0:
            ret = ""
            while ( num >= 0 ):
                ret = self.MAP[num%16] + ret
                num = num // 16
                if num <= 0:
                    break
            return ret
        else:
            res = ""
            ret = "100000000"
            num = self.toHex(-num)
            num = (9-len(num))*'0' + num
            rem = 0
            for i in range(8,-1,-1):
                if self.MAP_REVERSE[ ret[i] ] >= self.MAP_REVERSE[ num[i] ] + rem:
                    res = self.MAP[ self.MAP_REVERSE[ ret[i] ] - self.MAP_REVERSE[ num[i] ] - rem ] + res
                    rem = 0
                else:
                    res = self.MAP[ self.MAP_REVERSE [ret[i] ] + 16 - self.MAP_REVERSE[ num[i] ] - rem ] + res
                    rem = 1
            
            res = res[1:]
            return res         
        


'''

23234
26
16
2
1
0
-1
-2
-26
32767
2147483647
-2147483647
-2147483648

'''


MAP = { 0: "0",1: "1",2: "2",3: "3",4: "4",5: "5",
    6: "6",7: "7",8: "8",9: "9",
    10: "a", 11: "b",12: "c", 13: "d", 14: "e", 15: "f"}
MAP_R = { v: k for k, v in MAP.items() }
print(MAP_R)