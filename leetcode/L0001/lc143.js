/**
143. Reorder List

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // cal len
    let len = 0;
    let fir = head;
    while(fir) {
        len++;
        fir = fir.next;
    }
    // no need to change
    if ( len <= 2 ) {
        return;
    }
    // go to middle
    let middle =  Math.ceil( len / 2 );
    // console.log(middle);
    let sec = head;
    let i = 0;
    while ( i < middle ) {
        sec = sec.next;
        i++;
    }
    // console.log( sec.val );
    fir = head;
    sec = reverse( sec );
    // console.log( sec, sec.next );
    let dealLen = Math.floor( len / 2 );
    while ( dealLen > 0 ) {
        dealLen--;
        let fNext = fir.next;
        fir.next = sec;
        let sNext = sec.next;
        sec.next = fNext;
        fir = fNext;
        sec = sNext;
    }
    if ( fir ) {
        // console.log( "deal Odd" );
        fir.next = null;
    }
    return head;
};


var reverse = function(sec) {
    let cur = sec;
    let prev = null;
    while ( cur ) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}


/**
[1,2,3,4]
[1,2,3,4,5]
[1,2,3,4,5,5,6,7,8,9,0,3,3,2,1]
[1,2]
[1]
[1,2,3]
[]
 */