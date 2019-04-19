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
let flag:boolean = true;
flag = false

let num:number = 1

let str:string = 'str'


// 定义数组有些许不同
// 1.
//表示数组里所有的元素都是 数字
let arrNum1:number[]= [1,2,3]

let numStr1:string[] = ['1','2','3']

// 2.
let arrNum2:Array<number> = [4,5,6]

let arrStr2:Array<string> = ['4','5','6']

// 元组类型  属于数组的一种
//给数组中每一个位置指定类型
let tupleNumAndStr:[number,string] = [7,'8']

//枚举类型
//默认情况下 是从0开始为元素编号的  但也可以手动更改
enum Flag { success = 10 ,error , wait}
// 此时 w == 12
// 如果不给第一个元素赋值 那么 w 是 2
let s:Flag = Flag.success
let e:Flag = Flag.error
let w:Flag = Flag.wait
console.log(w);
// console.log(s);
// console.log(e);
//如果想赋值

// 还可以反过来根据数值得到相应的名字
let wName:string = Flag[12]  // wait
console.log(wName);