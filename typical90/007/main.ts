const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')

  const N = Number(lines[0])
  const A = lines[1].split(' ').map(Number)
  A.sort((a, b) => a - b)

  const ans = lines
    .slice(3)
    .map(line => {
      const B = Number(line)

      if (N <= 1) return Math.abs(B - A[0])
      let left = 0
      let right = N - 1
      while (right - left > 1) {
        const mid = Math.ceil((right + left) / 2)
        A[mid] <= B ? (left = mid) : (right = mid)
      }

      return Math.min(Math.abs(B - A[left]), Math.abs(B - A[left + 1]))
    })
    .join('\n')
  console.log(ans)
}

main()

export default {}
