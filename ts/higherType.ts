// 高级类型

// 交叉类型 

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    result[id] = <any>first[id]
  }
  for (let id in second) {
    result[id] = <any>second[id]
  }
  return result
}

class Person1 {
  constructor(public name: string) {

  }
}

interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
    console.log('loggable');
  }
}
let jim = extend(new Person1('jim'), new ConsoleLogger())
console.log(jim.name);
jim.log()

// 联合类型

function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
}
console.log(padLeft('world', 5));

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}
class b implements Bird {
  fly(){

  }
  layEggs(){

  }
}
function getSmallPet(): Fish | Bird {
  //
  return new b()
}

let pet = getSmallPet()
// 可以调用共有的  独有的不可以
pet.layEggs()
// pet.fly()
// pet.swim()
if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

// 类型保护
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

// 改写 padleft
// typeof 类型保护
// instanceof 类型保护
function padLeft2(value: string, padding: number | string) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error( `Expected string or number ${padding}` )
}
function isNumber(x: any): x is number {
  return typeof x === 'number'
}
function isString(x: any): x is string {
  return typeof x === 'string'
}

class C{
  a:number
  b?:number
}
let c = new C()
c.a = 1
// c.b = undefined
// c.b = 2
// c.b = null
let cB = c.b || 'default'
console.log(cB);
console.log(c.b);