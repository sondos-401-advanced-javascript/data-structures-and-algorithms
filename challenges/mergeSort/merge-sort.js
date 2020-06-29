'use strict';

let mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

let merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    for (let newJ = j; newJ < right.length; newJ++) {
      arr[k] = right[newJ];
      k++;
    }
  } else {
    for (let newI = i; newI < left.length; newI++) {
      arr[k] = left[newI];
      k++;
    }
  }
  return arr;
};

module.exports = mergeSort;
