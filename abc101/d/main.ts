function sukekusu(K: number): number[] {
  const ans: number[] = []
  let n = 1
  while (ans.length < K) {
    const digits = String(n).split('').map(Number)
    let valid = true
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] > digits[i - 1]) {
        valid = false
        break
      }
    }
    if (valid) {
      ans.push(n)
    }
    n++
  }
  return ans
}

const main = () => {
  const r = _io()
  const lines = r.lines
  const K = Number(lines[0])
  console.log(K)

  const snukeNumbers = sukekusu(K)
  console.log(snukeNumbers)
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
