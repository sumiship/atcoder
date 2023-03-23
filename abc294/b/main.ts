const main = () => {
  const lines: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
  const [H, W] = lines[0].split(' ').map(Number)
  const ansList = lines.slice(1).map(line =>
    line
      .split(' ')
      .map(v => {
        const code = Number(v)
        if (code === 0) return '.'
        return String.fromCharCode(code + 64)
      })
      .join('')
  )
  console.log(ansList.join('\n'))
}

main()

export default {}
