function nthLongestString(arr, n) {
  
  if (n < 1 || n > arr.length) {
    return null;
  }

   let withIndex = [];
  for (let i = 0; i < arr.length; i++) {
    withIndex.push({ str: arr[i], index: i });
  }

  withIndex.sort(function(a, b) {
    if (a.str.length === b.str.length) {
      return a.index - b.index;     }
    return b.str.length - a.str.length;   });

  return withIndex[n - 1].str;
}
let words = ["apple", "banana", "pear", "watermelon", "kiwi"];
console.log(nthLongestString(words, 1)); 
console.log(nthLongestString(words, 2)); 
console.log(nthLongestString(words, 3)); 
