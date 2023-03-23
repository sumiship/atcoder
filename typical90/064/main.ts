const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N, Q] = lines[0].split(' ').map(Number)
  // const { diffList, point } = lines[1]
  //   .split(' ')
  //   .map(Number)
  //   .reduce(
  //     (acc: { diffList: number[]; point: number }, v, i, array) =>
  //       i === 0
  //         ? acc
  //         : { diffList: [...acc.diffList, array[i - 1] - v], point: acc.point + Math.abs(array[i - 1] - v) },
  //     { diffList: [], point: 0 }
  // )
  const diffList: number[] = []
  let point = 0
  lines[1].split(' ').forEach((v, i, array) => {
    if (i === 0) return
    const val = Number(array[i - 1]) - Number(v)
    diffList.push(val)
    point += Math.abs(val)
  })

  const ansList: number[] = []
  ;(beforePoint => {
    lines.slice(2).forEach(line => {
      const [l, r, v] = line.split(' ').map(Number)
      if (l !== 1) {
        const beforeDiff = diffList[l - 2]
        const newDiff = beforeDiff - v
        diffList[l - 2] = newDiff
        beforePoint += Math.abs(newDiff) - Math.abs(beforeDiff)
      }
      if (r !== N) {
        const beforeDiff = diffList[r - 1]
        const newDiff = beforeDiff + v
        diffList[r - 1] = newDiff
        beforePoint += Math.abs(newDiff) - Math.abs(beforeDiff)
      }
      ansList.push(beforePoint)
    })
  })(point)
  console.log(ansList.join('\n'))
}

main()

export default {}
