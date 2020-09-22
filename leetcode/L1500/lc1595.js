/**

1595. Minimum Cost to Connect Two Groups of Points

You are given two groups of points where the first group has size1 points, the second group has size2 points, and size1 >= size2.

The cost of the connection between any two points are given in an size1 x size2 matrix where cost[i][j] is the cost of connecting point i of the first group and point j of the second group. The groups are connected if each point in both groups is connected to one or more points in the opposite group. In other words, each point in the first group must be connected to at least one point in the second group, and each point in the second group must be connected to at least one point in the first group.

Return the minimum cost it takes to connect the two groups.

 

Example 1:


Input: cost = [[15, 96], [36, 2]]
Output: 17
Explanation: The optimal way of connecting the groups is:
1--A
2--B
This results in a total cost of 17.
Example 2:


Input: cost = [[1, 3, 5], [4, 1, 1], [1, 5, 3]]
Output: 4
Explanation: The optimal way of connecting the groups is:
1--A
2--B
2--C
3--A
This results in a total cost of 4.
Note that there are multiple points connected to point 2 in the first group and point A in the second group. This does not matter as there is no limit to the number of points that can be connected. We only care about the minimum total cost.
Example 3:

Input: cost = [[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]
Output: 10
 

Constraints:

size1 == cost.length
size2 == cost[i].length
1 <= size1, size2 <= 12
size1 >= size2
0 <= cost[i][j] <= 100

 */


/**
 * @param {number[][]} cost
 * @return {number}
 */
var connectTwoGroups = function(cost) {
    const size1 = cost.length;
    const size2 = cost[0].length;
    
    
    // try get optimized s1 -> s2, AND for unconnected s2, choose min
    const cache = {};
    const helper = ( s12s2, mask ) => {
        const str = `${s12s2}_${mask}`;
        if ( str in cache ) return cache[str];
        
        if ( s12s2 >= size1 ) {
            // all s1 has been matched to s2, so, what about s2 2 s1
            let ret = 0;
            for ( let i = 0 ; i < size2 ; i++ ) {
                if ( ( mask & (1<<i) ) === 0 ) { // still no matching
                    ret += Math.min( ...cost.map( item => item[i] ) );
                }
            }
            cache[str] = ret;
            return ret;
        } else {
            // try every position in this row and next rows 
            let ret = Number.MAX_VALUE;
            for ( let i = 0 ; i < size2 ; i++ ) {
                ret = Math.min( ret, cost[s12s2][i] + helper( s12s2+1, mask | (1 << i) ) ); 
            }
            cache[str] = ret;
            return ret;
        }
    }
    const ret = helper( 0, 0 );
    return ret;
};

/**
[[15,96],[36,2]]
[[1, 3, 5], [4, 1, 1], [1, 5, 3]]
[[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]
 */