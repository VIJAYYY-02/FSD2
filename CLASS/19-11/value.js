const person={
    firstname:"vj",
    lastname:"SINGH",
    currentage:22,
};
let {firstname,middlename='',lastname,currentage:age=18}=person;
console.log(firstname);
console.log(middlename);
console.log(lastname);
console.log(age);
console.log(currentage);