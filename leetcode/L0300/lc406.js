/**
406. Queue Reconstruction by Height

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

 */


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if ( people.length <= 1 ){
        return people;
    }
    
    const ret = new Array( people.length );
    const num = new Array( people.length ).fill(0).map( (_, index) => index );
    
    people = people.sort( (a,b) => {
        if ( a[0] > b[0] ) {
            return 1;
        } else if ( a[0] < b[0] ) {
            return -1;
        } else {
            return a[1] - b[1];
        }
    });
    // console.log( people );
    
    while ( people.length > 0 ) {
        let val = people[0][0];
        let index = 1;
        while ( index< people.length && people[index][0] === val ) {
            index++;
        }
        for ( let i = 0 ; i < index; i++ ) {
            ret[ num[ people[i][1] ] ] = people[i];
        }
        for ( let i = index-1 ; i >= 0 ; i-- ) {
            num.splice( people[i][1], 1 );
        }
        people.splice(0, index);
    }
    return ret;
    
};

/**
[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
[]
[[7,0],[7,1]]
 */