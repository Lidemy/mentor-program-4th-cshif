``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. function isValid 接收陣列 arr = [3, 5, 8, 13, 22, 35]
2. var i=0
3. 判斷 i<arr.length，成立的話，跑 {} 裡的 if
3.1 判斷如果 arr[i] <= 0 為 true，回傳 'invalid'，跳出 function
3.2 判斷如果 arr[i] <= 0 為 false，接著判斷 arr[i+1] <= 0 是否為真，直到 i<arr.length
4. var i=2
5. 判斷 i<arr.length，成立的話，跑 {} 裡的 if
5.1 判斷如果 arr[i] !== arr[i-1] + arr[i-2] 為 true，回傳 'invalid'，跳出 function
5.2 判斷如果 arr[i] !== arr[i-1] + arr[i-2] 為false，接著判斷 arr[i+1] <= 0 是否為真，直到 i<arr.length
6. 回傳 'valid'