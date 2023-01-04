import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear({asteroids}) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const listOfYears = asteroids.map((asteroid) => asteroid.discoveryYear);
   
  const tallies = listOfYears.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
   
  const results = Object.keys(tallies).filter(x => {
    return tallies[x] == Math.max.apply(null, Object.values(tallies))
  })[0];

  return parseInt(results);
  }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
