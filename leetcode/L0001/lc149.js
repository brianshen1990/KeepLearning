/**

149. Max Points on a Line

Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example 1:

Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/



/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const xPoints = [ ... new Set( points.map( item => item[0] ) ) ].sort( (a,b) => a-b );
    const cache = {};
    const pointInIndex = {};
    const horCa = {};
    const verCa = {};
    points.map( item => {
        const str = `${item[0]}_${item[1]}`;
        cache[str] = cache[str] || { val: 0, caled: [] };
        cache[str].val++;
        pointInIndex[item[0]] = pointInIndex[item[0]] || {};
        pointInIndex[item[0]][item[1]] = true;
        
        horCa[item[0]] = horCa[item[0]] || 0;
        horCa[item[0]]++;
        verCa[item[1]] = verCa[item[1]] || 0;
        verCa[item[1]]++;
    });
    
    // console.log( xPoints );
    // console.log( cache );
    // console.log( pointInIndex );
    
    // iterate now, left to right
    const helperFindLine = (deltaX, deltaY, secX, secY) => {
        let ret = 0;
        const nextPoints = xPoints.filter( item => item > secX );
        for ( let i = 0 ; i < nextPoints.length ; i++ ) {
            const x = nextPoints[i];
            const expectY =  deltaY * ( x-secX ) / deltaX + secY;
            const str = `${x}_${expectY}`;
            if ( str in cache ) {
                ret += cache[str].val;
            }
        }
        return ret;
    }
    const helper = ( x, y ) => {
        // only add right points
        let ret = 0;
        const xyCaledRatio = cache[`${x}_${y}`].caled;
        
        const nextPoints = xPoints.filter( item => item > x );
        for ( let i = 0 ;  i < nextPoints.length ; i++ ) {
            const secX = nextPoints[i];
            const ypoints = Object.keys(pointInIndex[secX]).map( item => parseInt(item) );
            for ( let j = 0 ; j < ypoints.length ; j++ ) {
                const secY = ypoints[j];
                const str = `${secX}_${secY}`;
                let deltaY = secY - y;
                let deltaX = secX - x;
                if ( deltaY === 0 ) {
                    continue; // ignore, horizontal first
                }
                if (  xyCaledRatio.filter(item =>item[0]*deltaY === item[1]*deltaX).length > 0 ) {
                    // console.log("ratio duplicated", x, y, secX, secY );
                    continue; // ignore, ratio already caled
                }
                
                // find next in the same length;
                const count = helperFindLine(deltaX, deltaY, secX, secY);
                cache[str].caled.push( [deltaX, deltaY] );
                
                // console.log( "deleta", deltaX, deltaY, secX, secY, count + cache[str].val )
                ret = Math.max( ret, count+cache[str].val );
            }
        }
        return ret;
    }

    let ret = 0;
    // h & v
    Object.keys(horCa).map( key => {
        ret = Math.max(horCa[key], ret);
    })
    Object.keys(verCa).map( key => {
        ret = Math.max(verCa[key], ret);
    })
    delete horCa;
    delete verCa;
    console.log( "h & v :", ret );
    
    for ( let i = 0 ; i < xPoints.length ; i++ ) {
        const x = xPoints[i];
        const yPoints = Object.keys( pointInIndex[x] ).map(item=>parseInt(item)).sort( (a,b) => a-b );
        // console.log(x, yPoints );
        
        for ( let j = 0 ; j < yPoints.length; j++ ) {
            const y = yPoints[j];
            const tempPointMax = helper(x,y) + cache[`${x}_${y}`].val;
            // console.log("tempPointMax", x, y, tempPointMax);
            ret = Math.max( ret, tempPointMax )        
        }
        
    }
    return ret;
};


/**
[[1,1],[1,1],[2,2],[3,3]]
[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
[[1,1],[1,2],[1,3],[1,5],[3,2],[5,3],[4,1],[2,3],[1,4]]
[[1,1],[1,2],[1,3],[1,5],[3,2],[5,3],[4,1],[2,3],[1,4],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1]]
 */