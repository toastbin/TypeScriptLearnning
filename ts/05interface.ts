// 接口
//  接口是一种规范的定义
//  它只规定这批类里必须提供某些方法 提供这些方法的类就可以满足实际需要 
// ts接口类似于java 同时还增加了更灵活的接口类型 包括属性 函数 可索引和类等

//  属性类接口 函数类型接口 可索引接口 类类型接口 接口扩展

// 属性接口
// ts中自定义方法传入参数 对json进行约束
// 这样只实现了一个函数的约束 没法进行批量的约束
function printLabel( label:{label:string} ):void{
  console.log(  );  
}
let labelJson =  { label: 'lab' }
printLabel(labelJson)

//接口 传入的第一个属性为firstStr是字符串类型  第二个必须为 secondNum 数字类型
interface typeLabel{
  //注意 以分号结束 
  firstStr: string;
  secondNum: number
}
// 就是对传入对象的约束
function printType( label:typeLabel ){
  console.log(label.firstStr);
  console.log(label.secondNum);
}
//参数的顺序可以不一样 但是必须要有 或者将属性变成可选属性
printType({firstStr: 'zyy', secondNum: 20})


// 例子 接口封装 ajax
interface ajaxConfig{
  type:string;
  data?:string;
  url:string;
  dataType:string
}

function $(config:ajaxConfig):void{
  let xhr = new XMLHttpRequest()
  xhr.open( config.type, config.url, true )
  xhr.send(config.data)
  xhr.onreadystatechange = function(){
    if( xhr.readyState == 4 && xhr.status == 200 ){
      let res = xhr.responseText
      console.log('成功！');
      if( config.dataType === 'json' ){
        let resJson = JSON.parse(res)
        console.log( resJson.result.title );
        console.log( resJson.result.content );
      }else{
        console.log( xhr.responseText );
      }
    }
  }
}

$({
  type: 'get',
  url: 'https://api.apiopen.top/recommendPoetry',
  dataType: 'json'
})

// 函数类型接口
// 对方法传入的参数 以及返回值进行约束
// 加密的函数类型接口
// 批量约束
interface encrypt{
  (key:string,value:string):string
}
let md5:encrypt = function( key, value ){

  return key + value
}

console.log(md5('name','zhangsan'));

let sha1:encrypt = function(key,value){
  return `${key} ==== ${value}`
}

console.log(sha1('zyy','shazi'));

// 可索引接口
// 数组 对象的约束 （不常用）

let arr1:Array<number> = [1]
let arr2:number[] = [1]

// 对数组的约束 基本用不着
interface UserArray{
  [index:number]:string
}

let arrUser:UserArray = ['lhb','zyy']
console.log(arrUser);

// 对对象的约束 基本用不着
interface UserObj{
  [key:number]:string
}
let objUser:UserObj = {
  1: 'lhb',
  2: 'zyy',
}
console.log(objUser[2]);


// 类类型接口  
// 对类的约束 和 抽象类有点相似
interface Creature{
  name:string
  eat(str:string):void
}
class Cat implements Creature{
  name:string
  constructor(name:string){
    this.name = name
  }
  eat(str:string){
    console.log(str);
  }
}

let cat = new Cat('miaomiao')
cat.eat('吃鱼')


// 接口扩展
interface Plane{
  transform():void
}

interface WarPlane extends Plane{
  beDriven():void
}

class J7 implements WarPlane{
  public name:string
  constructor(name:string){
    this.name= name
  }
  transform(){
    console.log(  `${this.name} transfor`);
  }
  beDriven(){
    console.log( `${this.name} beDriven` );
  }
}

let J = new J7('歼7')
J.transform()
J.beDriven()


