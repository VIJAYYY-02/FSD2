// //anpnymous function
// (function() {
//     console.log("This is an anonymous function");
// })();
// console.log(one(2));
// function one(n) {
//     return (n+1);
// }

// console.log(two(5));
// const two = function(n) {
//     return (n+2);
// }

// setTimeout(function() {
//     console.log("This is an anonymous function inside setTimeout");
// }, 1000);

//NAMED IIFE
(function one(){
   console.log("hello")
})();

//anonymous IIFE
(function(){
    console.log("database connected");
})();