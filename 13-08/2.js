let y=2300;
if(y%4==0){
    console.log("leap y");
}
else{
    console.log("not");
}


let year = 20;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("leap year");
        } else {
            console.log(" not a leap year");
        }
    }
    else{
        console.log("not");
    }
} else {
    console.log("not a leap year");
}
