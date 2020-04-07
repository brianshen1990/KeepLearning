/**
60. Permutation Sequence

The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"

 */


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let bitLen = [];
    let leftNums = [];
    let base = 1;
    for( let i = 1; i < n ; i++ ) {
        leftNums.push(i);
        base = base * i;
        bitLen.push(base * 1);
    }
    leftNums.push(n);
    bitLen = bitLen.reverse();
    // console.log( leftNums )
    // console.log( bitLen );
    let ret = [];
    
    k = k - 1;
    for ( let i = 0 ; i< bitLen.length ; i++ ) {
        if( k <= 0 ) {
            break;
        }
        let index = Math.floor( k / bitLen[i] );
        ret.push( leftNums[index] );
        leftNums.splice(index,1);
        // console.log( leftNums )
        // console.log( ret );
        k = k - index * bitLen[i];
    }
    ret = ret.concat(leftNums);
    
    return ret.join('');
};

console.log( getPermutation(3,5) === '312' );
console.log( getPermutation(3,3) === '213' );
console.log( getPermutation(3,6) === '321' );
console.log( getPermutation(3,1) === '123' );
console.log( getPermutation(1,1) === '1' );
console.log( getPermutation(4,9) === '2314' );
console.log( getPermutation(9,81) === "123486759" );
console.log( getPermutation(9,1581) === "125439768" );
console.log( getPermutation(9,99999) === "358926417" );
