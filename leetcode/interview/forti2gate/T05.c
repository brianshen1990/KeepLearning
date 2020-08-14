/*
5. Capitalize String

Complete the C function which capitalizes a provided string in place. No standard library functions may be used.

*/


#include <assert.h>
#include <ctype.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
 * Complete the following function which may be passed a string.
 * The function is expected to capitalize the string in place.
 */
void capitalize(char* string) {
  if (!string) {
    return;
  }
  for ( int i = 0 ; string[i] != '\0' ; i++ ) {
    if ( string[i] >= 'a' && string[i] <= 'z' ) {
      string[i] = string[i] - 32;
    }
  }
}

int main() {
    printf(capitalize("Fortinet Gateway"));
}
