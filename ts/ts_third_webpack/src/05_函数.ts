// 函数： 封装了一些重复使用的代码，在需要的时候直接调用即可

(() => {
    // 1.函数声明，命名函数
    function add1(x: number, y: number): number {
        return x + y
    }
    // 2.函数表达式 匿名函数
    const add2 = function (x: string, y: string): string {
        return x + y
    }

    // 3.函数的完整写法:  变量名:函数类型 = function(参数列表){} 相当于给add3这个变量赋值等号右边的function
    // add3 ---> 变量名 
    // (x: string, y: string)=>string 当前这个函数的类型
    const add3: (x: string, y: string) => string = function (x: string, y: string): string {
        return x + y
    }
    // 4.默认参数 与 可选参数xs
    function add4(x: string = 'A', y?: string): string {
        if (y) {
            return x + y
        } else {
            return x
        }
    }

    console.log(add4());
    console.log(add4('B'));
    console.log(add4('A', 'B'));
    
    // 5.剩余参数 
    // ...args 剩余的参数放在一个数组中，剩余参数需放在最后面
    function add5(x: string = 'A', ...args: string[]) {
       console.log(x, args);
       
    }
    add5('b', 'c', 'd')

    // 6.函数重载： 名字相同，函数的参数及个数不同
    function add7(x: string | number, y: string): string {
        if(typeof x === 'string') {
            console.log("true");
        } else {
            console.log("false");
        }
        return x + '_' + y
    }
    console.log(add7('a', 'b'));
    console.log(add7( 10, 'b'));
})()