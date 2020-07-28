/**
LeetCode 1197. Minimum Knight Moves

In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

Example 1:

Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]
Example 2:

Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
Constraints:

|x| + |y| <= 300

 */

const minKnightMoves = (x, y) => {
  let ret = 0;
  const visited = new Set();

  let cur = [ [0, 0] ];
  let found = false;
  while (cur.length > 0 || !found) {
    ret++;
    const next = new Set();
    cur.map(item => visited.add(item.join("_")));
    for ( let i = 0 ; i < cur.length ; i++ ) {
      const [xx, yy] = cur[i];
      if ( xx === x && yy === y) {
        found = true;
        break;
      } 
      ( !visited.has(`${xx+2}_${yy+1}`) ) && next.add( `${xx+2}_${yy+1}` );
      ( !visited.has(`${xx+2}_${yy-1}`) ) && next.add( `${xx+2}_${yy-1}` );
      ( !visited.has(`${xx+1}_${yy+2}`) ) && next.add( `${xx+1}_${yy+2}` );
      ( !visited.has(`${xx+1}_${yy+2}`) ) && next.add( `${xx+1}_${yy-2}` );
      ( !visited.has(`${xx-1}_${yy+2}`) ) && next.add( `${xx-1}_${yy+2}` );
      ( !visited.has(`${xx-1}_${yy+2}`) ) && next.add( `${xx-1}_${yy-2}` );
      ( !visited.has(`${xx-2}_${yy+1}`) ) && next.add( `${xx-2}_${yy+1}` );
      ( !visited.has(`${xx-2}_${yy-1}`) ) && next.add( `${xx-2}_${yy-1}` );
    }
    if ( found ) {
      break;
    }
    cur = [...next].filter( item => !visited.has(item) ).map( item => item.split("_").map( n => parseInt(n) ) );
  }

  return ret-1;
}

console.log( minKnightMoves(2, 1) );
console.log( minKnightMoves(5, 5) );

/**
2,1
5,5
 */