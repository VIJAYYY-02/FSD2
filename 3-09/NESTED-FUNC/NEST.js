function outer() {
    let name = "Outer Function";

    function inner() {
        let age = 30;
        console.log("Inner Function: " + name);
        console.log("Age: " + age);
    }
    // console.log(age);
    //console.log(inner());
}
console.log(outer());