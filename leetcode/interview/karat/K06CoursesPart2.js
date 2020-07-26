/*
Pt.2 Given that a is pre-requisite of b, b is pre-requisite of c, what is the mid course? notice that there is only one order of all courses: a->b->c, therefore mid course is b.
*/

// [ ["a", "b"], ["b", "c"], ["a", "d"], ["d", "e"] ]
// a -> b -> c
//   |-> d -> e
// O(N) 
// O(N) -> 
const findMiddle = (relations) => {
  const cache = {};
  const cacheRev = {};
  const allMem = new Set();
  
  relations.map( item => {
    allMem.add( item[0] );
    allMem.add( item[1] );
    cache[ item[1] ] = cache[ item[1] ] || {};
    cache[ item[1] ][item[0]] = true;
    cacheRev[ item[0] ] = cacheRev[ item[0] ]  || {};
    cacheRev[ item[0] ][item[1]] = true;
  });
  const roots = new Set( Object.keys(cache) );
  const leaves = new Set( Object.keys(cacheRev) );
  // console.log( ...roots, "---", ...leaves );
  
  return [...allMem].filter( item => roots.has(item) && leaves.has(item) );
}

console.log( findMiddle([ ["a", "b"], ["b", "c"], ["a", "d"], ["d", "e"] ]) );
