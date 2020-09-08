/**
1103. Distribute Candies to People

We distribute some number of candies, to a row of n = num_people people in the following way:

We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

Return an array (of length num_people and sum candies) that represents the final distribution of candies.

 

Example 1:

Input: candies = 7, num_people = 4
Output: [1,2,3,1]
Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
Example 2:

Input: candies = 10, num_people = 3
Output: [5,2,3]
Explanation: 
On the first turn, ans[0] += 1, and the array is [1,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0].
On the third turn, ans[2] += 3, and the array is [1,2,3].
On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
 

Constraints:

1 <= candies <= 10^9
1 <= num_people <= 1000


 */

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    
    // ( 1 + n ) * n / 2 <= candies
    let n = Math.floor(Math.sqrt(candies * 2)) - 2;
    n = n >= 0 ? n : 0;
    
    while ( n * (n+1) / 2 < candies ) {
        n += 1;
    }
    let fixedN = n - 1;
    let lastNum = fixedN % num_people;
    let fixedLeft = candies - fixedN * (fixedN+1) / 2;
    
    // console.log("n:", fixedN, "lastIndex", lastNum, "remaining", fixedLeft )
    
    let ret = []
    for ( let i = 0 ; i < num_people ; i++ ) {
        let temp = i+1;
        let sum = 0;
        while ( temp <= fixedN ) {
            sum += temp;
            temp += num_people;
            // if ( i=== 0 ) console.log( temp, sum );
        }
        if ( i === lastNum ) {
            sum += fixedLeft;
        }
        
        ret.push(sum);
    }
    return ret;
    
};


/**
1
1
1
2
1
4
7
4
10
4
11
4
12
4
9
4
10
3
10000000
345
10000000
1
10000000
218
 */