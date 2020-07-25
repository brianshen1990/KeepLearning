  /*
  Pt.1 Calculator without parenthesis, only +, -, non-negative ints
  1+2=3 
  2-1 = 1 
  */
  
 const simpleCaculator = (str) => {
  if ( str.length <= 0 ) {
    return;
  }
  const stack = [];
  let index=0;
  while ( index < str.length ) {
    if ( str[index] === '+' || str[index] === '-' ) {
      stack.push(str[index]);
      index++; 
      continue;
    } else {
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

// O(N) -> time complexity 
// console.log( simpleCaculator("1+2") ); // 3
// console.log( simpleCaculator("1-2") ); // -1
// console.log( simpleCaculator("1-2+3") ); // 2
// console.log( simpleCaculator("1") ); // 1
// console.log( simpleCaculator("") ); // undefined

// eval("1+2");