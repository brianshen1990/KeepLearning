/**
1041. Robot Bounded In Circle

On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degress to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: "GGLLGG"
Output: true
Explanation: 
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
Example 2:

Input: "GG"
Output: false
Explanation: 
The robot moves north indefinitely.
Example 3:

Input: "GL"
Output: true
Explanation: 
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
 

Note:

1 <= instructions.length <= 100
instructions[i] is in {'G', 'L', 'R'}

 */



/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const directionsR = {
        'N': 'E', 
        'E': 'S', 
        'S': 'W', 
        'W': 'N' 
    };
    const directionsL = {
        'N': 'W', 
        'W': 'S', 
        'S': 'E', 
        'E': 'N'
    };
    
    let direction = 'N'; // W S E
    let position = [0, 0];
    for ( let i = 0 ; i < instructions.length ; i++ ) {
        if ( instructions[i] === 'R' ) {
            direction = directionsR[direction];
        } else if ( instructions[i] === 'L' ) {
            direction = directionsL[direction];
        } else {
            if ( direction === 'E' ) {
                position = [ position[0]+1, position[1] ]
            } else if ( direction === 'W' ) {
                position = [ position[0]-1, position[1] ]
            } else if ( direction === 'S' ) {
                position = [ position[0], position[1]-1 ]
            } else if ( direction === 'N' ) {
                position = [ position[0], position[1]+1 ]
            }  
        }
    }
    // if it returns to original, then yes
    if ( position[0] === 0 && position[1] === 0 ) {
        return true;
    }
    // if it keep north, then it will run out of the plane
    if ( direction === 'N' ) {
        return false;
    }
    return true;
    
};


/**
"GGLLGG"
"GG"
"GL"
 */