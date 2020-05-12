/**
206. Reverse Linked List

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if ( !head ) {
        return head;
    }

    let pre = null;
    while ( head ) {
        const temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;
    }
    return pre;
    
};


/**
[1,2,3,4,5]
[1]
[]
 */