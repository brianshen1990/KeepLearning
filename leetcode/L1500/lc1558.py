'''

1558. Minimum Numbers of Function Calls to Make Target Array


Function: +1 in one index or * 2 for all

Your task is to form an integer array nums from an initial array of zeros arr that is the same size as nums.

Return the minimum number of function calls to make nums from arr.

The answer is guaranteed to fit in a 32-bit signed integer.

 

Example 1:

Input: nums = [1,5]
Output: 5
Explanation: Increment by 1 (second element): [0, 0] to get [0, 1] (1 operation).
Double all the elements: [0, 1] -> [0, 2] -> [0, 4] (2 operations).
Increment by 1 (both elements)  [0, 4] -> [1, 4] -> [1, 5] (2 operations).
Total of operations: 1 + 2 + 2 = 5.
Example 2:

Input: nums = [2,2]
Output: 3
Explanation: Increment by 1 (both elements) [0, 0] -> [0, 1] -> [1, 1] (2 operations).
Double all the elements: [1, 1] -> [2, 2] (1 operation).
Total of operations: 2 + 1 = 3.
Example 3:

Input: nums = [4,2,5]
Output: 6
Explanation: (initial)[0,0,0] -> [1,0,0] -> [1,0,1] -> [2,0,2] -> [2,1,2] -> [4,2,4] -> [4,2,5](nums).
Example 4:

Input: nums = [3,2,2,4]
Output: 7
Example 5:

Input: nums = [2,4,8,16]
Output: 8
 

Constraints:

1 <= nums.length <= 10^5
0 <= nums[i] <= 10^9
'''

class Solution:
    def minOperations(self, nums: List[int]) -> int:
        cache = {}
        
        def helper(num:int):
            if num in cache:
                return cache[num]
            keepNum = num
            countP = 0
            countM = 0
            while num > 0:
                if num % 2 == 0:
                    countM += 1
                    num = num // 2
                else:
                    num = num - 1 
                    countP += 1
            cache[keepNum] = (countP, countM)
            return cache[keepNum]
                
        basic = 0
        maxP = 0
        
        for ele in nums:
            temp = helper(ele)
            basic += temp[0]
            maxP = max(maxP, temp[1])
            
        return maxP + basic
    
'''  
[1,0]
[1,5]
[1,1,1]
[2,2]
[4,2,5]
[3,2,2,4]
[2,4,8,16]
[2,4,8,17]
[2,4,8,15]
[2,4,8,17]
[2,4,8,15]
[2,4,8,32]
[2,4,8,31]
[2,4,8,31,0]
[2,4,8,33]
[1,0]
[1]
[0]
'''