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
printType({ firstStr: 'zyy', secondNum: 20 });
//# sourceMappingURL=05interface.js.map