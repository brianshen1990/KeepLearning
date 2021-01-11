/**

552. Student Attendance Record II

Given a positive integer n, return the number of all possible attendance records with length n, which will be regarded as rewardable. The answer may be very large, return it after mod 109 + 7.

A student attendance record is a string that only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A record is regarded as rewardable if it doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

Example 1:
Input: n = 2
Output: 8 
Explanation:
There are 8 records with length 2 will be regarded as rewardable:
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" won't be regarded as rewardable owing to more than one absent times. 
Note: The value of n won't exceed 100,000.
*/

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    //  1A * helperLP(n-1) + helperLP(n)
    //     helperLP(n) = helper(n-1) + helper()
    
    // LLPLL is OK !!!!
    // for All(n+1)
    // if we want to add A -> NoA(n)
    // if we want to add P -> All(n)
    // if we want to add L -> All(n) - (PLL + ALL: All(n-3) + NoA(n-3) )
    
    
    // for NoA(n+1)
    //    Add L NoA(n) - (PLL: NoA(n-3) ) 
    //    Add P NoA(n)
    if ( n===1 ) return 3;
    if ( n===2 ) return 8;
    if ( n===3 ) return 19;
    
    let All = 19, All_1 = 8, All_2 = 3, All_3 = 1;
    let NoA = 7, NoA_1 = 4, NoA_2 = 2, NoA_3 = 1;
    
    for ( let i = 4 ; i <= n ; i++ ) {
        let tempNoA = NoA + NoA - NoA_3;
        let tempAll = NoA + All + All - All_3 - NoA_3;
        while (tempNoA < 0) {
            tempNoA += 1000000007;
        }
        while (tempAll < 0) {
            tempAll += 1000000007;
        } 
        
        NoA_3 = NoA_2;
        NoA_2 = NoA_1;
        NoA_1 = NoA;
        NoA = tempNoA % 1000000007;
        
        All_3 = All_2;
        All_2 = All_1;
        All_1 = All;
        All = tempAll % 1000000007;
    }
    
    return All % 1000000007; 
};


/**
1
2
3
100
10000
99999
 */