// function display(a,b){
//     return a + b;
// }
// console.log(display(5, 10));
// console.log(display());
// console.log(display(10,'a'));
// console.log(display(10,null));


// function show(msg){
//     console.log('hello ' + msg);
//     console.log('hello ' + {msg});
//     console.log(`hello ${msg}`); 

// }
// show('js');


// function login(user){
//     return `Welcome ${user}`;
// }
function login(user) {
    return user ? `Welcome ${user}` : "Welcome Guest";
}

// console.log(login());      // Welcome Guest
// console.log(login('vj'));  // Welcome vj

console.log(login());
console.log(login('vj'));