/**
1096. Brace Expansion II

Under a grammar given below, strings can represent a set of lowercase words.  Let's use R(expr) to denote the set of words the expression represents.

Grammar can best be understood through simple examples:

Single letters represent a singleton set containing that word.
R("a") = {"a"}
R("w") = {"w"}
When we take a comma delimited list of 2 or more expressions, we take the union of possibilities.
R("{a,b,c}") = {"a","b","c"}
R("{{a,b},{b,c}}") = {"a","b","c"} (notice the final set only contains each word at most once)
When we concatenate two expressions, we take the set of possible concatenations between two words where the first word comes from the first expression and the second word comes from the second expression.
R("{a,b}{c,d}") = {"ac","ad","bc","bd"}
R("a{b,c}{d,e}f{g,h}") = {"abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"}
Formally, the 3 rules for our grammar:

For every lowercase letter x, we have R(x) = {x}
For expressions e_1, e_2, ... , e_k with k >= 2, we have R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
For expressions e_1 and e_2, we have R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}, where + denotes concatenation, and × denotes the cartesian product.
Given an expression representing a set of words under the given grammar, return the sorted list of words that the expression represents.

 

Example 1:

Input: "{a,b}{c,{d,e}}"
Output: ["ac","ad","ae","bc","bd","be"]
Example 2:

Input: "{{a,z},a{b,c},{ab,z}}"
Output: ["a","ab","ac","z"]
Explanation: Each distinct word is written only once in the final answer.
 

Constraints:

1 <= expression.length <= 60
expression[i] consists of '{', '}', ','or lowercase English letters.
The given expression represents a set of words based on the grammar given in the description.
 */


/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    
    
    const helper = (str, underBrace = true) => {
        // console.log( "handling: ", str );
        let resArr = [ ];
        
        let i = 0 ;
        while ( i < str.length ) {
            if ( str[i] === '{' ) {
                let count = 1;
                let nextI = i+1;
                while ( count > 0 ) {
                    if ( str[nextI] === '{' ) count++;
                    if ( str[nextI] === '}' ) count--;
                    nextI++;
                }
                let subStr = str.substring(i+1, nextI-1 );
                resArr.push( helper( subStr ) );
                i = nextI;
            } else if ( underBrace ) { 
                if ( str[i] === ',' ){
                    resArr.push( str[i++] );
                } else {
                    let nextI = i+1;
                    while ( nextI < str.length && str[nextI] >= 'a' && str[nextI] <= 'z' ) {
                        nextI++;
                    }
                    let charStr = str.substring(i, nextI );
                    resArr.push( [charStr] );
                    i = nextI;
                }
            } else {
                let nextI = i+1;
                while ( nextI < str.length && str[nextI] !== '{' ) {
                    nextI++;
                }
                let charStr = str.substring(i, nextI);
                resArr.push( [charStr] );
                i = nextI;
            } 
        }
        
        // console.log( "after handling", resArr );
        
        // handle multiple
        i = 1 ;
        while ( i < resArr.length ) {
            if ( resArr[i-1] !== ',' && resArr[i] !== ',' ) {
                const tempSet = new Set();
                resArr[i-1].forEach( a => {
                    resArr[i].forEach( b => {
                        tempSet.add( a+b );
                    })   
                })
                resArr.splice(i-1, 2, [...tempSet]);
            } else {
                i++;
            }
        }
        // console.log( "after multiple,", resArr );
        
        // handle add
        const retSet = new Set();
        resArr.forEach( item => {
            if ( item !== ',' ) {
                item.forEach( a => {
                    retSet.add(a);
                })
            }   
        })
        // console.log( "after add,", [...retSet]);
        
        return [...retSet];
    }
    
    const res = helper( expression, false );
    // console.log( res );
    return res.sort( (a,b) => a > b ? 1 : -1 );
    
};


/**
"{a,b}{c,{d,e}}"
"{{a,z},a{b,c},{ab,z}}"
"{{a,z},a{b,c},{ab,z}}{{a,z},a{b,c},{ab,z}}"
"a,z"
"a,{b,c},d"
"a,{b,c},{b,c}d"
"{a,{b,c},{b,c}d}"
"a"
"{a}"
 */