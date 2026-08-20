let a = 12345;
let reversed = 0;

while(a > 0) {
    let d = a % 10;            
    reversed = reversed * 10 + d; 
    a = Math.floor(a / 10);        
}

console.log( reversed);
