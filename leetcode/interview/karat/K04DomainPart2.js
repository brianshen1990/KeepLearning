/*
Pt.2 Longest Continuous Common History: Given visiting history of each user, find the longest continuous common history between two users. (LeetCode 718, dp)

Sample input:
[
 ["3234.html", "xys.html", "7hsaa.html"], // user1
 ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"] // user2
], user1 and user2
Sample output:
["xys.html", "7hsaa.html"]
*/

const longestCommon = (records) => {
  
  const aRecords = records[0];
  const bRecords = records[1];
  if ( aRecords.length === 0 || bRecords.length === 0) {
    return [];
  }
  // console.log( aRecords, bRecords); 
  
  let ret = [];
  let max = 0;

  const seq = new Array( bRecords.length ).fill(0);
  for ( let i = 0 ; i < bRecords.length ; i++ ) {
    for ( let j = 0 ; j < aRecords.length ; j++ ) {
      if ( aRecords[j] === bRecords[i] ) {
        let count = 0;
        while ( j+count < aRecords.length && 
                i+count < bRecords.length &&
                aRecords[j+count] === bRecords[i+count]  ) {
                // console.log( i, count,aRecords[j+count-1], bRecords[i+count-1] );
                count++;
              }
        // console.log( i, count);
        if ( count > seq[i] ) {
          seq[i] = count;
        }
      }
    } 
  }
  
  console.log( seq );
  let maxPos = 0;
  let maxValue = seq[0];
  seq.map( (cnt, index) => {
    if ( cnt > maxValue ) {
      maxValue = cnt;
      maxPos = index;
    }
  })
  // console.log( maxPos, maxValue );
  return bRecords.slice(maxPos, maxPos+maxValue);
}

// O(M*N) -> 
// 0(M)
console.log( longestCommon([
 ["3234.html", "xys.html", "7hsaa.html"], 
 ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"]
]));