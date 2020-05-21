/**
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    
    let longest = 0;
    if ( !(matrix.length > 0 && matrix[0].length > 0) ) {
        return longest;
    }
    
    const cache = new Array(matrix.length);
    for ( let i = 0; i < matrix.length; i++ ) {
        cache[i] = new Array(matrix[0].length).fill(-1);
    }
    
    const helper = (_matrix, i, j, len, _cache) => {
        if ( _cache[i][j] > 0 ) {
            return _cache[i][j] + len; 
        }
        len++;
        let ret = len;
        
        const temp =  _matrix[i][j];
        _matrix[i][j] = -Number.MAX_VALUE;
        if ( i > 0 && _matrix[i-1][j] > temp ) {
            ret = Math.max(ret, helper(_matrix, i-1, j, len, _cache));
        }
        if ( i < matrix.length-1 && _matrix[i+1][j] > temp ) {
            ret = Math.max(ret, helper(_matrix, i+1, j, len, _cache));
        }
        if ( j > 0 && _matrix[i][j-1] > temp ) {
            ret = Math.max(ret, helper(_matrix, i, j-1, len, _cache));
        }
        if ( j < matrix[0].length-1 && _matrix[i][j+1] > temp ) {
            ret = Math.max(ret, helper(_matrix, i, j+1, len, _cache));
        }
        _matrix[i][j] = temp;
        _cache[i][j] = ret - len + 1;
        return ret;
    } 
    
    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j = 0; j < matrix[0].length; j++ ) {
            if ( cache[i][j] < 0 ) {
                longest = Math.max(longest, helper( matrix, i, j, 0, cache)) ;
                // console.log(i, j, longest, cache);
            }
        }
    }
    
    return longest;
    
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath1stTimeExceed = function(matrix) {
    
    
    if ( !( matrix.length > 0 && matrix[0].length > 0 ) ) {
        return 0;
    }
    
    const helper = (_matrix, i, j, len) => {
        len = len + 1;
        let ret = len;
        const temp =  _matrix[i][j];
        // console.log(len, _matrix, i, j)
        
        _matrix[i][j] = -Number.MAX_VALUE;
        if ( i > 0 && _matrix[i-1][j] > temp ) {
            ret = Math.max(ret, helper(_matrix, i-1, j, len));
        }
        if ( i < matrix.length-1 && _matrix[i+1][j] > temp ) {
            ret = Math.max(ret, helper(_matrix, i+1, j, len));
        }
        if ( j > 0 && _matrix[i][j-1] > temp ) {
            ret = Math.max(ret, helper(_matrix, i, j-1, len));
        }
        if ( j < matrix[0].length-1 && _matrix[i][j+1] > temp ) {
            ret = Math.max(ret, helper(_matrix, i, j+1, len));
        }
        
        _matrix[i][j] = temp;
        return ret;
    }
    
    let longest = 0;
    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j = 0; j < matrix[0].length ; j++ ) {
            longest = Math.max(longest, helper(matrix, i, j, 0) );
        }
    }
    
    return longest;
    
};

/**
[[9,9,4],[6,6,8],[2,1,1]]
[[1,1,2],[8,6,6],[4,9,9]]
[[9,10,4],[6,6,8],[2,1,1]]
[[3,4,5],[3,2,6],[2,2,1]]
[[3,4,5],[3,2,5],[2,2,1]]
[[7,7,5],[2,4,6],[8,2,0]]
[[]]
[[1]]
[[1,2]]
[[1],[1]]
[[0,1,2,3,4,5,6,7,8,9],[19,18,17,16,15,14,13,12,11,10],[20,21,22,23,24,25,26,27,28,29],[39,38,37,36,35,34,33,32,31,30],[40,41,42,43,44,45,46,47,48,49],[59,58,57,56,55,54,53,52,51,50],[60,61,62,63,64,65,66,67,68,69],[79,78,77,76,75,74,73,72,71,70],[80,81,82,83,84,85,86,87,88,89],[99,98,97,96,95,94,93,92,91,90],[100,101,102,103,104,105,106,107,108,109],[119,118,117,116,115,114,113,112,111,110],[120,121,122,123,124,125,126,127,128,129],[139,138,137,136,135,134,133,132,131,130],[0,0,0,0,0,0,0,0,0,0]]

 */