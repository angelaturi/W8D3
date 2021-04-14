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

// console.log(exponent(2,0));
// console.log(exponent(2,10));

function expToo(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp > 0) {
    return base * expToo(base, exp-1);
  } else {
    return (1.0/parseFloat(base)) * expToo(base, exp+1);
  }
}

// console.log(expToo(2,0));
// console.log(expToo(2,10));
// console.log(expToo(2, -3));

function fib(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  }

  let prevNum = fib(n-1);
  prevNum.push(prevNum[prevNum.length - 1] + prevNum[prevNum.length-2]);
  return prevNum;
}

// console.log(fib(4));

function deepDup(arr) {
  let newArr = [];
  for(ele of arr) {
    if (Array.isArray(ele)) {
      newArr.push(deepDup(ele));
    } else {
      newArr.push(ele);
    }
  }
  return newArr;
}

// console.log(deepDup([1,2,[3,4]]));

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  
  let mid = Math.floor(arr.length / 2);

  if (target < arr[mid]) {
    return bsearch(arr.slice(0,mid), target);
  } else if (target > arr[mid]) {
    let nextLevel = bsearch(arr.slice(mid+1), target);
    return nextLevel === -1 ? -1 : nextLevel + mid + 1;
  } else {
    return mid;
  }

}

// console.log(bsearch([1,2,3,4,5], 4))

function merge(left, right) {
  let newLength = left.length + right.length;
  let newArr = [];
  for (let i = 0; i < newLength; i++) {
    let leftEmpty = left.length === 0;
    let rightEmpty = right.length === 0;
    if (leftEmpty || rightEmpty) {
      if (leftEmpty) {
        newArr.push(right.shift());
      } else {
        newArr.push(left.shift());
      }
    } else {
      if (left[0] > right[0]) {
        newArr.push(right.shift());
      } else {
        newArr.push(left.shift());
      }
    }
  }
  return newArr;
}


function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(mergeSort([5,2,7,6,4,8,4]));

function subSets(arr) {
  if (arr.length < 2) {
    return [arr];
  }

  let nextLevel = subSets(arr.slice(1))
  for(ele of arr) {
    nextLevel.push(arr.slice(0, arr.indexOf(ele)+1));
  }
  return nextLevel;
}

// console.log(subSets([1,2,3,4]));