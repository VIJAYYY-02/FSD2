// const persons = {
//     name: "John",
//     age: 30
// };
// console.log(Object.getPrototypeOf(persons));

// const persons = {
//     role: "admin",

// };
// const child={
//     role:"user",
// };
// object.setPrototypeOf(child,persons);
// console.log(child.role);

const animals = {
    sound() {
        console.log("some sound");
    }
};

const dog = Object.create(animals);

dog.sound = "Bark";

dog.sound = function() {
    console.log("Bark");
};

dog.sound();
animals.sound();