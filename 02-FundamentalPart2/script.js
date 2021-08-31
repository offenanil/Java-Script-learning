"use strict";
//activating strict mode very first...strict mode finds the error like if we used reserved words or line 7 code is wrong

let hasDriverLisence = false;
const passTest = true;

if (passTest) hasDriverLisence = true;
if (hasDriverLisence) console.log("i can drive");

//Functions

function logger() {
  console.log("my name is Anil");
}
logger(); //calling,running,invoking

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `juice with ${apple} apples and ${orange} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(4, 3);
console.log(appleJuice);

//Function declaration and expressions

//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);

//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age1, age2);
// console.log(`age is ${age1}, ${age2}`);

//Arrow Function(special form of function expression)
const calcAge3 = (birthYear) => 2037 - birthYear; //(fast and esay like line39 n 40 on a single line)
const age3 = calcAge3(1990);
console.log(age3);

//Function calling other function

//Reviewing Function

//Introduction to Array

const friends = ["Anil", "Shyam", "Hari"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Indira";
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//BAsic Arrays operation(methods)
const friend = ["Anil", "Shyam", "Hari"];
friend.push("Arun");
console.log(friend);

friend.unshift("Ram");
console.log(friend);
//so push method add at last of array and unshift method add at the first index of array.

friend.pop();
console.log(friend);

friend.shift();
console.log(friend);

console.log(friend.indexOf("Shyam"));

console.log(friend.includes("Shyam")); //boolean value

if (friend.includes("Shyam")) {
  console.log("good job");
}

//Introduvtion to Objects

const Anil = {
  firstName: "Anil",
  lastName: "Acharya",
  age: 30,
  job: "teacher",
  friends: ["gita", "sita", "rita"],
};

// Dot and bracket notation

console.log(Anil.firstName);
console.log(Anil["firstName"]); //same as above but we can write a expression inside this

// const interestedIn = prompt('what do you Name, lastName, age , job, friends');
// console.log(Anil[interestedIn]);//here we cannot acess the firstName by using .notation.

Anil.location = "Sydney";
Anil["twitter"] = "@offenanil";
console.log(Anil);

//Introduction to objects

const Anita = {
  firstName: "Anil",
  lastName: "Acharya",
  age: 1991,
  job: "teacher",
  friends: ["gita", "sita", "rita"],
  hasDriverLisences: true,

  calcAge4: function () {
    // console.log(this);
    return 2037 - this.age;
  },
  //thispointed the all the attributes of Anita
};

console.log(Anita.calcAge4());

//Iteration: the for loop(control structure)

for (let rep = 1; rep <= 4; rep++) {
  console.log(`i can repeat for for ${rep} times`);
}

//looping Arrays, Breaking, and continue

const yearss = [1991, 1993, 1995, 1999];
const agess = [];
for (let i = 0; i < years.length; i++) {
  console.log(`the years are ${yearss[i]}`);
  // agess[i] = typeof (2037-yearss[i]);
  //if i want to find the type of  line 145 is as below
  agess.push(2037 - yearss[i]);
}
console.log(agess);

//continue and break
//  same look on copy as well

//the while loop
let a = 1;
while (a <= 10) {
  console.log(`the repeatation is ${a}`);
  a++;
}
