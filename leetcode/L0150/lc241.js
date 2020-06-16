/**
241. Different Ways to Add Parentheses

Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.

Example 1:

Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0 
(2-(1-1)) = 2
Example 2:

Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10

 */

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    if ( input.length === 0 ) {
        return [];
    }
    
    // pre handle
    const arrNum = input.split(/[-\+\*]/);
    const arrOp = input.split(/\d+/).filter(item => item !== "");
    // console.log(arrNum, arrOp);
    if ( arrNum.length === 0 ) {
        return [ parseInt(input) ];
    }
    
    // permutation
    let cache = {};
    const helper = ( nums ) => {
        const res = [];
        
        if ( nums.length === 1 ) {
            res.push( [...nums] );
            return res;
        }
        if ( nums.length === 2 ) {
            res.push( ["(", ...nums , ")"] );
            return res;
        }
        
        for ( let i = 1; i < nums.length ; i++ ) {
            let temp = nums.splice(0, i);
            let remain = nums;
            // console.log(i, temp, remain)
            let leftRes = helper( temp );
            let rightRes = helper( remain );
            
            for ( let l = 0 ; l < leftRes.length ; l++ ) {
                for ( let r = 0 ; r < rightRes.length ; r++ ) {
                    res.push( ["(", ...leftRes[l], ...rightRes[r], ")"] );
                }
            }
            nums.splice(0, 0, ...temp);
        }
        return res;
        
    }
    
    let ret = helper( arrNum );
    
    //  restore
    // console.log(ret.map(item => item.join("")));
    ret = ret.map( item => {
        let opIndex = 0;
        let index = 0;
        while ( index < item.length && opIndex < arrOp.length ) {
            if (  "()+-*".indexOf( item[index] ) < 0 ) {
                // number
                index++;
                while ( index < item.length && item[index] === ")" ) {
                    index++;
                }
                item.splice(index, 0, [arrOp[opIndex]]);
                opIndex++;
            } else {
                index++;
            }
        }
        return item;
    });
    // console.log(ret.map(item => item.join("")));
    
    // result
    ret = ret.map( item => {
        const str = item.join("");
        let temp = eval(str);
        // console.log(str, temp);
        return temp;
    });
    
    return ret;
};

/**
"2-1-1"
"2*3-4*5"
"1-1"
"2123-123-123-234-234+234*23"
"121"
 */