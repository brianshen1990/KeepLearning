/**
1185. Day of the Week

Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.
 */

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
 var dayOfTheWeek = function(day, month, year) {
    /*
        string daysInWeek [7] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
        int DaysByMonthMod7[12] = {0,3,2,5,0,3,5,1,4,6,2,4}; // Jan: 0, Feb: 31%7=3, Mar: 58%7=2, Apr: 89%7=5, etc
        if(month < 3) year -= 1;
        return daysInWeek[(year + (year/4 - year/100 + year/400) + DaysByMonthMod7[month-1] + day) % 7]; // (year*365)%7 = year. Add the leap year days. Add extra month days. Add day.
    */
    
    const weeks = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    let diff = [0 ,1,-2,1,0,  1,0,1,1,  0,1,0,1];
    let diffSum = [0, 1,-1,0,0, 1,1,2,3, 3,4,4,5];
    
    let daydays = day - 1;
    let monthdays = (month - 1) * 30 +  diffSum[month-1];
    let yeardays = (Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400)) - (Math.floor(1971/4) - Math.floor(1971/100) + Math.floor(1971/400)) + ( year - 1971) * 365;
    if (  (year%4 === 0 && year %100 !==0) || ( year%400 === 0) ) {
        if ( month < 3 ) {
            yeardays--;
        }
    }
    
    // console.log( daydays, monthdays, yeardays );
    return weeks[( daydays + monthdays + yeardays ) % 7];
};

/**
1
1
1971
5
1
1971
5
6
1971
5
6
1978
15
8
1993
15
2
2000
15
8
2000
15
9
2000
12
12
2000
11
5
2021
16
2
2067
1
3
2080
12
2
2080
1
4
2080
12
12
2099
 */