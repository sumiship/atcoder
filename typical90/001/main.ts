const isAbleCut = (A: number[], M: number, L: number, K: number): boolean => {
  let pre = 0
  let numCut = 0
  for (const distance of A) {
    if (distance - pre >= M && L - distance >= M) {
      if (++numCut >= K) return true
      pre = distance
    }
  }
  return false
}

const main = () => {
  const r = _io()
  const lines = r.lines
  const [N, L] = lines[0].split(' ').map(Number)
  const [K] = lines[1].split(' ').map(Number)
  const A = lines[2].split(' ').map(Number)

  let left = 0
  let right = L
  while (right - left > 1) {
    const mid = Math.floor((right + left) / 2)
    isAbleCut(A, mid, L, K) ? (left = mid) : (right = mid)
  }
  console.log(left)
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
