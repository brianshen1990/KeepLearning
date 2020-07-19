/**
447. Number of Boomerangs

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:

Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

 */


/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    
    let ret = 0;
    
    for ( let i = 0 ; i < points.length ; i++ ) {
        const cache = {};
        for ( let j = 0; j < points.length ; j++ ) {
            if ( j === i ) {
                continue;
            }
            const d = Math.pow( (points[j][0] - points[i][0]), 2 ) + Math.pow( (points[j][1] - points[i][1]), 2 );
            // console.log(d);
            cache[d] = cache[d] || 0;
            cache[d] += 1;
        }
        // console.log( cache );
        Object.keys( cache ).map( key => {
            if ( cache[key] > 1 ) {
                ret += cache[key] * (cache[key]-1)
            }  
        })    
    }
    return ret;
    
    
};


/** 
[[0,0],[1,0],[2,0]]
[[0,0],[1,0],[2,0],[3,0]]
[[0,0],[1,0],[2,0],[4,0]]
[[0,0],[1,0],[2,0],[3,0],[4,0]]
*/