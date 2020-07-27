/*
# Now let's switch over to the back-end of our social network. We have some automated batch jobs that we use to handle expensive tasks that run periodically throughout the day, like updating statistics for the most popular posts. We've been given some input that shows the dependencies between each of these batch jobs.

# For example, in this input, "clean" must be executed before "mapper" can execute.

# Given the last execution time for each step of the workflow, we want to find the set of all steps that are "stale" -- steps that have not executed since the last time one of their precursor steps executed. For example, in this case, "update" is in the output because "mapper" must occur before "update", but "update" has not been executed since the last time "mapper" was executed. If a task is stale, all tasks after it are stale too -- so "statistics" is stale because of "mapper".

#                          /--> reducer
#          /---> mapper --|
# clean --|                \--> update --\
#          \                              --> statistics
#           \---> metadata --------------/
#                         \
#                          \--> timestamp
# Sample input:
.留学论坛-一亩-三分地
# precursor_steps = [
#   ["clean", "mapper"],
#   ["metadata", "statistics"],
#   ["mapper", "update"],
#   ["update", "statistics"],
#   ["clean", "metadata"],
#   ["mapper", "reducer"],
#   ["metadata", "timestamp"],

# last_execution_times = [
#   ["clean", "20170302-1129"],
#   ["mapper", "20170302-1155"],
#   ["update", "20170302-1150"],
#   ["statistics", "20170302-1153"],
#   ["metadata", "20170302-1130"],
#   ["reducer", "20170302-1540"],

# Sample output (in any order):

# find_stale_steps(precursor_steps, last_execution_times) =
#   ["update", "statistics", "timestamp"]

----------------


*/

const find_stale_steps = (precursor_steps, last_execution_times) => {
  // top sort + comapre tiemstamp
  const allSteps = new Set();
  const cacheFromTo = {};
  const cacheToFrom = {};
  precursor_steps.map( item => {
    allSteps.add( item[0] );
    allSteps.add( item[1] );
     cacheFromTo[item[0]] = cacheFromTo[item[0]] || {};
     cacheFromTo[item[0]][item[1]] = true;
     cacheToFrom[item[1]] = cacheToFrom[item[1]] || {};
     cacheToFrom[item[1]][item[0]] = true;
  })
  const allTimeExecuted = {};
  last_execution_times.map( item => {
    allTimeExecuted[item[0]] = item[1];
  })
  
  const leftSteps = new Set([...allSteps]);
  const passSteps = new Set();
  const notPassSteps = new Set();
  let cur = [...leftSteps].filter( item => !(item in cacheToFrom) );
  while( cur.length > 0 ) {
    console.log(...cur);
    cur.map( item => {
      passSteps.add(item);
      leftSteps.delete(item);
    });
    cur.map( step => {
      cacheFromTo[step] && Object.keys(cacheFromTo[step]).map( nStep => {
        if ( !( nStep in allTimeExecuted ) ) {
          console.log("hit")
          notPassSteps.add( nStep );
        } else if ( allTimeExecuted[nStep] < allTimeExecuted[step] ) {
          console.log("hit")
          notPassSteps.add( nStep );
        } 
      })
    })
    
    cur.map( step => {
      cacheFromTo[step] && Object.keys(cacheFromTo[step]).map( nStep => {
        if ( (!notPassSteps.has(nStep)) && step in cacheToFrom[nStep] ) {
          delete cacheToFrom[nStep][step];
          if ( Object.keys(cacheToFrom[nStep]).length === 0 ) {
            delete cacheToFrom[nStep];
          }
        }
      })
    });
    cur = [...leftSteps].filter( item => !(item in cacheToFrom) ).filter( item => ! notPassSteps.has(item) );
    console.log("====")
  }
  
  return [...allSteps].filter( item => !passSteps.has(item) );
  
}

const precursor_steps = [
  ["clean", "mapper"],
  ["metadata", "statistics"],
  ["mapper", "update"],
  ["update", "statistics"],
  ["clean", "metadata"],
  ["mapper", "reducer"],
  ["metadata", "timestamp"]]

const last_execution_times = [
   ["clean", "20170302-1129"],
   ["mapper", "20170302-1155"],
   ["update", "20170302-1150"],
   ["statistics", "20170302-1153"],
   ["metadata", "20170302-1130"],
   ["reducer", "20170302-1540"]]
console.log(find_stale_steps(precursor_steps, last_execution_times));
// ["update", "statistics", "timestamp"]

