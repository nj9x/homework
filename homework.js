var userAge = 10;
console.log(userAge);
console.log(typeof(userAge));

var userAgeTwo = "Ten";
console.log(userAgeTwo);
console.log(typeof(userAgeTwo));

var userAgeThree = !10;
console.log(userAgeThree);
console.log(typeof(userAgeThree));

console.log("===Calculate the area of a circle===");

var radius = prompt("Input the radius of the circle");
var area = Math.PI * radius * radius;
console.log(area);

console.log("===Phone Price Calculation===");

var phonePrice = prompt("Please input the price of the selected phone model");
var phoneTax = prompt("Please input the tax that applies");
var phoneAmount = prompt("Please input the number of phones you wish to purchase");
var priceCalculation = phonePrice * (1+ phoneTax / 100) * phoneAmount;
console.log(priceCalculation);



