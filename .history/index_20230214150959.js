const n = [1, 2, 3, 4, 5]

const conbination = n => {
  for (let i = 0; i < n.lenght; i++) {
    const random = Math.floor(Math.random(i))
    console.log(random)
  }
}

conbination(n)
