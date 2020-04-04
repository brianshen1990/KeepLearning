
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let ListNodeGenerateFromArray = function(arr){
    let res = null;
    for(let index = arr.length-1 ; index>=0 ; index--){
        let tempNode = new ListNode(arr[index]);
        tempNode.next = res;
        res = tempNode;
    }
    return res;
}
let ListNodePrint = function(listNode){
    let str = "";
    while(listNode){
        str += listNode.val;
        str += ' -> ';
        listNode = listNode.next;
    }
    console.log(str);
}

let _test = function(){
    let listNode = ListNodeGenerateFromArray([1,2,3]);
    ListNodePrint(listNode);
}

let ArrayCompare = function(a1, a2){
    if(! a1 && !a2 ){
        return true;
    }
    if(a1 && a2){
        
        if(a1.length != a2.length){
            return false;
        }else{
            let ret = true;
            for( let i = 0; i< a1.length; i++ ){
                if(a1[i] !== a2[i]){
                    ret = false;
                    break;
                }
            }
            return ret;
        }
    }else{
        return false;
    }
}

// _test();
// CommonJS
module.exports.ListNode = ListNode;
module.exports.ListNodeGenerateFromArray = ListNodeGenerateFromArray;
module.exports.ListNodePrint = ListNodePrint;
module.exports.ArrayCompare = ArrayCompare;
// ES6 
// export {  ListNode, ListNodeGenerateFromArray, ListNodePrint };

