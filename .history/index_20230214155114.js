function findCombinations(n, m) {
  const result = [] // Initialize an empty array to store the combinations that add up to the target sum.
  backtrack([], 0, 0) // Call the helper function with an empty combination, a start index of 0, and a current sum of 0.
  return result // Return the final result array.

  function backtrack(combination, start, sum) {
    if (sum === m) {
      // If the current sum equals the target sum, add the combination to the result array and return.
      result.push(combination)
      return
    }
    if (sum > m) {
      // If the current sum exceeds the target sum, return without doing anything.
      return
    }
    for (let i = start; i < n.length; i++) {
      // Loop through the array starting from the given start index.
      const num = n[i] // Get the current number.
      backtrack([...combination, num], i + 1, sum + num) // Recursively call the function with a new combination, the next index as the start index, and the sum of the current sum and the current number.
    }
  }
}

const n = [1, 2, 3, 4, 5] // The input array.
const m = 4 // The target sum.
const combinations = findCombinations(n, m) // Call the main function to find the combinations that add up to the target sum.
console.log(combinations) // Print the final result array to the console.
