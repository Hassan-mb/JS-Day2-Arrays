function printName() {
  console.log("Hassan Behbahani Pour");
}
function printAge(yearOfBirth) {
  console.log(2024 - yearOfBirth);
}

function printAgeAndName(name, yearOfBirth) {
  let age = 2024 - yearOfBirth;
  console.log(`Hello ${name} you are ${age} years old`);
}

function printHello(name, lang) {
  if (lang == "en") {
    console.log(`Hello ${name}`);
  } else if (lang == "es") {
    console.log(`Hela ${name}`);
  } else if (lang == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (lang == "ar") {
    console.log(`Marhaba ${name}`);
  } else {
    console.log("please choose a language (en, es, fr, ar");
  }
}
printHello("hassan", "ar");

function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else if (number1 == number2) {
    console.log("both numbers have the same value");
  } else {
    console.log(number2);
  }
}
printMax(55, 55);
