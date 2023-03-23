const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N] = lines[0].split(' ').map(Number)
  const ansList: number[] = []
  ;((usedNames: Set<string>) => {
    lines.slice(1).forEach((line, index) => {
      if (!usedNames.has(line)) {
        ansList.push(index + 1)
        usedNames.add(line)
      }
    })
  })(new Set())
  console.log(ansList.join('\n'))
}

main()

export default {}
