/**
83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

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
var deleteDuplicates = function(head) {
  if( ! head ) {
      return head;
  }
  let ret = head;
  let noDup = head;
  let cur = head.next;
  while(cur) {
      if( noDup.val !== cur.val ) {
          // console.log('not same');
          noDup = noDup.next;
          noDup.val = cur.val;
      }
      cur = cur.next;
  }
  noDup.next = null;
  return ret;
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
 * @return {ListNode}
 */
var deleteDuplicates2nd = function(head) {
    if ( !head ) {
        return head;
    }
    
    let node = head;
    while ( node ) {
        if ( node.next && node.next.val === node.val ) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};