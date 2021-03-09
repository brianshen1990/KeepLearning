/**
 * 
605. Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
 */


 /**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if ( n === 0 ) return true;
    let index = 0 ;
    while ( index < flowerbed.length ) {
        if ( flowerbed[index] === 0 ) {
            let nindex = index;
            while ( nindex < flowerbed.length && flowerbed[nindex] === 0 ) {
                nindex++;
            }
            if ( index === 0 && nindex === flowerbed.length ) {
                return Math.ceil(flowerbed.length/2) >= n;
            }
            if ( nindex - index > 1 ) {
                if ( nindex === flowerbed.length || index === 0 ) {
                    n = n - (Math.floor( ( nindex - index) / 2));
                } else {
                    n = n - (Math.ceil( ( nindex - index) / 2)-1);
                }
                if ( n <= 0 ) {
                    return true;
                }
            } 
            index = nindex+1;
        } else {
            index++;
        }
    }
    
    return false;
    
};



/**
[1,0,0,0,1]
1
[1,0,0,0,1]
2
[1,0,0,1]
1
[0,0,1]
1
[1,0,0]
1
[0,0,0]
2
[0,0]
2
[0,0,0,0]
2
[1,0,0,0,0,1]
2
[1,0,0,0,0]
2
*/