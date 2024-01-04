function dotProduct(v1, v2) {
  let result = 0;

  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }

  return result;
}

function checkOrthogonality(vectors) {
  for (let i = 0; i < vectors.length; i += 2) {
    const v1 = vectors[i];
    const v2 = vectors[i + 1];
    const dot = dotProduct(v1, v2);

    if (dot === 0) {
      console.log("Vectors", v1, "and", v2, "are orthogonal");
    } else {
      console.log("Vectors", v1, "and", v2, "are not orthogonal");
    }
  }
}

// Example usage:
const vectorsToCheck = [
  [1, 0, 0],
  [0, 1, 0], // Example of orthogonal vectors
  [2, 4, 6],
  [1, 2, -3], // Example of non-orthogonal vectors
  [3, -1, 0],
  [0, 0, 1], // Example of orthogonal vectors
];

checkOrthogonality(vectorsToCheck);
