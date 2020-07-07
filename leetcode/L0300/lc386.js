/**
386. Lexicographical Numbers


Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

 */


/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    
    const res = [];
    
    const helper = (base) => {
        let res = [];
        const beg = ( base === 0 ? 1 : 0 );
        for ( let i = beg ; i <= 9 ; i++ ) {
            let iter = base * 10 + i;
            if ( iter <= n ) {
                res.push(iter);
                res = res.concat( helper( iter ) );
            }     
        }
        return res;
    }
    
    const ret = helper(0);
    return ret;

    // brute force
    // return new Array(n).fill(0).map( (_,index) => `${index+1}` ).sort( (a,b) => a>b?1:-1 ).map( item => parseInt(item) );
};



/** 
1
13
234
345563
*/