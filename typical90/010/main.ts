const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N] = lines[0].split(' ').map(Number)
  const scores = [
    [0, 0],
    ...lines
      .slice(1, N + 1)
      .map(line => line.split(' ').map(Number))
      .map(
        (
          (sum1, sum2) => line =>
            line[0] === 1 ? [(sum1 += line[1]), sum2] : [sum1, (sum2 += line[1])]
        )(0, 0)
      )
  ]

  let ansList: string[] = []
  lines.slice(N + 2).forEach(line => {
    const [start, end] = line.split(' ').map(Number)
    ansList.push(`${scores[end][0] - scores[start - 1][0]} ${scores[end][1] - scores[start - 1][1]}`)
  })
  console.log(ansList.join('\n'))
}

main()

export default {}
