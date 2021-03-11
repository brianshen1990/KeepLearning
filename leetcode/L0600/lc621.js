/**
621. Task Scheduler

Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

 

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
Example 3:

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
 

Constraints:

1 <= task.length <= 104
tasks[i] is upper-case English letter.
The integer n is in the range [0, 100].
 */


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    if ( n === 0 ) return tasks.length;
    tasks.sort( (a,b) => a>b ? 1:-1 );
    // console.log(tasks);
    let i = 0 ;
    let maxLen = 0;
    let maxNum = 0;
    while ( i < tasks.length ) {
        let next = i;
        while ( next < tasks.length && tasks[i] === tasks[next] ) {
            next++;
        }
        if ( next-i > maxLen ) {
            maxLen = next-i;
            maxNum = 1;
        } else if ( next-i === maxLen )  {
            maxNum++;
        }
        i = next;
    }
    // console.log(maxLen, maxNum);
    
    return Math.max( (maxLen - 1) * ( n + 1 ) + 1 + maxNum - 1, tasks.length)
    // A B D C A D B C E A B C 
};

/**
["A","A","A","B","B","B"]
2
["A","A","A","B","B","B"]
0
["A","A","A","A","A","A","B","C","D","E","F","G"]
2
["A","A","A","B","B","B", "C","C","C", "D", "D", "E"]
2
*/