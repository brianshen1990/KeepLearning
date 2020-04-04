/*
24. Swap Nodes in Pairs
Medium
764
64


Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
Accepted
252,841
Submissions
608,571

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // Given 1->2->3->4, you should return the list as 2->1->4->3.
  if(!head){
    return null;
  }
  let Even = head;
  let EvenHead = Even;
  head =  head.next;
  if(!head){
    return Even;
  }
  let Odd = head;
  let OddHead = Odd;
  head = head.next;
  // More than two;
  let EvenBool = true;
  while(head){
    if(EvenBool){
      Even.next = head;
      Even = Even.next;
      EvenBool = false;
    }else{
      Odd.next = head;
      Odd = Odd.next;
      EvenBool = true;
    }
    head = head.next;
  }
  Even.next = null;
  Odd.next = null;
  let ret = OddHead;
  let retHead = ret;
  let begin = true;
  while(EvenHead){
    if(begin){
      begin = false;
      OddHead = OddHead.next;
    }else{
      if(OddHead){
        ret.next = OddHead;
        ret = ret.next;
        OddHead = OddHead.next;
      }
    }
    ret.next = EvenHead;
    ret = ret.next;
    EvenHead = EvenHead.next;
  }
  return retHead;
};

let test = function () {
  let l11 = ListNodeGenerateFromArray([1, 2, 3, 4]);
  let l12 = swapPairs(l11);
  ListNodePrint(l12);
  let l21 = ListNodeGenerateFromArray([1, 2, 3]);
  let l22 = swapPairs(l21);
  ListNodePrint(l22);
  let l31 = ListNodeGenerateFromArray([1]);
  let l32 = swapPairs(l31);
  ListNodePrint(l32);
  let l41 = ListNodeGenerateFromArray([]);
  let l42 = swapPairs(l41);
  ListNodePrint(l42);
}
test();