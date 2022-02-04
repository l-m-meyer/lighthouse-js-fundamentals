const howManyHundreds = function (bottles) {
  let containers = 0;

  if (bottles % 100 === 0) {
    containers = bottles / 100;
  } else {
    let remainder = bottles % 100;
    containers = (bottles - remainder) / 100;
  }
  return containers;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);