/**
365. Water and Jug Problem

You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.

If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

Operations allowed:

Fill any of the jugs completely with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
Example 1: (From the famous "Die Hard" example)

Input: x = 3, y = 5, z = 4
Output: True
Example 2:

Input: x = 2, y = 6, z = 5
Output: False

 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater2nd_GCD = function(x, y, z) {
    if ( z > x + y ) {
        return false;
    }
    
    if ( x === 0 || y === 0 ) {
        return x === z || y === z;
    }
    
    let smaller = x > y ? y : x;
    let bigger = x > y ? x : y;
    
    while ( true ) {
        let temp = smaller;
        smaller = bigger % smaller;
        bigger = temp;
        if ( smaller === 0 ) {
            break;
        }
    }
    console.log(bigger , z % bigger === 0 );
    return z % bigger === 0;
};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if ( z > x + y ) {
        return false;
    }
    
    if ( x === 0 || y === 0 ) {
        return x === z || y === z;
    }
    
    let smaller = x > y ? y : x;
    let bigger = x > y ? x : y;
    
    // console.log( smaller, bigger );
    
    const cache = new Set();
    cache.add( 0 );
    cache.add( smaller );
    cache.add( bigger );
    cache.add( smaller + bigger );
    if ( cache.has( z ) ) {
        return true;
    }
    // console.log("go on ");
    
    let cur = [ x, y ];
    
    while ( cur.length > 0 ) {
        let next = new Set();
        for ( let i = 0 ; i < cur.length ; i++ ) {
            cache.add( cur[i] );
        }
        for ( let i = 0 ; i < cur.length ; i++ ) {
            
            if ( cur[i] <= bigger ) {
                // put in in 5, use 3 to jug
                let smallerBig = cur[i];
                while ( smallerBig < bigger ) {
                    smallerBig += smaller;
                }  
                let find = smallerBig - bigger;
                if ( find !== 0 && !cache.has(find) ) {
                    // console.log("find in bigger", find);
                    next.add(find);
                }
            }
            
            if ( cur[i] === smaller ) {
                if ( !cache.has(bigger-smaller) ) {
                    next.add(bigger - smaller);
                }
            }
            
            if ( cur[i] < smaller ) {
                // put in in 3, use 5 to jug
                let biggersmaller = cur[i];
                while ( biggersmaller < smaller ) {
                    biggersmaller += bigger;
                }
                let find = biggersmaller - smaller;
                if ( find !== 0 && !cache.has(find) ) {
                    // console.log("find in smaller", find);
                    next.add(find);
                }
            }
        }
        cur = [...next];
        // console.log(cur, cache);
    }
    // console.log(cache);
    const list = [...cache];
    list.map( item => {
        if ( item < bigger ) {
            cache.add( item + smaller);
        }  
        if ( item < smaller ) {
            cache.add( item + bigger );
        }
    })
    // console.log(cache);
    return cache.has(z);
};


/** 
1
2
3
3
5
4
3
5
6
3
5
1
2
6
5
0
0
0
1
0
1
2
6
5
0
2
1
23
46
12
*/
