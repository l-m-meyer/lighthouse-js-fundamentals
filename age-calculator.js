const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;

  return `${name} is ${age} years old.`;
}

console.log(ageCalculator('Lisa', 1993, 2022));