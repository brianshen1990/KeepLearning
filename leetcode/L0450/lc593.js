/**

593. Valid Square

Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

A valid square has four equal sides with positive length and four equal angles (90-degree angles).

 

Example 1:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true
Example 2:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false
Example 3:

Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true
 

Constraints:

p1.length == p2.length == p3.length == p4.length == 2
-104 <= xi, yi <= 104
 */


/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    // 1. x1+x2/2 , y1+y2/2 === x3+x4/2 + y3+y4/2  => middle same
    // 2. 1->2 === 1->3  , side len same , 2,3 are opposite
    // 3. 1->2 * sqrt2 === 2->3 ,  90deg
    // 4. 1,2 x not same, not same pioint
    let d1 = null;
    let d2 = null;
    let d3 = null;
    
    if ( (p1[0]+p2[0]) / 2 === (p3[0]+p4[0])/2 && 
       (p1[1]+p2[1]) /2 === (p3[1]+p4[1])/2 ) {
        d1 = p3;
        d3 = p1;
        d2 = p2;
    } else if ( (p1[0]+p3[0]) / 2 === (p2[0]+p4[0])/2 && 
       (p1[1]+p3[1]) /2 === (p2[1]+p4[1])/2 ) {
        d1 = p2;
        d3 = p1;
        d2 = p3;
    } else if ( (p1[0]+p4[0]) / 2 === (p2[0]+p3[0])/2 && 
       (p1[1]+p4[1]) /2 === (p2[1]+p3[1])/2 ) {
        d1 = p2;
        d3 = p1; 
        d2 = p4;
    }
    
    if ( !d1 ) return false;
    //console.log( "pass1", d1, d2, d3 )
    
    if ( (d1[0]-d2[0])**2 + (d1[1]-d2[1])**2 !== (d1[0]-d3[0])**2 + (d1[1]-d3[1])**2 ) {
        return false;
    }
    //console.log( "pass same length");
    
    if ( ( (d1[0]-d2[0])**2 + (d1[1]-d2[1])**2 ) * 2 !== (d2[0]-d3[0])**2 + (d2[1]-d3[1])**2 ) {
        return false;
    }
    //console.log( "pass 90 deg");
    
    return d1[0] !== d2[0] || d1[1] !== d2[1];
};


/**
[0,0]
[1,1]
[1,0]
[0,1]
[0,0]
[1,1]
[1,0]
[0,12]
[1,0]
[-1,0]
[0,1]
[0,-1]
[1,1]
[1,1]
[1,1]
[1,1]
[0,1]
[-1,0]
[1,0]
[0,-1]
[1,0]
[0,1]
[-1,0]
[0,-1]
 */