// const person={
//     name:"vj",
// }
// person.greeting=function(){
//     console.log("hello "+this.name);
// }

// person.greeting();

// const person = {
//     name: "vj",
//     // Method shorthand
//     greeting() {
//         console.log("hello " + this.name);
//     }
// };

// // Call the method
// person.greeting(); // hello vj


// const person = {
//     name: "vj",
//     greeting: function() {
//         console.log("hello " + this.name);
//     }
// };
// person.greeting(); 

// const person = {
//     name: "vj",
    
//     laptop: {
//         brand1: "Dell",
//         model: "XYZ",
//     },
// };
// // DOT NOTATION
// console.log(person.laptop.brand1); // Dell

// // BRACKET NOTATION
// console.log(person["laptop"]["model"]); // XYZ

// console.log(person.laptop.brand?.length); // XYZ

const a={
    a:10,
    b:20,
};
const b={
    b:30,
    c:40,
};
//merge a and b
//let c=Object.assign( {},a,b);
let c={...a,...b};

console.log(c); // { a: 10, b: 30, c: 40 }