var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 复习一下es5的对象和继承方式
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log('hi');
};
function Stu(name, age, id) {
    //对象冒充方式 但是没有继承 原型上的方法和属性 只能继承 要继承的那个构造函数里的东西
    Person.call(this, name, age);
    this.id = id;
}
//把要继承的对象新new一个 挂在当前对象的原型上
// 对象继承
Stu.prototype = new Person('1', 2);
Stu.prototype.sayId = function () {
    console.log("\u6211\u662F" + this.id + "\u53F7");
};
var p = new Person('lhb', 20);
p.sayHi();
var stu = new Stu('zyy', 18, 2015100728);
console.log(stu.name);
console.log(stu.age);
console.log(stu.id);
stu.sayHi();
stu.sayId();
// ts  es6 class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log(this.name + " run !");
    };
    Animal.prototype.work = function () {
        console.log(this.name + " is working !");
    };
    Animal.prototype.secret = function () {
        console.log("\u8FD9\u662F\u4E00\u4E2A\u79D8\u5BC6..");
    };
    Animal.prototype.excuteSecret = function () {
        this.secret();
    };
    Animal.prototype.excuteWork = function () {
        this.work();
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        //调用父级的构造函数
        return _super.call(this, name) || this;
    }
    //子类中会把同名方法重写了
    Dog.prototype.run = function () {
        console.log(this.name + " run run run run !!");
    };
    Dog.prototype.work = function () {
        //调用父类的方法 和java一样
        _super.prototype.work.call(this);
    };
    return Dog;
}(Animal));
var animal = new Animal('dw');
var dahei = new Dog('大黑');
dahei.run();
console.log(dahei.name);
console.log(animal.name);
dahei.excuteSecret();
dahei.excuteWork();
dahei.work();
// 类里的修饰符 
//    public      公有           在类里面 子类 类外部 都可以访问
//    protected   保护类型       在类里面 子类里都可以访问 在类外部不可以访问
//    private     私有           在类里可以访问 子类和类外部都无法访问   
// 属性如果不加修饰符 默认就是 public
//# sourceMappingURL=04class.js.map