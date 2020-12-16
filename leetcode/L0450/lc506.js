/**

506. Relative Ranks

Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
 */


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const cache = {};
    nums.forEach( (item, index) => {
        cache[item] = index;  
    });
    nums.sort( (a,b)=>b-a );
    
    let ret = new Array(nums.length).fill("");
    nums.forEach( (item, index) => {
        if ( index < 3 ) {
            if ( index === 0 ) {
                ret[cache[item]] = "Gold Medal";
            }
            if ( index === 1 ) {
                ret[cache[item]] = "Silver Medal";
            }
            if ( index === 2 ) {
                ret[cache[item]] = "Bronze Medal";
            }
        } else {
            ret[cache[item]]  = `${index+1}`;
        }
    })
    
    return ret;
    
};

/**
[5,4,3,2,1]
[2,1,5,4,3]
[1]
[1,2]
[3,1,2]
[]
 */