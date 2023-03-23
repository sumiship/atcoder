const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N] = lines[0].split(' ').map(Number)
  const [S] = lines[1].split(' ')

  const dpTable = Array(8).fill(BigInt(0))
  dpTable[0] = 1
  for (let i = 0; i < N; i++) {
    const char = S[i]

    switch (char) {
      case 'a':
        dpTable[1] += dpTable[0]
        break
      case 't':
        dpTable[2] += dpTable[1]
        break
      case 'c':
        dpTable[3] += dpTable[2]
        break
      case 'o':
        dpTable[4] += dpTable[3]
        break
      case 'd':
        dpTable[5] += dpTable[4]
        break
      case 'e':
        dpTable[6] += dpTable[5]
        break
      case 'r':
        dpTable[7] += dpTable[6]
        break
    }
  }

  console.log(dpTable[7] % (10 ** 9 + 7))
}

main()

export default {}
