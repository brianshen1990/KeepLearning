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

// Pt 2.Now for each department count the number of employees that have a friend in another department

// Sample Output:
// Output:
// "Engineer: 2 of 3"
// "HR: 1 of 1"
// "Business: 1 of 1"

const friendCycle = (employees, friendships ) => {
  const _employees = employees;
  const _friendships = friendships;
  
  const cacheEmployee = {};
  _employees.map( item => {
    const arr = item.split(", ");
    cacheEmployee[ arr[0] ] = arr[2];
  });
  
  const cache = {};
  _friendships.map( item => {
    const arr = item.split(", ");
    cache[arr[0]] = cache[arr[0]] || {};
    cache[arr[0]][arr[1]] = true;
    cache[arr[1]] = cache[arr[1]] || {};
    cache[arr[1]][arr[0]] = true;
  });
  
  const findFriends = ( id ) => {
    if ( id in cache ) {
      return Object.keys(cache[id]);
    } else {
      return [];
    }
  } 
  
  // caculate now
  const ret = {};
  Object.keys( cacheEmployee ).map( id => {
    const friends = findFriends(id);
    const haveOtherDepartFriend = friends.filter( fid => cacheEmployee[fid] !== cacheEmployee[id] ).length > 0;
    ret[ cacheEmployee[id] ] = ret[ cacheEmployee[id] ] || { total : 0, cnt: 0 };
    ret[ cacheEmployee[id] ].total += 1;
    ret[ cacheEmployee[id] ].cnt += haveOtherDepartFriend ? 1 : 0;
  })
  // "Engineer: 2 of 3"
  return Object.keys(ret).map( dKey => `${dKey}: ${ret[dKey].cnt} of ${ret[dKey].total}` );
  
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
console.log( friendCycle( employees, friendships ) );


// O(N)
// O(N)