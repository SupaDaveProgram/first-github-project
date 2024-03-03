let storeOpen = true
let price = 50
let cash = 50
let sum = price - cash

let str = sum >= price && storeOpen ? "Give receipt":
"do not give receipt";
console.log(str)