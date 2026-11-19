// const father={
//     vehicle:function(){
//         console.log("scooter");
//     }
// };
// let son=Object.create(father);
// // son.vehicle=function(){
// //     console.log("bike");
// // };
// son.vehicle();
// father.vehicle();

// let animal={
//     name:"dog",
//     sound:function(){
//         console.log("boww");
//     }
// };
// let dog=Object.create(animal);
// dog.name="pug";
// dog.sound=function(){
//     console.log("bark");
// };
// dog.sound();
// animal.sound();

// let person={

//     name:"vj",
//     age:22,
//     greet:function(){
//         console.log(`hello ${this.name} and ${this.age}`);
//     }
// };
// let myar=["vedanshi","yuvaan"];
// myar.greet();

let person = {
    name: "vj",
    age: 22,
    greet: function () {
        console.log(`Hello ${this.name} and ${this.age}`);
    }
};

let myar = Object.create(person);

myar.name = "Vedanshi";
myar.age = 5;

myar.greet();