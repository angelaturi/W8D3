function range(start, end) {
  if (start > end) {
    return [];
  }

  let nextLevel = range(start+1, end);
  nextLevel.unshift(start);
  return nextLevel;
}

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.pop() + sumRec(arr);

}

// console.log(sumRec([1,2,3,4,5]))

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp % 2 === 0) {
    return exponent(base,exp/2)**2;
  } else {
    return base*exponent(base,(exp-1)/2)**2;
  }

}

console.log(exponent(2,0));
console.log(exponent(2,10));
