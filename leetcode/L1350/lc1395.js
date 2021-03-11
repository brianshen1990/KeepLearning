/**
1395. Count Number of Teams

There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

 

Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
Example 2:

Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.
Example 3:

Input: rating = [1,2,3,4]
Output: 4
 

Constraints:

n == rating.length
3 <= n <= 1000
1 <= rating[i] <= 105
All the integers in rating are unique.

 */


/**
 * @param {number[]} rating n*n
 * @return {number}
 */
 var numTeams = function(rating) {
    // [2,5,7,3,4,8,9,1]
    let ret = 0 ;
    for ( let i = 1 ; i < rating.length - 1 ; i++ ) {
        let leftSmaller = 0;
        let leftBigger = 0 ;
        for ( let j = 0 ; j < i ; j++ ) {
            if ( rating[j] < rating[i] ) {
                leftSmaller++;
            } else {
                leftBigger++;
            }
        }
        let rightSmaller = 0;
        let rightBigger = 0;
        for ( let j = i+1 ; j < rating.length ; j++ ) {
            if ( rating[j] < rating[i] ) {
                rightSmaller++;
            } else {
                rightBigger++;
            }
        }
        ret += leftSmaller * rightBigger +  leftBigger * rightSmaller;
    }
    return ret;
};

/**
 * @param {number[]} rating n*n*n
 * @return {number}
 */
 var numTeams = function(rating) {
    // [2,5,7,3,4,8,9,1]
    let ret = 0 ;
    for ( let i = 0 ; i < rating.length - 2 ; i ++ ) {
        for ( let j = i ; j < rating.length - 1; j++  ) {
            for ( let k = j ; k < rating.length ; k++ ) {
                if ( 
                    (rating[i] < rating[j] && rating[j] < rating[k] ) ||
                    ( rating[i] > rating[j] && rating[j] > rating[k] )
                )  {
                    ret++;
                }   
            }
        }
    }
    return ret;
};

/**
[2,5,3,4,1]
[2,1,3]
[1,2,3,4]
 */