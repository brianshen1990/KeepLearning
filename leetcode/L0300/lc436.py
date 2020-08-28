'''

436. Find Right Interval

Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

Note:

You may assume the interval's end point is always bigger than its start point.
You may assume none of these intervals have the same start point.
 

Example 1:

Input: [ [1,2] ]

Output: [-1]

Explanation: There is only one interval in the collection, so it outputs -1.
 

Example 2:

Input: [ [3,4], [2,3], [1,2] ]

Output: [-1, 0, 1]

Explanation: There is no satisfied "right" interval for [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.
 

Example 3:

Input: [ [1,4], [2,3], [3,4] ]

Output: [-1, 2, -1]

Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

'''

class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        cache = {}
        arr = []
        for index, item in enumerate(intervals):
            if item[0] not in cache:
                cache[item[0]] = index
                arr.append( item[0] )
        
        arr.sort()
        # print(arr)
        
        ret = []
        LEN = len(arr)
        for item in intervals:
            if item[1] in cache:
                ret.append( cache[item[1]] )
            else:
                index = bisect.bisect(arr, item[1])
                # print( item, index )
                if index != LEN :
                    ret.append( cache[arr[index]] )
                else:
                    ret.append(-1)
        
        return ret
        
        
        

'''
[[1,2]]
[ [3,4], [2,3], [1,2] ]
[ [3,4], [2,4], [1,2], [2,3] ]
[ [1,4], [2,3], [3,4] ]
[[4,5],[2,3],[1,2]]
[[4,5],[2,3],[1,2]]
'''