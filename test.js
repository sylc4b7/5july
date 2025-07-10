const tempNumber=20;
const tempString="Hello, World!";
const tempArray=[1, 2, 3, 4, 5];
const tempObject={name: "Alice", age: 30, city: "Wonderland"};



//console out ..the second item in the tempArray
console.log(tempArray[1]); // Output: 2


//console out ..Alice age in tempObject
console.log(tempObject.age); // Output: 30

//console out ..after get the string in tempString, position 7 to 10
console.log(tempString.substring(7, 10)); // Output: "Wor"

//console out ..after extract the first two item in the tempArray
console.log(tempArray.slice(0, 2)); // Output: [1, 2]

// console out ..after typeof tempNumber
console.log(typeof tempNumber); // Output: "number"

const sumArray = [1 + 2 + 3 + 4 + "5"];
// duplicate the line 
const sum1Array = [1,  2,  3,  4, "5"];
// console out ..after sum the item in sumArray
console.log(sumArray[0]); // Output: "105" (due to string concatenation)


let count = 100 
const add = () => count++
const min = () => count--
console.log(add()); // Output: 1



