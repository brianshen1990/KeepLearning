/*

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

*/

const ListNode = require('./helper/ListNode.js').ListNode;
const ListNodeGenerateFromArray = require('./helper/ListNode.js').ListNodeGenerateFromArray;
const ListNodePrint = require('./helper/ListNode.js').ListNodePrint;


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let firNode = head;
    let secNode = head;
    let beforeNode = null;
    for(let i = 0; i<n ; i++){
        if( secNode ){
            secNode = secNode.next;
        }else{
            return head;
        }
    }
    while(secNode){
        beforeNode = firNode;
        firNode = firNode.next;
        secNode = secNode.next;
    }
    if(beforeNode){
        beforeNode.next = firNode.next;
    }else{
        return head = head.next;
    }
    return head;
};

let test = function(){
    let l1 = ListNodeGenerateFromArray([1, 2, 3, 4, 5]);
    let res = removeNthFromEnd(l1, 3);
    ListNodePrint(res);
    let l2 = ListNodeGenerateFromArray([1]);
    let res2 = removeNthFromEnd(l2, 1);
    ListNodePrint(res2);
    let l3 = ListNodeGenerateFromArray([1,2]);
    let res3 = removeNthFromEnd(l3, 2);
    ListNodePrint(res3);
}
test();