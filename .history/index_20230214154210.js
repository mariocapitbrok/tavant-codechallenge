function findPairWithSum(n, targetSum) {
  const pairs = []
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] === targetSum) {
        pairs.push([n[i], n[j]])
      }
    }
  }
  if (pairs.length === 0) {
    return null
  }
  if (pairs.length === 1) {
    return pairs[0]
  }
  const remaining = targetSum - pairs[0][0] - pairs[0][1]
  return [pairs[0], remaining]
}

const n = [1, 2, 3, 4, 5]
const targetSum = 4
const result = findPairWithSum(n, targetSum)
console.log(result)
