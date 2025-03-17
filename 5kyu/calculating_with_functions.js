// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/solutions/javascript

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b

/**
const zero = a => a ? a(0) : 0
是否有參數 a，有的話就執行 a(0)，沒有的話就回傳 0

const plus = a => b => a + b
plus 是一個函數，接收一個參數 a，回傳一個函數，這個函數接收一個參數 b，回傳 a + b

## currying
five() return 5
times(five()) return b => 5 * b
seven(times(five())) return (b => 5 * b)(7)

參數處理轉變
- 原始：calculate(7, '*', 5)
- 柯里化：seven(times(five()))

柯里化思維：
five() → 5
times(5) → (b => 5 * b)
seven(b => 5 * b) → 35

- 函數即值
  - 每個數字都是一個函數
  - 每個運算子都是一個函數
- 單一職責
  - 數字函數：決定數值
  - 運算函數：決定運算方式
- 函數組合
  - 運算子函數返回新函數
  - 數字函數決定執行時機
*/

// other solution
(()=>{
  const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => (fn) => fn ? fn(idx) : idx)
  const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map((val) => new Function(`b`, `return a => a ${val} b ^ 0`))
})