/**
433. Minimum Genetic Mutation

A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".

Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.

Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

Note:

Starting point is assumed to be valid, so it might not be included in the bank.
If multiple mutations are needed, all mutations during in the sequence must be valid.
You may assume start and end string is not the same.
 

Example 1:

start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]

return: 1
 

Example 2:

start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

return: 2
 

Example 3:

start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

return: 3
 */


/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    if ( bank.indexOf(end) < 0 ) {
        return -1;
    }
    
    const cache = {}
    const cacheCa = {};
    const helper = (str) => {
        if ( str in cache ) {
            return cache[str];
        }
        const ret = [];
        for ( let i = 0 ; i < bank.length ; i++ ) {
            if ( `${str}_${bank[i]}` in cacheCa ) {
                if ( cacheCa[`${str}_${bank[i]}`] ) {
                    ret.push( bank[i] );
                }
            } else {
                let diff = 0;
                for ( let j = 0; j < str.length ; j++ ) {
                    if ( str[j] !== bank[i][j] ) {
                        diff++;
                        if ( diff > 1 ) {  break; }
                    }
                }
                if ( diff === 1 ) {
                    cacheCa[ `${str}_${bank[i]}` ] = true;
                    cacheCa[ `${bank[i]}_${str}` ] = true;
                    ret.push( bank[i] );
                } else {
                    cacheCa[ `${str}_${bank[i]}` ] = false;
                    cacheCa[ `${bank[i]}_${str}` ] = false;
                }
            }
        }
        cache[str] = ret;
        return ret;
    }
    
    // BFS
    let cur = [start];
    let contained = new Set();
    let steps = 0;
    let found = false;
    while ( cur.length > 0 ) {
        // console.log( cur );
        steps++;
        let next = new Set();
        
        for ( let i = 0 ; i < cur.length ; i++ ) {
            const muts = helper( cur[i] );
            muts.map( item => {
                if ( contained.has(item) || next.has(item) ) {
                    // pass
                } else {
                    next.add( item );
                }
                if ( item === end ) {
                    found = true;
                }
            })
            if ( found ) {
                break;
            }
        }
        if ( found ) {
            break;
        }
        cur = [...next];
    }
    if ( found ) {
        return steps;
    }
    return -1;
};


/** 
"AACCGGTT"
"AACCGGTA"
["AACCGGTA"]
"AACCGGTT"
"AAACGGTA"
["AACCGGTA", "AACCGCTA", "AAACGGTA"]
"AAAAACCC"
"AACCCCCC"
["AAAACCCC", "AAACCCCC", "AACCCCCC"]
"AAAAACCC"
"AACCCCGC"
["AAAACCCC", "AAACCCCC", "AACCCCCC"]
*/