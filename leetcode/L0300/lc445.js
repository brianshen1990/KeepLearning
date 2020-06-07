/**
445. Add Two Numbers II

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    const reverseList = (head) => {
        let cur = head, prev = null, next = null;
        while ( cur ) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    } 
    
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    let extra = 0;
    let dummy = new ListNode(0);
    let head = dummy;
    
    while ( l1 || l2 ) {
        let sum = ( l1 ? l1.val : 0 ) + ( l2 ? l2.val : 0 ) + extra;
        head.next = new ListNode( sum % 10 );
        head = head.next;
        extra = Math.floor(sum / 10);
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    if (extra) {
        head.next = new ListNode(extra);
        head = head.next;
    }
    
    // console.log(dummy);
    dummy = reverseList(dummy.next);
    return dummy;
};

/** 
[7,2,4,3]
[5,6,4]
[9,4,4,3]
[5,6,4]
[9,4,4,3]
[]
[]
[9,4,4,3]
[9]
[1]
*/