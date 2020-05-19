/**

212. Word Search II

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
 

Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords3rdTireOK = function(board, words) {
    // construct tier
    const Root = { val: new Array(26).fill(null) };
    const constructTire = (_root, word, ori) => {
        if (word) {
            const code = word.charCodeAt(0) - 97;
            _root.val[code] = _root.val[code] || {  val: new Array(26).fill(null) };
            constructTire(_root.val[code], word.substr(1), ori);
        } else {
            _root.word = true;
            _root.ori = ori;
        }
    }
    
    for ( let i = 0; i < words.length; i++ ) {
        constructTire(Root, words[i], words[i]);
    }

    // search in tire
    const searchTier = (_board, i, j, root, res) => {

        const temp = _board[i][j];
        _board[i][j] = -1; 
        const char = temp.charCodeAt(0) - 97 ;
        const pointer = root.val[char];
        if ( pointer ) {
            if ( pointer.word ) {
                res[pointer.ori] = true;
                // console.log("find one!", pointer.ori);
            }
            // if exist path 
            if ( i > 0 &&  _board[i-1][j] !== -1) {
                searchTier( _board, i-1, j, pointer, res);
            }
            if ( i < _board.length-1 &&  _board[i+1][j] !== -1) {
                searchTier( _board, i+1, j, pointer, res);
            }
            if ( j > 0 &&  _board[i][j-1] !== -1) {
                searchTier( _board, i, j-1, pointer, res);
            }
            if ( j < _board[0].length-1 &&  _board[i][j+1] !== -1) {
                searchTier( _board, i, j+1, pointer, res);
            }
            
        }
        _board[i][j]  = temp;
    }
    
    const res = {};
    for ( let i = 0; i < board.length ; i++ ) {
        for ( let j = 0; j < board[0].length ; j++ ) {
            searchTier(board, i, j, Root, res);
        }
    }
    
    
    return Object.keys(res);
};

/**
[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
["oath"]
[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
["oath","pea","eat","rain"]
[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
["oath","pea","eat","rain", "rainrainrainrainrainrainrainrainrainrain"]
[["o","a","a","n"]]
["oaa","oab", "uijsc"]
[["o"],["e"],["i"],["i"]]
["oeii", "oea", "adqwdasd"]
[["o"],["e"],["i"],["i"]]
["e"]
[["o"]]
["e"]
[["b","a","a","b","a","b"],["a","b","a","a","a","a"],["a","b","a","a","a","b"],["a","b","a","b","b","a"],["a","a","b","b","a","b"],["a","a","b","b","b","a"],["a","a","b","a","a","b"]]
["bbaabaabaaaaabaababaaaaababb","aabbaaabaaabaabaaaaaabbaaaba","babaababbbbbbbaabaababaabaaa","bbbaaabaabbaaababababbbbbaaa","babbabbbbaabbabaaaaaabbbaaab","bbbababbbbbbbababbabbbbbabaa","babababbababaabbbbabbbbabbba","abbbbbbaabaaabaaababaabbabba","aabaabababbbbbbababbbababbaa","aabbbbabbaababaaaabababbaaba","ababaababaaabbabbaabbaabbaba","abaabbbaaaaababbbaaaaabbbaab","aabbabaabaabbabababaaabbbaab","baaabaaaabbabaaabaabababaaaa","aaabbabaaaababbabbaabbaabbaa","aaabaaaaabaabbabaabbbbaabaaa","abbaabbaaaabbaababababbaabbb","baabaababbbbaaaabaaabbababbb","aabaababbaababbaaabaabababab","abbaaabbaabaabaabbbbaabbbbbb","aaababaabbaaabbbaaabbabbabab","bbababbbabbbbabbbbabbbbbabaa","abbbaabbbaaababbbababbababba","bbbbbbbabbbababbabaabababaab","aaaababaabbbbabaaaaabaaaaabb","bbaaabbbbabbaaabbaabbabbaaba","aabaabbbbaabaabbabaabababaaa","abbababbbaababaabbababababbb","aabbbabbaaaababbbbabbababbbb","babbbaabababbbbbbbbbaabbabaa"]
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords2ndHashOverTime = function(board, words) {
    // first words and longest length statistic
    const cache = {};
    for ( let i = 0; i < words.length ; i++ ) {
        const first = words[i][0];
        cache[first] = cache[first]  || 1;
        cache[first] = Math.max( cache[first], words[i].length );
    }
    console.log(cache);
    
    // tire
    const root = {}
    const constructTireHelper = (_root, _board, _length, _row, _col, _path ) => {
        if (_length === 0) {
            return;
        }
        const tempChar = _board[_row][_col];
        const nextPath = `${_path}${tempChar}`;
        _board[_row][_col] = 0;
        if ( !_root[ nextPath ] ) {
            _root[ nextPath ] = true;
        }
        // top 
        if ( _row > 0 && _board[_row-1][_col] !== 0 ) {
            constructTireHelper( _root, _board, _length-1, _row-1, _col, nextPath );
        }
        // bottom
        if ( _row < _board.length-1 && _board[_row+1][_col] !== 0 ) {
            constructTireHelper( _root, _board, _length-1, _row+1, _col, nextPath);
        }
        // right 
        if ( _col < _board[0].length-1 && _board[_row][_col+1] !== 0 ) {
            constructTireHelper( _root, _board, _length-1, _row, _col+1, nextPath);
        }
        // left 
        if ( _col > 0 && _board[_row][_col-1] !== 0 ) {
            constructTireHelper( _root, _board, _length-1, _row, _col-1, nextPath);
        }
        _board[_row][_col] = tempChar;
    }
    
    const constructTire = (_root, _board, _cache ) => {
        for ( let i = 0 ; i < _board.length; i++ ) {
            for ( let j = 0; j < _board[0].length ; j++ ) {
                if ( _cache[ _board[i][j] ] ) {
                    constructTireHelper( _root, _board, _cache[_board[i][j]], i, j, "");
                }
            }   
        }
    }
    constructTire(root, board, cache);
    console.log(root);
    
    // search tire
    const ret = words.filter( item => root[item]);
        
    // res
    return ret;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords1stTireOvertime = function(board, words) {
    function TireNode(val) {
        this.val = val;
    };
    // first words and longest length statistic
    const cache = {};
    for ( let i = 0; i < words.length ; i++ ) {
        const first = words[i][0];
        cache[first] = cache[first]  || 1;
        cache[first] = Math.max( cache[first], words[i].length );
    }
    // console.log(cache);
    
    // tire
    const root = new TireNode(0);
    const constructTireHelper = (_root, _board, _length, _row, _col ) => {
        if (_length === 0) {
            return;
        }
        const tempChar = _board[_row][_col];
        _board[_row][_col] = 0;
        if ( !_root[ tempChar ] ) {
            _root[ tempChar ] = new TireNode(tempChar);
        }
        // top 
        if ( _row > 0 && _board[_row-1][_col] !== 0 ) {
            constructTireHelper( _root[ tempChar ], _board, _length-1, _row-1, _col );
        }
        // bottom
        if ( _row < _board.length-1 && _board[_row+1][_col] !== 0 ) {
            constructTireHelper( _root[ tempChar ], _board, _length-1, _row+1, _col );
        }
        // right 
        if ( _col < _board[0].length-1 && _board[_row][_col+1] !== 0 ) {
            constructTireHelper( _root[ tempChar ], _board, _length-1, _row, _col+1 );
        }
        // left 
        if ( _col > 0 && _board[_row][_col-1] !== 0 ) {
            constructTireHelper( _root[ tempChar ], _board, _length-1, _row, _col-1 );
        }
        _board[_row][_col] = tempChar;
    }
    
    const constructTire = (_root, _board, _cache ) => {
        for ( let i = 0 ; i < _board.length; i++ ) {
            for ( let j = 0; j < _board[0].length ; j++ ) {
                if ( _cache[ _board[i][j] ] ) {
                    constructTireHelper( _root, _board, _cache[_board[i][j]], i, j);
                }
            }   
        }
    }
    constructTire(root, board, cache);
    // console.log(root);
    
    // search tire
    const ret = words.filter( item => {
        let match = true;
        let path = root;
        for ( let i = 0; i < item.length ; i++ ) {
            if ( path[ item[i] ] ) {
                path = path[ item[i] ];
            } else {
                match = false;
                break;
            }
        }
        return match;
    });
        
    // res
    return ret;
};