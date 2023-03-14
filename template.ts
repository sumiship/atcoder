/**
 * binarySearch 二分探索
 * leftは条件を満たすものの範囲
 * rightは条件を満たさないものの範囲
 * 最終的にギリギリ条件を満たすものが見つかる
 * @param array
 */
const binarySearch = (array: number[]) => {
  let left = 0
  let right = array.length
  while (right - left > 1) {
    const mid = Math.ceil((right + left) / 2)
    check(array, mid) ? (left = mid) : (right = mid)
  }
  return left
}
const check = (a: number[], m: number): boolean => true

export default {}
