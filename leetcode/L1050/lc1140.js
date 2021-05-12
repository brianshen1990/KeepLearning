/**
1140. Stone Game II

Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones. 

Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

 

Example 1:

Input: piles = [2,7,9,4,4]
Output: 10
Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 
Example 2:

Input: piles = [1,2,3,4,5,100]
Output: 104
 

Constraints:

1 <= piles.length <= 100
1 <= piles[i] <= 104
 */


/**
 * @param {number[]} piles
 * @return {number}
 */
 var stoneGameII = function(piles) {
    const sumArr = new Array(piles.length).fill(0);
    sumArr[piles.length-1] = piles[piles.length-1];
    for ( let i = piles.length-2; i >=0 ; i-- ) {
        sumArr[i] = sumArr[i+1] + piles[i];
    }
    sumArr.push(0); //append extra 0 
    // console.log( sumArr ); 
    
    const cache = {};
    const helper = (index, m) => {
        const str = `${index}_${m}`;
        if ( str in cache ) return cache[str];
        let best = 0 ;
        if ( index + 2*m >= piles.length ) {
            // take them all
            best = sumArr[index];
        } else {
            // try to taken 1 ~ 2M 
            let tempSum = 0;
            for ( let i = 0 ; i < 2*m ; i++ ) {
                tempSum += piles[index+i];
                // taken i elements, and take the rest 
                best = Math.max( best, tempSum + 
                                (sumArr[index+i+1] - helper(index+i+1, Math.max(m, i+1))) );
            }
        }
        cache[str] = best;
        // console.log( str, best );
        return best;
    }
    
    return helper( 0, 1 );
    
};


/**
[2,7,9,4,4]
[1,2,3,4,5,100]
[1,2,3,5,32,3,3,5,7,53,2,2,2]
[1]
[1,1]
[1,2,3]
[1,2,3,4]
[3,2,1]
[2,2,3,1,324,234,235,436,5,768,7978,979,7899,6786]
 */