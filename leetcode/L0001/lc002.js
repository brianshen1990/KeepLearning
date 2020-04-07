
// ES6
// import { ListNode, ListNodeGenerateFromArray, ListNodePrint } from './helper/ListNode.js'
// CommonJS
const ListNode = require('./helper/ListNode.js').ListNode;
const ListNodeGenerateFromArray = require('./helper/ListNode.js').ListNodeGenerateFromArray;
const ListNodePrint = require('./helper/ListNode.js').ListNodePrint;

/*
`You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
`
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


let addTwoNumbers = function(l1, l2) {
    let _helperAddTwoNumbers = function(l1, l2){
        let res = null;
        let pro = false;
        let beg = null;
        while(l1){
            let tempVal = l1.val + (l2 ? l2.val : 0) + ( pro ? 1 : 0 );
            pro = tempVal>=10;
            tempVal = tempVal % 10;
            let tempNode = new ListNode(tempVal);
            if(res){
                res.next = tempNode;
                res = tempNode;
            }else{
                beg = tempNode;
                res = tempNode;
            }
            l1 = l1.next;
            l2 = ( l2 ? l2.next : null );
        }
        if(res && pro){
            let tempNode = new ListNode(1);
            res.next = tempNode;
        }
        return beg;
    }

    let _calcuLength = function(l1){
        let len = 0;
        let temp = l1;
        while(temp){
            len++;
            temp = temp.next;
        }
        return len;
    }

    let res = null;
    let l1Len = _calcuLength(l1);
    let l2Len = _calcuLength(l2);
    if(l1Len >= l2Len){
        res = _helperAddTwoNumbers(l1, l2);
    }else if(l1Len < l2Len){
        res = _helperAddTwoNumbers(l2, l1);
    }
    return res
};



let test = function(){
    // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    // Output: 7 -> 0 -> 8
    let l1 = ListNodeGenerateFromArray([2, 4, 3]);
    let l2 = ListNodeGenerateFromArray([5, 6, 4]);
    let res = addTwoNumbers(l1, l2);
    ListNodePrint(l1);
    ListNodePrint(l2);
    ListNodePrint(res);
}

test();
