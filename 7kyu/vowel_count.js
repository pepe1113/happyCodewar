// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

function getCount(str) {
  return str.split('').filter((i) => ['a', 'e', 'i', 'o', 'u'].includes(i))?.length;
}

// others solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
