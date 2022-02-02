/* This function evaluates what school a learner should attend based * on their age and returns the appropriate school as a string.
* @param age
*/

const whichSchool =  function(age) {
  if (age < 13) { // checks if the learner's age is under 13
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) { // checks if learner's age is between 13 and 18 inclusive.
    return 'Secondary School';
  } else { // suggests for all other learners to attend LHL
    return 'Lighthouse Labs';
  }
}