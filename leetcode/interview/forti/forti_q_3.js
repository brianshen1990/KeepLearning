// Write a JS function to generate array with n(e.g. 100) pos and neg integers, like [-123,456…..] 

// 4 -> [ 1000， -8765， 345， -234 ]
const randomGenerate = (n = 100, range = 100) => {
  const ret = [];
  for (let i = 0; i < n; i++) {
    const ran = Math.random();
    const num = Math.floor(ran * range);
    ret.push(ran * 100 > 50 ? num : -num);
  }
  return ret;
}

// sort the result from neg - pos
const sortRand = () => {
  return randomGenerate().sort((a, b) => a - b);
}

// [-232433,-334,54543,6565465]
// -> [-232433,-334,0,54543,6565465]
const insertZero = () => {
  const res = sortRand();
  return [...res.filter(item => item < 0), 0, ...res.filter(item => item >= 0)];
  // or use splice
}


console.log(insertZero())