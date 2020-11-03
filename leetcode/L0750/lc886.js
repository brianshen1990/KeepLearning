/**
886. Possible Bipartition

Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
 

Constraints:

1 <= N <= 2000
0 <= dislikes.length <= 10000
dislikes[i].length == 2
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
There does not exist i != j for which dislikes[i] == dislikes[j].
 */


/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    if ( N === 1 ) return true;
    if ( dislikes.length === 0 ) return true;
    
    const cache = {};
    dislikes.forEach( item => {
        const [p1, p2] = item;
        cache[p1] = cache[p1] || new Set();
        cache[p1].add( p2 );
        cache[p2] = cache[p2] || new Set();
        cache[p2].add( p1 );
    });
    
    const group0 = new Set();
    const group1 = new Set();
    let g = 0;
    
    const allDislikeNode = new Set( Object.keys(cache).map( item => parseInt(item) ) );
    
    while ( allDislikeNode.size > 0 ) {
        
        let next = [];
        for ( let i of allDislikeNode ) {
            next.push( i );
            break;
        }

        while ( next.length > 0 ) {
            // console.log( next );
            next.forEach( item => {
                allDislikeNode.delete(item);
                if ( g === 0 ) group0.add( item );
                if ( g === 1 ) group1.add(item) 
            });

            const nextNext = new Set();

            for ( let i = 0 ; i < next.length ; i++ ) {
                const item = cache[ next[i] ];
                for ( let j of item ) {
                    if ( g === 0 ) {
                        if ( group1.has(j) ) {
                            // pass
                        } else if ( group0.has(j) ) {
                            return false; // converse
                        } else {
                            nextNext.add(j);
                        }
                    } else {
                        if ( group0.has(j) ) {
                            // pass
                        } else if ( group1.has(j) ) {
                            return false; // converse
                        } else {
                            nextNext.add(j);
                        }
                    }
                }
            }

            next = [...nextNext];
            g++;
            g = g % 2;
        }

    }
    return true;
};

/**
4
[[1,2],[1,3],[2,4]]
3
[[1,2],[1,3],[2,3]]
5
[[1,2],[2,3],[3,4],[4,5],[1,5]]
1
[]
2
[]
5
[[1,2],[3,4],[4,5],[3,5]]
 */
