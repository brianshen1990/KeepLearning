/**
1028. Recover a Tree From Preorder Traversal

We run a preorder depth first search on the root of a binary tree.

At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  (If the depth of a node is D, the depth of its immediate child is D+1.  The depth of the root node is 0.)

If a node has only one child, that child is guaranteed to be the left child.

Given the output S of this traversal, recover the tree and return its root.

 

Example 1:



Input: "1-2--3--4-5--6--7"
Output: [1,2,5,3,4,6,7]
Example 2:



Input: "1-2--3---4-5--6---7"
Output: [1,2,5,3,null,6,null,4,null,7]
 

Example 3:



Input: "1-401--349---90--88"
Output: [1,401,null,349,88,90]
 

Note:

The number of nodes in the original tree is between 1 and 1000.
Each node will have a value between 1 and 10^9.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    const stack = [];
    let depth = 0;
    let index = 0; 
    
    while ( index < S.length ) {
        if ( S[index] === "-" ) {
            let endIndex = index;
            while ( endIndex < S.length && S[endIndex] === '-' ) {
                endIndex++;
            }
            const len = endIndex - index;
            while ( stack.length > len ) {
                stack.pop();
            }

            index = endIndex;
        } else {
            let endIndex = index;
            while ( endIndex < S.length && S[endIndex] !== '-' ) {
                endIndex++;
            }
            const num = parseInt( S.substring(index, endIndex) );
            const node = new TreeNode( num );
            if ( stack.length > 0 ) {
                if ( !stack[stack.length-1].left ) {
                    stack[stack.length-1].left = node;
                } else {
                    stack[stack.length-1].right = node;
                }
            }
            stack.push( node );
            index = endIndex;
        }
        
    }
    return stack[0];
};


/**
"1-2--3--4-5--6--7"
"1-2--3---4-5--6---7"
"1-401--349---90--88"
"1"
 */