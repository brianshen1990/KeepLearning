/**
699. Falling Squares

On an infinite number line (x-axis), we drop given squares in the order they are given.

The i-th square dropped (positions[i] = (left, side_length)) is a square with the left-most point being positions[i][0] and sidelength positions[i][1].

The square is dropped with the bottom edge parallel to the number line, and from a higher height than all currently landed squares. We wait for each square to stick before dropping the next.

The squares are infinitely sticky on their bottom edge, and will remain fixed to any positive length surface they touch (either the number line or another square). Squares dropped adjacent to each other will not stick together prematurely.

 
Return a list ans of heights. Each height ans[i] represents the current highest height of any square we have dropped, after dropping squares represented by positions[0], positions[1], ..., positions[i].

Example 1:

Input: [[1, 2], [2, 3], [6, 1]]
Output: [2, 5, 5]
Explanation:
After the first drop of positions[0] = [1, 2]: _aa _aa ------- The maximum height of any square is 2.

After the second drop of positions[1] = [2, 3]: __aaa __aaa __aaa _aa__ _aa__ -------------- The maximum height of any square is 5. The larger square stays on top of the smaller square despite where its center of gravity is, because squares are infinitely sticky on their bottom edge.

After the third drop of positions[1] = [6, 1]: __aaa __aaa __aaa _aa _aa___a -------------- The maximum height of any square is still 5. Thus, we return an answer of [2, 5, 5].

 

 
Example 2:

Input: [[100, 100], [200, 100]]
Output: [100, 100]
Explanation: Adjacent squares don't get stuck prematurely - only their bottom edge can stick to surfaces.
 

Note:

1 <= positions.length <= 1000.
1 <= positions[i][0] <= 10^8.
1 <= positions[i][1] <= 10^6.

 */


/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    class SegmentNode {
        constructor(beg, end, val) {
            this.beg = beg;
            this.end = end;
            this.val = val;
            this.left = this.right = null;
        }
    }
    
    const _root = new SegmentNode(0, 101000000, 0);
    // const _root = new SegmentNode(0, 16, 0);
    
    const add = ( root, node ) => {
        if ( !root ) {
            return;
        }
        if ( root.end <= node.beg || root.beg >= node.end ) {
            return;
        }
        
        if ( root.end <= node.end && root.beg >= node.beg ) { // cover
            root.val = node.val;
            root.left = root.right = null;
            // if (root.left) { add( root.left, node ); }
            // if (root.right) { add( root.right, node ); }
        } else { // collapse
            const middle = Math.floor( (root.beg + root.end) / 2 );
            if ( (!root.left) && middle > root.beg ) {
                root.left = new SegmentNode(root.beg, middle, root.val);
            }
            add(root.left, node);
            if ( (!root.right) && middle < root.end ) {
                root.right = new SegmentNode(middle, root.end, root.val);
            }
            add(root.right, node);
            root.val = Math.max( root.left.val, root.right.val );
        }
    }
    
    const find = (root, beg, end) => {
        if ( !root ) {
            return 0;
        }
        if ( root.beg === beg && root.end === end ) {
            return root.val; // exactly the same 
        }
        if ( root.beg >= end || root.end <= beg ) {
            return 0; // no collapse
        }
        if ( beg >= root.beg && end <= root.end && !( root.left || root.right ) ) {
            return root.val; // within && no child, so just take it 
        }

        const middle = Math.floor( ( root.beg + root.end ) / 2 );
        if ( beg >= middle ) {
            return find( root.right, beg, end );
        } else if ( end <= middle ) {
            return find( root.left, beg, end );
        } else {
            return Math.max( find(root.left, beg, middle), find( root.right, middle, end ) );
        }
    }
    
    const ret = positions.map( item => {
        // console.log("here");
        const max = find(_root, item[0], item[0]+item[1]);
        // console.log(max);
        add( _root, new SegmentNode(item[0], item[0]+item[1], max+item[1]) );
        return _root.val;
    })  
    // console.log( _root );
    return ret;
};


/**
[[1,2]]
[[1,2],[2,3],[6,1]]
[[100, 100], [200, 100]]
[[100, 100], [200, 100], [20,1000],[89,900]]
[[9,7],[1,9],[3,1]]
[[100000000,1000000], [99999999, 20]]
*/