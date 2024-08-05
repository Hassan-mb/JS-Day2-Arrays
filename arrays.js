let groceries = ["eggs", "milk", "bread", "soda", "meat", "snacks"];
console.log(groceries[1]);

let numberOfElements = groceries.length;
console.log(numberOfElements);
console.log(numberOfElements - 1);

let lastElement = groceries.pop();
console.log(lastElement);

groceries.push("cheese", "oil");
console.log(groceries);

let first3Elements = groceries.slice(0, 3);
console.log(`the first 3 elements are ${first3Elements}`);
