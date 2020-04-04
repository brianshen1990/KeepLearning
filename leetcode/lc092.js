/**
92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if ( !head ) {
        return head;
    }
    if( !head.next ) {
        return head;
    }
    if( m===n ) {
        return head;
    }
    
    let beforeM = null;
    let justM = null;
    let afterN = null; 
    let count = 1;
    let cur = head;
    while( count < m ) {
        beforeM = cur;
        cur = cur.next;
        count++;
    }
    justM = cur;
    let prev = null;
    let temp = null;
    while ( count <= n ) {
        temp = cur;
        cur = cur.next;
        temp.next = prev;
        prev = temp;
        count++;
    }
    afterN = cur;
    // console.log( temp.val, afterN.val);
    // handle begin
    if( beforeM ) {
        beforeM.next = temp;
    } else {
        head = temp;
    }
    // handle end
    justM.next = afterN;
    
    return head;
};