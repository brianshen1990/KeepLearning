/**

732. My Calendar III

Implement a MyCalendarThree class to store your events. A new event can always be added.

Your class will have one method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A K-booking happens when K events have some non-empty intersection (ie., there is some time that is common to all K events.)

For each call to the method MyCalendar.book, return an integer K representing the largest integer such that there exists a K-booking in the calendar.

Your class will be called like this: MyCalendarThree cal = new MyCalendarThree(); MyCalendarThree.book(start, end)
Example 1:

MyCalendarThree();
MyCalendarThree.book(10, 20); // returns 1
MyCalendarThree.book(50, 60); // returns 1
MyCalendarThree.book(10, 40); // returns 2
MyCalendarThree.book(5, 15); // returns 3
MyCalendarThree.book(5, 10); // returns 3
MyCalendarThree.book(25, 55); // returns 3
Explanation: 
The first two events can be booked and are disjoint, so the maximum K-booking is a 1-booking.
The third event [10, 40) intersects the first event, and the maximum K-booking is a 2-booking.
The remaining events cause the maximum K-booking to be only a 3-booking.
Note that the last event locally causes a 2-booking, but the answer is still 3 because
eg. [10, 20), [10, 40), and [5, 15) are still triple booked.
 

Note:

The number of calls to MyCalendarThree.book per test case will be at most 400.
In calls to MyCalendarThree.book(start, end), start and end are integers in the range [0, 10^9].

 */

const SegmentTreeNode  = function(beg, end) {
    this.beg = beg ;
    this.end = end; 
    this.left = null;
    this.right = null;
    this.max = 0; // the max
    this.booked = 0; // how much covered
}

var MyCalendarThree = function() {
    const root = new SegmentTreeNode(0, 1000000000);
    // const root = new SegmentTreeNode(0, 64); // debug
    this.root = root;
};

const helperAdd = (root, node) => {
    if ( !root ) {
        return;
    }
    // no intersection
    if ( node.beg >= root.end || node.end <= root.beg ) {
        return;
    }
    if (  root.beg >= node.beg && root.end <= node.end  ) {
        // within, cover
        root.booked += 1;
    } else {
        // collapse
        const middle = Math.floor( ( root.beg + root.end ) / 2 );
        // console.log( middle );
        if ( middle >= root.beg+1  ) {
            if ( !root.left ) {
                root.left = new SegmentTreeNode( root.beg, middle );
            } 
            helperAdd(root.left, node);
        }
        if ( middle+1 <= root.end ) {
            if ( !root.right ) {
                root.right = new SegmentTreeNode( middle, root.end );
            }
            helperAdd(root.right, node);
        }
    }
    root.max = Math.max(root.max,  
                       Math.max( ( root.left && root.left.max ) || 0, 
                        ( root.right && root.right.max ) || 0 ) + root.booked );
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    const newNode = new SegmentTreeNode(start, end);
    helperAdd(this.root, newNode);
    return this.root.max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */


/**

["MyCalendarThree","book","book","book","book","book","book"]
[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]
["MyCalendarThree","book"]
[[],[10,20]]
["MyCalendarThree","book","book"]
[[],[10,20],[50,60]]
["MyCalendarThree","book","book","book"]
[[],[10,20],[50,60],[10,40]]
["MyCalendarThree","book","book","book","book","book","book"]
[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]
["MyCalendarThree","book","book","book","book","book","book","book"]
[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55], [9,18]]
["MyCalendarThree","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book"]
[[],[47,50],[1,10],[27,36],[40,47],[20,27],[15,23],[10,18],[27,36],[17,25],[8,17],[24,33],[23,28],[21,27],[47,50],[14,21],[26,32],[16,21],[2,7],[24,33],[6,13],[44,50],[33,39],[30,36],[6,15],[21,27],[49,50],[38,45],[4,12],[46,50],[13,21]]
["MyCalendarThree","book","book","book","book","book","book","book","book","book","book","book","book"]
[[],[47,50],[1,10],[27,36],[40,47],[20,27],[15,23],[10,18],[27,36],[17,25],[8,17],[24,33],[23,28]]

 */