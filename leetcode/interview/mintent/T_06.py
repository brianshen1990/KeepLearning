'''
Question 06

Design a data structure that can, efficiently with respect to time used, store and check if the total of any three successively added elements is equal to a given total.

For example, MovingTotal() creates an empty container with no existing totals. append([1,2,3]) appends element[1,2,3], which means that there is only one existing total (1+2+3=6). append([4]) appends element 4 and creates an additional total from [2,3,4]. There would now be two totals (1+2+3=6 and 2+3+4=9). At this point contains(6) and contains(9) should return True, while contains(7) should return False.
'''

class MovingTotal:
    def __init__(self):
        self.nums = []
        self.map = {}
    
    def append(self, numbers):
        """
        :param numbers: (list) The list of numbers.
        """
        # this place, can only keep 3 items here
        for x in numbers:
            self.nums.append(x)
            if len(self.nums) >= 3:
                self.map[ self.nums[-1] + self.nums[-2] + self.nums[-3] ] = True      


    def contains(self, total):
        """
        :param total: (int) The total to check for.
        :returns: (bool) If MovingTotal contains the total.
        """
        return True if total in self.map else False
    
if __name__ == "__main__":
    movingtotal = MovingTotal()
    
    movingtotal.append([1, 2, 3])
    print(movingtotal.contains(6))
    print(movingtotal.contains(9))
    
    movingtotal.append([4])
    print(movingtotal.contains(6))
    print(movingtotal.contains(9))