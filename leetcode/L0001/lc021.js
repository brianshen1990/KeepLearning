/*
Merge Two Sorted Lists
Easy
1584
218


Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require('./helper/ListNode.js').ListNode;
const ListNodeGenerateFromArray = require('./helper/ListNode.js').ListNodeGenerateFromArray;
const ListNodePrint = require('./helper/ListNode.js').ListNodePrint;


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let ret = null;
    let pointer = null;
    while(l1 || l2){
        let shouldReturn  = false;
        let shouldNext = false;
        if(l1 && l2){
            if(pointer){
                if(l1.val < l2.val){
                    pointer.next = l1;
                    l1 = l1.next;
                }else{
                    pointer.next = l2;
                    l2 = l2.next;
                }
                shouldNext = true;
            }else{
                if(l1.val < l2.val){
                    pointer = l1;
                    l1 = l1.next;
                }else{
                    pointer = l2;
                    l2 = l2.next;
                }
            }
        }else{
            if(pointer){
                if(l1){
                    pointer.next = l1;
                }else{
                    pointer.next = l2;
                }
                shouldNext = true;
            }else{
                if(l1){
                    pointer = l1;
                }else{
                    pointer = l2;
                }
            }
            shouldReturn = true;
        }
        if(!ret){
            ret = pointer;
        }
        if(shouldNext){
            pointer = pointer.next;
        }
        if(shouldReturn){
            break;
        }
    }
    return ret;
};

let test = function(){
    let l11 = ListNodeGenerateFromArray([1, 2, 4]);
    let l12 = ListNodeGenerateFromArray([1, 3, 4]);
    let l13 = mergeTwoLists(l11, l12);
    ListNodePrint(l13);
    let l21 = ListNodeGenerateFromArray([1, 2, 4]);
    let l22 = ListNodeGenerateFromArray([]);
    let l23 = mergeTwoLists(l21, l22);
    ListNodePrint(l23);
    let l31 = ListNodeGenerateFromArray([]);
    let l32 = ListNodeGenerateFromArray([1, 2, 4]);
    let l33 = mergeTwoLists(l31, l32);
    ListNodePrint(l33);
    let l41 = ListNodeGenerateFromArray([1,3,5,7,9]);
    let l42 = ListNodeGenerateFromArray([2,4,6,8,10]);
    let l43 = mergeTwoLists(l41, l42);
    ListNodePrint(l43);
}
test();


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
var mergeTwoLists2nd = function(l1, l2) {
    const dummy = new ListNode(0);
    let head = dummy;
    while( l1 && l2 ) {
        if ( l1.val <= l2.val ) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    if ( l1 ) {
        head.next = l1;
    }
    if ( l2 ) {
        head.next = l2;
    }
    return dummy.next;
};

/**
[1,2,4]
[1,3,4]
[1,2,4]
[]
[]
[1,2,4]
[1]
[1,2]
[2]
[3]
[]
[]
 */