/*
Pt.3 For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4
Write a function that, for a given individual in our dataset, returns their earliest known ancestor -- the one at the farthest distance from the input individual. . check 1point3acres for more.
If there is more than one ancestor tied for "earliest", return any one of them. If the input individual has no parents, the function should return null (or -1). Sample input and output:

parent_child_pairs = [ (1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5), (4, 8), (8, 10), (11, 2) ]
// 1.  2         4 
//   3.     5.   8 10
//       6   7 

findEarliestAncestor(parentChildPairs, 8) => 4
findEarliestAncestor(parentChildPairs, 7) => 4
findEarliestAncestor(parentChildPairs, 6) => 11
findEarliestAncestor(parentChildPairs, 1) => null or -1 
*/


const findEarliestAncestor = (parentChildPairs, child) => {
  const cache = {};
  const allChild = new Set();
  parentChildPairs.map( item => {
    allChild.add( item[0] )
    allChild.add( item[1] );
    cache[ item[1] ] = cache[ item[1] ] || [];
    cache[ item[1] ].push( item[0] );  
  });
  // O(N)
  
  
  // BFS O(N)
  let ret = -1;
  if ( child in cache ) { 
    let cur = cache[child];
    while ( cur.length > 0 ) {
      ret = cur[0];
      let next = new Set();
      cur.map( item => {
        if ( item in cache ) {
          cache[item].map( newOne => {
            next.add(newOne);
          })
        }
      });
      cur = [...next];
    }
    return ret;
  } else {
    return ret;
  }
}

const parentChildPairs =[ [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [8, 10], [11, 2] ];
console.log( findEarliestAncestor(parentChildPairs, 8) ) // 4
console.log( findEarliestAncestor(parentChildPairs, 7) ) // 4
console.log( findEarliestAncestor(parentChildPairs, 6) ) // 11
console.log( findEarliestAncestor(parentChildPairs, 1) )// -1