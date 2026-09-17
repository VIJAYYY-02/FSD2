const Of = (arr) => {
    let evens = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
};

// Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(Of(numbers)); // [2, 4, 6, 8]


const Index = (arr) => {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
};

// Example
console.log(Index(numbers)); // [2, 4, 6, 8]
