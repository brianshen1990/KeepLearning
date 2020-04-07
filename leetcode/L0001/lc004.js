/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
    let indexFir = 0;
    let indexSec = 0;
    let index = 0;

    let _helperMin = function(_n1, _n2, _i1, _i2){
        if(_i1 < _n1.length && _i2<_n2.length){
            return Math.min(_n1[_i1], _n2[_i2]);
        }else if(_i1 >= _n1.length){
            return _n2[_i2];
        }else{
            return _n1[_i1];
        }
    }

    let tempMax = _helperMin(nums1, nums2, 0, 0);
    const middle = Math.floor( ( nums1.length + nums2.length ) / 2) + ( nums1.length + nums2.length ) % 2;

    while( index < middle ){
        if(indexFir < nums1.length && nums1[indexFir] === tempMax){
            indexFir++;
            index++;
        }else if( indexSec < nums2.length && nums2[indexSec] === tempMax){
            indexSec++;
            index++;
        }else{
            tempMax = _helperMin(nums1, nums2, indexFir, indexSec);
        }
    }
    if( (( nums1.length + nums2.length ) % 2) === 1){
        // odd
        return parseInt(tempMax);
    }else{
        return  ( tempMax + _helperMin(nums1, nums2, indexFir, indexSec)) / 2;
    }
};

let test = function(){
    
    console.log(findMedianSortedArrays([1,2], [3,4])===2.5);
    console.log(findMedianSortedArrays([1,3], [2])===2);
    console.log(findMedianSortedArrays([1,1,2,2,2,2], [1,1,1,2])===1.5);
    console.log(findMedianSortedArrays([1], [])===1);
    console.log(findMedianSortedArrays([], [1])===1);
}

test();
