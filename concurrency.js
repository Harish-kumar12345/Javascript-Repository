//**************************************call back
// it is just fuction that takes another function as an argument

// function dosomething(callback)
// {
//     callback();
// }
// function sayHi(){
//     console.log(sayHi);
// }

// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an ", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got an ", grade, ": well done!");
//       break;
//     case grade == "C":
//       console.log("You got an ", grade, ": alright!");
//       break;
//     case grade == "D":
//       console.log("You got an ", grade, ": need improving!");
//       break;
//     default:
//       console.log("An", grade, "what?");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }
// getGrade(85, judge);

//*******************************************promises

//when resolve is called , the promises presumed to be successful and whatever is betwen the arrrow is return and used as an input for the then method promises object. //

// let promise =new Promise(function(resolve, reject){
// let x=20;
// if(x>10){
//     resolve(x);
// }
// else{
//     reject("Too low");
// }
// });
// promise.then(
//     function(value){
//         console.log("success",value);
//     },
//     function (error){
//         console.log("Error",error);
//     }
    

// );

// const promise=new Promise ((resolve, reject)=>{
//     // resolve("success");
//     reject("OOps");
// }).then(value=>{
//     console.log(value);
//     return "we";
// }).then(value=>{
//     console.log(value);
//     return "can";
// }).then(value=>{
//     console.log(value);
//     return "chain";
// }).then(value=>{
//     console.log(value);
//     return "promises";
// }).then(value=>{
//     console.log(value);

// }).catch(value=>
// {
//     console.log(value);
// })

//*********************************Async & Await***********************//
function saySomething(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!"+x);
        }, 1000);
    });
}
async function talk(x) {
    const result = await saySomething(x); 
    console.log(result);
}
talk(2); 
talk(4);
talk(8);