/**
204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

 */


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if ( n < 2 ) {
        return 0;
    }
    
    const seq = new Array(n).fill(true);
    const visited = new Array(n).fill(false);
    seq[0] = false; visited[0] = true; 
    seq[1] = false; visited[1] = true;
    
    for ( let i = 2 ; i < n ; i++ ) {
        if ( seq[i] && visited[i] === false ) {
            let cnt = 2;
            while ( true ) {
                let temp = i * cnt;
                if ( temp >= n ) {
                    break;
                }
                seq[temp] = false;
                visited[temp] = true;
                cnt++;
            }
        }
    }
    // console.log( seq )

    return seq.filter(item => item).length;
};


/**
10
0
1
2
3
4
5
12131
12312
7455452
 */