'''

1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9

'''

class Solution:
    def countOdds(self, low: int, high: int) -> int:
        return ( high - low ) // 2 + ( 1 if ( low % 2 == 1 or high % 2 == 1 ) else 0 )        


'''
3
7
8
10
3
10
4
11
0
1000000000
1
1000000000
1
999999999
0
999999999
'''