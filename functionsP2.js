// task 1
function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

let number = 3;
let numIsOdd = isOdd(number);
isOdd(number);
console.log(`${number} is ${numIsOdd}`);

//task 3
function squareOrDouble(number) {
  if (number % 2 == 0) {
    return number * 2;
  } else {
    return number ** 2;
  }
}

let sOrD = squareOrDouble(number);
squareOrDouble(number);
console.log(sOrD);

//task 2
function oddSmallerThan(number) {
  if (number % 2 !== 0) {
  } else {
    console.log("enter an odd number please");
  }
}
