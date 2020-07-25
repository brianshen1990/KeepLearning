// Friend Cycle:
// employees = [
//   "1, Bill, Engineer",
//   "2, Joe, HR",
//   "3, Sally, Engineer",
//   "4, Richard, Business",
//   "6, Tom, Engineer"
// ]

// friendships = [
//   "1, 2",
//   "1, 3",
//   "3, 4"
// ]

// Pt 1.Given employees and friendships, find all adjacencies that denote the friendship, A friendship is bi-directional/mutual so if 1 is friends with 2, 2 is also friends with 1.

// Sample Output:
// Output:
// 1: 2, 3
// 2: 1
// 3: 1, 4
// 4: 3
// 6: None

const friendCycle = (employees, friendships ) => {
  const _employees = employees;
  const _friendships = friendships;
  const cache = {};
  _friendships.map( item => {
    const arr = item.split(", ");
    cache[arr[0]] = cache[arr[0]] || {};
    cache[arr[0]][arr[1]] = true;
    cache[arr[1]] = cache[arr[1]] || {};
    cache[arr[1]][arr[0]] = true;
  });
  
  return ( id ) => {
    if ( id in cache ) {
      return Object.keys(cache[id]).join(", ");
    } else {
      return "None";
    }
  } 
}

const employees = [
  "1, Bill, Engineer",
  "2, Joe, HR",
  "3, Sally, Engineer",
  "4, Richard, Business",
  "6, Tom, Engineer"
];
const friendships = [
  "1, 2",
  "1, 3",
  "3, 4"
];
const find = friendCycle( employees, friendships );
console.log( find(1) );
console.log( find(2) );
console.log( find(3) );
console.log( find(4) );
console.log( find(6) );

