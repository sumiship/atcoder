const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [H, W] = lines[0].split(' ').map(Number)
  const A = lines.slice(1, H + 1).map(line => line.split(' ').map(Number))
  const B = lines.slice(H + 1).map(line => line.split(' ').map(Number))
  let count = 0
  for (let dh = 0; dh < H - 1; dh++) {
    for (let dw = 0; dw < W - 1; dw++) {
      const diff = B[dh][dw] - A[dh][dw]
      if (diff === 0) continue
      count += Math.abs(diff)
      A[dh][dw + 1] += diff
      A[dh + 1][dw] += diff
      A[dh + 1][dw + 1] += diff
    }
    if (A[dh][W - 1] !== B[dh][W - 1]) {
      console.log('No')
      return
    }
  }
  if (A[H - 1].some((v, i) => v !== B[H - 1][i])) {
    console.log('No')
    return
  }
  console.log('Yes')
  console.log(count)
}

main()

export default {}
