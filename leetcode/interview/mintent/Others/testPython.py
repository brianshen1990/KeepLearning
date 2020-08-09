







'''
class MovingTotal:
    def __init__(self):
        self.nums = []
        self.map = {}
    
    def append(self, numbers):
        """
        :param numbers: (list) The list of numbers.
        """
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
'''


'''
class Greeter:

    def __init__(self, boss):
        self.boss = boss
        self.visitor = None

    def enters(self, visitor):
        self.visitor = visitor

    def greet(self):
        if self.visitor is not None:
            ret = ""
            if self.visitor == self.boss:
                ret =  f'Hello, {self.visitor}'
            else:
                ret = f'Welcome, {self.visitor}'
            self.visitor = None
            return ret
        else:
            return None
            
    
if __name__ == "__main__":
    g = Greeter('Chuck')
    g.enters('John')
    print(g.greet())
    print(g.greet())

'''