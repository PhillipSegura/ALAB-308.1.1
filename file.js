// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
// finding if n1 is divisable by 5
let a1
a1 = n1%5 == 0
console.log(a1);
// finding if n2 is divisable by 5
let a2 
a2 = n2%5 == 0
console.log(a2);
// finding if n3 is divisable by 5
let a3 
a3 = n3%5 == 0
console.log(a3);
// finding if n4 is divisable by 5
let a4
a4 = n4%5 == 0
console.log(a4);
// is n1 grater then n4
let result = n1>n4
console.log(result);
// subtract n1 from n2
let subtract = n2-n1
console.log(subtract);
// multiply "subtract result" by n3
let multi = (subtract*n3)
console.log(multi);
// find the remainder by deviding "multi result" by n4
let num6 = multi%n4
console.log(num6)

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
let isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
// total is the total miles
let total = 1500;
// car1, car2, car3 gallons of gas
let car1 = total/30;
console.log(car1);
let car2 = total/28;
console.log(car2);
let car3 = total/23;
console.log(car3);
// gas1, gas2, gas3 cost of gas for each car
let gas1 = car1*3;
console.log(gas1);
let gas2 = car2*3;
console.log(gas2);
let gas3 = car3*3;
console.log(gas3);  // car3 cant afford the trip 

let carOne = total/55;
console.log(carOne); // car one will take 27.27 hours
let carTwo = total/60;
console.log(carTwo); // car two will take 25 hours
let carThree = total/75;
console.log(carThree); // car three will take 20 hours 