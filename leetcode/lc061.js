/**
61. Rotate List

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL


 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if( !head ) {
        return head;
    }
    if( k === 0) {
        return head;
    }
    let Len = 0;    
    let pointer = head;
    while( pointer && Len < k ) {
        pointer = pointer.next;
        Len++;
    }
    console.log(Len);
    if( pointer ) {
        // not oversize, do nothing
    } else {
        // oversize, get mod
        console.log( 'fall oversize way' );
        k = k % Len;
        if( k !== 0 ) {
            Len = 0;
            pointer = head;
            while( pointer && Len < k ) {
                pointer = pointer.next;
                Len++;
            }
        } else {
            // stay same
            return head;
        }
    }

    let headPointer = head;
    let prevHeadPointer = null;
    let prevPointer = null;
    while( pointer ){
        prevHeadPointer = headPointer;
        headPointer = headPointer.next;
        prevPointer = pointer;
        pointer = pointer.next;
    }
    prevHeadPointer.next = null;
    prevPointer.next = head;
    return headPointer;
    
};



function ListNode(val) {
    this.val = val;
    this.next = null;
}

var turnArrayToList = function(arr) {
    if( arr.length === 0 ) {
        return null;
    }
    let header = null;
    let next = null;
    for( let i = 0 ; i< arr.length ;i++ ) {
        let temp = new ListNode(arr[i]);
        if( ! header ) {
            header = temp;
        } else {
            next.next = temp;
        }
        next = temp;
    }
    return header;
}
function printList(list) {
    if( !list) {
        return '';
    } 
    let ret = '';
    while(list) {
        ret  = ret + list.val + ' -> ';
        list = list.next;
    }
    console.log( ret );
}


printList(  rotateRight( turnArrayToList([1,2,3,4,5]), 2 )  )
// 4 -> 5 -> 1 -> 2 -> 3 -> 
printList(  rotateRight( turnArrayToList([1,2,3,4,5]), 0 )  )
// 1,2,3,4,5
printList(  rotateRight( turnArrayToList([1,2,3,4,5]), 5 )  )
// 1,2,3,4,5
printList(  rotateRight( turnArrayToList([1,2,3,4,5]), 1 )  )
// 5,1,2,3,4
printList(  rotateRight( turnArrayToList([1,2,3,4,5]), 6 )  )
// 5,1,2,3,4