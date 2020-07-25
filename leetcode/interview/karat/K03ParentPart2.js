
/*
Pt.2 Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.
Sample input and output: （input as same as last part）

hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false

// [[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 10]] 

1.  2         4 
  3.     5.   8 10
       6   7 
*/

const parentSetCommonAncestor = (parentChildPairs, fir, sec) => {
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
  if ( fir in cache && sec in cache) { 
    const commonParents = new Set();
    let cur = cache[fir];
    while ( cur.length > 0 ) {
      let next = new Set();
      cur.map( item => {
        commonParents.add( item );
        if ( item in cache ) {
          cache[item].map( newOne => {
            next.add(newOne);
          })
        }
      });
      cur = [...next];
    }
    // console.log( "fir", ...commonParents ); // all of fir's parent 
    
    // O(N)
    cur = cache[sec];
    while ( cur.length > 0 ) {
      let next = new Set();
      for ( let item of cur ) {
        if ( commonParents.has( item ) ) {
          return true; // there is a common parent
        }
        commonParents.add( item );
        if ( item in cache ) {
          cache[item].map( newOne => {
            next.add(newOne);
          })
        }
      };
      cur = [...next];
    }
    // console.log( "all",  ...commonParents ); // all of fir and sec's parent 
    return false;
  } else {
    return false; // one of them has no parent. so false
  }
}
// hasCommonAncestor(parentChildPairs, 3, 8) => false
// hasCommonAncestor(parentChildPairs, 5, 8) => true
// hasCommonAncestor(parentChildPairs, 6, 8) => true
// hasCommonAncestor(parentChildPairs, 1, 3) => false
// 1.  2         4 
//   3.     5.   8 10
//       6   7 
console.log( parentSetCommonAncestor([[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 10]],  3, 8 ) )
console.log( parentSetCommonAncestor([[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 10]],  5, 8 ) )
console.log( parentSetCommonAncestor([[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 10]],  6, 8 ) )
console.log( parentSetCommonAncestor([[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 10]],  1, 3 ) )

// 3*O(N) => O(N)
// 0(N)
