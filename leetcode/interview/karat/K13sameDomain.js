/*
-------

两个题目第一个挺简单，没记下来
下面这是第二个，说了下bruteforce，然后说最优的是个dp，不过没一下子想出来，面试官就让些bruteforce了
写完后测了这里面的几个例子没问题，也给过了。

We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order, and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", &qu


--------
*/

const findCommonCSeq = (url1, url2) => {
  const matrix = new Array( url1.length+1 );
  matrix[0] = new Array( url2.length+1 ).fill(0);
  for ( let i = 1 ; i <= url1.length ; i++ ) {
    matrix[i] = new Array( url2.length+1 ).fill(0);
  }
  let max = 0;
  let pos = {};
  for ( let i = 1 ; i <= url1.length ; i++ ) {
    for ( let j = 1 ; j <= url2.length ; j++ ) {
      if ( url1[i-1] === url2[j-1] ) {
        matrix[i][j] = matrix[i-1][j-1] + 1;
        if ( matrix[i][j] > max ) {
          max = matrix[i][j];
          pos = {i, j}
        }
      }
    }
  }
  // console.log( max, pos );
  return url1.slice(pos.i-max, pos.i );
}

const user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
const user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
const user2 = ["a", "/one", "/two"]
const user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber"]


console.log( findCommonCSeq( user0, user1 ) ); // [ '/pink', '/register', '/orange' ]
console.log( findCommonCSeq( user0, user2 ) ); // ['a']
console.log( findCommonCSeq( user0, user3 ) ); // ['/pink']