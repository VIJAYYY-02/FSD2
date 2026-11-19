let a = [1, 2, 3, 4, 5];

for (let i = 0, j = a.length - 1; i < j; i++, j--) {
    a[i] = [a[j], a[j] = a[i]][0]; // comma operator swap
}

console.log(a); // [5, 4, 3, 2, 1]
