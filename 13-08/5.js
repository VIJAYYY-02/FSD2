
function lp(year) {

  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}


console.log(lp(2001));


