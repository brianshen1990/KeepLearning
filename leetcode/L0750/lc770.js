/**
770. Basic Calculator IV

Given an expression such as expression = "e + 8 - a + 5" and an evaluation map such as {"e": 1} (given in terms of evalvars = ["e"] and evalints = [1]), return a list of tokens representing the simplified expression, such as ["-1*a","14"]

An expression alternates chunks and symbols, with a space separating each chunk and symbol.
A chunk is either an expression in parentheses, a variable, or a non-negative integer.
A variable is a string of lowercase letters (not including digits.) Note that variables can be multiple letters, and note that variables never have a leading coefficient or unary operator like "2x" or "-x".
Expressions are evaluated in the usual order: brackets first, then multiplication, then addition and subtraction. For example, expression = "1 + 2 * 3" has an answer of ["7"].

The format of the output is as follows:

For each term of free variables with non-zero coefficient, we write the free variables within a term in sorted order lexicographically. For example, we would never write a term like "b*a*c", only "a*b*c".
Terms have degree equal to the number of free variables being multiplied, counting multiplicity. (For example, "a*a*b*c" has degree 4.) We write the largest degree terms of our answer first, breaking ties by lexicographic order ignoring the leading coefficient of the term.
The leading coefficient of the term is placed directly to the left with an asterisk separating it from the variables (if they exist.)  A leading coefficient of 1 is still printed.
An example of a well formatted answer is ["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"] 
Terms (including constant terms) with coefficient 0 are not included.  For example, an expression of "0" has an output of [].
Examples:

Input: expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
Output: ["-1*a","14"]

Input: expression = "e - 8 + temperature - pressure",
evalvars = ["e", "temperature"], evalints = [1, 12]
Output: ["-1*pressure","5"]

Input: expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
Output: ["1*e*e","-64"]

Input: expression = "7 - 7", evalvars = [], evalints = []
Output: []

Input: expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []
Output: ["5*a*b*c"]

Input: expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
evalvars = [], evalints = []
Output: ["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]
Note:

expression will have length in range [1, 250].
evalvars, evalints will have equal lengths in range [0, 100].
 */


/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
var basicCalculatorIV = (expression, evalvars, evalints) => {
  
  const mapping = {};
  for ( let i = 0 ; i < evalvars.length ; i++ ) {
    mapping[evalvars[i]] = evalints[i];
  }
  // console.log(mapping);
  const helper = (str) => {
    if ( str.length <= 0 ) {
      return;
    }
    // console.log("handling", str);
    const stack = [];
    let index=0;
    while ( index < str.length ) {
      if ( str[index] === '+' || str[index] === '-' || str[index] ==="*" ) {
        stack.push(str[index]);
        index++; 
        continue;
      } else if ( str[index] ==='(' ) { // nested
        let countLeft = 1;
        let nextIndex = index+1;
        while ( nextIndex < str.length ) {
          if ( str[nextIndex] === "(" ) {
            countLeft++;
          }
          if ( str[nextIndex] === ')' ) {
            countLeft--;
            if ( countLeft === 0 ) {
              nextIndex++;
              break;
            }
          }
          nextIndex++;
        }
        const tempValue = helper( str.substring(index+1, nextIndex-1).trim() );
        stack.push(tempValue);
        index = nextIndex;
      } else if ( str[index] === " ") {
        index++;
      } else { // value 
        let endIndex = index;
        while ( endIndex < str.length && 
                str[endIndex] !== '+' &&
                str[endIndex] !== '*' &&
                str[endIndex] !== '-') {
                  endIndex++;
                }
        // console.log("here");
        const temp = str.substring(index, endIndex).trim();
        const allNum = temp.split("").filter(char => "0123456789".indexOf(char) < 0).length<= 0;
        
        if ( allNum ) {
          stack.push( { 0: parseInt(temp) } );
        } else if ( temp in mapping ) {
          stack.push( { 0: mapping[temp] } );
        } else {
          stack.push( { [temp]: 1 } );
        }
        index = endIndex;
      }
    }
    
    const helerMultiply = (a, b) => {
      const ret = {};
      Object.keys(a).map( itemA => {
         Object.keys(b).map( itemB => {
           if ( itemA === '0' ) {
              ret[ itemB ] = ret[itemB] || 0;
              ret[itemB] += a[itemA] * b[itemB];
           } else if ( itemB === '0' ) {
              ret[ itemA ] = ret[itemA] || 0;
              ret[itemA] += a[itemA] * b[itemB];
           } else {
             const key = itemA.split("_").concat( itemB.split("_") ).sort( (aa, bb) => aa > bb ? 1 : -1 ).join("_");
             ret[key] = ret[key] || 0;
             ret[key] += a[itemA] * b[itemB];
           }
         })
      })
      return ret;
    }
    const helerAdd = (a, b) => {
      const res = {...a};
      Object.keys(b).map( key => {
        if ( key in res ) {
          res[key] += b[key];
        } else {
          res[key] = b[key];
        }
      })
      return res;
    }
    const helerMinus = (a, b) => {
      const res = {...a};
      Object.keys(b).map( key => {
        if ( key in res ) {
          res[key] -= b[key];
        } else {
          res[key] = -b[key];
        }
      })
      return res;
    }
    
    // console.log( stack ); 
    // handle multiple 
    let multipIndex = stack.indexOf("*");
    while ( multipIndex > 0 ) {
      tempRes = helerMultiply ( stack[multipIndex-1], stack[multipIndex+1] );
      stack.splice( multipIndex-1, 3, tempRes );
      multipIndex = stack.indexOf("*");
    }
    
    // handle +, - 
    let res = {...stack[0]};
    for ( let i = 1 ; i < stack.length ; i++ ) {
      if ( stack[i] === '+' || stack[i] === '-' ) {
        continue;
      } else {
        res = stack[i-1] === '+' ? helerAdd(res, stack[i]) : helerMinus(res, stack[i]);
      }
    }
    return res;
  }
  
  const ret =  helper(expression);
  const res = Object.keys(ret).filter(key => ret[key] !== 0 && key !== '0' ).sort((a,b) => {
    const bLen = b.split("_").length;
    const aLen = a.split("_").length
    if ( bLen - aLen > 0 ) {
      return 1;
    } else if ( bLen < aLen) {
      return -1;
    } else {
      return a > b ? 1 : -1;
    }
    
  }).map( key => key === "0" ? `${ret[key]}` : `${ret[key]}*${key.split("_").join("*")}` );
  if ( '0' in ret && ret[0] !== 0 ) {
    res.push(`${ret[0]}`);
  }
  return res;
}



/**
console.log(thirdSimpleCaculator("7 - 7", [], [])); // 0
console.log(thirdSimpleCaculator("7-7", [], [])); // 0
console.log(thirdSimpleCaculator("e + 8 - a + 5", evalvars = ["e"], evalints = [1])); //  ["-1*a","14"]
console.log(thirdSimpleCaculator("(e + 8) * (e - 8)", [], [])); // ["1*e*e","-64"]
console.log(thirdSimpleCaculator("e - 8 + temperature - pressure", evalvars = ["e", "temperature"], evalints = [1, 12])); // ["-1*pressure","5"]


console.log( thirdSimpleCaculator( expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []) );  // ["5*a*b*c"]

console.log( thirdSimpleCaculator( expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))", evalvars = [], evalints = [] ));
//  ["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]

 */