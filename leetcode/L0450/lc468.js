/**

468. Validate IP Address

Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

1 <= xi.length <= 4
xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
Leading zeros are allowed in xi.
For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

 

Example 1:

Input: IP = "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".
Example 2:

Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".
Example 3:

Input: IP = "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.
Example 4:

Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
Output: "Neither"
Example 5:

Input: IP = "1e1.4.5.6"
Output: "Neither"
 

Constraints:

IP consists only of English letters, digits and the characters '.' and ':'.

 */


/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    const ipv4List = IP.split(".");
    const ipv6List = IP.split(":");
    
    if ( ipv4List.length === 4 && ipv6List.length === 1 ) {
        for ( let i = 0 ; i < 4 ; i++ ) {
            if ( ipv4List[i].length === 0 ) break;
            if ( ipv4List[i].length > 1 && ipv4List[i][0] === '0' ) break;
            
            const numLen = ipv4List[i].split("").filter(item => item >="0" && item <="9").length;
            
            if ( numLen !== ipv4List[i].length ) break;
            
            try{
                let num = parseInt(ipv4List[i]);
                if ( num >=0 && num <= 255 ) {
                    // pass
                } else {
                    break;
                }
            } catch (err) {
                break;
            }
            
            if ( i === 3 ) return 'IPv4';
        }
    }
    
    if ( ipv4List.length === 1 && ipv6List.length === 8 ) {
        for ( let i = 0 ; i < 8 ; i++ ) {
            if ( ipv6List[i].length >= 1 && ipv6List[i].length <= 4 ) {
                // pass
            } else {
                break;
            }
            
            const numLen = ipv6List[i].split("").filter(item => 
                                                        (item >="0" && item <="9") || 
                                                         (item >="a" && item <="f") || 
                                                         (item >="A" && item <="F")
                                                       ).length;
            if ( numLen !== ipv6List[i].length ) break;
            if ( i === 7 ) return 'IPv6'
        }
        
    }
    
    return 'Neither';
};

/**
"172.16.254.1"
"2001:0db8:85a3:0:0:8A2E:0370:7334"
"256.256.256.256"
"2001:0db8:85a3:0:0:8A2E:0370:7334:"
"1e1.4.5.6"
"172.16.254.1e"
"2001:0db8:85a3:0:0:8A2E:0370:73.34"
""
"0.1.2.4"
"2001:0db8:85a3:0:0:8A2F:0370:7334"
"2001:0db8:85a3:0:0:8A2G:0370:7334"
"2001:0db8:85a3:0:0:8A2g:0370:7334"
"2001:0db8:85a3:0:0:8A2FF:0370:7334"
"0.1.2.256"
 */