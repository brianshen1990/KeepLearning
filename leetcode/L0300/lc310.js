/**
310. Minimum Height Trees

For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

Example 1 :

Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3 

Output: [1]
Example 2 :

Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5 

Output: [3, 4]
Note:

According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

 */


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // topology sort
    let nodesPath = new Array(n).fill(-1);
    
    let sIndex = 0;
    while (true) {
        sIndex++;
        if ( edges.length === 0 ) {
            break; // nothing left
        }
        
        const nextEdge = [];
        const cache = {};
        const nodes = {};
        for ( let i = 0 ; i < edges.length ; i++ ) {
            let fir = edges[i][0];
            let sec = edges[i][1];
            cache[fir] = cache[fir] || 0;
            cache[fir]++;
            
            cache[sec] = cache[sec] || 0;
            cache[sec]++;
        }
         
        Object.keys( cache ).map( item => {
            if ( cache[item] === 1 ) {
                // only occurs once, so add a tag;
                nodesPath[item] = sIndex;
                nodes[item] = true;
            };
        })
        
        if (Object.keys(nodes).length <= 0) {
            break; // no leaf found
        }
        console.log("remove", nodes);
        
        for ( let j = 0 ; j < edges.length ; j++ ) {
            if ( nodes[ edges[j][0] ] ||  nodes[ edges[j][1] ] ) {
                // pass
            } else {
                nextEdge.push( edges[j] );
            }
        }

        edges = nextEdge;
        // console.log( nextEdge );
    }
    for ( let i = 0; i < nodesPath.length ; i++ ) {
        if ( nodesPath[i] === -1 ) {
            nodesPath[i] = sIndex;
        }
    }
    
    console.log(nodesPath);
    let max = Math.max(...nodesPath);  
    let res = [];
    
    nodesPath.map( (item, index) =>{
        if ( item === max ) {
            res.push(index);
        }
    });
    return res;
    
};

/** 
4
[[1,0],[1,2],[1,3]]
6
[[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
*/