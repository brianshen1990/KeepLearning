'''
174. Dungeon Game

The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

 

Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.

-2 (K)	-3	3
-5	-10	1
10	30	-5 (P)
 

Note:

The knight's health has no upper bound.
Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.
''' 

class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        
        if not ( len(dungeon) > 0 and len(dungeon[0]) > 0 ):
            return -1
        
        ROW, COL = len(dungeon), len(dungeon[0])
        matrix = [ [float("inf")]*(COL+1) for _ in range(ROW+1) ]
        matrix[ROW][COL-1] = 1
        matrix[ROW-1][COL] = 1
        # print( matrix )
        
        for row in range( ROW-1, -1, -1 ):
            for col in range( COL-1, -1, -1 ):
                matrix[row][col] = max( min( matrix[row+1][col], matrix[row][col+1] ) - dungeon[row][col], 1)
                # print( row, col, matrix[row][col] )
        
        return matrix[0][0]
                
'''
[[-2,-3,3],[-5,-10,1],[10,30,-5]]
'''