/*
Pt.1
We are working on a security system for a badged-access room in our company's building. Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collection


All employees who didn't use their badge while exiting the room – they recorded an enter without a matching exix
All employees who didn't use their badge while entering the room  – they recorded an exit without a matching enter

badge_records = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
]
find_mismatched_entries(badge_records)
Expected output: ["Paul", "Curtis"], ["Martha"]
*/

// O(N) 
// O(N)
const find_mismatched_entries = (badge_records) => {
  const cache = {};
  badge_records.map( item => {
     cache[item[0]] = cache[item[0]] || [];
     cache[item[0]].push( item[1] );
  });
  
  const enterRet = [];
  const existRet = [];
  Object.keys(cache).map( item => {
    const records = cache[item];
    let enter = false;
    let exit = false;
    for ( let i = 0 ; i < records.length ; i++ ) {
      if ( i === 0 && records[i] !== "enter") {
        enter = true;
      } else if ( i === records.length-1 && records[i] !== "exit") {
        exit = true;
      } else {
        if ( records[i-1] === records[i] ) {
          if ( records[i] === "enter" ) {
            exit = true;
          } else {
            enter = true;
          }
        } 
      }
    }
    if (enter) {
      enterRet.push( item );
    }
    if ( exit ) {
      existRet.push( item );
    }
    
  });
  return [ existRet, enterRet ]
}

// const badge_records = [
//   ["Martha",   "exit"],
//   ["Paul",     "enter"],
//   ["Martha",   "enter"],
//   ["Martha",   "exit"],
//   ["Jennifer", "enter"],
//   ["Paul",     "enter"],
//   ["Curtis",   "enter"],
//   ["Paul",     "exit"],
//   ["Martha",   "enter"],
//   ["Martha",   "exit"],
//   ["Jennifer", "exit"],
// ];
// console.log( find_mismatched_entries(badge_records) );
