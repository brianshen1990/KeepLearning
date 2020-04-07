/**
142. Linked List Cycle II
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


 

Follow-up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let first = hasCycle( head );
    if ( ! first ) {
        return null;
    }
    let sec = first.next;
    let len = 1;
    while( sec !== first ) {
        sec = sec.next;
        len++;
    }
    // console.log( len );
    first = head;
    sec = head;
    while( len > 0 ) {
        sec = sec.next;
        len--;
    }
    // console.log( sec.val )
    while ( first !== sec ) {
        first = first.next;
        sec = sec.next;
    }
    return first;
};

var hasCycle = function(head) {
    if( !head ) {
        return null;
    }
    let first = head;
    let sec = head.next;
    let ret = null;
    while( sec ) {
        if ( first ) {
            first = first.next;
        }
        if ( sec ) {
            sec = sec.next;
        }
        if ( sec ) {
            sec = sec.next;
        }
        if (first === sec) {
            ret = first;
            break;
        }
    }
    return ret;
};


/**
[3,2,0,-4]
1
[1,2]
0
[]
-1
[1]
-1
[1]
0
 */