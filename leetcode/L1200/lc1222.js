/**

1222. Queens That Can Attack the King

On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.

 

Example 1:



Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation:  
The queen at [0,1] can attack the king cause they're in the same row. 
The queen at [1,0] can attack the king cause they're in the same column. 
The queen at [3,3] can attack the king cause they're in the same diagnal. 
The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1]. 
The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0]. 
The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.
Example 2:



Input: queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
Output: [[2,2],[3,4],[4,4]]
Example 3:



Input: queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], king = [3,4]
Output: [[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]
 

Constraints:

1 <= queens.length <= 63
queens[0].length == 2
0 <= queens[i][j] < 8
king.length == 2
0 <= king[0], king[1] < 8
At most one piece is allowed in a cell.
 */


/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    const ret = [];
    
    const horitonzal = queens.filter( item => item[0] === king[0]);
    // right
    const right = horitonzal.filter( item => item[1] > king[1] ).sort( (a,b) => a[1]-b[1] );
    if ( right.length > 0 ) ret.push( right[0] );
    // left
    const left = horitonzal.filter( item => item[1] < king[1] ).sort( (a,b) => b[1]-a[1] );
    if ( left.length > 0 ) ret.push( left[0] );
    
    
    const vertical = queens.filter( item => item[1] === king[1]);
    // top 
    const top = vertical.filter( item => item[0] < king[0] ).sort( (a,b) => b[0]-a[0] );
    if ( top.length > 0 ) ret.push( top[0] );
    // bottom
    const bottom = vertical.filter( item => item[0] > king[0] ).sort( (a,b) => a[0]-b[0] );
    if ( bottom.length > 0 ) ret.push( bottom[0] );
    
    // bottomleft topright
    const bottomLeftTopRight = queens.filter( item => item[1]+item[0] === king[1]+king[0] );
    // top right
    const topRight = bottomLeftTopRight.filter( item => item[1] > king[1] ).sort( (a,b) => a[1]-b[1] );
    if ( topRight.length > 0 ) ret.push( topRight[0] );
    // bottomleft
    const bottomLeft = bottomLeftTopRight.filter( item => item[1] < king[1] ).sort( (a,b) => b[1]-a[1] );
    if ( bottomLeft.length > 0 ) ret.push( bottomLeft[0] );
    
    // topleft bottomright
    const topLeftBottomRight = queens.filter( item => item[1] - king[1] === item[0] - king[0] );
    // topleft
    const topLeft = topLeftBottomRight.filter( item => item[1] < king[1] ).sort( (a,b) => b[1]-a[1] );
    if ( topLeft.length > 0 ) ret.push( topLeft[0] );
    // bottomright
    const bottomRight = topLeftBottomRight.filter( item => item[1] > king[1] ).sort( (a,b) => a[1]-b[1] );
    if ( bottomRight.length > 0 ) ret.push( bottomRight[0] );
    
    return ret;
    
};


/**
[[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]]
[0,0]
[[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]]
[3,3]
[[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]]
[3,4]
[[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7],[3,0],[3,1],[3,5]]
[3,4]
 */