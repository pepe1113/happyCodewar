/**
 * curry
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.

https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/javascript
*/
var add = function (n) {
  // return self to make a chain
  const f = (x) => add(n + x);
  // return value if use operator like equal, +=-
  f.valueOf = () => n;
  return f;
};
