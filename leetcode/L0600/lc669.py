'''

669. Trim a Binary Search Tree

Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

Example 1:
Input: 
    1
   / \
  0   2

  L = 1
  R = 2

Output: 
    1
      \
       2
Example 2:
Input: 
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

Output: 
      3
     / 
   2   
  /
 1

'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def trimBST(self, root: TreeNode, L: int, R: int) -> TreeNode:
        dummyParent = TreeNode(L, root)
        Solution.helper( dummyParent, L, R ) 
        return dummyParent.left
        
        
    def helper(node: TreeNode, L:int, R:int) -> TreeNode:
        if not node:
            return None
        nodeLeft = None
        nodeRight = None
    
        if node.left and node.val >= L:
            nodeLeft = Solution.helper(node.left, L, R) # so that it is possible
            
        if node.right and node.val <= R: 
            nodeRight = Solution.helper(node.right, L, R)
            
        if node.val >= L and node.val <= R:
            node.left = nodeLeft
            node.right = nodeRight
        else:
            node = nodeLeft if nodeLeft else nodeRight
        return node
        

'''

[1,0,2]
1
2
[3,0,null,2,1,4]
1
3
[]
1
2
[3,0,null,2,1,4]
4
5
[3,0,null,2,1,4]
1
2
[3,0,null,2,1,4]
1
1

'''