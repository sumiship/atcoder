const main = () => {
  const r = _io()
  const lines = r.lines
  const [N, K] = lines[0].split(' ').map(Number)
  const ans = Math.ceil((N - 1) / (K - 1))
  console.log(ans)
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
