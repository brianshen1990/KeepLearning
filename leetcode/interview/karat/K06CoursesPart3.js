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

/**
I got the similar question to " 210 Course Schedule II" on Karat.io platform.
Time to solve: 2 hours

Input:
Instead of the integer 2D array of [course,prerequisite] form and the number of courses, the input was ONLY 2D String array of [prerequisite,course] form. Notice the inversion of the mapping from the original question.

The output was supposed to be the name of the course which is currently taken if you are AT the halfway stage. If there are two courses at halfway, choose the first one i.e. when there are evn number of courses.

Example input:
[DS Algo]
[FoundationCS OS]
[CN CA]
[Algo FundationCS]
[CA DS]
[SD CN]

Output: DS

Explaination: Total 7 courses are there. if you look at the mapping and list out the order of courses. DS will be the 4th course. so at HALFWAY, you are taking DS.

If there are 6 courses, Then return the 3rd course of the sequence, not 4th because at Halfway, the first middle course is course number 3.
 */

/**
2 给定 一些 <course, course> 代表 prerequisite， 只有一条可行的路径， 返回中间的那节课
eg. ("A", "C"), ("B", "D"), ("D", "A"), ("G", "E"), ("C", "F"), ("E", "B")
唯一路径为 G->E->B->D->A->C->F
返回 D 

3. 给定一些 <course, course>代表prerequisite， 返回每条路径中间的那节课
eg. ("A", "B"), ("B", "D"), ("E", "B"), ("E", "C"), ("C", "F"), ("E", "F")
路径为 ABD, EBD, ECF, EF
返回 B,C,E
 */