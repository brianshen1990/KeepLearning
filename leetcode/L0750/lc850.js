/**

850. Rectangle Area II

We are given a list of (axis-aligned) rectangles.  Each rectangle[i] = [x1, y1, x2, y2] , where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the ith rectangle.

Find the total area covered by all rectangles in the plane.  Since the answer may be too large, return it modulo 10^9 + 7.



Example 1:

Input: [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
Output: 6
Explanation: As illustrated in the picture.
Example 2:

Input: [[0,0,1000000000,1000000000]]
Output: 49
Explanation: The answer is 10^18 modulo (10^9 + 7), which is (10^9)^2 = (-7)^2 = 49.
Note:

1 <= rectangles.length <= 200
rectanges[i].length = 4
0 <= rectangles[i][j] <= 10^9
The total area covered by all rectangles will never exceed 2^63 - 1 and thus will fit in a 64-bit signed integer.

*/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
  const MAXXX = Math.pow(10, 9) + 7;
  class segmentNode {
      constructor(beg, end, ranges){
          this.beg = beg;
          this.end = end;
          this.ranges = ranges || [];
          this.left = null;
          this.right = null;
      }
  }
  
  const _root = new segmentNode(0, 1000000000, []);
  // const _root = new segmentNode(0, 4, []);
  const add = ( root, node ) => {
      if ( !root ) {
          return;
      }
      if ( root.beg >= node.end || root.end <= node.beg ) {
          return; // no intersection
      }
      if ( root.beg >= node.beg && root.end <= node.end ) {
          // within, cover
          
          root.ranges = [...root.ranges, ...node.ranges];
          if ( root.left ) { add( root.left, node ); }
          if ( root.right ) { add( root.right, node ); }
      } else {
          const middle = Math.floor( (root.beg + root.end) / 2 );
          if ( middle > root.beg ) {
              if ( !root.left ) {
                  root.left = new segmentNode( root.beg, middle, root.ranges );
              }
          }
          add( root.left, node );
          if ( root.end > middle ) {
              if ( !root.right ) {
                  root.right = new segmentNode( middle, root.end, root.ranges );
              }
          }
          add( root.right, node );
      }
  }
  
  const sumRoot = ( root ) => {
      if ( !root ) {
          return 0;
      }
      if ( root.left || root.right ) {
          const left = sumRoot(root.left);
          const right = sumRoot(root.right);
          return ( left  + right ) % MAXXX;
      } else {
          const ranges = [];
          for ( let i = 0 ; i < root.ranges.length ; i = i+2 ) {
              ranges.push( [ root.ranges[i], root.ranges[i+1]] );
          } 
          ranges.sort( (a,b) => a[0]-b[0] );
          
          let index = 1;
          while ( index < ranges.length ) {
              if ( ranges[index][0] <= ranges[index-1][1] ) {
                  ranges[index-1][1] = Math.max( ranges[index][1], ranges[index-1][1] );
                  ranges.splice(index, 1);
              } else {
                  index++;
              }
          }
          
          let ret = 0; 
          for ( let i = 0 ; i < ranges.length ; i++ ) {
              ret += (root.end - root.beg) * ( ranges[i][1]-ranges[i][0] )  % MAXXX
          }
          // console.log( root, ret, ranges );
          return ret;
      
      }
  }
  
  for ( let i = 0 ; i < rectangles.length ; i++ ) {
      const toAddNode = new segmentNode( rectangles[i][0], rectangles[i][2], [rectangles[i][1], rectangles[i][3]] ) ;
      // console.log( toAddNode );
      add( _root, toAddNode);
      // console.log( _root.left );
      // console.log("-----");
  }
  // return 0;
  
  return sumRoot( _root );

};

/**
[[1,0,3,1]]
[[0,0,2,2],[1,0,2,3],[1,0,3,1]]
[[0,0,1000000000,1000000000]]
[[0,0,2,2],[1,0,2,3],[1,10,3,11]]
  */