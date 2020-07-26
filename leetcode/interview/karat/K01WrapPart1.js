// https://juejin.im/post/5e66ac9ce51d4526f363bb11

// Wrap Lines, O(N) time, O(N) space
// ["1p3acres", "is", "a", "good", "plce", "for", "communicate"], 12
// ["1p3acres-is", "a-good-place", "for", "communicate"]

const transferStr = (strArr, maxLen) => {
  const ret = [];
  let str = "";
  let index = 0;
  
  while ( index < strArr.length ) {
    if ( index === 0 ) {
      str = strArr[index];
      index++;
      continue;
    }
    if ( str.length + 1 + strArr[index].length <= maxLen ) {
      str = str + "-" + strArr[index];
    } else {
      ret.push(str);
      str = strArr[index];
    }
    index++;
  }
  
  if ( str !== "" ) {
    ret.push( str );
  }

  return ret;
}

console.log( transferStr( ["1p3acres", "is", "a", "good", "plce", "to", "communicate"], 12  ) )
console.log( transferStr( [], 12  ) )
console.log( transferStr( ["1p3acres"], 12  ) )
console.log( transferStr( ["1p3acres", "is"], 12  ) )
console.log( transferStr( ["1p3acres", "is", "a", "good", "plce", "to", "communicate" ,"test"], 12  ) )

