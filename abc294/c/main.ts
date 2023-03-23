const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  const A = lines[1].split(' ').map(Number)
  const B = lines[2].split(' ').map(Number)
  const ans1: number[] = []
  const ans2: number[] = []
  ;((ia: number, ib: number) => {
    for (let i = 1; i <= M + N; i++) {
      if (ia >= N) {
        ans2.push(i)
        continue
      }
      if (ib >= M) {
        ans1.push(i)
        continue
      }
      if (A[ia] > B[ib]) {
        ans2.push(i)
        ib++
        continue
      }
      ans1.push(i)
      ia++
    }
  })(0, 0)
  console.log(ans1.join(' ') + '\n' + ans2.join(' '))
}

main()

export default {}
