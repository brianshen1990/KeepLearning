'''
Consider the following code snippet:

select the statement that are correct if the open() function throws a FileNotFoundError exception. 

1. The variable first_line_will be assigned to the result of file.readline()
2. √ An error message will be printed to the console.
3. √ The file variable will be compared to None
4. The file.close() function will be called

'''

def read_first_line(path):
    file = None # here
    first_line = None # here
    try:
        file = open(path) # here
        first_line = file.readline()
    except FileNotFoundError as e:
        print("Error")  # here
    finally:
        if file is not None: # here
            try:
                file.close()
            except:
                pass # here
    return first_line # here

read_first_line("./empty.txt")