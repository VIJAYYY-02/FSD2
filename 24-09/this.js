// const person={
//     name:"vj",
//     age:"19",
//     greet:function (){
//         console.log(this);}
// };
// person.greet();

// function one(){
//     let user="vj";
//     console.log(this.user);
// }
// one();

// console.log(this===window);

// function show(){
//     console.log(this === global);
// };
// show();
// global.show = show;
// global.show();

// const person={

//     name:"vj",
//     age:"19",
//     greet:function(){
//         return this;
//     }
// };
// let p1 = person.greet.bind(person);
// console.log(p1());
// function multi(a, b) {
//     console.log("a =", a, "b =", b);
//     return a * b;
// }

// const d = multi.bind(null, 2);
// console.log(d(5)); // logs a=2, b=5 → result 10


// function person(name){
//     this.name=name;

// }
// person.prototype.getname=function(){
//     return this.name;
// }
// let p1= new person("vj");
// console.log(p1.name);
// console.log(p1.getname);
function person(name){
    this.name = name;
}

// attach to prototype
person.prototype.getname = function(){
    return this.name;
}

let p1 = new person("vj");
console.log(p1.name);       // "vj"
console.log(p1.getname());  // "vj"
