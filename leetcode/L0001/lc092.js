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


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween2nd = function(head, m, n) {
    if ( (!head) || n < m ) {
        return null;
    }
    
    const dummy = new ListNode(0, head);
    
    let preM = dummy;
    for ( let i = 1; i < m ; i++ ) {
        preM = head;
        head = head.next;
    }
    
    let pre = null;
    const postN = head;
    for ( let i = m ; i <= n ; i++ ) {
        const temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;
    }
    
    preM.next = pre;
    postN.next = head;
    
    return dummy.next;
    
    
};

/**
[1,2,3,4,5]
2
4
[1,2,3,4,5]
2
2
[1,2,3,4,5]
2
4
[1,2,3,4,5]
1
5
[1,2,3]
1
2
 */