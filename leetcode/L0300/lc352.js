/**
352. Data Stream as Disjoint Intervals

Given a data stream input of non-negative integers a1, a2, ..., an, ..., summarize the numbers seen so far as a list of disjoint intervals.

For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:

[1, 1]
[1, 1], [3, 3]
[1, 1], [3, 3], [7, 7]
[1, 3], [7, 7]
[1, 3], [6, 7]
 

Follow up:

What if there are lots of merges and the number of disjoint intervals are small compared to the data stream's size?
 */

/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    if ( this.nums.length === 0 ) {
        this.nums.push( [val, val] );
    } else {
        if ( this.nums[0][0] > val+1 ) {
            this.nums.unshift( [val, val] );
        } else if ( this.nums[this.nums.length-1][1] < val-1 ) {
            this.nums.push( [val, val] );
        } else {
            // bsearch
            let beg = 0; 
            let end = this.nums.length-1;
            let middle = beg;
            while ( beg + 1 < end ) {
                middle = Math.floor( ( beg + end ) / 2 );
                if ( this.nums[middle][0] === val ) {
                    break;
                } else if ( this.nums[middle][0] > val ) {
                    end = middle;
                } else {
                    beg = middle;   
                }
            }
            if ( this.nums[middle][0] === val ) {
                // pass
            } else {
                if ( val >= this.nums[end][0] || val <= this.nums[beg][1] ) {
                    if ( this.nums[beg][0] === val+1 ) {
                        this.nums[beg][0] = val;
                    } else if ( this.nums[end][1] === val-1 ) {
                        this.nums[end][1] = val;
                    } else {
                        // ignore
                    }
                } else {
                    if ( this.nums[end][0] === val+1 && this.nums[beg][1] === val-1 ) {
                        // middle, concat
                        this.nums.splice(beg, 2, [this.nums[beg][0], this.nums[end][1]]);
                    } else if ( this.nums[end][0] === val+1 ) {
                        this.nums[end][0] = val;
                    } else if ( this.nums[beg][1] === val-1 ) {
                        this.nums[beg][1] = val;
                    } else {
                        this.nums.splice(end, 0, [val, val]);
                    }
                }
            }
        }
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return [...this.nums];
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

/** 
["SummaryRanges","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]
[[],[1],[],[3],[],[7],[],[2],[],[6],[]]
["SummaryRanges","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]
[[],[1],[],[3],[],[8],[],[2],[],[9],[],[0],[]]
["SummaryRanges","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]
[[],[6],[],[6],[],[0],[],[4],[],[8],[],[7],[],[6],[],[4],[],[7],[],[5],[]]
*/