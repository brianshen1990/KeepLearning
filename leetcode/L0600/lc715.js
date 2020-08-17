/**

715. Range Module

A Range Module is a module that tracks ranges of numbers. Your task is to design and implement the following interfaces in an efficient manner.

addRange(int left, int right) Adds the half-open interval [left, right), tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval [left, right) that are not already tracked.
queryRange(int left, int right) Returns true if and only if every real number in the interval [left, right) is currently being tracked.
removeRange(int left, int right) Stops tracking every real number currently being tracked in the interval [left, right).
Example 1:
addRange(10, 20): null
removeRange(14, 16): null
queryRange(10, 14): true (Every number in [10, 14) is being tracked)
queryRange(13, 15): false (Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
queryRange(16, 17): true (The number 16 in [16, 17) is still being tracked, despite the remove operation)
Note:

A half open interval [left, right) denotes all real numbers left <= x < right.
0 < left < right < 10^9 in all calls to addRange, queryRange, removeRange.
The total number of calls to addRange in a single test case is at most 1000.
The total number of calls to queryRange in a single test case is at most 5000.
The total number of calls to removeRange in a single test case is at most 1000.

 */


class SegmentNode {
    constructor(beg, end, val) {
        this.beg = beg;
        this.end = end;
        this.val = val;
        this.left = this.right = null;
    }
}

const helperAdd = ( root, node ) => {
    if ( !root ) {
        return;
    }
    if ( root.beg >= node.end || root.end <= node.beg) {
        return;
    }
    if ( root.beg >= node.beg && root.end <= node.end ) {
        // include, cover
        root.val = node.val;
        if ( root.left ) { helperAdd( root.left, node ); }
        if ( root.right ) { helperAdd( root.right, node ); }
    } else {
        const middle = Math.floor( ( root.beg + root.end ) / 2 );
        if ( middle > root.beg ) {
            if ( ! root.left ) {
                root.left = new SegmentNode( root.beg, middle, root.val );
            }
            helperAdd( root.left, node );
        }
        if ( root.end > middle ) {
            if ( !root.right ) {
                root.right = new SegmentNode( middle, root.end, root.val ); 
            }
            helperAdd( root.right, node );
        }  
        if ( ( root.left && root.left.val === false ) || 
            ( root.right && root.right.val === false ) ) {
            root.val = false;
        }
    }
}

const helperFind = (root, left, right) => {
    let middle = Math.floor( (root.beg+root.end)/2 );
    if ( root.left || root.right ) {
        if ( left >= middle ) {
            return helperFind( root.right, left, right );
        } else if ( right <= middle ) {
            return helperFind( root.left, left, right );
        } else {
            return helperFind( root.left, left, middle ) && helperFind( root.right, middle, right); 
        }
    } else {
        // no children
        return root.val;
    }
}

var RangeModule = function() {
    // this.root = new SegmentNode(0, 16, false);
    this.root = new SegmentNode(0, 1000000000, false);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
    helperAdd( this.root, new SegmentNode(left, right, true) );
    // console.log("--add--", left, right)
    //  console.log( this.root );
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
    // console.log( this.root );
    return helperFind(this.root, left, right);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
    helperAdd( this.root, new SegmentNode(left, right, false) )
    // console.log("--remove--", left, right)
    // console.log( this.root );
};

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */


/*
["RangeModule","addRange","removeRange","queryRange","queryRange","queryRange"]
[[],[10,20],[14,16],[10,14],[13,15],[16,17]]
["RangeModule","addRange","queryRange"]
[[],[10,20],[14,16]]
["RangeModule","addRange","removeRange","queryRange","queryRange","queryRange"]
[[],[10,20],[14,16],[10,14],[13,15],[16,17]]
["RangeModule","addRange","removeRange","queryRange","queryRange","queryRange","addRange", "queryRange"]
[[],[10,20],[14,16],[10,14],[13,15],[16,17], [16,1900], [30,890]]
["RangeModule","addRange","removeRange","removeRange","addRange","removeRange","addRange","queryRange","queryRange","queryRange"]
[[],[6,8],[7,8],[8,9],[8,9],[1,3],[1,8],[2,4],[2,9],[4,6]]
*/