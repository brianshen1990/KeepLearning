/*
Pt.1 You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.
Write a function that takes in a list of (student ID number, course name) pairs and returns, for every pair of students, a list of all courses they share.
Sample Input:

student_course_pairs_1 = [
  ["58", "Software Design"],
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
]
Sample Output (pseudocode, in any order):
find_pairs(student_course_pairs_1) =>
{
  [58, 17]: ["Software Design", "Linear Algebra"]
  [58, 94]: ["Economics"]
  [58, 25]: ["Economics"]
  [94, 25]: ["Economics"]
  [17, 94]: []
  [17, 25]: []
}
Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  [0, 42]: []
  [0, 9]: []
  [9, 42]: []
}
*/

const find_pairs = (student_course_pairs) => {
  const cache = {};
  student_course_pairs.map( item => {
    cache[item[0]] =  cache[item[0]] || [];
    cache[item[0]].push( item[1] );
  });
  // O(N)
  
  const helperFindCommon = ( arr1, arr2 ) => {
    const ret = [];
    for( let i = 0; i < arr1.length; i++ ) {
      for ( let j = 0; j < arr2.length ; j++ ) {
        if ( arr1[i] === arr2[j] ) {
          ret.push( arr1[i] );
        }
      }
    }
    return ret;
  }
  
  const ret = {};
  const students = Object.keys(cache);
  // 0(N^2)
  for ( let i = 0 ; i< students.length ; i++ ) {
    for ( let j = i+1 ; j < students.length ; j++ ) {
      const fir = students[i];
      const sec = students[j];
      ret[`[${fir}, ${sec}]`] = helperFindCommon( cache[fir], cache[sec] );
    }
  }
  return ret;
}

// const student_course_pairs_1 = [
//   ["58", "Software Design"],
//   ["58", "Linear Algebra"],
//   ["94", "Art History"],
//   ["94", "Operating Systems"],
//   ["17", "Software Design"],
//   ["58", "Mechanics"],
//   ["58", "Economics"],
//   ["17", "Linear Algebra"],
//   ["17", "Political Science"],
//   ["94", "Economics"],
//   ["25", "Economics"],
// ]
// console.log( find_pairs(student_course_pairs_1) );

// const student_course_pairs_2 = [
//   ["42", "Software Design"],
//   ["0", "Advanced Mechanics"],
//   ["9", "Art History"],
// ]
// console.log( find_pairs(student_course_pairs_2) );
