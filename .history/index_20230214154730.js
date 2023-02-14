function findCombinations(n, m) {
  const result = []
  backtrack([], 0, 0)
  return result

  function backtrack(combination, start, sum) {
    if (sum === m) {
      result.push(combination)
      return
    }
    if (sum > m) {
      return
    }
    for (let i = start; i < n.length; i++) {
      const num = n[i]
      backtrack([...combination, num], i + 1, sum + num)
    }
  }
}

const n = [1, 2, 3, 4, 5]
const m = 4
const combinations = findCombinations(n, m)
console.log(combinations)
