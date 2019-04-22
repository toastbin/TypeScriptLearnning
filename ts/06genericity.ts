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
function getData<T>(val:T):T{
  
  return val 
}

console.log( getData<number>(123) );
console.log( getData<string>('zyy') );
console.log( getData<Array<number>>([1,2,3,4]) );
console.log( getData<string[]>(['lhb','zyy']) );



// 泛型类 
//比如有个最小堆算法 需要支持 数字 和 字符串
class Min<T>{
  public list:Array<T> = []
  add( item:T ):void{
    this.list.push(item)
  }
  getMin():T{
    let min = this.list[0]
    for( let i = 0 ; i < this.list.length ; i++ ){
      if( min > this.list[i] ){
        min = this.list[i]
      }
    }
    return min
  }
}

let mN = new Min<number>()
mN.add(2)
mN.add(4)
mN.add(1)
mN.add(5)
mN.add(88)
console.log(mN.getMin());

let mS = new Min<string>()
mS.add('zyy')
mS.add('lhb')

console.log(mS.getMin());

// 泛型接口
interface Hero<T>{
  killEnemy(enemy:T):void
  // killGroup(group:T):void
}

class antiMage implements Hero<number>{
  killEnemy(num){
    console.log(num);
  }
}
let am = new antiMage()
am.killEnemy('1')