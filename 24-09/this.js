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

const person={
    name:"vj",
    age:"19",
    greet:function(){
        return this.name;
    }
};
let p1= person.greet;
console.log(p1());