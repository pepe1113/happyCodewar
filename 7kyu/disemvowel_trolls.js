https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// my solution
function disemvowel(str) {
  return str.split('').filter(word=>!/[aiueo]/i.test(word)).join('');
}

// other solution
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}