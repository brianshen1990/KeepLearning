/**
65. Valid Number

Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition.


 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim();
  let pointPosition = -1;
  let ePosition = -1;
  let posNeg1Position = -1;
  let posNeg2Position = -1;
  let numsLen = 0;
  let illegalFlag = false;
  for( let i = 0; i < s.length; i++ ) {
      if( s[i] === 'e' ) {
          if( ePosition < 0 ) {
              ePosition = i;  // first e
          } else {
              // duplicate, must error
              illegalFlag = true;
              break;
          }
      } else if( s[i] === '.' ) {
          if( pointPosition < 0 ) {
              pointPosition = i;  // first dot
          } else {
              // duplicate, must error
              illegalFlag = true;
              break;
          }
      } else if( s[i] === '+' || s[i] === '-'  ) {
          if( posNeg1Position < 0 ) {
              posNeg1Position = i;  // first dot
          } else if( posNeg2Position < 0 ) {
            posNeg2Position = i;  // first dot
          }  else {
              // duplicate, must error
              illegalFlag = true;
              break;
          }
      } else if ( s[i] >= '0' && s[i] <= '9' ) {
          // pass
          numsLen++;
      } else {
          // illegal
          illegalFlag = true;
          break;
      }
  }
  
  if(illegalFlag) {
      // exist illegal chars
      return false;
  }
  if ( ePosition >= 0 ) {
      // exist 1 e

      // first place, last place
      if( ePosition === 0 || ( ePosition === 1 && posNeg1Position === 0 ) || ( ePosition === s.length - 1 )  ) {
        return false; 
      }
      // if two +-
      if( posNeg2Position >= 0 ) {
        if( posNeg2Position !== ePosition + 1 ) {
          return false;
        }
        // should follow a num
        if( posNeg2Position + 1 < s.length && s[posNeg2Position + 1] >= '0' &&  s[posNeg2Position + 1] <= '9'  ) {
          // pass
        } else {
          return false;
        }

        if( posNeg1Position !== 0 ) {
          return false;
        }
      }

      // point can be only before e    and   before or after dot should be a num
      if ( pointPosition > ePosition ) {
        // point after ePosition  incorrect, can be just before the ePosition
        return false
      } else if( pointPosition >= 0 ) {
        if (   ( pointPosition - 1 >= 0 && s[pointPosition - 1] >= '0' &&  s[pointPosition - 1] <= '9' ) || 
              ( pointPosition + 1 < s.length && s[pointPosition + 1] >= '0' &&  s[pointPosition + 1] <= '9' )  ) {
          // pass
        } else {
          return false;
        }
      }

       // should follow a number of dot
      if ( posNeg1Position > 0 ){
        if( posNeg1Position !== ePosition + 1  ) {
          return false;
        }
        // if no number follows
        if ( posNeg1Position === s.length-1 ) {
          return false;
        }
      }
      if( posNeg1Position === 0 ) {
        if( 1 < s.length && (   ( s[1] >= '0' &&  s[1] <= '9' ) || ( s[1] === '.' )  )    )   {
          // pass
        } else {
          return false;
        }

      }

      return true;
  } else {
      // no e
      // can have only 1 
      if( posNeg2Position >=0  ) {
        return false;
      }
      if( posNeg1Position > 0 ) {
          return false;
      }
      if( numsLen === 0){
          return false;
      }
      return true
  }
};



console.log( isNumber('0') === true );
console.log( isNumber(' 0.1') === true );
console.log( isNumber('abc') === false );
console.log( isNumber('1 a') === false );
console.log( isNumber('2e10') === true );
console.log( isNumber(' -90e3') === true );
console.log('----1---')
console.log( isNumber('1e') === false );
console.log( isNumber('e3') === false );
console.log( isNumber(' 6e-1') === true );
console.log( isNumber(' 99e2.5') === false );
console.log( isNumber('53.5e93') === true );
console.log( isNumber(' --6') === false );
console.log( isNumber('-+3') === false );
console.log( isNumber('95a54e53') === false );
console.log('----2---')
console.log( isNumber('e53') === false );
console.log( isNumber('2.3.4e53') === false );
console.log( isNumber('23.4e53') === true );
console.log( isNumber('--23.4e53') === false );
console.log( isNumber('23.4e-53') === true );
console.log( isNumber('23.4e -53') === false );
console.log( isNumber('23.4e5.3') === false );
console.log( isNumber('00000') === true );
console.log('----3---')
console.log( isNumber('.') === false );
console.log( isNumber('23.e5') === true );
console.log( isNumber('23.e-5') === true );
console.log( isNumber('.23e5') === true );
console.log( isNumber('.23') === true );
console.log( isNumber('2.2') === true );
console.log( isNumber('2.') === true );
console.log( isNumber('2-.') === false );
console.log( isNumber('-2.') === true );
console.log( isNumber('+2.') === true );
console.log('----4---')
console.log( isNumber('4e+') === false );
console.log( isNumber('4e+1') === true );
console.log( isNumber('4e-1') === true );
console.log( isNumber('4e-') === false );
console.log( isNumber('.e1') === false );
console.log( isNumber('+.e1') === false );
console.log( isNumber('-.e1') === false );
console.log( isNumber('-2.e1') === true );
console.log('----5---')
console.log( isNumber('-e58') === false );
console.log( isNumber('+e58') === false );

console.log( isNumber('-1e+58') === true );
console.log( isNumber('-1e-58') === true );

console.log( isNumber('+0e-1') === true );
console.log( isNumber('+0e-') === false );
console.log( isNumber('+.23e-') === false );
console.log( isNumber('+.23e-1') === true );
console.log( isNumber('+-2e1') === false );
