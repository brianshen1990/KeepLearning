/**

475. Heaters

Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

Notice that all the heaters follow your radius standard, and the warm radius will the same.

 

Example 1:

Input: houses = [1,2,3], heaters = [2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
Example 2:

Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
Example 3:

Input: houses = [1,5], heaters = [2]
Output: 3
 

Constraints:

1 <= houses.length, heaters.length <= 3 * 104
1 <= houses[i], heaters[i] <= 109


 */


/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function(houses, heaters) {
    houses.sort( (a,b) => a-b );
    heaters.sort( (a,b) => a-b );
    // console.log( houses, heaters )
    
    const helper = ( radius ) => {
        let indexHouse = 0; 
        let indexHeater = 0;
        
        while ( indexHeater < heaters.length && indexHouse < houses.length ) {
            if ( heaters[indexHeater] - radius <= houses[indexHouse] && 
                heaters[indexHeater] + radius >= houses[indexHouse] ) {
                indexHouse++;
                continue;
            } else if (  houses[indexHouse] < heaters[indexHeater] - radius ) {
                return false;
            } else {
                indexHeater++;
            }
        }
        return indexHouse >= houses.length;
        
    }
    
    let beg = 0 ; 
    let end = Math.max(houses[houses.length-1], heaters[heaters.length-1]);
    while ( beg + 1 < end ) {
        // console.log(beg, end);
        let middle = Math.floor( (beg+end) / 2 );
        if ( helper(middle) ) {
            end = middle;
        } else {
            beg = middle;
        }
    }
    // console.log( beg, end );
    if ( helper(beg) ) {
        return beg;
    }
    return end;
};


/*
[1,2,3]
[2]
[1,2,3,4]
[1,4]
[1,5]
[2]
[1]
[1]
[1,2,3,4, 100000000]
[1,4]
*/
