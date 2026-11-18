function Map(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i]);
  }

  return result;
}

const numbers = [1, 2, 3];
const doubled = Map(numbers, function (number) {
  return number * 2;
});

console.log(doubled); // [2, 4, 6]