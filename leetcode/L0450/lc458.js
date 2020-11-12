/**

458. Poor Pigs

There are 1000 buckets, one and only one of them is poisonous, while the rest are filled with water. They all look identical. If a pig drinks the poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket is poisonous within one hour?

Answer this question, and write an algorithm for the general case.

 

General case:

If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the poisonous bucket within p minutes? There is exactly one bucket with poison.

 

Note:

A pig can be allowed to drink simultaneously on as many buckets as one would like, and the feeding takes no time.
After a pig has instantly finished drinking buckets, there has to be a cool down time of m minutes. During this time, only observation is allowed and no feedings at all.
Any given bucket can be sampled an infinite number of times (by an unlimited number of pigs).
*/

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    if ( buckets <= 1 ) {
        return 0;
    }
    if ( minutesToTest < minutesToDie ) {
        return buckets;
    }
    const times =  Math.floor( minutesToTest / minutesToDie );
    let x = 1;
    while (  (times+1) ** x < buckets ) {
        x++;
    }
    
    return x;
};

/**
2
1
1
1
1
1
4
15
15
4
15
16
1000
15
60
4
15
14
 */