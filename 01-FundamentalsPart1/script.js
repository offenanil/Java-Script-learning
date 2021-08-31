/*
 let js = "amazing";
console.log(10 + 20 - 5);
console.log("Anil");  // here Anil is value
console.log(23);

let firstName = "Anil"; //camelcase declaration
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.14;
*/

let javaScriptIsFun = true; //boolean
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun); //boolean
console.log(typeof 32);  //number
console.log(typeof 'Anil');  //srting

javaScriptIsFun = "YES"; //alread exit variables so no let
console.log(typeof javaScriptIsFun); //srting

let year; //undeffined
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year); //number

console.log(typeof null);  //object

//variale declaration
let age = 30;
age = 32;  //muted variable
 

//value on const variable cannot be changed

const birthYear = 1990;


var job = 'programmer';
job = 'teacher';

//let is block scope and var is function scope

//operators

const ageAnil = 2021 - 1990;
const ageIndira = 2021 - 1991;
console.log(ageAnil, ageIndira);
// console.log(ageIndira);
console.log(ageAnil*2, ageIndira/10, 2**3);
//2**3= 2^3

//+ is used to concatnation of strings
 
let x,y;
x = y = 25-3-6;
console.log(x, y); 

//string and templete literals
const firstName = 'Anil';
const jobb = 'teacher';
const birthday = 1991;
const yearr = 2037;

const Anil = "I'm " + firstName + ', a ' + (yearr - birthday) + 'years old ' + jobb + ' !';
console.log(Anil);

const anilNew = `I'm ${firstName}, a ${yearr - birthday} years old ${jobb}`;//templete leterals look above tap key
console.log(anilNew);

console.log(`hi its me Anil Acharya`);


console.log('string with \n\
a multiple\n\
lines');

console.log(`string with
a multiple
line`);  //so templete literls is much more easier

//if /else statement

const agee = 15;
const isOldEnough = agee >= 18;

if (isOldEnough){
    console.log('Anil can start driving lisence');
} else{
    // console.log('your age isnot over 18')
    const yearsLeft = 18 - agee;
    console.log(`Anil your agge is low. wait ${yearsLeft} years`);
}


//type conversion  and coercion

// type conversion is when we manually convert one type to another
//but type coercion is javascript automatically converts behiend scene for us

//type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18); //converting string to a number temporarly

console.log(Number('Anil'));//invalid

console.log(String(23), 23);

//type coersion
console.log('I am ' + 23 + ' years old')//white nuber is string and purple is number at output

console.log('23' - '10' - 3);//- operator auto converts string into number but for + concat
console.log('23' * '2');
console.log('26' > '5');


//truthy and falsy value

//false value arenot exactly false but comes into false when we try to convert them into boolean 
//only 5 falsy value : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Anil'));
console.log(Boolean({}));

  //== vs === equality operators
  const a = 4;
  if(a === 4) console.log("i donot {} if two values are exactly equal and i use === operator");
  //=== doesnot perform type coersion but does by ==

//   const favourate = prompt("what is your favourate number");
//   console.log(favourate);

//   if (favourate == '5');{
//       console.log("cool"); //works'5' = 5
//   }
  
// if (favourate === 5);{
//         console.log("wait");} //5=5

// if(favourate !== 5) console.log("always use !== over != if you want to check not equality ")

//boolean logic
//AND(&&), OR(||) AND NOT(!)   

//boolean operators

//switch statement

const day = 'monday';
switch(day) {
    case 'monday':
        console.log('i am going to somewhere');
        break;
    case 'tuesday':
        console.log('do something else');
        break;
    case 'wednesday':
    
    case "thursday":
    
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log('good');
        break;
    default:
        console.log('try again');
}

// statemrnt and expression
// expression is a peace of code that produces a value (eg; 3+4) and  statement(a complete sentence) is if else statement like a is bigger than b

//tenary operator

const old = 23;
old >= 18 ? console.log('i can drink beer'): console.log('i can drink water');

