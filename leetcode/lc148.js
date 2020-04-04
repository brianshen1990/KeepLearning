/**
147. Insertion Sort List

Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 

Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

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
var insertionSortList = function(head) {
    if ( !head ) {
        return head;
    }
    let ret = head;
    let preNext = head;
    let next = head.next;
    while( next ) {
        // console.log( next.val )
        let pos = ret;
        let prev = null;
        while ( pos && pos !== next && pos.val < next.val  ) {
            prev = pos;
            pos = pos.next;
        }
        // console.log('here', pos.val)
        if ( pos === next ) {
            // the biggest, no need to move
            preNext = next;
            next = next.next;
        } else {
            // new place
            if ( prev ) {
                prev.next = next;
            } else {
                // should adjust head
                ret = next;
            }
            // previous place
            preNext.next = next.next;
            next.next = pos;
            // preNext = next; // keep prev
            next = preNext.next;
        }
    }
    return ret;
};



/**
[]
[1]
[1,2]
[2,1]
[-1,5,3,4,0]
[-1,5,3,4,0,5,6,7,8,9,0,1,2,34,56,32,567]
 */