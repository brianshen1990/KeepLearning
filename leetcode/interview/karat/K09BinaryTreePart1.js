/*Given a binary tree, collect a tree’s nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

Example:

Given binary tree
          1
         / \
        2   3
       / \     
      4   5    
Returns [4, 5, 3], [2], [1].

Explanation:

Removing the leaves [4, 5, 3] would result in this tree:
       1
      /
     2          
Now removing the leaf [2] would result in this tree:
       1          
Now removing the leaf [1] would result in the empty tree:
       []         
Returns [4, 5, 3], [2], [1].*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// N2  N -> N-1 -> N-2 => N2 
// LogN -> n  ->  Nlog(N)
// O(N)
const collectingLeaves = (root) => {
  if ( !root ) {
    return [];
  }
  const helper = (node, parent) => {
    if ( !node ) {
      return [];
    }
    if ( (!node.left) && (!node.right) ) {
      if ( parent && parent.left === node) {
        parent.left = null;
      } 
      if (parent && parent.right === node ) {
        parent.right = null;
      }
      return [ node.val ];
    }
    
    let ret = [];
    if ( node.left ) {
      ret = ret.concat(helper(node.left, node));
    }
    if ( node.right ) {
      ret = ret.concat(helper(node.right, node));
    }
    return ret;
  }
  const ret = [];
  while( root && (root.left || root.right) ) {
    ret.push( helper(root, null) );
  }
  ret.push([root.val]);
  return ret;
}

// const node4 = new TreeNode(4, null, null);
// const node5 = new TreeNode(5, null, null);
// const node2 = new TreeNode(2, node4, node5);
// const node3 = new TreeNode(3, null, null);
// const node1 = new TreeNode(1, node2, node3);
// console.log( collectingLeaves(node1) ); // [4,5,3][2] [1]
// console.log( collectingLeaves(node4) ); // [[4]]
// console.log( collectingLeaves(node2) ); // [4,5],[2]
