/**
1042. Flower Planting With No Adjacent

You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes a bidirectional path between garden xi to garden yi. In each garden, you want to plant one of 4 types of flowers.

All gardens have at most 3 paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)th garden. The flower types are denoted 1, 2, 3, or 4. It is guaranteed an answer exists.

 

Example 1:

Input: n = 3, paths = [[1,2],[2,3],[3,1]]
Output: [1,2,3]
Explanation:
Gardens 1 and 2 have different types.
Gardens 2 and 3 have different types.
Gardens 3 and 1 have different types.
Hence, [1,2,3] is a valid answer. Other valid answers include [1,2,4], [1,4,2], and [3,2,1].
Example 2:

Input: n = 4, paths = [[1,2],[3,4]]
Output: [1,2,1,2]
Example 3:

Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: [1,2,3,4]
 

Constraints:

1 <= n <= 104
0 <= paths.length <= 2 * 104
paths[i].length == 2
1 <= xi, yi <= n
xi != yi
Every garden has at most 3 paths coming into or leaving it.

 */



/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
 var gardenNoAdj = function(n, paths) {
    const cache = {};
    paths.forEach( item => {
        const [start, end] = item;
        cache[start] = cache[start] || []; 
        cache[start].push( end );        
        cache[end] = cache[end] || []; 
        cache[end].push( start ); 
    });
    
    // console.log( cache );
    const ret = new Array(n+1).fill(0);
    
    let index = 1;
    while ( index <= n ) {
        if ( ret[index] === 0 ) {
            // not planted
            if ( index in cache ) {
              
                // BFS
                let next = [index];
                while ( next.length > 0 ) {
                    // console.log("handling", next);
                    let nnext = new Set();
                    
                    for ( let i = 0 ; i < next.length ; i++ ) {
                        
                        const garden = next[i];
                        if ( ret[garden] > 0 ) {
                            continue;
                        }
                        
                        const visited = [true, false, false, false, false];
                        for ( let j = 0 ; j < cache[garden].length ; j++ ) {
                            if ( ret[cache[garden][j]] === 0 ) {
                                nnext.add( cache[garden][j] );
                            } else {
                                visited[ret[cache[garden][j]]] = true; 
                            }
                        }
                        let kind = visited.indexOf(false);
                        // console.log("set garden", garden, kind, visited)
                        ret[ garden ] = kind;
                        
                    }
                    
                    next = [...nnext];
                }
            } else {
                // no negibour, plant whatever
                // console.log("hit no neigboure");
                ret[index] = 1;
            }
        } else {
            index++;   
        }    
    }
    
    return ret.slice(1);
    
};


/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
 var gardenNoAdjGreedy = function(n, paths) {
    const cache = {};
    for ( let i = 1 ;i <= n ; i++ ) {
        cache[i] = [];
    }
    paths.forEach( item => {
        const [start, end] = item;
        cache[start].push( end );        
        cache[end].push( start ); 
    });
    
    // console.log( cache );
    const ret = new Array(n+1).fill(0);
    
    // greedy
    for ( let i = 1 ; i <= n ; i++ ) {

        const garden = i;
        const visited = [true, false, false, false, false];
        for ( let j = 0 ; j < cache[garden].length ; j++ ) {
            visited[ret[cache[garden][j]]] = true; 
        }
        let kind = visited.indexOf(false);

        ret[ garden ] = kind;

    }
    
    return ret.slice(1);
    
};

/**
3
[[1,2],[2,3],[3,1]]
4
[[1,2],[3,4]]
4
[[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
10
[[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
10
[[1,2],[2,3],[3,4],[4,1],[1,3],[2,4],[5,6],[5,7],[5,8],[7,8],[8,9]]
 */