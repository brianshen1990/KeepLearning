'''
335. Self Crossing

You are given an array x of n positive numbers. You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, x[2] metres to the south, x[3] metres to the east and so on. In other words, after each move your direction changes counter-clockwise.

Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.

 

Example 1:

┌───┐
│   │
└───┼──>
    │

Input: [2,1,1,2]
Output: true
Example 2:

┌──────┐
│      │
│
│
└────────────>

Input: [1,2,3,4]
Output: false 
Example 3:

┌───┐
│   │
└───┼>

Input: [1,1,1,1]
Output: true 

'''

class Solution:
    def isSelfCrossing(self, x: List[int]) -> bool:
        for i in range(3, len(x)):
            if x[i] >= x[i-2] and x[i-3] >= x[i-1]:
                print("hit 1", i)
                return True
            if i >= 4 and x[i-1] == x[i-3] and x[i] <= x[i-2] and x[i-4] <= x[i-2] and x[i] >= (x[i-2] - x[i-4]):
                print("hit 2", i)
                return True
            if i >= 5 and x[i-2] >= x[i-4] and x[i-2] >= x[i] and x[i] >= (x[i-2]-x[i-4]) and x[i-3] >= x[i-5] and x[i-3] >= x[i-1] and x[i-1] >= (x[i-3]-x[i-5]):
                print("hit 3", i)
                return True
        return False

'''

https://leetcode.com/problems/self-crossing/discuss/729133/How-to-explain-to-interviewer-335.-Self-Crossing

[2,1,1,2]
[1,2,3,4]
[1,1,1,1]
[3,3,4,2,2]
[1,1,2,2,3,3,4,4,10,4,4,3,3,2,2,1,1]

'''