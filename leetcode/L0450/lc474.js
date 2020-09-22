/**

474. Ones and Zeroes

Given an array, strs, with strings consisting of only 0s and 1s. Also two integers m and n.

Now your task is to find the maximum number of strings that you can form with given m 0s and n 1s. Each 0 and 1 can be used at most once.

 

Example 1:

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are "10","0001","1","0".
Example 2:

Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: You could form "10", but then you'd have nothing left. Better form "0" and "1".
 

Constraints:

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] consists only of digits '0' and '1'.
1 <= m, n <= 100

 */


/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    
    const strsCnt = [];
    strs.forEach( item => {
        const count1 = item.split("").filter( char => char === '1').length;
        strsCnt.push({
            count1,
            count0: item.length - count1 
        }); 
    });
    
    // !!!!!! maxtrix DP, three dimenson, 0-1 kickpack, l is the length, m, n is ths number
    const lmnArr = [];
    for ( let i = 0 ; i <= strs.length ; i++ ) {
        const mnArr = [];
        for ( let j = 0 ; j <=m ; j++ ) {
            const nArr = new Array(n+1).fill(0);
            mnArr.push( nArr );
        }
        lmnArr.push(mnArr);
    }
    
    for ( let i = 1 ; i <= strs.length ; i++ ) {
        const { count1, count0 } = strsCnt[i-1];
        // console.log(i, "handle", count0, count1 );
        for ( let j = 0 ; j <= m ; j++ ) {
            for ( let k = 0 ; k <= n ; k++ ) {
                if ( j >= count0 && k >= count1 ) {
                    // console.log("hit");
                    lmnArr[i][j][k] = Math.max(lmnArr[i-1][j][k], lmnArr[i-1][j-count0][k-count1]+1 )   
                } else {
                    lmnArr[i][j][k] = lmnArr[i-1][j][k];
                }
            }
        }
    }
    return lmnArr[strs.length][m][n];
};

/*
["10","0001","111001","1","0"]
5
3
["10","0","1"]
1
1
["10","0","1"]
2
1
["00","000"]
1
10
["10","0001","111001","1","0"]
3
4
*/
