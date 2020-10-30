/**
802. Find Eventual Safe States

In a directed graph, we start at some node and every turn, walk along a directed edge of the graph.  If we reach a node that is terminal (that is, it has no outgoing directed edges), we stop.

Now, say our starting node is eventually safe if and only if we must eventually walk to a terminal node.  More specifically, there exists a natural number K so that for any choice of where to walk, we must have stopped at a terminal node in less than K steps.

Which nodes are eventually safe?  Return them as an array in sorted order.

The directed graph has N nodes with labels 0, 1, ..., N-1, where N is the length of graph.  The graph is given in the following form: graph[i] is a list of labels j such that (i, j) is a directed edge of the graph.

Example:
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Here is a diagram of the above graph.

Illustration of graph

Note:

graph will have length at most 10000.
The number of edges in the graph will not exceed 32000.
Each graph[i] will be a sorted list of different integers, chosen within the range [0, graph.length - 1].

 */


/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    // topology sort
    graph = graph.map( item => new Set( item ) );
    
    const safeSet = new Set();
    
    let next = new Set();
    for ( let i = 0 ; i < graph.length ; i++ ) {
        if ( graph[i].size === 0 ) {
            next.add(i);
        }
    }
    
    while ( next.size > 0 ) {
        const nextNext =new Set();
        next.forEach( item => {
            safeSet.add( item );   
        })
        
        for ( let i = 0 ; i < graph.length ; i++ ) {
            if ( graph[i].size !== 0 ) {
                for ( let ele of next ) {
                    if ( graph[i].has( ele ) ) {
                        graph[i].delete( ele );
                        if ( graph[i].size === 0 ) {
                            nextNext.add(i);
                        }
                    }   
                }
            }
        }
        next = nextNext;
    }
    
    return [...safeSet].sort( (a,b) => a-b );
    
};

/**
[[1,2],[2,3],[5],[0],[5],[],[]]
[[1,2],[2,3],[],[]]
[[1,2],[2,3],[],[0]]
[[],[]]
 */