/**
331. Verify Preorder Serialization of a Binary Tree

One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:

Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
Example 2:

Input: "1,#"
Output: false
Example 3:

Input: "9,#,#,1"
Output: false
 */


/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    // always trun a (num,#,#) pair to a sharp, and at the end , there should be only 1 #
    preorder = preorder.split(",");
    
    while ( true & preorder.length > 1) {
        
        if ( preorder[preorder.length-1] === '#' &&
           preorder[preorder.length-2] === '#') {
            // looking for the nearst number
            let index = preorder.length-2;
            while ( index >= 0 && preorder[index] === '#' ) {
                index--;
            }
            // console.log( "2 #s and index is : ", index );
            if ( index >= 0 ) {
                preorder.splice(index, 3, '#');
            } else {
                break;
            }
        } else {
            // console.log("no");
            break;
        }
        // console.log( preorder.join(",") );
    }
    
    return preorder.length === 1 && preorder[0] === "#";
};


/** 
"9,3,4,#,#,1,#,#,2,#,6,#,#"
"1,#"
"1,#,#"
"9,#,#,1"
"9,#,1"
"9,#,1,#"
"9,#,1,#,#"
"#"
""
*/