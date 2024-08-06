//task 1
let oddArray = [1, 2, 3];

function isArrayLengthOdd(array) {
  if (array.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

let oddResults = isArrayLengthOdd(oddArray);
console.log(oddResults);

//task 2

let evenArray = [1, 2];

function isArrayLengthEven(array) {
  if (array.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let evenResults = isArrayLengthEven(evenArray);
console.log(evenResults);

//task 3
let instructors = ["Mshary", "Hassan"];

console.log(instructors);
function addNewinstructor(array) {
  array.push("Laila");
  return array;
}

let updatedNames = addNewinstructor(instructors);
console.log(updatedNames);

//task 4
let teams = ["G2", "T1", "BLG"];
console.log(teams);
function eliminateTeam(array) {
  array.pop();
  return array;
}

let newTeams = eliminateTeam(teams);
console.log(newTeams);
