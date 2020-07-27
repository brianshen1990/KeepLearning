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

// Pt 3. Determine if all friends are in the same circle 

const SameCycle = (employees, friendships ) => {
  
  const cacheEmployee = new Set();
  employees.map( item => {
    const arr = item.split(", ");
    cacheEmployee.add(arr[0]);
  });
  
  const cache = {};
  friendships.map( item => {
    const arr = item.split(", ");
    cache[arr[0]] = cache[arr[0]] || {};
    cache[arr[0]][arr[1]] = true;
    cache[arr[1]] = cache[arr[1]] || {};
    cache[arr[1]][arr[0]] = true;
  });

  const sameCircle = new Set();
  let cur = Object.keys( cache );
  while ( cur.length > 0 ) {
    cur.map( item => sameCircle.add(item) );
    let next = new Set();
    cur.map( item => {
      if ( item in cache ) {
        Object.keys(cache[item]).map( nPeople => {
          if ( !sameCircle.has(nPeople) ) {
            next.add(sameCircle);
          }
        })
      }
    });
    cur = [...next];
  }
  return  cacheEmployee.size === sameCircle.size;
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
console.log( SameCycle( employees, friendships ) ); // false

const friendships2 = [
  "1, 2",
  "1, 3",
  "3, 4",
  "4, 6"
];
console.log( SameCycle( employees, friendships2 ) ); // true

// O(N)
// O(N)