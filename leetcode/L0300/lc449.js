/**

449. Serialize and Deserialize BST

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

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
    const ret = [];
    if ( root ) {
        let cur = [root];
        while ( cur.length > 0 ) {
            // console.log( cur.map( item => item && item.val ).join("..") )
            const next = [];
            cur.forEach( item => {
                ret.push( item ? item.val : 'null' );
                if ( item ) {
                    next.push( item.left );
                    next.push( item.right );
                }
            });
            cur = next;
        }
    }
    while( ret.length > 0 && ret[ret.length-1] === "null" ) {
        ret.pop();
    }
    return ret.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if ( !data ) {
        return null;
    } 
    const arr = data.split(",").map( item => item === 'null' ? null : parseInt(item) );
    // console.log( arr );
    const root = new TreeNode( arr.shift() );
    
    let cur = [ root ];
    while( arr.length > 0 && cur.length > 0 ) {
        // console.log( "iter", cur.map( item => item && item.val ).join(",") )
        let next = [];
        while ( arr.length > 0 && cur.length > 0 ) {
            const parentNode = cur.shift();
            if ( parentNode !== null ) {
                const leftVal = arr.shift();
                const left = ( leftVal === null ? null : new TreeNode( leftVal ) );
                const rightVal = arr.length > 0 ? arr.shift() : null;
                const right =  ( rightVal === null ? null : new TreeNode( rightVal ) );
                parentNode.left = left;
                parentNode.right = right;
                if ( left ) { next.push( left ) };
                if ( right ) { next.push( right ) };
            }
        }
        cur = next;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 /**
[]
[1]
[1,null,2]
[-1,0,1]
[1,null,2,2]
[5,3,6,2,4,null,null,1]
  */