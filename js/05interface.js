// 接口
//  接口是一种规范的定义
//  它只规定这批类里必须提供某些方法 提供这些方法的类就可以满足实际需要 
// ts接口类似于java 同时还增加了更灵活的接口类型 包括属性 函数 可索引和类等
//  属性类接口 函数类型接口 可索引接口 类类型接口 接口扩展
// 属性接口
// ts中自定义方法传入参数 对json进行约束
// 这样只实现了一个函数的约束 没法进行批量的约束
function printLabel(label) {
    console.log();
}
var labelJson = { label: 'lab' };
printLabel(labelJson);
// 就是对传入对象的约束
function printType(label) {
    console.log(label.firstStr);
    console.log(label.secondNum);
}
//参数的顺序可以不一样 但是必须要有 或者将属性变成可选属性
printType({ firstStr: 'zyy', secondNum: 20 });
function $(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = xhr.responseText;
            console.log('成功！');
            if (config.dataType === 'json') {
                var resJson = JSON.parse(res);
                console.log(resJson.result.title);
                console.log(resJson.result.content);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
$({
    type: 'get',
    url: 'https://api.apiopen.top/recommendPoetry',
    dataType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zhangsan'));
var sha1 = function (key, value) {
    return key + " ==== " + value;
};
console.log(sha1('zyy', 'shazi'));
// 可索引接口
// 数组 对象的约束 （不常用）
var arr1 = [1];
var arr2 = [1];
var arrUser = ['lhb', 'zyy'];
console.log(arrUser);
var objUser = {
    1: 'lhb',
    2: 'zyy',
};
console.log(objUser[2]);
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (str) {
        console.log(str);
    };
    return Cat;
}());
var cat = new Cat('miaomiao');
cat.eat('吃鱼');
var J7 = /** @class */ (function () {
    function J7(name) {
        this.name = name;
    }
    J7.prototype.transform = function () {
        console.log(this.name + " transfor");
    };
    J7.prototype.beDriven = function () {
        console.log(this.name + " beDriven");
    };
    return J7;
}());
var J = new J7('歼7');
J.transform();
J.beDriven();
//# sourceMappingURL=05interface.js.map