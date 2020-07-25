
/*
Pt.2 Calculator with parenthesis 
*/
const secondSimpleCaculator = (oriStr) => {
  const helper = (str) => {
    if ( str.length <= 0 ) {
      return;
    }
    // console.log("handling", str);
    const stack = [];
    let index=0;
    while ( index < str.length ) {
      if ( str[index] === '+' || str[index] === '-' ) {
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
        const tempValue = helper( str.substring(index+1, nextIndex-1) );
        stack.push(tempValue);
        index = nextIndex;
      } else { // value 
        let endIndex = index;
        while ( endIndex < str.length && 
                str[endIndex] !== '+' &&
                str[endIndex] !== '-') {
                  endIndex++;
                }
        stack.push(parseInt( str.substr(index, endIndex) ));
        index = endIndex;
      }
    }
    // console.log( stack );
    let res = stack[0]
    for ( let i = 1 ; i < stack.length ; i++ ) {
      if ( stack[i] === '+' || stack[i] === '-' ) {
        continue;
      } else {
        res = stack[i-1] === '+' ? (res + stack[i]) : (res - stack[i]);
      }
    }
    return res;
  }
  
  return helper(oriStr);
}
// console.log( secondSimpleCaculator("1+2") ); // 3
// console.log( secondSimpleCaculator("1-(1+(3-2))") ); // -1
// console.log( secondSimpleCaculator("1-(4+67231-908812)+(1+(3-2))") ); // -1
// console.log(1-(4+67231-908812)+(1+(3-2)));
// console.log( secondSimpleCaculator("(1+2)") ); // 3
// console.log( secondSimpleCaculator("(1-(1+(3-2)))") ); // -1
