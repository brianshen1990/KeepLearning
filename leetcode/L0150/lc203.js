/**
203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if ( !head ) {
        return head;
    }
    
    const dummy = new ListNode(0, head);
    let pre = dummy;
    while ( head ) {
        if ( head.val === val ) {
            pre.next = head.next;
            head = head.next;
        } else {
            pre = head;
            head = head.next;
        }
    }
    return dummy.next;
    
};


/**
[1,2,6,3,4,5,6]
6
[]
0
[1,1,1,2,3]
1
[1,1,1,6,6]
6
[1,1,1]
1
 */