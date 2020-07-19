'''
295. Find Median from Data Stream

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

'''

class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.small = []  # heap min
        self.big = []

    def addNum(self, num: int) -> None:
        # print( self.big, self.small )
        if len(self.small) == 0:
            heapq.heappush( self.small, -num )
            return
    
        smallMax = -self.small[0]
        if len(self.big) == 0:
            if smallMax <= num :
                heapq.heappush( self.big, num )
                return
            else:
                temp = -heapq.heappop( self.small )
                heapq.heappush( self.big, temp )
                heapq.heappush( self.small, -num )
                return
        
        bigMin = self.big[0]
        
        if len(self.big) == len(self.small):
            if num <= smallMax:
                heapq.heappush( self.small, -num )
            else:
                heapq.heappush( self.big, num )
            return
        
        if len(self.big) > len(self.small):
            if num <= bigMin:
                heapq.heappush( self.small, -num )
            else:
                temp = heapq.heappop( self.big )
                heapq.heappush( self.big, num )
                heapq.heappush( self.small, -temp )
            return
        
        if len(self.big) < len(self.small):
            if num >= smallMax:
                heapq.heappush( self.big, num )
            else:
                temp = -heapq.heappop( self.small )
                heapq.heappush( self.small, -num )
                heapq.heappush( self.big, temp )
            return
        

    def findMedian(self) -> float:
        # print( self.big, self.small )
        if len(self.big) > len(self.small):
            # print("choose big")
            return self.big[0]
        
        if len(self.small) > len(self.big):
            # print("choose small")
            return -self.small[0] 
        
        # print("choose middle")
        return ( -self.small[0] + self.big[0] ) / 2
        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()

'''
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
[[],[1],[],[2],[],[3],[],[-1],[]]
["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
[[],[1],[],[2],[],[3],[],[-1],[],[4],[]]
["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
[[],[1],[],[10],[],[20],[],[7],[],[4],[]]
["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
[[],[-1],[],[-2],[],[-3],[],[-4],[],[-5],[]]
'''