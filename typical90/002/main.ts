const isCorrectBracketSequence = (brackets: string): boolean => {
  let preBracketCnt = 0
  for (let bracketBinary of brackets.split('')) {
    if (bracketBinary === '0') preBracketCnt++
    else if (preBracketCnt-- <= 0) return false
  }
  return preBracketCnt > 0 ? false : true
}

const main = () => {
  const r = _io()
  const lines = r.lines
  const [N] = lines.map(Number)
  if (N % 2 === 1) {
    console.log('')
    return
  }

  for (let index = 0; index < 2 ** N; index++) {
    const binaryNumber = ([...Array(N)].map(_ => '0').join('') + index.toString(2)).slice(-1 * N)
    if (!isCorrectBracketSequence(binaryNumber)) continue

    const brackets = binaryNumber
      .split('')
      .map(e => (e === '0' ? '(' : ')'))
      .join('')
    console.log(brackets)
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
