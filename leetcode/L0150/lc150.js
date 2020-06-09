/**
150. Evaluate Reverse Polish Notation

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:

Division between two integers should truncate toward zero.
The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
Example 1:

Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if ( tokens.length === 0 ) {
      return 0;
  }
  tokens = tokens.map( item => {
       return "+-*/".indexOf( item ) >= 0 ? item : parseInt(item);
  }) 
  // console.log(tokens);
  
  while ( tokens.length > 1 ) {
      let opIndex = -1;
      for ( let i = 0 ; i < tokens.length ; i++ ) {
          if ( "+-*/".indexOf( tokens[i] ) >= 0  ) {
              opIndex = i;
              break;
          }
      }
      let tempRes = 0;
      if ( tokens[opIndex] === "+" ) {
          tempRes = tokens[opIndex-2] + tokens[opIndex-1];
      }
      if ( tokens[opIndex] === "-" ) {
          tempRes = tokens[opIndex-2] - tokens[opIndex-1];
      }
      if ( tokens[opIndex] === "*" ) {
          tempRes = tokens[opIndex-2] * tokens[opIndex-1];
      }
      if ( tokens[opIndex] === "/" ) {
          tempRes = tokens[opIndex-2] / tokens[opIndex-1];
          if ( tempRes >=0  ) {
              tempRes = Math.floor(tempRes);
          } else {
              tempRes = Math.ceil(tempRes);
          }
      }
      tokens.splice( opIndex-2, 3, tempRes);
      // console.log(tokens);
  }
  return tokens[0];

};

/**
["2","1","+","3","*"]
["4", "13", "5", "/", "+"]
["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
["3", "2", "/"]
["3", "-2", "/"]
 */