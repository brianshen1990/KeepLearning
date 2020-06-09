/**
223. Rectangle Area

Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
Note:

Assume that the total area is never beyond the maximum possible value of int.

 */


/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    // contains
    if ( A <= E && B <= F && C >= G && D >= H ) {
        // first only
        return (C - A) * (D - B);    
    }
    if ( E <= A && F <= B && G >= C && H >= D ) {
        // second only
        return (G - E) * (H - F);
    }
    
    let sum = (C - A) * (D - B) + (G - E) * (H - F);
    // conjunction part
    let width = 0;
    if ( E >= A && E <= C ) {
        // second left in middle
        width = Math.min(C, G) - E;
    } else if ( G >= A && G <= C ) {
        // sencond right in middle
       width = G - Math.max(A, E);
    } else if ( G >= C && E <= A ) {
        width = C - A;
    }
    
    let height = 0;
    if ( F >= B && F <= D ) {
        // second bottom in middle
        height = Math.min(D, H) - F;
    } else if ( H >= B && H <= D ) {
        // sencond top in middle
       height = H - Math.max(B, F);
    } else if ( H >= D && F <= B ) {
        height = D - B;
    }
    console.log( width, height, sum, width * height );
    return sum - width * height;
};

/**
-3
0
3
4
0
-1
9
2
-3
0
3
4
0
0
2
2
-3
0
3
4
-4
-4
9
10
-3
0
3
4
5
-4
9
10
-3
0
3
4
-4
-4
9
2
-3
0
3
4
-100
-99
-90
-80
-3
0
3
4
0
4
9
5
-3
0
3
4
0
-20
9
-16
 */

 /**
-3
0
3
4
0
-1
9
2 ----
-3
0
3
4
0
0
2
2 ---- included
-3
0
3
4
-4
-4
9
10 ---- include
-3
0
3
4
5
-4
9
10 ---- no collapse right
-3
0
3
4
-4
-4
9
2 ---- width collapse
-3
0
3
4
-100
-99
-90
-80 ---- no collapse left
-3
0
3
4
0
4
9
5 ---- no collapse top
-3
0
3
4
0
-20
9
-16 ---- no collapse top
  */