/**

726. Number of Atoms

Given a chemical formula (given as a string), return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together to produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

 

 

Example 1:

Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
Example 2:

Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
Example 3:

Input: formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
Example 4:

Input: formula = "Be32"
Output: "Be32"
 

Constraints:

1 <= formula.length <= 1000
formula consists of English letters, digits, '(', and ')'.
formula is always valid.
 */


/**
 * @param {string} formula
 * @return {string}
 */
 var countOfAtoms = function(formula) {
    
    
    const helper = ( str ) => {
        if ( str === "" ) {
            return {};
        }
        // console.log("=====", str );
        const res = {};
        
        let index = 0;
        while ( index < str.length ) {
            if ( str[index] >= 'A' && str[index] <= 'Z' ) {
                // console.log("hit normal");
                let nextIndex = index+1;
                while ( nextIndex < str.length && !( (str[nextIndex] >= 'A' && str[nextIndex] <= 'Z') || str[nextIndex] === '(') ) {
                    nextIndex++;
                }
                // Handle element and count
                const eleCountStr = str.substring(index, nextIndex);
                // console.log("handle: ", eleCountStr);
                let eleIndex = 0;
                while ( eleIndex < eleCountStr.length && !(eleCountStr[eleIndex] >= '0' && eleCountStr[eleIndex] <= '9') ) {
                    eleIndex++;
                }
                const ele = eleCountStr.substr(0, eleIndex);
                const count = parseInt( eleCountStr.substr(eleIndex) || '1' );
                res[ele] = res[ele] || 0;
                res[ele] += count;
                
                // continue
                index = nextIndex;
            } else {
                // ( )
                // console.log("hit ()");
                let nextIndex = index + 1;
                let leftCount = 1;
                while ( leftCount > 0 ) {
                    if ( str[nextIndex] === '(' ) {
                        leftCount++;
                    } else if ( str[nextIndex] === ')' ) {
                        leftCount--;
                    }
                    nextIndex++;
                }
                const tempRes = helper( str.substring( index+1, nextIndex-1 ) );
                
                let mutilple = 1;
                if ( nextIndex !== str.length && str[nextIndex] >= '0' && str[nextIndex] <= '9' ) {
                    let nnextIndex = nextIndex;
                    while ( nnextIndex < str.length && str[nnextIndex] >= '0' && str[nnextIndex] <= '9' ) {
                        nnextIndex++;
                    }
                    mutilple = parseInt( str.substring(nextIndex, nnextIndex) );
                    nextIndex = nnextIndex;
                }
                
                    
                Object.keys( tempRes ).forEach( item => {
                    res[item] = res[item] || 0;
                    res[item] += mutilple * tempRes[item];   
                })
                
                // continue
                index = nextIndex;
            }
        }
        return res;
    }
    
    const ans = helper(formula);
    // console.log(ans);
    return Object.keys( ans ).sort( (a,b) => a<b?-1:1 ).map( item =>`${item}${ans[item]===1?"":ans[item]}` ).join("");
};


/**
"H2O"
"Mg(OH)2"
"K4(ON(SO3)2)2"
"Be32"
"H"
"Mg(OH)2(OLOl)2"
"Mg(OH)(OLOl)2"
"Mg((OH)2(OLOl)2)10"
 */