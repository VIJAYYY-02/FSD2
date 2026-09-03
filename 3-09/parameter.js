// function display(a, b) {
//     if (a === undefined || b === undefined) {
//         return "Please provide both values";
//     }
//     return `${a + b}`;
// }
// console.log(display(5, 10));
// console.log(display());



function display(a=requiredarg(), b=requiredarg()) {
    return `${a + b}`;
}
function requiredarg() {
    throw new Error("Please provide both values");
}
try {
    console.log(display(5, 10));
    console.log(display());
}catch (error) {
    console.error(error.message);
}

