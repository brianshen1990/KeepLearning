/**

1604. Alert Using Same Key-Card Three or More Times in a One Hour Period

Leetcode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "23:51" - "00:10" is not considered to be within a one-hour period.

 

Example 1:

Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
Output: ["daniel"]
Explanation: "daniel" used the keycard 3 times in a one-hour period ("10:00","10:40", "11:00").
Example 2:

Input: keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
Output: ["bob"]
Explanation: "bob" used the keycard 3 times in a one-hour period ("21:00","21:20", "21:30").
Example 3:

Input: keyName = ["john","john","john"], keyTime = ["23:58","23:59","00:01"]
Output: []
Example 4:

Input: keyName = ["leslie","leslie","leslie","clare","clare","clare","clare"], keyTime = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
Output: ["clare","leslie"]
 

Constraints:

1 <= keyName.length, keyTime.length <= 105
keyName.length == keyTime.length
keyTime are in the format "HH:MM".
[keyName[i], keyTime[i]] is unique.
1 <= keyName[i].length <= 10
keyName[i] contains only lowercase English letters.

 */

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    
    const helper = (time) => {
        let arr = time.split(":").map( item => parseInt(item) );
        return arr[0]*60 + arr[1];
    }
    
    const cache = {};
    keyName.forEach( (item, index) => {
        cache[item] = cache[item] || [];
        cache[item].push( helper(keyTime[index]) );
    });
    
    
    
    const ret = Object.keys(cache).filter( item => {
        const arr = cache[item].sort( (a,b) => a-b );  
        let found = false;
        for ( let i = 2 ; i < arr.length ; i++ ) {
            if ( arr[i] - arr[i-2] <= 60 && arr[i] - arr[i-2] >= 0 ) {
                found = true;
                break;
            }
        }
        return found;
    }).sort( (a,b) => a<b?-1:1 )
    
    return ret;
};


/**
["daniel","daniel","daniel","luis","luis","luis","luis"]
["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
["alice","alice","alice","bob","bob","bob","bob"]
["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
["john","john","john"]
["23:58","23:59","00:01"]
["leslie","leslie","leslie","clare","clare","clare","clare"]
["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
["a","a","a","a","a","b","b","b","b","b","b"]
["04:48","23:53","06:36","07:45","12:16","00:52","10:59","17:16","00:36","01:26","22:42"]


*/