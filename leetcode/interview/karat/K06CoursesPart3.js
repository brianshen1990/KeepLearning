/*
Pt.3 Students may decide to take different "tracks" or sequences of courses in the Computer Science curriculum. There may be more than one track that includes the same course, but each student follows a single linear track from a "root" node to a "leaf" node. In the graph below, their path always moves from left to right.

Write a function that takes a list of (source, destination) pairs, and returns the name of all of the courses that the students could be taking when they are halfway through their track of courses.
Sample input:
all_courses = [
    ["Logic","COBOL"],
    ["Data Structures","Algorithms"],
    ["Creative Writing","Data Structures"],
    ["Algorithms","COBOL"],
    ["Intro to Computer Science","Data Structures"],
    ["Logic","Compilers"],
    ["Data Structures","Logic"],
    ["Creative Writing","System Administration"],
    ["Databases","System Administration"],
    ["Creative Writing","Databases"]
]
Sample_ouput(in any order):
["Creative Writing","Databases","Data Structures"]
*/