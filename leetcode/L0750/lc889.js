/**
889. Construct Binary Tree from Preorder and Postorder Traversal

Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

 

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]
 

Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    
    const helper = ( preArr, postArr ) => {
        // console.log("-----", preArr, postArr );
        if ( preArr.length === 0 ) return null;
        const ret = new TreeNode( preArr[0] );
        if ( preArr.length === 1 ) return ret;
        
        let first = preArr[1];
        const firstEnd = postArr.indexOf( first );
        const firstNode = helper( preArr.slice( 1, firstEnd + 2 ), 
                                postArr.slice( 0, firstEnd+1 ) );
            
        if ( firstEnd === postArr.length-1 ) {
            ret.right = firstNode;
            return ret;
        }
        
        ret.left = firstNode;
        const secNode = helper( preArr.slice(firstEnd+2),
                              postArr.slice( firstEnd+1, postArr.length-1 ) );
        ret.right = secNode;
        
        return ret;
    }
    
    return helper( pre, post );
    
};


/**
[1,2,4,5,3,6,7]
[4,5,2,6,7,3,1]
[1,3,6,7]
[6,7,3,1]
[1]
[1]
[1,2,4,5]
[4,5,2,1]
[1,2,4]
[4,2,1]
[1,2]
[2,1]
 */