/**
210. Course Schedule II
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
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

    let retArr = [];
    
    let nextHandle = [];
    for ( let i = 0; i < numCourses ; i++ ) {
        if ( ! relay[i]  ) {
            nextHandle.push(i);
        }   
    }
    while(nextHandle.length > 0) {
        retArr = retArr.concat(nextHandle);
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
    if ( ret ) {
        return retArr;
    } else {
        return []   
    }
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