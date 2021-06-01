/**
1130. Minimum Cost Tree From Leaf Values

Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.

 

Example 1:

Input: arr = [6,2,4]
Output: 32
Explanation:
There are two possible trees.  The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4
 

Constraints:

2 <= arr.length <= 40
1 <= arr[i] <= 15
It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less than 2^31).
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
 var mctFromLeafValues = function(aArr) {
    
    const cacheMax = {};
    const helperMax = (start, end) => {
        const str = `${start}_${end}`;
        if (str in cacheMax) return cacheMax[str];
        const ret = Math.max(...aArr.slice(start, end));
        cacheMax[str] = ret;
        // console.log("max", start, end, ret );
        return ret;
    }
    
    const cacheDP = {};
    const helperDP = (start, end) => {
        // console.log( start, end );
        if ( end <= start+1 ) return 0;
        const str = `${start}_${end}`;
        if (str in cacheDP) return cacheDP[str];
        let ret = Number.MAX_VALUE;
        for ( let i = start + 1; i < end; i++ ) {
            ret = Math.min( ret, helperDP(start, i) + helperDP(i, end) + helperMax(start, i) * helperMax(i, end) );
        }
        cacheDP[str] = ret;
        return ret;
    }
    
    return helperDP(0, aArr.length);
};

/**
[6,2,4]
[6,2]
[6,2,4,8,9]
[4,5,6,7,8,9,10,1,12,15,7,8]
[4,5,6,7,8,9,10,1,12,15,7,8,5,4,3,2,12,4,6,7,5,4,3,3]
 */