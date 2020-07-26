/*
Pt.2
We want to find employees who badged into our secured room unusually often. We have an unordered list of names and access times over a single day. Access times are given as three or four-digit numbers using 24-hour time, such as "800" or "2250"
Write a function that finds anyone who badged into the room 3 or more times in a 1-hour period, and returns each time that they badged in during that period. (If there are multiple 1-hour periods where this was true, just return the first one.

badge_records =
     ["Paul", 1355],
     ["Jennifer", 1910]
     ["John", 830]
     ["Paul", 1315]
     ["John", 835]
     ["Paul", 1405]
     ["Paul", 1630]
     ["John", 855],
    
     ["John", 915]
     ["John", 930]
     ["Jennifer", 1335]
     ["Jennifer", 730]
     ["John", 1630]
     ]

Expected output:
John: 830 835 855 915 930  
Paul: 1315 1355 1405
*/

// O(N)
// O(N)

const find_unusal_entries = (badge_records) => {
  const cache = {};
  badge_records.map( item => {
     cache[item[0]] = cache[item[0]] || [];
     cache[item[0]].push( item[1] );
  });
  
  const ret = [];
  Object.keys(cache).map( item => {
    const timeList = cache[item].sort( (a,b) => a > b ? 1 : -1 );
    // console.log(item,  timeList );
    let found = -1;
    let i = 0;
    for ( ; i < timeList.length-3 ; i++ ) {
      let nextHour = timeList[i] + 100;
      let end = i;
      while ( end < timeList.length && timeList[end] <= nextHour ) {
          end++;
      }
      if ( end - i >= 3) {
        found = end;
        break;
      }
    }
    if ( found > 0 ) {
      ret.push( `${item}: ${timeList.slice(i, found-i).join(" ")}` )
    }
  }); 
  return ret;
}; 

const badge_records =[
   ["Paul", 1355],
   ["Jennifer", 1910],
   ["John", 830],
   ["Paul", 1315],
   ["John", 835],
   ["Paul", 1405],
   ["Paul", 1630],
   ["John", 855],
  
   ["John", 915],
   ["John", 930],
   ["Jennifer", 1335],
   ["Jennifer", 730],
   ["John", 1630],
];
     
console.log( find_unusal_entries(badge_records) );