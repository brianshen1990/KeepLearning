/**
919. Complete Binary Tree Inserter

A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

Write a data structure CBTInserter that is initialized with a complete binary tree and supports the following operations:

CBTInserter(TreeNode root) initializes the data structure on a given tree with head node root;
CBTInserter.insert(int v) will insert a TreeNode into the tree with value node.val = v so that the tree remains complete, and returns the value of the parent of the inserted TreeNode;
CBTInserter.get_root() will return the head node of the tree.
 

Example 1:

Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
Output: [null,1,[1,2]]
Example 2:

Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 

Note:

The initial given tree is complete and contains between 1 and 1000 nodes.
CBTInserter.insert is called at most 10000 times per test case.
Every value of a given or inserted node is between 0 and 5000.


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
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    let arr = [new TreeNode(0)];
    let next = [root];
    while ( next.length > 0 ) {
        let nextNext = [];
        for ( let i = 0 ; i < next.length ; i++ ) {
            arr.push( next[i] );
            if ( next[i].left ) nextNext.push( next[i].left );
            if ( next[i].right ) nextNext.push( next[i].right );
        }
        next = nextNext;
    }
    
    // console.log("init len", arr.length, arr.map( item => item.val ));
    this.arr = arr;  
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    const newNode = new TreeNode(v);
    
    let parent = this.arr[ Math.floor( this.arr.length / 2) ];
    // console.log( v,  this.arr.length, parent.val )
    if ( this.arr.length % 2 === 1 ) {
        parent.right = newNode;
    } else {
        parent.left = newNode;
    }
    this.arr.push( newNode );
    return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.arr[1];
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */


/**
["CBTInserter","insert","get_root"]
[[[1]],[2],[]]
["CBTInserter","insert","get_root"]
[[[1,2]],[2],[]]
["CBTInserter","insert","insert","get_root"]
[[[1,2,3,4,5,6]],[7],[8],[]]
["CBTInserter","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","get_root"]
[[[5,14,4,5,14,16,16,20,7,13]],[8],[15],[10],[12],[8],[20],[6],[2],[20],[17],[]]
 */