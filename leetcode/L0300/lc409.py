'''
409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

'''

class Solution:
    def longestPalindrome(self, s: str) -> int:
        cache = {}
        for char in s:
            if char not in cache:
                cache[char] = 0
            cache[char] = cache[char] + 1
        ret = 0
        for item in cache.keys():
            if cache[item] % 2 == 0:
                ret += cache[item]
            else:
                if ret % 2 == 0:
                    ret += cache[item]
                else:
                    ret += cache[item]-1

        return ret

'''
"abccccdd"
""
"ab"
"aaaaaaaassss"
"aaaaaaaasss"
"aaaaaaasss"

'''
