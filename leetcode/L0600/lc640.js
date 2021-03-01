/**
640. Solve the Equation

Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.

If there is no solution for the equation, return "No solution".

If there are infinite solutions for the equation, return "Infinite solutions".

If there is exactly one solution for the equation, we ensure that the value of x is an integer.

Example 1:
Input: "x+5-3+x=6+x-2"
Output: "x=2"
Example 2:
Input: "x=x"
Output: "Infinite solutions"
Example 3:
Input: "2x=x"
Output: "x=0"
Example 4:
Input: "2x+3x-6x=x+2"
Output: "x=-1"
Example 5:
Input: "x=x+2"
Output: "No solution"
 */


/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let xx = 0;
    let value = 0;
    
    let index = 0;
    let passEqual = false;
    let prev = "+";
    while ( index < equation.length ) {
        if ( equation[index] === "+" ||
           equation[index] === "-" || 
           equation[index] === "=") {
            prev = equation[index];
            index++;
            if ( prev === '=' ) {
                passEqual = true;
            }
        } else {
            let nindex = index;
            while ( nindex < equation.length &&
                  equation[nindex] !== "+" && 
                  equation[nindex] !== "-" &&
                  equation[nindex] !== "=") {
                nindex++;
            }
            let str = equation.substring(index, nindex);
            // console.log("hit", str);
            if ( str === 'x' ) {
                xx +=  ( (prev==="+" || prev==="=") ? 1 : -1 )  * ( passEqual ? -1 : 1 );
            } else if ( str[str.length-1] === 'x' ) {
                xx += 
                    ( (prev==="+" || prev==="=") ? 1 : -1 )  *
                    ( passEqual ? ( -parseInt(str.substr(0, str.length-1)) ) : (parseInt(str.substr(0, str.length-1)) ) );
            } else {
                value += 
                     ( (prev==="+" || prev==="=") ? 1 : -1 )  *
                    ( passEqual ? ( parseInt(str) ) : (- parseInt(str) ) );
            }
            index = nindex;
        }
        // console.log( xx, value );
    }
    
    // console.log( xx, value )
    if ( xx === 0 ) {
        return value === 0 ? "Infinite solutions" : "No solution";
    } else {
        return `x=${value / xx }`;  
    }
};


/**
"x+5-3+x=6+x-2"
"x=x"
"2x=x"
"2x+3x-6x=x+2"
"x=x+2"
"-x=-1"
*/