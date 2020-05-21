/**
207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 

Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5

 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const relay = {};
    const relaied = {};
    const handled = new Array(numCourses).fill(false);
    
    for ( let i = 0; i < prerequisites.length; i++ ) {
        const _relay = prerequisites[i][0];
        const _relaied = prerequisites[i][1];

        relay[_relay] = relay[_relay] || [];
        relay[_relay].push( _relaied );
        
        relaied[_relaied] = relaied[_relaied]  || [];
        relaied[_relaied].push( _relay );
    }

    let nextHandle = [];
    for ( let i = 0; i < numCourses ; i++ ) {
        if ( ! relay[i]  ) {
            nextHandle.push(i);
        }   
    }
    while(nextHandle.length > 0) {
        // console.log( nextHandle );
        let next = [];
        for ( let i = 0; i < nextHandle.length ; i++ ) {
            const course = nextHandle[i];
            if ( handled[course] ) {
                continue;
            }
            handled[course] = true;
            const connected = relaied[course] || [];
            // remove relation 
            for ( let j = 0 ; j < connected.length ; j++ ) {
                const removePre = connected[j];
                const index =  relay[ removePre ].indexOf(course);
                if ( index >= 0 ) {
                    relay[ removePre ].splice(index, 1); 
                }
                if ( relay[ removePre ].length === 0 ) {
                    next.push(removePre);
                }
            }
        }
        nextHandle = next;
    }
    
    let ret = true;
    for ( let i = 0; i < numCourses; i++ ) {
        if (!handled[i]) {
            ret = false;
            break;
        }
    }
    return ret;
};


/**
2
[[1,0]]
2
[[1,0], [0,1]]
4
[[1,0],[2,0],[2,1],[3,1],[3,2]]
4
[[1,0],[2,0],[3,1],[3,2]]
 */