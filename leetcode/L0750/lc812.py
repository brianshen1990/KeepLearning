'''
812. Largest Triangle Area

You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation: 
The five points are show in the figure below. The red triangle is the largest.


Notes:

3 <= points.length <= 50.
No points will be duplicated.
 -50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.
 
'''

class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        ret = 0
        for i in points:
            for j in points:
                for k in points:
                    ret = max(ret, 0.5 * abs(i[0] * j[1] + j[0] * k[1] + k[0] * i[1]- j[0] * i[1] - k[0] * j[1] - i[0] * k[1] ) )
        return ret
                   


'''
[[0,0],[0,1],[1,0],[0,2],[2,0]]
'''