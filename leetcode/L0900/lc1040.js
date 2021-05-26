/**
1040. Moving Stones Until Consecutive II

On an infinite number line, the position of the i-th stone is given by stones[i].  Call a stone an endpoint stone if it has the smallest or largest position.

Each turn, you pick up an endpoint stone and move it to an unoccupied position so that it is no longer an endpoint stone.

In particular, if the stones are at say, stones = [1,2,5], you cannot move the endpoint stone at position 5, since moving it to any position (such as 0, or 3) will still keep that stone as an endpoint stone.

The game ends when you cannot make any more moves, ie. the stones are in consecutive positions.

When the game ends, what is the minimum and maximum number of moves that you could have made?  Return the answer as an length 2 array: answer = [minimum_moves, maximum_moves]

 

Example 1:

Input: [7,4,9]
Output: [1,2]
Explanation: 
We can move 4 -> 8 for one move to finish the game.
Or, we can move 9 -> 5, 4 -> 6 for two moves to finish the game.
Example 2:

Input: [6,5,4,3,10]
Output: [2,3]
We can move 3 -> 8 then 10 -> 7 to finish the game.
Or, we can move 3 -> 7, 4 -> 8, 5 -> 9 to finish the game.
Notice we cannot move 10 -> 2 to finish the game, because that would be an illegal move.
Example 3:

Input: [100,101,104,102,103]
Output: [0,0]
 

Note:

3 <= stones.length <= 10^4
1 <= stones[i] <= 10^9
stones[i] have distinct values.

 */



/**
 * @param {number[]} stones
 * @return {number[]}
 */
 var numMovesStonesII = function(stones) {
    stones.sort( (a,b) => a-b );
    // console.log( stones );
    
    // handle special case
    if ( stones.length === 1 ) return [0,0];
    if ( stones.length === 2 && stones[0] !== stones[1]-1 ) {
        return [2,0];
    }
    if ( stones.length === 2 && stones[0] === stones[1]-1 ) {
        return [0,0];
    }
    
    let N = stones.length;
    let begIndex = 0;
    let endIndex = 0;
    let max = 0;
    
    // sliding window to get minimum
    while ( true ) {
        if ( endIndex < stones.length && stones[begIndex] + N - 1 >= stones[endIndex] ) {
            endIndex++;
            max = Math.max(max, endIndex - begIndex);
        } else if ( endIndex < stones.length ) {
            begIndex++;
        } else {
            break;
        }
    }
    // console.log("hit", max);
    let retMin = N-max;
    if ( N-max === 1 ) {
        // only need 1 move, so we should be careful if we can't make that one
        if ( stones[0] + N-2 === stones[N-2] && stones[N-2] + 2 !== stones[N-1] ) {
            retMin = 2;
            console.log("hit small 1")
        }
           
        if ( stones[1] + N-2 === stones[N-1] && stones[0] + 2 !== stones[1] ) {
            retMin = 2;
            console.log("hit small 1")
        }
    }
    
    // handle max
    let retMax = Math.max(stones[N-1] - stones[1] - N + 2, stones[N-2] - stones[0] - N + 2);
    if ( stones[0] + N - 1 === stones[N-1] ) {
        retMax = 0;
    }
    
    return [ retMin,retMax ];
    
};


/**
[7,4,9]
[6,5,4,3,10]
[100,101,104,102,103]
[3,5,6]
[2,5,6]
[6,5,4,3,10]
[3,4,5,6,8,9,10]
[3,4,5,6,8,9,10,12,13]
[3,4,5,6]
[3,4,5,6,1000,1023]
[3,4,5,6,7,2,1]
[1,3,5,7,9,11,13]
[3,6,1000,1000000000]
[3,6,1000,999999999,1000000000]
[36, 100,1000,9999999,1000000000]
[3,4,6,1000,1000000000]
[3,500,1000]
[3,500,800,1000]
[3,4,1000]
[3,999,1000]
[999,997,1000]
[3,700,1000]
[3,4,9]
[3,4,9,10]
 */