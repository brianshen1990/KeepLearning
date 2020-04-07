/**
96. Unique Binary Search Trees
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var numTrees = function(n) {
    if( n <= 0 ) {
        return 1;
    }
    let arr = [];
    for( let i = 0; i< n; i++ ) {
        arr.push(i+1);
    }
    return helper( arr, 0, n);
};

var helper = function( arr, beg, end ) {
    if ( end === beg + 1 ) {
        return 1;
    } 
    let ret = 0;
    for ( let i = beg; i < end ; i++ ) {
        let leftCond = 1;
        let rightCond = 1;
        if( i === beg ) {
            // only construct right
            rightCond = helper(arr, i+1, end );
        } else if( i === end - 1) {
            // only constaruct left node
            leftCond = helper( arr,  beg, i);
        } else {
            // both sides
            rightCond = helper( arr, i+1, end );
            leftCond = helper( arr, beg, i );
        }
        ret = ret + leftCond * rightCond;
    }
    return ret;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var numTrees2 = function(n) {
    if( n <= 0 ) {
        return 1;
    }
    let map = {
        0: 1,
        1: 1,
        2: 2
    };
    return helper2(n, map);
};

var helper2 = function(n, map) {
    if( map[n] ) {
        return map[n];
    }
    let ret = 0;
    for( let i = 0; i < n; i++ ) {
        ret += helper2(i, map) * helper2( n-1-i, map) ;
    }
    map[n] = ret;
    return map[n];
}

