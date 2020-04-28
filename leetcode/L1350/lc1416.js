/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArraysRecursion = function(s, k) {
  const MAXX = Math.pow(10,9) + 7;
  
  const res = {
      map: {},
      shouldBreak: false,
  };
  
  const _helper = (_s, _k, _kStr, _res) => {
      if ( _res.map[_s] ) {
          // avoid duplicated calculate
          // console.log(`hit - ${_s}: ${_res.map[_s] }`);
          return _res.map[_s];
      }
      if ( _s.length === 0 ) {
        return 1;
      }
      if ( _s.length === 1 ) {
        _res.map[_s] = 1;
        return 1;
      }
      
      let ret = 0;
      // greedy take max _kStr length 
      for ( let i = 0; i < _kStr.length ; ) {
          // whether have enough length 
          if ( _s.length >= i+1 ) {
              let tempstr = _s.substr(0, i+1);
              if ( _kStr.length > tempstr.length ) {
                  // OK, less than _kStr
                  // consider 0 
                  if ( i+1 < _s.length &&  _s[i+1] === '0' ) {
                      // can't be 0 
                      // test whether enough 0 
                      let nextIndex = i+1;
                      let tempBreak = false;
                      while ( nextIndex < _s.length && _s[nextIndex] === '0' ) {
                          nextIndex++;
                          if ( nextIndex >= _kStr.length ) {
                              if ( nextIndex > _kStr.length ) {
                                tempBreak = true;
                                  break;
                              } else if ( _s.substr(0, nextIndex) > _kStr ) {
                                tempBreak = true;
                                break;   
                              }
                          }
                      }
                      if ( tempBreak ) {
                          // too much 0, makes it inpossible
                          break;
                      } else {
                          i = nextIndex;
                          ret += _helper( _s.substr(i), _k, _kStr, _res);
                          ret = ret % MAXX;
                      } 
                  } else {
                      // pass, no 0, continue
                      i++;
                       ret += _helper( _s.substr(i), _k, _kStr, _res);
                       ret = ret % MAXX;
                  }
              } else {
                  // equal length 
                  if ( i+1 < _s.length && _s[i+1] === '0' ) {
                    break;
                  }
                  i++;  
                  if ( tempstr <= _kStr  ) {
                      // less than _kStr
                       ret += _helper( _s.substr(i), _k, _kStr, _res);
                       ret = ret % MAXX;
                  } 
              }
          } else {
              break;  
          }
      } 
     
      ret = ret % MAXX;
      if (ret === 0) {
        _res.shouldBreak = true;
      }
      _res.map[_s] = ret;
      return ret % MAXX;
  }
  
  let ret = _helper( s, k, `${k}`, res);
  
  if (res.shouldBreak) {
      return 0;
  } else {
      return res.map[`${s}`];
  }
};



/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    const MAXX = Math.pow(10,9) + 7;
    let arr = new Array( s.length + 1 ).fill(0);
    arr[arr.length-1] = 1;
    
    for ( let i = 1 ; i <= s.length ; i++ ) {
        let tempCount = 0;
        // from last position 
        let tempNum = 0;
        if ( s[s.length - i] === '0' ) {
            continue;
        } 
        for ( let j = s.length - i ; j < s.length ; j++ ) {
            // from avaiable first position
            tempNum = tempNum * 10 + parseInt(s[j])
            if ( tempNum <= k ) {
                tempCount += arr[j+1];
                tempCount  = tempCount % MAXX;
            } else {
                break;
            }
        }
        arr[s.length - i] = tempCount;
    }
    // console.log(arr);
    return arr[0];
    
 
};

console.log( numberOfArrays("1000", 10000) === 1 );
// console.log( numberOfArrays("1000", 10) === 0);
// console.log( numberOfArrays("1317", 2000) === 8 );
// console.log( numberOfArrays("2020", 30) === 1 );

// console.log( numberOfArrays("1234567890", 90) === 34 );
// console.log( numberOfArrays("2553462832281151811513004352253111", 456)  === 21752500);

console.log( numberOfArrays("870622335669657843168529455118482387145131383156269464392206602503504142", 818));
// console.log( numberOfArrays("870622335669657843168529455118482387145131383156269464392206602503504142", 818) === 934776010);
console.log( numberOfArrays("30870622335669657843168529455118482387145131383156269464392206602503504142", 818));
// console.log( numberOfArrays("30870622335669657843168529455118482387145131383156269464392206602503504142", 818) === 869552013);

console.log( numberOfArrays("230870622335669657843168529455118482387145131383156269464392206602503504142", 818));
// console.log( numberOfArrays("230870622335669657843168529455118482387145131383156269464392206602503504142", 818) === 804328016);

console.log( numberOfArrays("29332377127524136126230870622335669657843168529455118482387145131383156269464392206602503504142", 818));
// 967055940

/** 
"1000"
10000
"1000"
10
"1317"
2000
"2020"
30
"90"
90
"890"
90
"7890"
90
"67890"
90
"29332377127524136126230870622335669657843168529455118482387145131383156269464392206602503504142"
818
*/