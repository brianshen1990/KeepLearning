/**
126. Word Ladder II
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders2ndBFS = function(beginWord, endWord, wordList) {
    
    const caled = {};
    const cache = {}; // bidirect
    let ret = [];
    let found= false;
    
    const helperTransable = (word1, word2) => {
        let diff = 0;
        for ( let i = 0; i < word1.length; i++ ) {
            if ( word1[i] !== word2[i] ) {
                diff++;
                if (diff > 1) {
                    break;
                }
            }
        }
        return diff <= 1;
    }
    
    const helperCache = (word) => {
        if ( caled[word] === true ) {
            return;
        }
        for ( let i = 0; i < wordList.length ; i++ ) {
            if ( caled[wordList[i]] ) {
                continue;
            }
            if ( helperTransable(wordList[i], word) ) {
                cache[word] = cache[word] || {};
                cache[word][wordList[i]] = true;
                cache[wordList[i]] = cache[wordList[i]] || {};
                cache[wordList[i]][word] = true;
            }
        }
        caled[word] = true;
    }
    
    let nextWords = [beginWord];
    while( nextWords.length > 0 ) {
        ret.push( nextWords );
        // console.log( nextWords );
        let next = [];
        for ( let i = 0; i < nextWords.length ; i++ ) {
            if ( caled[nextWords] ) {
                continue;
            } else {
                if ( nextWords[i] === endWord ) {
                    found = true;
                    break;
                }
                helperCache( nextWords[i] );
                Object.keys(cache[ nextWords[i] ]).map( item => {
                    if ( !caled[item] && next.indexOf(item) < 0 && nextWords.indexOf(item) < 0 ) {
                        next.push(item);
                    }   
                })
            }
        }
        if ( found ) {
            break;
        }
        nextWords = next;
    }
    
    if ( found ) {
        // trace back
        let res = [[endWord]];
        ret.pop();
        for ( let i = ret.length-1; i >= 0 ; i-- ) {
            let nextRes = [];
            for ( let j = 0; j < ret[i].length ; j++ ) {
                // console.log( res, ret[i] );
                for ( let k = 0; k < res.length ; k++ ) {
                    const lastWord = res[k][res[k].length-1];
                    if ( cache[lastWord] [ ret[i][j] ] ) {
                        nextRes.push( res[k].concat(ret[i][j] ) );
                    }
                }
            }
            res = nextRes
        }
        for ( let i = 0; i < res.length; i++ ) {
            res[i] = res[i].reverse();
        }
        return res;
    } else {
        return [];
    }
};


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let ring = [];
    let found = false;
    let lastArr = [beginWord];
    let mapping = { [beginWord]: true };
    let relaMapping = {};
    while ( lastArr.length > 0 ) {
        ring.push( lastArr );
        let nextArr = {};
        for ( let i = 0 ; i < lastArr.length ; i++ ) {
            for ( let j = 0; j< wordList.length; j++ ) {
                if (  !mapping[wordList[j]] ) {
                    // not included
                    if ( helperSim( lastArr[i], wordList[j] ) ) {
                        relaMapping[ lastArr[i] ] = relaMapping[ lastArr[i] ] || {};
                        relaMapping[ lastArr[i] ][ wordList[j] ] = true;
                        relaMapping[ wordList[j] ] = relaMapping[ wordList[j] ] || {};
                        relaMapping[ wordList[j] ][  lastArr[i] ] = true;
                        if ( wordList[j] === endWord ) {
                            found = true;
                            break;
                        }
                        nextArr[wordList[j]] = true;
                        mapping[wordList[j]] = true;
                    }
                }
            }
            if( found ) {
                break;
            }
        }
        // shorten wordList
        let leftArr = [];
        wordList.map( item => {
           if (!mapping[item]  ) {
              leftArr.push( item );
           }
        });
        wordList = leftArr;
        // console.log(lastArr.length, Object.keys(nextArr).length, wordList.length );
        lastArr = Object.keys(nextArr);
        if( found ) {
            ring.push( [ endWord ] );
            break;
        }
    }
    
    if ( found) {
        // console.log( ring );
        return helpHandleRes(ring, relaMapping); 
    } else {
        return [];
    }
};

// function TreeNode(val) {
//     this.val = val;
//     this.children = [];
// }
 
var helpHandleRes = function( ring, relaMapping ) {
    let ret = [ring[0]];
    // console.log( relaMapping )
    for ( let i = 1; i < ring.length ; i++ ) {
        let newRet = [];
        for ( let j = 0; j < ring[i].length; j++ ) {  
            // console.log(ret);
            for ( let k = 0; k< ret.length ; k++ ) {
                // console.log(ring[i][j] , ret[k][ret[k].length-1]  )
                if ( relaMapping[ ring[i][j] ][ ret[k][ret[k].length-1] ] || helperSim(ring[i][j] , ret[k][ret[k].length-1]  ) ) {
                   newRet.push( ret[k].concat( ring[i][j] ) ); 
                }
            }
        }
        ret = newRet;
    }
    return ret;
}

var helperSim = function(word1, word2){
    let notSame = 0;
    for ( let i = 0; i < word1.length; i++ ) {
        if ( word1[i] !== word2[i] ) {
            notSame++;
            if ( notSame > 1 ) {
                return false;
            }
        }
    }
    return true;
}



/**
"hit"
"cog"
["hot","dot","dog","lot","log","cog"]
"hit"
"hot"
["hot","dot","dog","lot","log","cog"]
"hit"
"cog"
["hot","dot","dog","lot","log"]
"hit"
"cog"
["hot","dot","dog","lot","log","cog"]
"a"
"b"
["r","b","f","e","d","c"]
"qa"
"sq"
["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
"cet"
"ism"
["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]
 */