'''

1504. Count Submatrices With All Ones

Given a rows * columns matrix mat of ones and zeros, return how many submatrices have all ones.

 

Example 1:

Input: mat = [[1,0,1],
              [1,1,0],
              [1,1,0]]
Output: 13
Explanation:
There are 6 rectangles of side 1x1.
There are 2 rectangles of side 1x2.
There are 3 rectangles of side 2x1.
There is 1 rectangle of side 2x2. 
There is 1 rectangle of side 3x1.
Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
Example 2:

Input: mat = [[0,1,1,0],
              [0,1,1,1],
              [1,1,1,0]]
Output: 24
Explanation:
There are 8 rectangles of side 1x1.
There are 5 rectangles of side 1x2.
There are 2 rectangles of side 1x3. 
There are 4 rectangles of side 2x1.
There are 2 rectangles of side 2x2. 
There are 2 rectangles of side 3x1. 
There is 1 rectangle of side 3x2. 
Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.
Example 3:

Input: mat = [[1,1,1,1,1,1]]
Output: 21
Example 4:

Input: mat = [[1,0,1],[0,1,0],[1,0,1]]
Output: 5
 

Constraints:

1 <= rows <= 150
1 <= columns <= 150
0 <= mat[i][j] <= 1

'''

class Solution:
    def numSubmat(self, mat: List[List[int]]) -> int:
        cache = {}
        ROW = len(mat)
        COL = len(mat[0])
        
        def helper(row, col):
            endRow = ROW
            endCol = COL
            for i in range(row, endRow):
                if mat[i][col] == 0:
                    break
                for j in range(col, endCol):
                    if mat[i][j] == 1:
                        matStr = f'{i-row+1}_{j-col+1}'
                        cache[matStr] = cache[matStr] if matStr in cache else 0
                        cache[matStr] += 1
                    else:
                        endCol = j
                        break
        
        for i in range(ROW):
            for j in range(COL):
                if mat[i][j] == 1:
                    helper(i, j)
                    
        # print(cache)
        return sum( cache.values() )

'''
[[1,0,1],[1,1,0],[1,1,0]]
[[1,0,1]]
[[0,1,1,0], [0,1,1,1], [1,1,1,0]]
[[0]]
[[1]]
[[1],[1],[1]]
'''