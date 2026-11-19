// const p1 = { 
//     a: 1,
//     b: 
//       { 
//         length: 2,
//         x: 3

//       }
//  };

// // Shallow copy using spread
// const p2 = { ...p1 };

// p2.b.x = 99;
// console.log(p2); // 99
// console.log(p1.b.x); // 99 (changed!)

const p1 = {
    name: "John",
    laptop: {
        cpu: "Intel i5",
        model: "XPS 13"
    }
};
const p2 = structuredClone(p1); //deep copy
const p3 = JSON.parse(JSON.stringify(p1)); //deep copy
p2.laptop.cpu = "Intel i7";
p3.laptop.cpu = "Intel i9";
console.log(p1.laptop.cpu);
console.log(p2.laptop.cpu);
console.log(p3.laptop.cpu);
const p4 = Object.assign({}, p1); //shallow copy
p4.laptop.cpu = "Intel i3";
console.log(p1.laptop.cpu);
console.log(p4.laptop.cpu);

const p5 = { ...p1 };  //shallow copy
p5.laptop.cpu = "Intel i2";
console.log(p1.laptop.cpu);
console.log(p5.laptop.cpu);
