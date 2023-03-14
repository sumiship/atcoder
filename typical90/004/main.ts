const main = () => {
  const r = _io()
  const lines = r.lines
  const [H, W] = lines[0].split(' ').map(Number)
  const horizonSums = [...Array(H)].fill(0)
  const verticalSums = [...Array(W)].fill(0)
  const table = lines.slice(1).map((row, rowIndex) => {
    return row.split(' ').map((col, colIndex) => {
      horizonSums[rowIndex] += Number(col)
      verticalSums[colIndex] += Number(col)
      return Number(col)
    })
  })
  for (let i = 0; i < H; i++) {
    const rowAns = verticalSums.map((v, colIndex) => v + horizonSums[i] - table[i][colIndex])
    console.log(rowAns.join(' '))
  }
}

const _io = (i = 0) => {
  const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
  const lines = str.trim().split('\n')
  const s = () => lines[i++] || ''
  const n = () => Number(s())

  const mn = (v: string[]) => v.map(Number)
  const sp = (v: string) => v.split(' ')

  const ss = () => sp(s())
  const nn = () => mn(ss())
  const nls = () => mn(lines.slice(i))
  const nnls = () => lines.slice(i).map(v => mn(sp(v)))

  return { lines, s, n, ss, nn, nls, nnls }
}

main()

export default {}
