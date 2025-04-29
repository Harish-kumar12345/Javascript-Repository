// const fruits=new Map([
//     ["apple",500],
//     ["bananas",300],
//     ["oranges",200]
// ])
// console.log(fruits);

//using set() method
// const fruits=new Map();
//    fruits.set["apple",500]
//    fruits.set["bananas",300]
//    fruits.set["oranges",200]

// console.log(fruits);

//get() method 
// console.log(fruits.get("apple"));

//map.size()

// console.log(fruits.size);

// //map.delete
// console.log(fruits.delete("apple"));
// console.log(fruits);

// //map.clear()
// console.log(fruits.clear())
// console.log(fruits);

// fruits.set["apple",500];
//  fruits.set["apple",500];
//  fruits.set["bananas",300]
//  fruits.set["oranges",200]

//     console.log(fruits);

//Map.forEach()

// const fruits=new Map([
//     ["apple",500],
//     ["bananas",300],
//     ["oranges",200]
// ])
// console.log(fruits);
// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);

//Map.entries()
// let text=""
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);

//Map.key()
// let text="";
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);

//Map.values()
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

//objects as keys
// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};
// //create a map
// const fruits=new Map();
// fruits.set(apples,500);
// fruits.set(bananas,500);
// fruits.set(oranges,500);

// console.log(fruits.get("apples"));

//Map.groupBy()
// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"grapes",quantity:100}
// ];

// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }

// //Group By Quantity
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);

//Destructuring
// let {firsName, lastName}=person;

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let {firstName, lastName}=person;
// console.log(person);
// console.log(firstName);
// console.log(lastName);

 //object default value

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{firstName,lastName,country="us"}=person;

//String Destructuring
// let name="Gurukul";
// let[a1,a2,a3,a4]=name;
// console.log(a1);
// console.log(a2);

//Array Destructuring
// const fruits=["Bananas","apple","Mangos","oranges"];
// let[fruit1, fruit2]=fruits;
// console.log(fruit1);
// console.log(fruit2);
// let[fruit1,,, fruit2]=fruits;
// console.log(fruit2);

// let{[0]:fruit1,[2]:fruit2}=fruits;
// console.log(fruit2);

//Swaping 
// let firstname="john0";
// let lastName="Doe";

// [firstname,lastName]=[lastName,firstname];
// console.log(firstname);
// console.log(lastName);

// let x=5;
// let z=x**2;
// console.log(x);
// console.log(z);
// console.log(Math.pow(x,3));

//array include

//  const fruits=["Bananas","apple","Mangos","oranges"];
//  console.log(fruits.includes("Mangos"));
//  console.log(fruits.includes("Mangos",3));

//  //Trailing comma
//  const arr=[
//     "one",
//     "two",
//     "three",,
//  ];
//  console.log(arr.length);


//Sparse array
// const sparseArray=[1,,,,,4,5,,];
// console.log(arr.length);

// const arr1=[,];
// console.log(arr1.length);


