// 在ts中定义方法 参数限定类型 函数限定返回值
function getInfo(name, age) {
    console.log(name + "---" + age);
    return 'test1返回的是字符串';
}
console.log(getInfo('lhb', 20));
// 配置可选参数
function getInfo2(name, age) {
    if (age) {
        console.log(name + "---" + age);
    }
    else {
        console.log(name + "--\u6CA1\u5E74\u9F84");
    }
}
getInfo2('lhb', 20);
getInfo2('zyy');
function getSth1(param) {
    if (typeof param === 'string') {
        console.log("string: " + param);
    }
    else if (typeof param === 'number') {
        console.log("number: " + param);
    }
    else if (typeof param === 'boolean') {
        console.log("boolean: " + param);
    }
}
getSth1(10);
getSth1('zyy');
getSth1(false);
function getSth2(name, age) {
    if (age) {
        console.log("name: " + name + "  -- age: " + age);
    }
    else {
        console.log("name: " + name + " -- no age");
    }
}
getSth2('lhb', 20);
getSth2('zyy');
//# sourceMappingURL=03function.js.map