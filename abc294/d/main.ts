// const main = () => {
//   const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
//   const [N, Q] = lines[0].split(' ').map(Number)
//   const ansList: number[] = []

//   lines.slice(1).forEach(
//     ((goneNumbers: number[]) => line => {
//       const [event, arg] = line.split(' ').map(Number)
//       switch (event) {
//         case 1:
//           break
//         case 2:
//           const min = goneNumbers[arg - 1]
//           goneNumbers[min] = goneNumbers[arg]
//           goneNumbers[goneNumbers[arg]] = min
//           goneNumbers[arg] = min
//           break
//         case 3:
//           ansList.push(goneNumbers[0] + 1)
//           break
//       }
//     })([...Array(N + 1)].map((_, i) => i))
//   )

//   console.log(ansList.join('\n'))
// }
const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N, Q] = lines[0].split(' ').map(Number)
  const ansList: number[] = []

  lines.slice(1).forEach(
    ((goneNumbers: boolean[], callNumber: number) => line => {
      const [event, arg] = line.split(' ').map(Number)
      switch (event) {
        case 1:
          break
        case 2:
          goneNumbers[arg - 1] = true
          break
        case 3:
          while (goneNumbers[callNumber]) callNumber++
          ansList.push(callNumber + 1)
          break
      }
    })(Array(N).fill(false), 0)
  )

  console.log(ansList.join('\n'))
}

main()

export default {}
