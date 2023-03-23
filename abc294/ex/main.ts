const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N] = lines[0].split(' ').map(Number)
}

main()

export default {}

