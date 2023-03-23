const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [Q] = lines[0].split(' ').map(Number)
  const deck: number[] = []
  const ansList: number[] = []
  lines.slice(1).forEach(line => {
    const [t, x] = line.split(' ').map(Number)
    switch (t) {
      case 1:
        deck.unshift(x)
        break
      case 2:
        deck.push(x)
        break
      case 3:
        ansList.push(deck[x - 1])
        break
    }
  })
  console.log(ansList.join('\n'))
}

main()

export default {}
