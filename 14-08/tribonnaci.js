
function tribonacci(n) {
  // Initialize first three terms
  let t0 = 1, t1 = 2, t2 = 4;


  console.log(t0);
 console.log(t1);
  console.log(t2);


  for (let i = 3; i < n; i++) {
    let next = t0 + t1 + t2;
    console.log(next);

    // Shift values forward
    t0 = t1;
    t1 = t2;
    t2 = next;
  }
}

// Example: print first 10 terms
tribonacci(5
);
//1247