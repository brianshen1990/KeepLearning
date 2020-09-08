/**
838. Push Dominoes

There are N dominoes in a line, and we place each domino vertically upright.

In the beginning, we simultaneously push some of the dominoes either to the left or to the right.



After each second, each domino that is falling to the left pushes the adjacent domino on the left.

Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

Return a string representing the final state. 

Example 1:

Input: ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
Example 2:

Input: "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
Note:

0 <= N <= 10^5
String dominoes contains only 'L', 'R' and '.'
 */


/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    // prev,cur 
    // .    L -> L 1
    // .    R -> . 2
    // L    . -> . 3
    // R    . -> R 4
    // L    L -> L 5
    // L    R -> . 6
    // R    R -> R 7
    // R    L -> Middle 8
    
    // let prev = { pos: dominoes[0] , index: 0 }; // including
    let index = 0;
    let ret = dominoes.split("");
    while ( index < dominoes.length ) {
        if ( dominoes[index] === '.' ) {
            // console.log("hit .")
            let cur = index+1;
            while ( cur < dominoes.length && dominoes[cur] === '.' ) {
                cur++;
            }
            if ( cur < dominoes.length && dominoes[cur] === 'L') { // 1, 2
                // console.log("hit 1,2 ")
                for ( let i = index ; i < cur ; i++ ) {
                    ret[i] = dominoes[cur];
                }
            }
            index = cur;
        } else {
            let cur = index+1;
            while ( cur < dominoes.length && dominoes[cur] === '.' ) {
                cur++;
            }
            if ( cur >= dominoes.length && dominoes[index] === 'R') {
                if ( dominoes[index] === 'R' ) { // 4
                    for ( let i = index ; i < cur ; i++ ) {
                        ret[i] = dominoes[index];
                    } 
                } else {
                    // 3
                }
            } else {
                if ( dominoes[index] === dominoes[cur] ) { // 5, 7
                   for ( let i = index ; i < cur ; i++ ) {
                        ret[i] = dominoes[index];
                    } 
                } else if ( dominoes[index] === 'L' ) {// 6
                    // nothing
                } else { // 8 
                    // index, cur
                    let steps = Math.floor( ( cur - index - 1 ) / 2 );
                    for ( let i = 1 ; i <= steps ; i++ ) {
                        ret[index+i] = dominoes[index];
                        ret[cur-i] = dominoes[cur]; 
                    }
                }
            }
            index = cur;            
        }
    }
    return ret.join("");
};


/**
".L.R...LR..L.."
"RR.L"
"R"
"RR"
"L"
"LL"
"."
"...."
".L.R...LR..L...L.R...LR..L.."
".L.R."
 */