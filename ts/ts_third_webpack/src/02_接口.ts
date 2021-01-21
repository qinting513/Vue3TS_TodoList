(()=>{
    // 2.接口 

// TS的核心原则之一就是对值所具有的结构进行类型检查。我们使用接口（interface）
// 来定义对象的类型。接口是对象状态（属性）和行为（方法）的抽象描述。

//  0.一般接口 写个大写字母I在前面 比如IPerson、ISearchFunc
// 1. 接口是一种类型，是一种规范，是一种规则，是一种约束
// 2. 可选属性 好处1 可以对可能存在的属性进行预定义 2.可以捕获引用了不存在的属性时的错误
// 3. readonly和可选?
interface IPerson {
    readonly id: number, // readonly 表示只读 不能再修改
    name: string,
     age: number,
     // 
     sex? : string //加上问号 表示可选，不赋值也可以
 }
 
 const p: IPerson = {
     id: 1,
     name: '小甜甜',
     age: 18,
     // sex: '女'
 }
 console.log(p);
 // p.id = 100  // readonly 表示只读 不能再修改
 p.sex = "woman"
 
 // 4.函数类型： 通过接口的方式作为函数的类型来使用
 interface ISearchFunc { 
     (source: string, subStr: string): boolean
 }
 
 // 定义了一个函数，该函数的类型就是上面定义的接口
 const searchString: ISearchFunc = function (source: string, subStr: string): boolean {
     // 在source字符串中查找subStr这个字符串， 如果有则大于-1
     return source.search(subStr) > -1;
 }
 
 console.log(searchString('我帅吗?', '帅')); 
 console.log(searchString('我帅吗?', '丑'));
 
})()