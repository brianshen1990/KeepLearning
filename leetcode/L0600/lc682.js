/**
684. Redundant Connection

In this problem, a tree is an undirected graph that is connected and has no cycles.

The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, that represents an undirected edge connecting nodes u and v.

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array. The answer edge [u, v] should be in the same format, with u < v.

Example 1:
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3
Example 2:
Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3
Note:
The size of the input 2D-array will be between 3 and 1000.
Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

Update (2017-09-26):
We have overhauled the problem description + test cases and specified clearly the graph is an undirected graph. For the directed graph follow up please see Redundant Connection II). We apologize for any inconvenience caused.

 */


/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) { 
    const cache = {};
    for ( let i = 1 ; i <= edges.length ; i++ ) {
        cache[i] = new Set();
    }
    edges.forEach( (item) => {
        const [u, v] = item;
        cache[u].add(v);
        cache[v].add(u);
    });
    
    // remove nodes that only has a node
    let next = Object.keys(cache).filter( item => cache[item].size === 1 );
    while ( next.length > 0 ) {
        // console.log(next);
        // console.log( cache );
        next.forEach( item => {
            item = parseInt(item);
            const nn = [...cache[item]][0];
            cache[nn].delete(item);
            delete cache[item];
        })
        // console.log( cache );
        next = Object.keys(cache).filter( item => cache[item].size === 1 );
    }
    
    let inTheCircle = new Set(Object.values(cache).map( item => [...item] ).flat());
    
    for ( let i = edges.length-1 ; i > 0 ; i-- ) {
        if ( inTheCircle.has(edges[i][0]) && inTheCircle.has(edges[i][1]) ) {
            return edges[i];
        }
    }
};


/**
[[9,10],[5,8],[2,6],[1,5],[3,8],[4,9],[8,10],[4,10],[6,8],[7,9]]
[[1,2],[1,3],[2,3]]
[[1,2], [2,3], [3,4], [1,4], [1,5]]
[[1,2], [2,3], [3,4], [1,3], [1,5]]
[[1,2], [2,3], [3,4], [4,5], [1,5]]
*/