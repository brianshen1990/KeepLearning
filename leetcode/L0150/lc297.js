/**
297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let ret = [];
    if ( root ) {
        let cur = [root];
        while ( cur.length > 0 ) {
            ret = ret.concat( cur.map( item => item ? item.val : null ) );
            let next = [];
            for ( let index = 0 ; index < cur.length ; index++ ) {
                if ( cur[index] ) {
                    next.push( cur[index].left );
                    next.push( cur[index].right );
                }
            }
            if ( next.filter( item => item ).length <= 0 ) {
                break;
            }
            cur = next;
        }
    }
    while ( ret.length > 0 && ret[ret.length-1] === null ) {
        ret.pop(); // trim null
    }
    // console.log( ret );
    const retStr = `[${ret.map(item=>item===null?'null':item).join(",")}]`;
    // console.log( retStr );
    return retStr;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = eval( data );
    // console.log( arr );
    if ( arr.length === 0 ) {
        return null;
    }
    let index = 1;
    let root = new TreeNode(arr[0]);
    let cur = [ root ];
    while ( cur.length > 0 ) {
        let len = cur.length * 2;
        let next = [];
        let min = Math.min( arr.length, index+len);
        // console.log(`range : ${index} - ${index+len}`);
        for ( let i = index, pIndex = 0 ; i < min; i = i+2, pIndex+=1 ) {
            if ( arr[i] !== null ) {
                let left = new TreeNode(arr[i]);
                cur[pIndex].left = left;
                next.push( left );
            }
            
            if ( i+1 < min && arr[i+1] !== null) {
                let right = new TreeNode( arr[i+1] );
                cur[pIndex].right = right;
                next.push( right );
            }
        }
        
        index = min;
        cur = next;
    }
    // console.log(root);
    return root;
  
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


/**
[1,2,3,null,null,4,5]
[1,2,3,null,null,4,5,6]
[1,2,3,7,null,4,5,6]
[1,2,3,7,null,4,5,6,null,8]
[1,2,3,7,null,4,5,6,null,null,8]
[1,2,3,7,null,4,5,6,null,null,8,null,null, 9]
[]
[1]
[1,null,2]
[-1,0,1]
 */