
let year = 2024;

let result = (year % 400 === 0) ? "Leap Year" :
             (year % 100 === 0) ? "Not" :
             (year % 4 === 0)   ? "Leap Year" :
                                  "Not";

console.log( result);





