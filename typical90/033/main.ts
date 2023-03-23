const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [H, W] = lines[0].split(' ').map(Number)
  const ans = H === 1 || W === 1 ? H * W : Math.ceil(H / 2) * Math.ceil(W / 2)
  console.log(ans)
}

main()

export default {}
