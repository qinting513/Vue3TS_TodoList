// type inference
let str = 'str'

// union types
let numberOrString: number | string // 联合类型
// numberOrString.length
// numberOrString.toString

function getLength(input: string | number): number {
  const str = input as string // 类型断言
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

//type guard
function getLength2(input: string | number): number {
  if (typeof input === 'string') { // 类型守护
    return input.length
  } else {
    return input.toString().length
  }
}