/* 
Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

There are N shapes made up of 0s in the image. They are not necessarily rectangles -- they are odd shapes ("islands"). Find them.

image1 = [
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 0],
]

Every single pixel in each shape. For reference, these are (in [row,column] format):

findShapes(image1) =>
  [
    [[0,1],[1,1],[1,2]],
    [[1,4],[2,3],[2,4],[2,5],[3,4]],
    [[3,1],[4,1],[4,3],[5,1],[5,2],[5,3],[5,4],[6,3],[6,4]],
    [[7,6]],
    [[2,0]],
    [[7,0]],
    [[7,2]],
    [[7,6]],
  ]


Other test cases:

image2 = [
  [0],
]

findShapes(image2) =>
  [
    [[0,0]],
  ]

image3 = [
  [1],
]

findShapes(image3) => []

n: number of rows in the input image
m: number of columns in the input image

*/


const findShapes = (matrix) => {
  const ROW = matrix.length;
  const COL = matrix[0].length;
  
  const helper = ( x, y ) => {
    let res = [];
    matrix[x][y] = 1;
    res.push( [x, y] );
    
    if ( x > 0 && matrix[x-1][y] === 0 ) {
      res = res.concat( helper(x-1, y) ); 
    } 
    if ( x < ROW-1 && matrix[x+1][y] === 0 ) {
      res = res.concat( helper( x+1 , y ) );
    }
    if ( y > 0 && matrix[x][y-1] === 0 ) {
      res = res.concat( helper( x, y-1 ) );
    }
    if ( y < COL-1 && matrix[x][y+1] === 0 ) {
      res = res.concat( helper( x, y+1 ) );
    }
    return res;
  }
  
  const ret = [];
  for ( let i = 0 ; i < ROW ; i++ ) {
    for ( let j = 0 ; j < COL ; j++ ) {
      if ( matrix[i][j] === 0 ) {
        ret.push( helper(i, j ) );
      } 
    }
  }
  return ret;
}


const image1 = [
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 0],
];

console.log( findShapes(image1) ); 

const image2 = [
  [0],
];
console.log( findShapes(image2) ); 

const image3 = [
  [1],
]
console.log( findShapes(image3) ); 
