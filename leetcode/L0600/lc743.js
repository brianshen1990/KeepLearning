/**
743. Network Delay Time

There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

 

Example 1:



Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2
 

Note:

N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.

 */


/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    
    const minTime = new Array(N+1).fill(Number.MAX_VALUE);
    minTime[0] = 0;
    minTime[K] = 0;
    let next = [ K ];
    // console.log('-----');
    
    while ( next.length > 0 ) {
        // console.log( next );
        let cur = new Set();
        next.map( node => {
            times.map( item => {
                // same startb pint, can shorten
                if ( item[0] === node && ( minTime[ item[0] ] + item[2] ) < minTime[ item[1] ] ) {
                    cur.add( item[1] );
                    minTime[ item[1] ] = minTime[ item[0] ] + item[2];  
                }
            });
        });
        next = [...cur];
    }
    
    let max = Math.max(...minTime);
    if ( max === Number.MAX_VALUE ) {
        return -1;
    } else {
        return max;
    }
    
};


/**
[[2,1,1],[2,3,1],[3,4,1]]
4
2
[[2,1,1],[2,3,1],[3,4,1], [2,4,1]]
4
2
[[2,1,1],[2,3,1]]
4
2
[]
1
1
*/