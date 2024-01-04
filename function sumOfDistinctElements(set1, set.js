function sumOfDistinctElements(set1, set2) {
  let distinctElements = new Set([...set1, ...set2]);
  let sum = 0;

  for (let element of distinctElements) {
    sum += element;
  }

  return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements:", result); // Output: 13 (distinct elements 4, 7, 2)
