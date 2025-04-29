// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class Dog{
//     constructor(dogname, weight , color,breed){
//         this.dogname=dogname;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("java script",2.4,"brown","chihuahua");
// console.log(dog.dogname,"is a ",dog.breed,"breed and weight"+dog.weight,"kg");

// class Person{
//     constructor(firstname, lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
      
//     }
// }
// let p=new Person("java","script");
// console.log(p.firstname,lastname);

// class Person{
//     constructor(firstname, lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
      
//     }
// }
// let p=new Person("java" );
// console.log(p.firstname);
// console.log(p.lastname)

// class Person{
//     constructor(firstname, lastname="doe" ){
//         this.firstname=firstname;
//         this.lastname=lastname;
      
//     }
// }
// let p=new Person("java" );
// console.log(p.firstname);
// console.log(p.lastname);

// class Person{
//     constructor(firstname, lastname="doe" ){
//         this.firstname=firstname;
//         this.lastname=lastname;
      
//     }
//     greet(){
//         console.log("hi there! i'm", this.firstname);
//     }
// }
// let p=new Person("java" );
// p.greet();


// class Person{
//     constructor(firstname, lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
      
//     }
//     greet(){
//         console.log("hi there! i'm");
//     }
//     compliment(name,object)
//     {
//      return "thats wonderful"+object+", "+name;
//     }
// }
// let p=new Person();
// let compliment=p.compliment("harry","hat");
// console.log(compliment);

// class Person{
//     #firstname;
//     #lasttname;
//     constructor(firstname , lastname){
//         this.#firstname=firstname;
//         this.#lasttname=lastname;
//     }
// }
// let p=new Person("Maria","moden");
// console.log(p.firstname);\

// class Person{
//     #firstname;
//     #lasttname;
// constructor(firstname , lastname){
//    if(firstname.startWith("M")){
//     this.#firstname=firstname;
//    }
//    else{
//     this.#firstname="M"+firstname;
//    }
// }
// }
// let p=new Person("Kay","moon");

//abstraction

// class Person{
//     #firstname;
//     #lastname;
// constructor(firstname , lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
// }
// get firstname(){
//     return this.#firstname;
// }
// set firstname(firstname){
//      this.#firstname=firstname;
// }
// get lastname(){
//     return this.#lastname;
// }
// set lastname(lastname){
//    this.#lastname=lastname
// }
// }
// let p=new Person("Kay","moon");
// console.log(p.firstname);

//Inhiritance

// class Vehicle{
//     constructor (color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
    
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed, fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;
//     }
//     dowheelie(){
//         console.log("driving on one whel");
//     }
// }

// let motor=new Motorcycle("black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

//Prototype


class Person{
    constructor(firstname, lastname ){
        this.firstname=firstname;
        this.lastname=lastname;
      
    }
}
Person.prototype.introduce=function(){
    console.log("Hi","i,am",this.firstname);
};

let p=new Person("maria","saga");
console.log(p.favoriteColor);
p.introduce();







