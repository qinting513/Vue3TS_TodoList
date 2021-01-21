/**
 * 
 * @param x 
 * @param y 
 * @param z 可选参数，后面不可再添加参数
 * @returns number 类型
 */
const add = (x: number, y: number, z?: number): number => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
interface ISum {
  (x: number, y: number, z?: number): number
}
let add2: ISum = add
add2(1, 2)
add2(1, 2, 3)
// let add2: (x: number, y: number, z?: number) => number = add
