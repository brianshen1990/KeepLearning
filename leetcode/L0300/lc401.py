'''
401. Binary Watch
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.


For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
'''


class Solution:
    def readBinaryWatch(self, num: int) -> List[str]:
        ret = []
        if num > 8:
            return ret

        arr = [ "0" for i in range(10) ]
        ret = ret + self.scatterBinary(0, num, arr)

        # print( self.toTime("0011011001") )
        # print(ret)
        return ret
    
    def scatterBinary(self, index, num, arr ): 
        if num == 0:
            # print(arr)
            res =  self.toTime( "".join(arr) )
            if len(res) > 0:
                # print( "".join(arr), res )
                pass
            return res
        ret = []
        for i in range(index, 11-num):
            arr[i] = "1"
            ret = ret + self.scatterBinary(i+1, num-1, arr)
            arr[i] = "0"
        return ret

    def toTime(self, strTime: str) -> str:
        hour = int(strTime[0:4], 2)
        minute = int(strTime[4:], 2)
        if hour < 12 and minute <= 59:
            return [f'{hour}:{ str(minute).zfill(2) }']
        else:
            return []


'''
0
1
2
3
4
5
6
7
8
9
2312
'''