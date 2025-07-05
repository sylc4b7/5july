// 初始化變數
let randomNumber;

do {
  // 生成 1 到 6 的隨機數
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Generated number: ${randomNumber}`);
} while (randomNumber !== 6); // 當隨機數不等於 6 時繼續迴圈

console.log("Exited the loop because the number is 6.");