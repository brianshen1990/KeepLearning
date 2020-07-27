// input = {
// {"cook", "eat"},   // do "cook" ->  "eat"
// {"study", "eat"},   // study -> eat 
// {"sleep", "study"}}  // sleep -> study

// output (steps of a workflow):
// {{"sleep", "cook"},.
// {"study"},
// {"eat"}}

const printWorkflows = (dependecies) => {
  
  const cacheRelyingOn = {};
  const cacheBeenReliedOn = {};
  
  const allMembers = new Set();
  dependecies.map( item => {
    allMembers.add( item[0] );
    allMembers.add( item[1] );
    cacheRelyingOn[ item[1] ] = cacheRelyingOn[ item[1] ] || {};
    cacheRelyingOn[ item[1] ][ item[0] ] = true;
    cacheBeenReliedOn[ item[0] ] = cacheBeenReliedOn[ item[0] ] || {};
    cacheBeenReliedOn[ item[0] ][ item[1] ] = true;
  });
  
  const ret = [];
  let cur = [...allMembers].filter( item => !(item in cacheRelyingOn) );
  
  const alreadySet = new Set();
  while ( cur.length > 0 ) {
    console.log( ...cur );
    ret.push( [...cur] );
    cur.map( item => {
      alreadySet.add(item);
      allMembers.delete(item);
    });
    
    cur.map( start => {
      // delete relay relations
      if ( start in cacheBeenReliedOn ) {
        Object.keys(cacheBeenReliedOn[start]).map( item => {
          if ( item in cacheRelyingOn ) {
            delete cacheRelyingOn[item][start];
            if ( Object.keys(cacheRelyingOn[item]).length === 0 ) {
              delete cacheRelyingOn[item];
            }
          }
        });
      }
    });
    cur = [...allMembers].filter( item => !(item in cacheRelyingOn) );
  }
  return ret;
}

console.log( printWorkflows([["cook", "eat"], ["study", "eat"], ["sleep", "study"]]) );
// {{"sleep", "cook"},.
// {"study"},
// {"eat"}}

