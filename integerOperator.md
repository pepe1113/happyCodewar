# JavaScript 位元運算子筆記
基本位元運算子

## 基本位元運算子

```
& (AND)     // 兩位都是 1 才返回 1
| (OR)      // 任一位是 1 就返回 1
^ (XOR)     // 兩位不同時返回 1
~ (NOT)     // 位元反轉
<< (左移)   // 向左移動位元
>> (右移)   // 向右移動位元，保留符號
>>> (無符號右移) // 向右移動位元，不保留符號
```

## 常見應用場景

### 轉整數
const num = 3.7;
console.log(num | 0);    // 3
console.log(~~num);      // 3
console.log(num ^ 0);    // 3
console.log(num << 0);   // 3

### 乘除運算
const multiply2 = x => x << 1;   // x * 2
const divide2 = x => x >> 1;     // x / 2

### 取餘數（只適用於 2 的冪次方）
const mod8 = x => x & 7;         // x % 8

### 位元遮罩運算

// 權限控制範例
const READ = 1;      // 0001
const WRITE = 2;     // 0010
const EXECUTE = 4;   // 0100

// 設定權限
let permission = 0;
permission |= READ;   // 加入讀取權限
permission |= WRITE;  // 加入寫入權限

// 檢查權限
const hasRead = (permission & READ) === READ;     // true
const hasWrite = (permission & WRITE) === WRITE;  // true

## 注意事項
- 32 位元限制
  - JavaScript 位元運算只能處理 32 位元整數
  - 超出範圍的數值會被截斷

- 可讀性權衡
  - 位元運算通常會降低程式碼可讀性
  - 建議加上清楚的註解說明用途

- 使用時機
  - 主要用於性能優化
  - 特定演算法實作
  - 位元層級的資料處理

- 除錯困難度
  - 位元運算的錯誤較難追蹤
  - 建議先用標準方法實作，確認邏輯無誤後再優化