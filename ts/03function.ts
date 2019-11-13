// 在ts中定义方法 参数限定类型 函数限定返回值
function getInfo(name: string, age: number): string {
  console.log(`${name}---${age}`);
  return 'test1返回的是字符串'
}
console.log(getInfo('lhb', 20));

// 配置可选参数
function getInfo2(name: string, age?: number): void {
  if (age) {
    console.log(`${name}---${age}`);
  } else {
    console.log(`${name}--没年龄`);
  }
}
getInfo2('lhb', 20)
getInfo2('zyy')


// ts中函数的重载
// 和java中有点区别 ts是通过合并配置然后统一进行判断 
// 传入不同的参数 执行不同的功能
function getSth1(param: number): void
function getSth1(param: string): void
function getSth1(param: boolean): void
function getSth1(param: any): void {
  if (typeof param === 'string') {
    console.log(`string: ${param}`);
  } else if (typeof param === 'number') {
    console.log(`number: ${param}`);
  } else if (typeof param === 'boolean') {
    console.log(`boolean: ${param}`);
  }
}
getSth1(10)
getSth1('zyy')
getSth1(false)

// 如果参数个数不一样
function getSth2(name: string, age: number): void
function getSth2(name: string): void
function getSth2(name: any, age?: any) {
  if (age) {
    console.log(`name: ${name}  -- age: ${age}`);
  } else {
    console.log(`name: ${name} -- no age`);
  }
}
getSth2('lhb', 20)
getSth2('zyy')