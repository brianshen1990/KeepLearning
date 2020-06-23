/**
332. Reconstruct Itinerary

Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.

 */


/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // TOPOLOY sort
    
    
    const cache = {};
    for ( let i = 0 ; i < tickets.length ; i++ ) {
        cache[ tickets[i][0] ] = cache[ tickets[i][0] ] || [];
        cache[ tickets[i][0] ].push(tickets[i][1]);
    }
    Object.keys(cache).map( item => {
        cache[item] = cache[item].sort( (a,b) => a > b ? 1 : -1 );   
    })
    // console.log( cache );
    
    const helper = (cur, routes, path, res) => {
        path.push(cur);
        
        if ( cache[cur] && cache[cur].length > 0 ) {
            // possible next route 
            
            if ( cache[cur].length === 1 ) {
                const next = cache[cur][0];  // remove
                delete cache[cur];
                let pass = helper( next, cache, path, res);
                if ( pass ) {
                    return true;
                }
                cache[cur] = [next];  // restore
            } else {   
                for ( let i = 0 ; i < cache[cur].length ; i++ ) {
                    const next = cache[cur][i];
                    cache[cur].splice(i, 1); // remove
                    let pass = helper( next, cache, path, res);
                    if ( pass ) {
                        return true;
                    }
                    cache[cur].splice(i, 0, next); // restore
                }
            }
            path.pop(cur);
            return false;
        } else {
            // the end 
            if ( Object.keys(routes).length > 0 ) {
                // console.log("not hits", routes);
                path.pop(cur);
                return false;
            } else {
                // console.log("hit", routes);
                res.push(...path);
                return true;
            }
        }
        
    }
    
    let ret = [];
    helper("JFK", cache, [], ret);
    if ( ret.length === 0 ) {
        ret.push("JFK");
    }
    
    return ret;

};


/** 
[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
[["JFK","SFO"]]
[["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
[["JFL","SFO"]]
*/