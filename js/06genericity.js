// genericity 泛型
// 泛型 解决类 接口 方法 对不特定的书库类型的支持
// 泛型函数
// 只能返回string类型的数据
// function getData(val:string):string{
//  return val
// }
// 但是我们要求 传入什么类型 就返回什么类型
// 由此引出泛型 可以支持不特定的数据类型 要求传入的参数和返回的参数一致
//  <T> 就表示泛型 即任意类型 具体是什么类型是在你使用的时候决定 
function getData(val) {
    return val;
}
console.log(getData(123));
console.log(getData('zyy'));
console.log(getData([1, 2, 3, 4]));
console.log(getData(['lhb', 'zyy']));
// 泛型类 
//比如有个最小堆算法 需要支持 数字 和 字符串
var Min = /** @class */ (function () {
    function Min() {
        this.list = [];
    }
    Min.prototype.add = function (item) {
        this.list.push(item);
    };
    Min.prototype.getMin = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    };
    return Min;
}());
var mN = new Min();
mN.add(2);
mN.add(4);
mN.add(1);
mN.add(5);
mN.add(88);
console.log(mN.getMin());
var mS = new Min();
mS.add('zyy');
mS.add('lhb');
console.log(mS.getMin());
var antiMage = /** @class */ (function () {
    function antiMage() {
    }
    antiMage.prototype.killEnemy = function (num) {
        console.log(num);
    };
    return antiMage;
}());
var am = new antiMage();
am.killEnemy('1');
//# sourceMappingURL=06genericity.js.map