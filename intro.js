// console.log("Hello everyone!");
alert("Give the permission ");
// name="Harish kumar"
// console.log("Name=",name);
// typeof name;
// age=19;
// console.log("age=",age);
// typeof age;
// Height=5.5;
// console.log("Height=",Height);
// a=null;
// console.log(a);
// console.log(typeof (a));
// let b;
// console.log(b);
// typeof b;
// isfollow=true;
// console.log(isfollow);
// typeof b;
// // console =44;
// // console.log(console);
// let g=BitInt("23424234");
// console.log(g);
// typeof g;

// const student = {
//   name: "Harish kumar",
//   age: 18,
//   Ygpa: 8.7,
//   ispass: true,
// };
// student["age"]+1;
// console.log(student["name", "age", "Ygpa"]);   // only last argument will come to as output
// console.log(student.name);  // both are same things 
// console.log(student["age"]);

// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// let  a =3;
// console.log("a=",a);
// console.log("a++ =",a++)
// console.log(a);

// let b=6;
// console.log("b=",b);
// console.log("++b=",++b);
// console.log(b);
// console.log(3-'5');   
// console.log(3+'5'); 
// let a=5;
// let b="5";
// console.log(a==b);  // "=="--> check the value store in variable so give output --> True
// console.log(a===b);  // "==="--> check the value store in variable and even data type of variable  so give output --> false 



// let doingarrowstuff=x=>console.log(x);
// doingarrowstuff(4);

// let spread=["so","much","fun"];
// let message =["javascript","is", ...spread, "and ","very", "powerful"]
// console.log(message)

// function addTwoNumber(x,y){
//     console.log(x+y)

// }
// // let arr=(5,9);
// // addTwoNumber(...arr);

// // Rest operator
// function somefunctio(para1, para2)
// {
//     console.log(para1, para2);

// }
// somefunctio("hi","there","how","are","you");

// function somefunctio(para1, ...para2)
// {
//     console.log(para1, para2);

// }
// somefunctio("hi","there","how","are","you");

// addTwoNumber(x,y)
// {
//     return (x+y);
// }
// let resultarr=[];
// for(let i=0; i<10; i++)
// {
//     let result =addTwoNumber(i,2*i);
//     resultarr.push(result);
// }

// function testAvailablility(x){
//     console.log("available here:", x);
// }
// testAvailablility("hii");
// console.log("not available here",x);


// function testAvailablility(){
//     let y="local variable";
//     console.log("available here:", x);
// }
// testAvailablility("hii");
// console.log("not available here",x);

// function doingstuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingstuff();

    // function doingstuff(){
    //     if(true){
    //         console.log(x);
    //         let x="local";
    //     }

    // }
// doingstuff();
// function doingstuffs(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }

// }
// doingstuffs();
// function doingstuffs(){s
//     if(true){
        
//         const x="local";
//     }
//     console.log(x);

// }
// doingstuffs();

// function confusereader(){
//     x="gues my scope";
//     console.log("inside the function",x);
// }
// confusereader();
// console.log("outside of function:",x);
//IIFE -immediate invoke function 
// (function(){
//     console.log("IIFE");

// })();

//Recursive function 
//console before the recursion function
// function getrecursion(nr){
//     console.log(nr);
//     if(nr>0){
//         getrecursion(--nr);
//     }

   
// }
// getrecursion(3);

// //console after the recursion function
// function getrecursion(nr){
   
//     if(nr>0){
//         getrecursion(--nr);
//     }
//     console.log(nr);
   
// }
// getrecursion(3);

// function logRecursion(nr){
//     console.log("started function",nr);
//     if(nr>0){
//         logRecursion(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function",nr);
// }
// logRecursion(3);

//Nested function

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//      doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//    }
//    }
//    doOuterFunctionStuff(2);

   //Anonymous function
//    let functionVariable = function () {
//     console.log("Not so secret though.");
//     };
//    functionVariable();

//  //Function call back///

//    function doFlexibleStuff(executeStuff) {
//     executeStuff();
//    console.log("Inside doFlexibleStuffFunction.");
//    }
//   doFlexibleStuff(functionVariable);

//   let yougotthis=function(){
//     console.log("you're dong really well, keep coding");
//   };
// //   setTimeout(yougotthis,1000);
// setInterval(yougotthis,1000);
 
(function () {
    console.log("Welcome");
 })();
 (function () {
    let firstName = "Laurence";
 })();
 let result = (function () {
    let firstName = "Laurence";
    return firstName;
 })();
 console.log(result);
 (function (firstName) {
    console.log("My Name is " + firstName);
 })("Laurence")


