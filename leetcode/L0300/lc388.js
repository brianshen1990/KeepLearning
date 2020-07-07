/**
388. Longest Absolute File Path

Suppose we abstract our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

Note:
The name of a file contains at least a . and an extension.
The name of a directory or sub-directory will not contain a ..
Time complexity required: O(n) where n is the size of the input string.

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.

 */


/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    
    const stackDir = [];
    let preIndex = 0;
    let tab = 0;
    let ret = 0;
    let nextIndex = input.length;
    while( preIndex < input.length ) {
        nextIndex = input.indexOf("\n", preIndex);
        if ( nextIndex < 0 ) {
            nextIndex = input.length;
        }
        let tempStr = input.substring(preIndex, nextIndex);
        
        let index = 0;
        tab = 0;
        while ( tempStr[index] === "\t" ) {
            tab++;
            index++;
        }
        let subName = tempStr.substr( tab );
        
        if ( stackDir.length < tab + 1 ) {
            stackDir.push( subName );
        } else {
            stackDir[tab] = subName; 
            stackDir.splice( tab+1 );
        }
        
        if ( stackDir[stackDir.length-1].indexOf(".") >= 0 ) {
            const len = stackDir.length - 1 + stackDir.join("").length;
            // console.log( tab, subName, stackDir, len, ret );
            if ( len > ret ) {
                ret = len;
            }
        }

        preIndex = nextIndex+1;
    }
    return ret;
    
};


/** 
"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
"dir"
""
*/