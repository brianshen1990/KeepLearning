'''
Question 05

The greeter greets people entering a hotel.
The boss should be greeted with 'Hello, {name}' while everyone else should be greeted with 'Welcome, {name}'. If multiple people enter, only the person who entered last should be greeted. 
If no one has entered since the last greeting, a call to greet() should return None.

For example, the following code should display 'Welcome, John':

g = Greeter("Chuck")
g.enters('John')
print(g.greet())

Implement the greeter.

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