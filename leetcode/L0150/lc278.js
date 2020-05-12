/**
278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
 */


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // init
        let begin = 1;
        let end = n;
        let middle = -1;
        
        // recursive
        while ( begin + 1 < end ) {
            middle = begin + Math.floor( (end - begin) / 2 );
            if ( isBadVersion(middle) ) {
                end = middle;
            } else {
                begin = middle + 1;
            }
        }
        
        if ( isBadVersion(begin) ) {
            return begin;
        }
        return end;
    };
};

/**
5
4
5
3
1
1
5
5
5
1
 */