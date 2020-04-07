/*
25. Reverse Nodes in k-Group
Hard
783
176


Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
Accepted
152,403
Submissions
447,821

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if(k===1){
    return head;
  }

  let ReverseK = function(beg, end){
    if(end === beg){
      return beg;
    }
    let pre = null;
    let now = beg;
    let next = null;
    if(now){
      next = now.next;
    }
    while(pre!==end){
      now.next = pre;
      pre = now;
      now = next;
      if(next){
        let tempStore = next.next;
        next.next = now;
        next = tempStore;
      }
    }
    return pre;
  };


  // return ReverseK(head);
  let ret = null;
  let pres = null;
  let endRecu = head;
  while(endRecu){
    let recu = endRecu;
    let sBreak = false;
    for(let i = 0; i< k-1; i++){
      if(endRecu){
        endRecu = endRecu.next;
      }else{
        sBreak = true;
      }
      if(sBreak){
        break;
      }
    }
    if(sBreak || !endRecu){
      if(pres){
        pres.next = recu;
      }
      break;
    }else{
      let tempRec = endRecu.next;
      endRecu.next = null;
      let revBeg = ReverseK(recu, endRecu);
      if(!ret){
        ret = revBeg;
      }
      if(pres){
        pres.next = revBeg;
      }
      pres = recu;
      endRecu = tempRec;
    }
  }
  if(!ret){
    ret = head;
  }
  return ret;
};

let test = function () {
  let l11 = ListNodeGenerateFromArray([1, 2, 3, 4,5,6,7,8,9]);
  let l12 = reverseKGroup(l11, 1);
  ListNodePrint(l12);
  let l21 = ListNodeGenerateFromArray([1, 2, 3, 4,5,6,7,8,9]);
  let l22 = reverseKGroup(l21, 2);
  ListNodePrint(l22);
  let l31 = ListNodeGenerateFromArray([1, 2, 3, 4,5,6,7,8,9]);
  let l32 = reverseKGroup(l31, 3);
  ListNodePrint(l32);
  let l41 = ListNodeGenerateFromArray([1, 2, 3, 4,5,6,7,8,9]);
  let l42 = reverseKGroup(l41, 4);
  ListNodePrint(l42);
  let l51 = ListNodeGenerateFromArray([1, 2, 3, 4,5,6,7,8,9]);
  let l52 = reverseKGroup(l51, 5);
  ListNodePrint(l52);
  let l61 = ListNodeGenerateFromArray([1, 2, 3, 4,5,6,7,8,9]);
  let l62 = reverseKGroup(l61, 6);
  ListNodePrint(l62);
  let l71 = ListNodeGenerateFromArray([1]);
  let l72 = reverseKGroup(l71, 2);
  ListNodePrint(l72);
}
test();