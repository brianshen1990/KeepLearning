/**

3. Pile Of Boxes
Alex is given n piles of boxes of equal or unequal heights. In one step, Alex can remove any number of boxes from the pile which has the maximum height and try to make it equal to the one which is just lower than the maximum height of the stack. Determine the minimum number of steps required to make all of the piles equal in height.

Example
n = 3
boxesInPiles = [5,2,1]

In the first step, remove 3 boxes from boxesInPiles[0], and the new array is boxesInPiles' = [2,2,1].
Now reduce the two taller piles by 1 box each to match the height of the shortest pile. This takes 2 steps because each step is performed on only one pile. The final number of steps required is 3.


Constraints:
- 1 <= n <= 2 * 10^5
- 1 <= boxesInpiles[i] <= 2 * 10^6

Sample 0 
[4,5,5,2,4] => 6
-> [4,4,5,2,4]
-> [4,4,4,2,4]
-> [2,4,4,2,4]
-> [2,2,4,2,4]
-> [2,2,2,2,4]
-> [2,2,2,2,2]
 */


function pilesOfBoxes(boxesInPiles) {
  // Write your code here
  boxesInPiles = boxesInPiles.sort( (a, b) => b-a );
  // console.log( boxesInPiles )
  let sum = 0;
  for ( let i = 0 ; i < boxesInPiles.length-1 ; i++ ) {
    if ( boxesInPiles[i] > boxesInPiles[i+1] ) {
      sum += (i+1);
    }
  }
  return sum;
}

