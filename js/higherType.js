// 高级类型
// 交叉类型 
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        result[id] = second[id];
    }
    return result;
}
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('loggable');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person1('jim'), new ConsoleLogger());
console.log(jim.name);
jim.log();
// 联合类型
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
}
console.log(padLeft('world', 5));
var b = /** @class */ (function () {
    function b() {
    }
    b.prototype.fly = function () {
    };
    b.prototype.layEggs = function () {
    };
    return b;
}());
function getSmallPet() {
    //
    return new b();
}
var pet = getSmallPet();
// 可以调用共有的  独有的不可以
pet.layEggs();
// pet.fly()
// pet.swim()
if (pet.swim) {
    pet.swim();
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// 类型保护
function isFish(pet) {
    return pet.swim !== undefined;
}
// 改写 padleft
// typeof 类型保护
// instanceof 类型保护
function padLeft2(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number " + padding);
}
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C();
c.a = 1;
// c.b = undefined
// c.b = 2
// c.b = null
var cB = c.b || 'default';
console.log(cB);
console.log(c.b);
//# sourceMappingURL=higherType.js.map