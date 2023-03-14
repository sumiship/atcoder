const bfs = (tree: number[][], start: number, N: number): { node: number; distance: number } => {
  const distanceList: number[] = Array(N).fill(-1)
  const queue: number[] = [start]
  distanceList[start] = 0
  while (queue.length > 0) {
    const search = queue.shift()!

    tree[search].forEach(candidate => {
      if (distanceList[candidate] !== -1) return
      distanceList[candidate] = distanceList[search] + 1
      queue.push(candidate)
    })
  }
  const max = Math.max(...distanceList)
  return { node: distanceList.indexOf(max), distance: max }
}

const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [N] = lines[0].split(' ').map(Number)
  const tree: number[][] = [...Array(N)].map(() => [])
  lines.slice(1).forEach(line => {
    const [city1, city2] = line.split(' ').map(Number)
    tree[city1 - 1].push(city2 - 1)
    tree[city2 - 1].push(city1 - 1)
  })

  console.log(bfs(tree, bfs(tree, 0, N).node, N).distance + 1)
}

main()

export default {}
