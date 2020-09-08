/**
1104. Path In Zigzag Labelled Binary Tree

In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.



Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

 

Example 1:

Input: label = 14
Output: [1,3,4,14]
Example 2:

Input: label = 26
Output: [1,2,6,10,26]
 

Constraints:

1 <= label <= 10^6


 */


/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    if ( label === 1 ) return [1];
    
    let stack = [];
    stack.push(1);
    while ( stack[stack.length-1] * 2 <= label ) {
        stack.push( stack[stack.length-1] * 2 );
    }
    
    let ret = [];
    let trans = label - stack[stack.length-1];
    while ( stack.length > 0 ) {
        ret.push( stack[stack.length-1] + trans );
        trans = Math.floor((stack[stack.length-1] - trans - 1)/2);
        stack.pop();
    }
    return ret.reverse();
    
};


/**
1
2
3
4
5
17
16
15
14
13
12
11
10
9
8
7
12831
82312

 */