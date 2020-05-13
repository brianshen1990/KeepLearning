/**
148. Sort List

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

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
var sortList = function(head) {
    // merge sort 
    
    const _middleNode = (_head) => {
        if ( !_head ) {
            return _head;
        }
        let slow = _head;
        let fast = _head.next;
        while ( fast && fast.next ) {
            slow = slow.next;
            fast = fast.next;
            fast = fast && fast.next;
        }
        return slow;
    };
    
    const _mergeNode = (list1, list2) => {
        const dummy = new ListNode(0);
        let _head = dummy;
        while ( list1 && list2 ) {
            if ( list1.val < list2.val ) {
                _head.next = list1;
                list1 = list1.next;
            } else {
               _head.next = list2;
                list2 = list2.next; 
            }
            _head = _head.next;
        }
        if ( list1 ) {
            _head.next = list1;
        }
        if ( list2 ) {
            _head.next = list2;
        }
        return dummy.next;
    }
    
    const _mergeSort = (_head) => {
        if ( !_head ) {
            return null;
        }
        if ( !_head.next ) {
            return _head;
        }
        
        const middle = _middleNode(_head);
        // console.log( middle && middle.val )
        const right = _mergeSort(middle.next);
        middle.next = null;
        const left = _mergeSort(_head);
        return _mergeNode(left, right);
    }
    
    return _mergeSort(head);
    
};


/**
[4,2]
[4]
[]
[4,2,1,3]
[-1,5,3,4,0]
 */