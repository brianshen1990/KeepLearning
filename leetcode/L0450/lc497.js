/**

497. Random Point in Non-overlapping Rectangles

Given a list of non-overlapping axis-aligned rectangles rects, write a function pick which randomly and uniformily picks an integer point in the space covered by the rectangles.

Note:

An integer point is a point that has integer coordinates. 
A point on the perimeter of a rectangle is included in the space covered by the rectangles. 
ith rectangle = rects[i] = [x1,y1,x2,y2], where [x1, y1] are the integer coordinates of the bottom-left corner, and [x2, y2] are the integer coordinates of the top-right corner.
length and width of each rectangle does not exceed 2000.
1 <= rects.length <= 100
pick return a point as an array of integer coordinates [p_x, p_y]
pick is called at most 10000 times.
Example 1:

Input: 
["Solution","pick","pick","pick"]
[[[[1,1,5,5]]],[],[],[]]
Output: 
[null,[4,1],[4,1],[3,3]]
Example 2:

Input: 
["Solution","pick","pick","pick","pick","pick"]
[[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
Output: 
[null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]
Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array of rectangles rects. pick has no arguments. Arguments are always wrapped with a list, even if there aren't any.


 */


/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    const areas = [0];
    rects.forEach( item => {
        areas.push(areas[areas.length-1] + (item[2]-item[0]+1) * (item[3]-item[1]+1) )
    });
    // console.log( areas );
    this.areas = areas;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let rectIndex = -1;
    let beg = 0; 
    let end = this.areas.length-2;
    const random = Math.floor(Math.random() * this.areas[this.areas.length-1]);
    
    while ( beg + 1 < end ) {
        const middle = Math.floor( (beg+end)/2 );
        if ( this.areas[middle] === random ) {
            rectIndex = middle;
            break;
        } else if ( this.areas[middle] > random  ) {
            end = middle;
        } else {
            beg = middle;
        }
    }
    if ( rectIndex === -1 ) {
        if ( this.areas[end] <= random ) {
            rectIndex = end;
        } else {
            rectIndex = beg;
        }
    }
    // console.log( random, rectIndex );

    return [Math.floor( Math.random() * ( this.rects[rectIndex][2] - this.rects[rectIndex][0] + 1) )  + this.rects[rectIndex][0], Math.floor( Math.random() * ( this.rects[rectIndex][3] - this.rects[rectIndex][1] + 1) )  + this.rects[rectIndex][1]];
         
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

/**
["Solution", "pick", "pick", "pick"]
[[[[1, 1, 5, 5]]], [], [], []]
["Solution","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick"]
[[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[],[],[],[],[],[]]
["Solution","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick"]
[[[[-2,-2,-1,-1],[1,0,3,0],[4,5,7,8]]],[],[],[],[],[],[],[],[],[],[]]
 */