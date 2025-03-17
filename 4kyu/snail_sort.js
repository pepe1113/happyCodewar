// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript
snail = function (array) {
  const result = [];
  while (array.length) {
    // up
    result.push(...array.shift());
    // right
    for (i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    // below
    result.push((array.pop() || []).reverse());
    // left
    for (i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};
