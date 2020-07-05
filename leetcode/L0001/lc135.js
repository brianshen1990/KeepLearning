/**
135. Candy

There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
*/


/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if ( ratings.length === 0 ) {
        return 0
    }
    if ( ratings.length === 1 ) {
        return 1;
    }
    
    // init, satisfied one, but no optimization
    let min = Math.min(...ratings);
    let ret = [];
    if ( min <= 0 ) {
        const addNum = 1 - min;
        ret = ratings.map( item => item + addNum );
    } else {
        ret = [...ratings];
    }
    // console.log( ret );
    
    // optimization
    while ( true ) {
        let found = false;
        for ( let i = 0 ; i < ratings.length ; i++ ) {
            if ( i === 0 ) {
                if ( ratings[0] <= ratings[1] ) {
                    if ( ret[0] !== 1 ) {
                        ret[0] = 1;
                        found = true;
                    }
                } else {
                    if ( ret[0] !== ret[1] + 1 ) {
                        ret[0] = ret[1] + 1;
                        found = true;
                    }
                }
            } else if ( i === ratings.length-1 ) {
                if ( ratings[i] <= ratings[i-1] ) {
                    if ( ret[i] !== 1 ) {
                        ret[i] = 1;
                        found = true;
                    }
                } else {
                    if ( ret[i] !== ret[i-1] + 1 ) {
                        ret[i] = ret[i-1] + 1;
                        found = true;
                    }
                }
            } else {
                if ( ratings[i] <= ratings[i-1] && ratings[i] <= ratings[i+1] ) {
                    if ( ret[i] !== 1 ) {
                        ret[i] = 1;
                        found = true;
                    }
                } else if ( ratings[i] > ratings[i-1] && ratings[i] > ratings[i+1] ) {
                    if ( ret[i] !== Math.max( ret[i-1], ret[i+1] ) + 1 ) {
                        ret[i] = Math.max( ret[i-1], ret[i+1] ) + 1;
                        found = true;
                    }
                } else if ( ratings[i] > ratings[i-1] ) {  // && ratings[i] <= ratings[i+1]
                    if ( ret[i] !== ret[i-1] + 1 ) {
                        ret[i] = ret[i-1] + 1;
                        found = true;
                    }
                } else {  // ratings[i] > ratings[i+1] && ratings[i] <= ratings[i-1]
                    if ( ret[i] !== ret[i+1] + 1 ) {
                        ret[i] = ret[i+1] + 1;
                        found = true;
                    }
                }   
            }
        }
        
        if ( !found ) {
            break;
        }
    }
    
    // res
    // console.log( ret );
    return ret.reduce( (prev, cur) => prev + cur );
    // return ratings.length;
};


/**
 * 
[1,-5,2]
[1,2,2]
[1]
[1,2]
[1,1]
[2,2]
[2,3]
[1,2,2]
[1,0,2,1,2,2]
[1,-9,2,1,2,2]
[1,3,4,5,2]
 */