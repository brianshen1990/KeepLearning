/**
82. Remove Duplicates from Sorted List II

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

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
    if( !head ) {
        return head;
    }
    let ret = null;
    let rmDup = null;
    let cur = head;
    
    while( cur ) {
        if( cur.next ) {
            let temp = cur.next;
            if( temp.val !== cur.val ) {
                // console.log('lucky diff');
                // lucky, just push 
                if( ! rmDup ){
                    rmDup = cur;
                    ret = rmDup;
                } else {
                    rmDup = rmDup.next;
                    rmDup.val = cur.val;
                }
                cur = cur.next;
            } else {
                // console.log('sad duplicate');
                // so meet duplicate !!!!!
                temp = temp.next;
                while( temp && temp.val === cur.val ) {
                    temp = temp.next;
                }
                if( temp ) {
                    // find one that is not duplicate
                    cur = temp;
                } else {
                    // nothing left;
                    cur = null;
                } 
                
            }
        } else {
            // no more ele, so just push
            // console.log('No more');
            if( ! rmDup ){
                rmDup = cur;
                ret = rmDup;
            } else {
                rmDup = rmDup.next;
                rmDup.val = cur.val;
            }
            cur = cur.next;
        }
    }
    
    if(rmDup) {
        rmDup.next = null;
    }
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
    
    const dummyNode = new ListNode(0, head);
    head = dummyNode;
    while ( head.next ) {
        if ( head.next.next &&  head.next.next.val === head.next.val ) {
            let tempNode = head.next;
            while ( tempNode.next && tempNode.next.val === tempNode.val ) {
                tempNode = tempNode.next;
            }
            head.next = tempNode.next;
        } else {
            head = head.next;
        }
    }
    
    return dummyNode.next;
    
};