/**
690. Employee Importance

You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all their subordinates.

Example 1:

Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
Output: 11
Explanation:
Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.
 

Note:

One employee has at most one direct leader and may have several subordinates.
The maximum number of employees won't exceed 2000.

 */


/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const cache = {};
    employees.map( item => {
        cache[item.id] = {
            val: item.importance,
            sub: item.subordinates
        };
    });
    
    // console.log(cache);
    
    // bfs
    let cur = [ id ];
    const all = new Set();
    while ( cur.length > 0 ) {
        // console.log( cur );
        
        cur.map( item => all.add(item) );
        let next = new Set();
        
        cur.map(id => {
            cache[id].sub.map( item => {
                if ( all.has(item) || next.has(item) ) {
                    // ignore
                } else {
                    next.add(item);
                }  
            })
        })
        cur = [...next];
    }
    
    // res
    let ret = 0;
    [...all].map(item => ret += cache[item].val );
    return ret;  
};


/**
[[1,2,[2]], [2,3,[]]]
2
[[1,2,[2]], [2,3,[]]]
1
[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]
1
*/