var waterLevel = 1970;
let coffeeBeans = 190;
let cupsMade = 0;
const CUP_WATER = 200; // 每杯咖啡需要的水量
const CUP_BEANS = 20; // 每杯咖啡需要的咖啡豆

while (waterLevel >= CUP_WATER && coffeeBeans >= CUP_BEANS) {
  waterLevel -= CUP_WATER; // Deduct water for one cup
  coffeeBeans -= CUP_BEANS; // Deduct coffee beans for one cup
  cupsMade++; // Increment the number of cups made
  console.log(`Cups of coffee made: ${cupsMade}`);
  console.log(`Remaining water: ${waterLevel}`);
  console.log(`Remaining coffee beans: ${coffeeBeans}`);

}


console.log("----------------------------------------------");

if (waterLevel < CUP_WATER) {
  console.log("Not enough water to make another cup of coffee.");
} 

if (coffeeBeans < CUP_BEANS) {
  console.log("Not enough coffee beans to make another cup of coffee.");
}

console.log(`Total cups made: ${cupsMade}`);