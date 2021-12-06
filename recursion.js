/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if (idx === nums.length) {
    return 1
  }
  return nums[idx] * product(nums, idx+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, len=0) {
  if (idx === words.length) {
    return len
  }
  if (words[idx].length > len) {
    len = words[idx].length
  }

  return longest(words, idx+1, len=len)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, word='') {
  if (idx === str.length) {
    return word
  }
  if (idx % 2 === 0) {
    word += str[idx]
  }
  return everyOther(str, idx+1, word)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {

  if (idx+1 > str.length/2) {
    return true
  }
  if (str[idx] != str[str.length-1-idx]) {
    return false
  }
  return isPalindrome(str, idx+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {

  if (idx == arr.length) {
    return -1
  }
  if (val == arr[idx]) {
    return idx
  }
  return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, rev='') {
  if (idx == str.length) {
    return rev
  }
  rev += str[str.length-1-idx]
  return revString(str, idx+1, rev)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for (o in obj) {
    if (typeof obj[o] === 'string') {
      arr.push(obj[o])
    } else if (typeof obj[o] === 'object') {
      gatherStrings(obj[o], arr)
    } 
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx=0) {
  if (idx == arr.length){
    return -1
  }
  if (arr[idx] == val) {
    return idx
  }
  return binarySearch(arr, val, idx+1)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
