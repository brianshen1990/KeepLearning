/**
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
    if ( !head.next ) {
        return true;
    }
    
    
    let nHead = head;
    let len = 0;
    while ( nHead ) {
        len++;
        nHead = nHead.next;
    }
    // console.log( len );
    
    // reverse first half part
    let revLen = Math.floor(len / 2);
    let prev = null, cur = head, next = null;
    while ( revLen-- ) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    // compare 2 part
    let leftHead = prev;
    let rightHead = next;
    if ( len % 2 === 1 ) {
        rightHead = rightHead.next;
    }
    let ret = true;
    while ( leftHead ) {
        if ( leftHead.val !== rightHead.val ) {
            ret = false;
            break;
        } else {
            leftHead = leftHead.next;
            rightHead = rightHead.next;
        }
    }
    return ret;
};

/**
[1,2]
[1]
[1,2,2,1]
[1,2,2]
[]
[1,2,3,4,5,6,7,6,5,4,3,2,1]
[1,2,3,4,5,6,6,5,4,3,2,1]
 */