const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N, K] = lines[0].split(' ').map(Number)
  const A = lines[1].split(' ').map(Number)
  const B = lines[2].split(' ').map(Number)
  const diffSum = A.reduce((acc, value, index) => (acc += Math.abs(value - B[index])), 0)
  const ans = K < diffSum || (K - diffSum) % 2 === 1 ? 'No' : 'Yes'
  console.log(ans)
}

main()

export default {}
