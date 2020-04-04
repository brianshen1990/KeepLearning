/**
118. Pascal's Triangle
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if( numRows === 0 ) {
        return [];
    }
    if( numRows === 1 ){
        return [[1]];
    }
    
    let ret = [ [1] ];
    for( let i = 1; i< numRows; i++ ) {
        let tempArr = [1];
        for( let j = 1; j < i; j++  ) {
            tempArr.push( ret[i-1][j-1] + ret[i-1][j] );
        }
        tempArr.push(1);
        ret.push( tempArr );
    }
    return ret;
};

/**
 * 
0
1
2
3
5
20
 */