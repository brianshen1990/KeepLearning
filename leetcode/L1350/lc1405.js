/**
1405. Longest Happy String
A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

Given three integers a, b and c, return any string s, which satisfies following conditions:

s is happy and longest possible.
s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
s will only contain 'a', 'b' and 'c' letters.
If there is no such string s return the empty string "".

 

Example 1:

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
Example 2:

Input: a = 2, b = 2, c = 1
Output: "aabbc"
Example 3:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It's the only correct answer in this case.
 

Constraints:

0 <= a, b, c <= 100
a + b + c > 0

 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let ret = '';
    const MAPPING =['a', 'b', 'c'];
    const data = [a, b, c];
    let include = [true, true, true];

    const _helperSpecialMax = (_include, _data) => {
        let _max = 0;
        let _pos = -1;
        let _exc = -1;
        [0,1,2].map( item => {
            if ( _include[item] ){
                if (_data[item] > _max ) {
                    _max = _data[item];
                    _pos = item;
                }
            } else if ( !_include[item]  ) {
                _exc = item;       
            }
        })
        // take max 2
        _max = _max > 2 ? 2 : _max;
        let _left = 0;
        // if not init && take 2  && makes longest left 3, then only take 1
        if ( _exc >= 0 && _max > 1 ) {
            [0,1,2].filter(item => item !==_pos ).map(item => {_left += data[item]});
            
            if ( (data[_pos]-2) *2 <= _left  ){
                _max = 1;
            }
        }
        // console.log(_max, _pos , _left );
        return {max: _max, pos: _pos};
    }
    
    while(true) {
        const { max,  pos} = _helperSpecialMax(include, data);
        if ( max > 0 ) {
            // greedy, take as much as I can 
            ret = `${ret}${new Array(max).fill(MAPPING[pos]).join('')}`;
            data[pos] -= max;
            include = [true, true, true];
            include[pos] = false;
        } else {
            break;
        }
        // console.log( ret, data, include );
    }
    return ret;

};

/**
1
1
7
2
2
1
0
0
1
0
0
12
0
8
11
22
4
14
 */