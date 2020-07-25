
// Input: String[] lines, ["the way it moves like me", "another sentence example",...], int maxLength.
// e.g. ["123 45 67 8901234 5678", "12345 8 9 0 1 23"], 10 => {"123--45-67", "8901234", "5678-12345", "8-9-0-1-23"}
// ["123 45 67 8901234 5678", "12345 8 9 0 1 23"], 15 => {"123----45----67", "8901234----5678", "12345--8--9-0-1", "23"}



                        
const transferStrV2 = (oriStrArr, maxLen) => {
  let strArr = [];
  oriStrArr.map( item => {
    strArr = strArr.concat( item.trim().split(" ") )
  }); // reconstruct the arr
  
  // console.log( strArr );
  
  const helperConcat = ( arr ) => {
    if ( arr.length === 1 ) {
      return arr[0];
    } 
    let len = arr.join("").length;
    const cnt = Math.floor( ( maxLen - len ) / ( arr.length - 1 )  );
    const extra = maxLen - len - cnt * ( arr.length - 1 );
    let ret = "";
    for ( let i = 0 ; i < extra; i++ ) {
      ret += arr[i] + new Array(cnt+1).fill("-").join("");
    }
    for ( let i = extra ; i < arr.length - 1 ; i++ ) {
      ret += arr[i] + new Array(cnt).fill("-").join("");
    }
    ret += arr[ arr.length-1 ];
    return ret;
  }
  
  const ret = [];
  let tempStrArr = [];
  let index = 0;
  
  while ( index < strArr.length ) {
    if ( index === 0 ) {
      tempStrArr = [ strArr[index] ];
      index++;
      continue;
    }
    if ( tempStrArr.join("-").length + 1 + strArr[index].length <= maxLen ) {
      tempStrArr.push( strArr[index] );
    } else {
      ret.push(helperConcat(tempStrArr));
      tempStrArr = [ strArr[index] ];
    }
    index++;
  }
  
  if ( tempStrArr.length > 0 ) {
    ret.push( helperConcat(tempStrArr) );
  }

  return ret;
}

console.log( transferStrV2( ["123 45 67 8901234 5678", "12345 8 9 0 1 23"], 10  ) )
console.log( transferStrV2( ["123 45 67 8901234 5678", "12345 8 9 0 1 23"], 15  ) )

console.log( '12345--8--9-0-1'.length )
