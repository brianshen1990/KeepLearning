/**

591. Tag Validator

Given a string representing a code snippet, you need to implement a tag validator to parse the code and return whether it is valid. A code snippet is valid if all the following rules hold:

The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.
A closed tag (not necessarily valid) has exactly the following format : <TAG_NAME>TAG_CONTENT</TAG_NAME>. Among them, <TAG_NAME> is the start tag, and </TAG_NAME> is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is valid if and only if the TAG_NAME and TAG_CONTENT are valid.
A valid TAG_NAME only contain upper-case letters, and has length in range [1,9]. Otherwise, the TAG_NAME is invalid.
A valid TAG_CONTENT may contain other valid closed tags, cdata and any characters (see note1) EXCEPT unmatched <, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the TAG_CONTENT is invalid.
A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.
A < is unmatched if you cannot find a subsequent >. And when you find a < or </, all the subsequent characters until the next > should be parsed as TAG_NAME (not necessarily valid).
The cdata has the following format : <![CDATA[CDATA_CONTENT]]>. The range of CDATA_CONTENT is defined as the characters between <![CDATA[ and the first subsequent ]]>.
CDATA_CONTENT may contain any characters. The function of cdata is to forbid the validator to parse CDATA_CONTENT, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as regular characters.
Valid Code Examples:
Input: "<DIV>This is the first line <![CDATA[<div>]]></DIV>"

Output: True

Explanation: 

The code is wrapped in a closed tag : <DIV> and </DIV>. 

The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. 

Although CDATA_CONTENT has unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as tag.

So TAG_CONTENT is valid, and then the code is valid. Thus return true.


Input: "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"

Output: True

Explanation:

We first separate the code into : start_tag|tag_content|end_tag.

start_tag -> "<DIV>"

end_tag -> "</DIV>"

tag_content could also be separated into : text1|cdata|text2.

text1 -> ">>  ![cdata[]] "

cdata -> "<![CDATA[<div>]>]]>", where the CDATA_CONTENT is "<div>]>"

text2 -> "]]>>]"


The reason why start_tag is NOT "<DIV>>>" is because of the rule 6.
The reason why cdata is NOT "<![CDATA[<div>]>]]>]]>" is because of the rule 7.
Invalid Code Examples:
Input: "<A>  <B> </A>   </B>"
Output: False
Explanation: Unbalanced. If "<A>" is closed, then "<B>" must be unmatched, and vice versa.

Input: "<DIV>  div tag is not closed  <DIV>"
Output: False

Input: "<DIV>  unmatched <  </DIV>"
Output: False

Input: "<DIV> closed tags with invalid tag name  <b>123</b> </DIV>"
Output: False

Input: "<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>"
Output: False

Input: "<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>"
Output: False
Note:
For simplicity, you could assume the input code (including the any characters mentioned above) only contain letters, digits, '<','>','/','!','[',']' and ' '.
 */


/**
 * @param {string} code
 * @return {boolean}
 */
 var isValid = function(code) {
            
    function isValidTag(str, shoudlEnd=false) {
        let index = 0 ;
        if ( str[0] !== '<' ) return false;
        index++;
        while ( index < str.length && str[index] !== '>' ) {
            if ( str[index] >= 'A' && str[index] <= 'Z' ) {
                index++;
                continue;
            } else {
                return false;
            }
        }
        if (index >= str.length) return false;
        let tag = str.substr(0, index+1);
        if ( tag.length <= 2 || tag.length > 11 ) return false;
        
        let end = "</" + tag.substr(1);
        
        let lastIndex = str.lastIndexOf(end);
        if ( lastIndex < 0 ) return false;
        if ( lastIndex + end.length !== str.length ) return false;

        const nextStr = str.substring( index+1, lastIndex );
        const res =  isValidContent( nextStr );

        // console.log( "Verify content: ", nextStr, res );
        return res;
    }

    function isValidStack(str) {
        let index = 0 ;
        if ( str[0] !== '<' ) return false;
        index++;
        while ( index < str.length && str[index] !== '>' ) {
            if ( str[index] >= 'A' && str[index] <= 'Z' ) {
                index++;
                continue;
            } else {
                return false;
            }
        }
        if (index >= str.length) return false;
        let tag = str.substr(0, index+1); 
        
        let end = "</" + tag.substr(1);
        
        let firstIndex = str.indexOf(end);
        let lastIndex = str.lastIndexOf(end);
        
        let cdata = str.indexOf()
    }
    
    function isValidContent(str) {
        let start = str.indexOf("<");
        let end = str.lastIndexOf(">");
        if ( start < 0 ) {
            return true; // pure text
        }
        // exist < or > but doesn't match
        if ( end < 0 || start > end) return false;
        str = str.substring(start, end+1);
        let stack = [];
        let index = 0;
        
        while( index < str.length ) {
            if ( str[index] === '<' ) {
                if ( str[index+1] === '!' ) {
                    // cdata
                    if ( str.indexOf("<![CDATA[",  index ) !== index ) {
                        // console.log("not a valid tag")
                        return false;
                    }
                    let nextIndex = str.indexOf("]]>", index);
                    if ( nextIndex <= 0 ) {
                        // console.log("no end cdata tag")
                        return false;
                    }
                    // console.log( "cdata: ", str.substring(index, nextIndex+3) , " --> next --> ", str.substr(nextIndex+3) )
                    index = nextIndex+3;
                } else if ( str[index+1] === '/' ) {
                    // end Tag
                    if ( stack.length === 0 ) {
                        // console.log("not match");
                        return false;
                    }
                    if ( str.indexOf(stack[stack.length-1].replace("<","</"), index) !== index ) {
                        // console.log("not match");
                        return false;
                    }
                    const matchedTag = stack.pop();
                    index = index + matchedTag.length;
                    // console.log("pop tag:", matchedTag, str.substr( index ));
                } else {
                    // tag
                    let nextIndex = index+1;
                    while ( nextIndex < str.length && str[nextIndex] !== '>' ) {
                        if ( str[nextIndex] >= 'A' && str[nextIndex] <= 'Z' ) {
                            nextIndex++;
                            continue;
                        } else {
                            // console.log("not valid tag");
                            return false;
                        }
                    }
                    if (nextIndex >= str.length) {
                        // console.log("no ending > ");
                        return false;
                    }
                    if ( nextIndex === index+1 ) {
                        // console.log("empty tag");
                        return false;
                    }
                    // console.log( index, nextIndex )
                    if ( nextIndex > index+10 ) {
                        // console.log("Tag too long");
                        return false;
                    } 
                    stack.push(str.substring(index, nextIndex+1));
                    // console.log("push tag:", stack[stack.length-1], " --> next --> ",  str.substr( nextIndex+1 ));
                    index = nextIndex+1;
                }
            } else {
                index++;
            }
        }
        return stack.length === 0;
    }

    return isValidTag(code);
};


/**
"<DIV>This is the first line <![CDATA[<div>]]></DIV>"
"<DIV>  div tag is not > closed  <DIV>"
"<DIV>  div tag is not > < closed  <DIV>"
"<DIV>  div tag is not < closed>  <DIV>"
"<DIV>  div tag is not < CLOSED>  <DIV>"
"<DIV>  div tag is not < aCLOSED>  </DIV>"
"<DIV>  div tag is not <closed>  </DIV>"
"<DIV>  div tag is not <closed/>  </DIV>"
"<DIV>  div tag is not <closed></closed>  </DIV>"
"asasas<DIV>This is the first line <![CDATA[<div>]]></DIV>asa"
"<DIV>>>>>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
"<DIV>This is the first line <H></H>>> </DIV>"
"<TRUE><![CDATA[wahaha]]]><![CDATA[]> wahaha]]></TRUE>"
"<A><A>456</A>  <A> 123  !!  <![CDATA[]]>  123 </A>   <A>123</A></A>"
"<DIV><></></DIV>"
"<AAAAAAAAAA></AAAAAAAAAA>"
"<></>"
"<AAAAAAAAA></AAAAAAAAA>"
"<AAAAAAAAA><></></AAAAAAAAA>"
"<A><AAAAAAAAA></AAAAAAAAA></A>"
"<A><AAAAAAAAAA></AAAAAAAAAA></A>"
 */