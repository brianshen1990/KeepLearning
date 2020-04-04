/*
23. Merge k Sorted Lists
Hard
1693
106


Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
Accepted
292,544
Submissions
941,168

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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let mergeTwoLists = function (l1, l2) {

    let ret = null;
    let pointer = null;
    while (l1 || l2) {
      let shouldReturn = false;
      let shouldNext = false;
      if (l1 && l2) {
        if (pointer) {
          if (l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next;
          } else {
            pointer.next = l2;
            l2 = l2.next;
          }
          shouldNext = true;
        } else {
          if (l1.val < l2.val) {
            pointer = l1;
            l1 = l1.next;
          } else {
            pointer = l2;
            l2 = l2.next;
          }
        }
      } else {
        if (pointer) {
          if (l1) {
            pointer.next = l1;
          } else {
            pointer.next = l2;
          }
          shouldNext = true;
        } else {
          if (l1) {
            pointer = l1;
          } else {
            pointer = l2;
          }
        }
        shouldReturn = true;
      }
      if (!ret) {
        ret = pointer;
      }
      if (shouldNext) {
        pointer = pointer.next;
      }
      if (shouldReturn) {
        break;
      }
    }
    return ret;
  };
  
  if(lists.length === 0){
    return null;
  }
  while(lists.length > 1){
    let temp  = [];
    for(let  i = 0; i< lists.length; i+=2){
      if(i + 1 >= lists.length ){
        temp.push(lists[i]);
      }else{
        temp.push(mergeTwoLists(lists[i], lists[i+1]));
      }
    }
    lists = temp;
  }
  return lists[0];
};

let test = function () {
  let l11 = ListNodeGenerateFromArray([1, 4, 5,8,9]);
  let l12 = ListNodeGenerateFromArray([1, 3, 4,10,45]);
  let l13 = ListNodeGenerateFromArray([2, 6]);
  let l14 = mergeKLists([l11, l12, l13]);
  ListNodePrint(l14);
}
test();