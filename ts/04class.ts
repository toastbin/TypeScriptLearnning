// 复习一下es5的对象和继承方式
function Person(name:string,age:number):void{
  this.name = name
  this.age = age
}
Person.prototype.sayHi = ():void=>{
  console.log('hi');
}
function Stu(name:string,age:number,id:number):void{
  //对象冒充方式 但是没有继承 原型上的方法和属性 只能继承 要继承的那个构造函数里的东西
  Person.call(this,name,age)
  this.id = id
}
//把要继承的对象新new一个 挂在当前对象的原型上
// 对象继承
Stu.prototype = new Person('1',2)
Stu.prototype.sayId = function():void{
  console.log(`我是${this.id}号`);
}
let p = new Person('lhb',20)
p.sayHi()
let stu = new Stu('zyy',18,2015100728)
console.log(stu.name);
console.log(stu.age);
console.log(stu.id);
stu.sayHi()
stu.sayId()


// ts  es6 class
class Animal {
  public name:string
  constructor( name:string ){
    this.name = name
  }
  run():void{ 
    console.log(`${this.name} run !`);
  }
  protected work(){
    console.log(`${this.name} is working !`);
  }
  private secret(){
    console.log(`这是一个秘密..`);
  }
  public excuteSecret(){
    this.secret()
  }
  public excuteWork(){
    this.work()
  }
}

class Dog extends Animal {

  constructor(name:string){
    //调用父级的构造函数
    super(name)
  }
  //子类中会把同名方法重写了
  run(){
    console.log(`${this.name} run run run run !!`);
  }
  work(){
    //调用父类的方法 和java一样
    super.work()
  }
}
let animal = new Animal('dw')
let dahei = new Dog('大黑')
dahei.run()
console.log(dahei.name);
console.log(animal.name);
dahei.excuteSecret()
dahei.excuteWork()
dahei.work()

// 类里的修饰符 
//    public      公有           在类里面 子类 类外部 都可以访问
//    protected   保护类型       在类里面 子类里都可以访问 在类外部不可以访问
//    private     私有           在类里可以访问 子类和类外部都无法访问   
// 属性如果不加修饰符 默认就是 public

//  静态方法  static关键字就是静态方法了

//  直接通过类名调用静态方法

// 多态  多态属于继承

class Student {
  name:string
  constructor(name:string){
    this.name = name
  }
  eat():void{
    console.log('吃的方法');
  }
}

class goodStu extends Student {
  constructor( name:string ){
    super(name)
  }
  eat():void{
    console.log('goodSty 吃');
  }
}

class badStu extends Student {
  constructor( name:string ){
    super(name)
  }
  eat():void{
    console.log('badStu 吃');
  }
}


let s1 = new Student('s1')
let s2 = new goodStu('s2')
let s3 = new badStu('s3')

s1.eat()
s2.eat()
s3.eat()


// 抽象类和抽象方法 
//用abstract关键字定义抽象类和抽象方法 抽象类种的抽象方法不包含具体实现 并且必须在派生类种进行实现
//抽象方法必须放在抽象类里面
// 抽象类和抽象方法用来定义标准

abstract class Vehicle {
  name:string
  constructor( name:string ){
    this.name = name
  }
  abstract run():any
}
// 抽象类的子类必须实现抽象类里面的抽象方法
class Car extends Vehicle {
  name:string
  brand:string
  constructor(name:string,brand:string){
    super(name)
    this.brand = brand
  }
  run():void{
    console.log('car run');
  }
}

let car = new Car('car','Benz')
car.run()
console.log(car.name);

































