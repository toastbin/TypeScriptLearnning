/* 

  ts为了使编写的代码更具规范 更有利于维护  增加了类型校验 在ts中主要提供了以下数据类型

  布尔类型            boolean
  数字类型            number
  字符串类型          string
  数组类型            array
  元组类型            tuple
  枚举类型            enmu
  任意类型            any
  null 和 undefined
  void类型
  never类型

   
*/
// 写ts代码 必须指定类型
let flag: boolean = true;
flag = false

// 都是浮点数
let num: number = 1

// 16进制
let num16: number = 0x14
// 2进制
let binaryNum: number = 0b10100
console.log(num16, binaryNum);
let str: string = 'str'


// 定义数组有些许不同
// 1.
//表示数组里所有的元素都是 数字
let arrNum1: number[] = [1, 2, 3]

let numStr1: string[] = ['1', '2', '3']

// 2.
let arrNum2: Array<number> = [4, 5, 6]

let arrStr2: Array<string> = ['4', '5', '6']

// 元组类型  属于数组的一种
//给数组中每一个位置指定类型
let tupleNumAndStr: [number, string] = [7, '8']

//枚举类型
//默认情况下 是从0开始为元素编号的  但也可以手动更改
enum Flag { success = 10, error, wait }
// 此时 w == 12
// 如果不给第一个元素赋值 那么 w 是 2
let s: Flag = Flag.success
let e: Flag = Flag.error
let w: Flag = Flag.wait
console.log(w);
// console.log(s);
// console.log(e);
//如果想赋值

// 还可以反过来根据数值得到相应的名字
let wName: string = Flag[12]  // wait
console.log(wName);

// Any
// 就是任意类型 表明这个变量可以赋予任何类型的值
let variableAny: any = 'str'
// 不会报错
variableAny = 123.22
console.log(variableAny.toFixed(1));

// 然而使用 object类型 本质上也可以指定任意类型  但是不可以调用上面的方法
let variableObject: Object = 1123.21
// 会报错 并不存在 toFixed() 方法
// console.log(variableObject.toFixed(1));

// void
// 从某种意义上说  void与any正好相反, 它表示没有任何类型. 当一个函数 没有返回值时 通常会见到其返回值是 void
// 通常只在函数上使用
function log(): void {
  console.log('没有返回值');
}

log()
// 单独声明一个 void变量 没有什么大用 ,因为它只能被赋予 null 或者 undefined

// 配置文件里开启了 strictNullChecks
// void只能被赋予 undefined 不能赋予 null
let empty: void = undefined
// empty = undefined


// null 和 undefined
// ts 中还有 null 和 undefined类型
// 本身只能被赋予 null 或者 undefined
let u: undefined = undefined
let n: null = null
// 但是默认情况下 null 和 undefined是所有类型的子类型  就是说 其他类型可以被赋予 unll 和 undefined
// 但是 如果开启了 strictNullChecks 就不能这样赋值了 这样的好处是 减少了很多莫名其妙出现null和undefined的常见问题

// let numNull:number = null
// numNull = undefined

// let numUndefined = undefined
// numUndefined = null

// never类型 表示那些永远不存在值的类型
//  例如 never类型是那些 总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型
//  变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// error('ll')
//  never 类型 必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}


// Object 表示非原始属性 也就是除了 number string boolean symbol null  undefined之外的类型


// 类型断言
// 说白了就是 我们可以自由的指定我们想它返回的值 通常是自定义的class
// 第一种 尖括号表示法
let someValueStr: any = 'this is a string'
// 虽然定义 someValue的时候是any 不知道传的是什么
// 但是我们自己知道是一个 string  所以用 <string> 来指明类型 
let strLength: number = (<string>someValueStr).length
console.log(strLength);

// 第二种为 as
let someValueNum: any = '123456'
let numLength: Array<string> = (someValueNum as string).split('')
console.log(numLength);

// 两种方式等价  随自己喜好




