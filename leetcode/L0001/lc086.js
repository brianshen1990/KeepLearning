/**
86. Partition List

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(! head ) {
        return head;
    }
    let ret = null;
    let headLess = null;
    let retMore = null;
    let headMore = null;
    
    let cur = head;
    while( cur ) {
        if( cur.val < x ) {
            // to left;
            if( headLess ) {
                headLess.next = cur;
                headLess = cur;
            } else {
                headLess = cur;
            }
            if ( !ret ) {
                ret = headLess;
            }
        } else {
            // keep
            if ( headMore ) {
                headMore.next = cur;
                headMore = cur;
            } else {
                headMore = cur;
            }
            if (!retMore) {
                retMore = headMore;
            }
        }
        let temp = cur;
        cur = cur.next;
        temp.next = null;
    }
    
    if( !ret ) {
        ret = retMore;
    }
    if( headLess ) {
        headLess.next = retMore;
    }
    return ret;    
};

/**
[1,4,3,2,5,2]
3
[1,4,3,2,5,2]
0
[1,4,3,2,5,2]
6
[1]
1
[]
1
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
 * @param {number} x
 * @return {ListNode}
 */
var partition2nd = function(head, x) {
    const dummyL = new ListNode(0);
    const dummyG = new ListNode(0);
    
    let headL = dummyL;
    let headG = dummyG;
    
    while ( head ) {
        if ( head.val < x ) {
            headL.next = head;
            headL = headL.next;
        } else {
            headG.next = head;
            headG = headG.next;
        }
        head = head.next;
    } 
    headG.next = null;    
    headL.next = dummyG.next;
    return dummyL.next;
};