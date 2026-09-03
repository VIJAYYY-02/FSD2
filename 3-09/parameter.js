function display(a, b) {
    if (a === undefined || b === undefined) {
        return "Please provide both values";
    }
    return ` ${a + b}`;
}
console.log(display(5, 10));
console.log(display());

