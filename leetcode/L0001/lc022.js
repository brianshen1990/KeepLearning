/*
22. Generate Parentheses
Medium
1927
121


Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let getRes = function(arrTemp, n){
    let ret = 0;
    ret = ( arrTemp.map(item=>{
      return item === 1 ? "(" : ")";
    }) ).join("");
    let len = ret.length;
    let des = n*2;
    for(let i = len ; i < des ; i++){
      ret += ")";
    }
    return ret;
  }
  let checkOK = function(arrTemp){
    let ret = 0;
    for(let  i = 0; i< arrTemp.length; i++){
      ret += arrTemp[i];
      if(ret < 0){
        break;
      }
    }
    return ret >= 0;
  }
  let helper = function(arrTemp, used, all, retRet){
    if(used === all ){
      if(checkOK(arrTemp)){
        retRet[getRes(arrTemp, all)] = true;
      }
      return;
    }else{
      let bottom = 0;
      if(used === 0){
        bottom = 1;
      }
      for(let i = all - used; i >= bottom ; i--){
        for(let j = 0; j< i; j++){
          arrTemp.push(1);
        }
        arrTemp.push(-1);
        if(!checkOK(arrTemp)){
          arrTemp.pop();
          for(let j = 0; j < i; j++){
            arrTemp.pop();
          }
          break;
        }else{
          helper(arrTemp, used+i , n, ret);
          arrTemp.pop();
          for(let j = 0; j < i; j++){
            arrTemp.pop();
          }
        }
      }
    }
  }
  let ret = {};
  helper([], 0, n, ret);
  return Object.keys(ret);
};

let test = function(){
    console.log(generateParenthesis(1));
    console.log(generateParenthesis(2));
    console.log(generateParenthesis(3));
    console.log(generateParenthesis(10));
}
test();