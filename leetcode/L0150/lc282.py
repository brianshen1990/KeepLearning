'''
282. Expression Add Operators

Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Example 1:

Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
Example 2:

Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
Example 3:

Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
Example 4:

Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
Example 5:

Input: num = "3456237490", target = 9191
Output: []
 

Constraints:

0 <= num.length <= 10
num only contain digits.

'''

class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        res = []
        Solution.helper( num, [], target, res )
        return res
            
      
    def helper( num: str, path: List[str],  target: int, res: List[str] ):
        for i in range(1,len(num)+1):
            temp = num[0:i]
            if temp[0] == '0' and len(temp) > 1:
                continue
            
            if len(path) == 0:
                path.append( int(temp) )
                if i == len(num):
                    if Solution.determine( path ) == target:
                        res.append( ''.join( [str(ele) for ele in path ]) )
                else:
                    Solution.helper( num[i:], path, target, res )
                path.pop()
            else:
                for item in ['*', '-', '+']:
                    path.append( item )
                    path.append( int(temp) )
                    if i == len(num):
                        if Solution.determine( path ) == target:
                            res.append( ''.join( [str(ele) for ele in path ]) )
                    else:
                        Solution.helper( num[i:], path, target, res )
                    path.pop()
                    path.pop()
    
    def determine(oripath: List[str]) -> bool:
        
        index = 0
        path = oripath[:]
        
        # print("cacl", path) 
        while index < len(path):
            if path[index] == '*':
                path = path[0: (index-1)] + [ path[index-1] * path[index+1] ] +  path[(index+2):]
            else:  
                index += 1
        
        while len(path) > 1 :
            path = [path[0] + ( path[2] if path[1] == '+' else -path[2] )] + path[3:]
        # print("cacled", path[0]) 
        return path[0]
                
  

'''
"123"
6
"232"
8
"105"
5
"00"
0
"3456237490"
9191
'''