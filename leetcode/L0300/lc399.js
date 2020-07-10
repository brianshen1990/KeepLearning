/**
399. Evaluate Division


Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const cacheG = {};
    const cacheNum = {};
    equations.map( (item, index) => {
        cacheG[item[0]] = cacheG[item[0]] || {};
        cacheG[item[0]][item[1]] = true;
        
        cacheG[item[1]] = cacheG[item[1]] || {};
        cacheG[item[1]][item[0]] = true;
        
        cacheNum[`${item[0]}_${item[1]}`] = values[index];
        cacheNum[`${item[1]}_${item[0]}`] = 1 / values[index];
    });
    
    // console.log( cacheG, cacheNum );
    
    // cacheNum
    const helper = (fir, sec) => {
        if ( `${fir}_${sec}` in cacheNum ) {
            // console.log("hit cache", fir, sec);
            return cacheNum[`${fir}_${sec}`];
        }
        
        let ret = -1;
        let reachable = false;
        let already = new Set();
        let cur = [fir];
        // BFS
        while ( cur.length > 0 ) {
            already = new Set([...already, ...cur]);
            if ( already.has( sec ) ) {
                // console.log("hit cacl", fir, sec);
                break;
            }
            let next = [];

            cur.map( item => {
                next = [ ...next, ...Object.keys(cacheG[item]) ];
                // do the cache 
                Object.keys( cacheG[item] ).map( iterN => {
                    if ( ! (`${fir}_${iterN}` in cacheNum ) ) {
                        cacheNum[`${fir}_${iterN}`] = 
                            cacheNum[`${fir}_${item}`] * cacheNum[`${item}_${iterN}`];
                        cacheNum[`${iterN}_${fir}`] = 
                            cacheNum[`${item}_${fir}`] * cacheNum[`${iterN}_${item}`];
                    }
                })
            })
            next = [... new Set(next)].filter( item => already.has(item) ? false : true );
            // console.log( cur, next, already );
            cur = next;
        }

        if ( already.has( sec ) ) {
            return cacheNum[`${fir}_${sec}`];
        } else {
            // console.log("not find", fir, sec)
            cacheNum[`${fir}_${sec}`] = -1;
            cacheNum[`${sec}_${fir}`] = -1;
            return -1;
        }
        return ret;
    }
    
    let ret = [];
    for ( let i = 0 ; i < queries.length ; i++ ) {
        const [fir, sec] = queries[i];
        if ( fir in cacheG && sec in cacheG ) {
            if ( fir === sec ) {
                ret.push(1);
                continue;
            }
            ret.push( helper(fir, sec) );
        } else {
            ret.push(-1);
        }
    }
    
    return ret;
};


/** 
[["aa","b"],["b","c"]]
[2.0,3.0]
[["aa","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
[["a","b"],["b","c"]]
[2.0,3.0]
[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"], ["a","x"], ["x", "b"]]
[["a","b"],["b","c"]]
[2.0,3.0]
[["a","c"], ["c","a"]]
[["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]]
[3.0,0.5,3.4,5.6]
[["x2","x4"],["x1","x5"],["x1","x3"],["x5","x5"],["x5","x1"],["x3","x4"],["x4","x3"],["x6","x6"],["x0","x0"]]
[["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]]
[3.0,0.5,3.4,5.6]
[["x1","x5"]]
*/
