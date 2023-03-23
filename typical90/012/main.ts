const useUnionFind = () => {
  const parent: number[] = []
  const init = (size: number) => {
    parent.length = size
    parent.fill(-1)
  }
  const root = (x: number): number => (parent[x] === -1 ? x : (parent[x] = root(parent[x])))
  const unite = (x: number, y: number) => {
    x = root(x)
    y = root(y)
    x === y || (parent[x] = y)
  }
  const same = (x: number, y: number): boolean => root(x) === root(y)

  return { init, unite, same }
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [H, W] = lines[0].split(' ').map(Number)
  const table: boolean[][] = [...Array(H)].map(() => Array(W).fill(false))
  const unionFind = useUnionFind()
  unionFind.init(H * W)

  const ansList: string[] = []
  lines.slice(2).forEach(line => {
    const [T, ...args] = line.split(' ').map(Number)
    if (T === 1) {
      const py = args[0] - 1
      const px = args[1] - 1

      directions.forEach(direction => {
        const next = [direction[0] + py, direction[1] + px]

        if (next[0] >= 0 && next[1] >= 0 && next[0] < H && next[1] < W && table[next[0]][next[1]]) {
          unionFind.unite(py * W + px, next[0] * W + next[1])
        }
      })
      table[py][px] = true
      return
    }
    const py = args[0] - 1
    const px = args[1] - 1
    const qy = args[2] - 1
    const qx = args[3] - 1
    if (table[py][px] && table[qy][qx] && unionFind.same(py * W + px, qy * W + qx)) {
      ansList.push('Yes')
      return
    }
    ansList.push('No')
  })
  console.log(ansList.join('\n'))
}

main()

export default {}
