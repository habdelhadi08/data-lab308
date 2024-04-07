 
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);




// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; // logic is true
console.log(isOver25); //true


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

// Finally, log the results.
console.log(isValid);

  //part1
  //Division
  const isDiv5= (n1%5) && (n2%5) && (n3%5) && (n4%5) === 0
  console.log (isDiv5)
  // First number greater than last
  const firstGreater= (n1>n4)
  console.log(firstGreater);
  //Substruction
  const subNum= (n2-n1)
  console.log (subNum);
  //Multiplying
  const multiplyBythird= (subNum*n3)
  console.log (multiplyBythird);
  //Division
  const divideByforth= (multiplyBythird%n3)
  console.log(divideByforth);

// Clear the NOT operator (!)
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
(n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25) && 
(n1 < n2 && n1 < n3 && n1 > n4 && n2 < n3 && n2 > n4 && n3 > n4);
console.log(dontDoThis);
// Part Two
// Numbers of Miles and Gallons
const mile1=55
const gallons1=30
const mile2= 60
const gallons2=28
const mile3=70
const Gallons3=23
//overall trip requirements
const totalDistance= 1500
const budget= 175
const averageCost= 3
//Problem Solving
const totalGallons= (totalDistance/gallons1+totalDistance/gallons2+totalDistance/Gallons3)
console.log(totalGallons);
const totalBudget= (totalGallons*averageCost)
console.log(totalBudget)
const enoughBudget= (budget>=totalBudget)
console.log(enoughBudget)