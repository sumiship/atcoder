const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N] = lines[0].split(' ').map(Number)
  const A = lines[1].split(' ').map(Number)
  const ans = A.filter(v => v % 2 === 0)
  console.log(ans.join(' '))
}

main()

export default {}
