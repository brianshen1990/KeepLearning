/**
375. Guess Number Higher or Lower II

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

 */


/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    if ( n === 1 ) {
        return 0;
    }
    const cache = {};
    // console.log("-----", n);
    const helper = (beg, end) => {
        
        if ( beg + 2 === end ) {
            return beg+1;
        }
        if ( beg + 1 === end ) {
            return beg;
        }
        if ( beg === end ) {
            return 0;
        }
        if ( `${beg}_${end}` in cache ) {
            return cache[`${beg}_${end}`];
        }
        // console.log( "processing", beg, end );
        let min = Number.MAX_VALUE;
        for ( let i = beg; i <= end ; i++ ) {
            let sum = i;
            if ( i === beg ) {
                
                sum += helper( beg+1, end );
                // console.log("begin", sum)
                if ( sum < min ) {
                    min = sum;
                }
            } else if ( i === end ) {
                sum += helper( beg, end-1 );
                // console.log("end", sum)
                if ( sum < min ) {
                    min = sum;
                }
            } else {
                const left = helper( beg, i-1 );
                const right = helper(i+1, end);
                sum += Math.max(left ,right );
                if ( sum < min ) {
                    min = sum;
                }
                // console.log("middle", i, sum);
            }
            
        }
        
        cache[`${beg}_${end}`] = min;
        return min;
    }
    
    return helper(1, n);
};


/** 
1
2
3
4
10
87
198
*/