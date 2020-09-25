/**
1010. Pairs of Songs With Total Durations Divisible by 60

In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 

Note:

1 <= time.length <= 60000
1 <= time[i] <= 500
 */


/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const cache = {};
    time.forEach( item => {
        const mod = item % 60;
        cache[mod] = cache[mod] || 0;
        cache[mod] += 1;
    });
    // console.log(cache);
    
    let ret = 0;
    [0, 30].forEach( item => {
        if ( item in cache ) {
            ret += cache[item] * (cache[item]-1) / 2;
        }   
    })
    for ( let i = 1 ; i < 30 ; i++ ) {
        if ( (i in cache) && ((60-i) in cache) ) {
            ret += cache[i] * cache[60-i];
        }
    }
    return ret;
};


/**
[30,20,150,100,40]
[60,60,60]
 */