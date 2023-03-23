const gcd = (a: bigint, b: bigint): bigint => (b === BigInt(0) ? a : gcd(b, a % b))

const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [A, B, C] = lines[0].split(' ').map(BigInt)

  const gcdAns = gcd(A, gcd(B, C))

  console.log((A / gcdAns + B / gcdAns + C / gcdAns - BigInt(3)).toString())
}

main()

export default {}
