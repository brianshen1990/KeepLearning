'''
7. Sorted Search
Implement function count_numbers that accepts a sorted list of unique integers and, efficiently with respect to time used, counts the number of list elements that are less than the parameter less_than.

For example, count_numbers([1, 3, 5, 7], 4) should return 2 because there are two list elements less than 4.

'''

def count_numbers(sorted_list, less_than):
    beg = 0
    end = len(sorted_list)
    while beg + 1 < end :
        middle = ( beg + end ) // 2
        if sorted_list[middle] == less_than:
            break
        elif sorted_list[middle] < less_than:
            beg = middle
        else:
            end = middle
            
    if sorted_list[middle] == less_than:
        while ( middle >= 0 and sorted_list[middle] == less_than ):
            middle = middle - 1
        return middle + 1
    else:
        if sorted_list[beg] == less_than:
           while ( beg >= 0 and sorted_list[beg] == less_than ):
                beg = beg - 1 
           return beg + 1
        else:
            return beg + 1
    

if __name__ == "__main__":
    sorted_list = [1, 3, 5, 7]
    print(count_numbers(sorted_list, 4)) # should print 2