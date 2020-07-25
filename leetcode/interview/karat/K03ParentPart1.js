/*
Common Ancestor / Parent Children:

Pt. 1 Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.
For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

parentChildPairs = [  (1, 3), (2, 3), (3, 6), (5, 6),
                   (5, 7), (4, 5), (4, 8), (8, 10)  ] 

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

findNodesWithZeroAndOneParents(parentChildPairs) =>
                                  [ [1, 2, 4],    // Individuals with zero parents
                                  [5, 7, 8, 10] // Individuals with exactly one parent ]


*/

const parentSet = (parentChildPairs) => {
  const cache = {};
  const allChild = new Set();
  parentChildPairs.map( item => {
    allChild.add( item[0] )
    allChild.add( item[1] );
    cache[ item[1] ] = cache[ item[1] ] || [];
    cache[ item[1] ].push( item[0] );  
  });
  // console.log( cache );
  
  const retOneParents = new Set();
  const retZeroParent = new Set();
  [...allChild].map( item => {
    if ( item in cache && cache[item].length === 1) {
      retOneParents.add( item );
    } 
    if ( ! (item in cache) ) {
      retZeroParent.add(item);
    }
  });
  return[ [...retZeroParent], [...retOneParents]];
}

console.log( parentSet([[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 10]] ) );
console.log( parentSet([] ) ); // empty 

console.log( parentSet([ [1, 3], [2, 3] ] ) ); // [1,2] []
console.log( parentSet([ [1, 3] ] ) ); // [1] [3]
console.log( parentSet([ [1, 3], [2, 3], [4,10], [10, 23] ] ) ); // [1,2,4] [10, 23]