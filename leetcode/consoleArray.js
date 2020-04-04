exports.Array2 = function (matrix){
  console.log('[');
  for( let i = 0; i< matrix.length ; i++  ){
    console.log(`  ${matrix[i]}`)
  }
  console.log(']');
}
