'''
404. Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

'''


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        return self.help(root, None)
        
    def help(self, node: TreeNode, parent: TreeNode) -> int:
        if not node: 
            return 0
        
        if node.left is None and node.right is None:
            if parent and node == parent.left:
                return node.val
            else:
                return 0
        else:
            left = self.help( node.left, node )
            right = self.help( node.right, node )
            return left + right
            
            
        

'''

[3,9,20,null,null,15,7]
[3,9,20]
[3]
[]

'''
