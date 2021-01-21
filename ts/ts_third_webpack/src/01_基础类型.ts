(() => {
    //  let 变量名: 数据类型 = 值

    // 1.布尔类型
    let isDone: Boolean = false
    isDone = true
    // 注意1：不能跨类型赋值，否则报错
    // isDone = 10 
    console.log(isDone)


    // 2.number类型
    let a1: number = 10
    let a2: number = 0b1010 // 二进制
    let a3: number = 0o12   // 8进制
    let a4: number = 0xa   // 16进制


    // 3.字符串类型
    let str1: string = '一支穿云箭'
    let str2: string = '千军万马来相见'
    console.log(str1 + str2)
    console.log(`${str1}, ${str2}`)

    // 4. undefined和null类型
    let u: undefined = undefined
    let n: null = null
    // undefined和null本身的用处不是很大， 默认情况是null和undefined是所有类型的子类型
    // 也就是说你可以把null和undefined赋值给其他类型的变量
    let str3: string = 'hello'
    // str3 = undefined // 如果是严格模式下 会提示报错
    // str3 = null

    console.log('------------------------');


    // 5.数组类型
    let list1: number[] = [1, 2, 3]  // 数据类型写法
    let list2: Array<string> = ['a', 'b'] // 泛型的写法
    // list2 = [1,'a'] // 数组定义后，里面的数据类型必须与定义的类型一致，否则报错和编译不通过
    let list3: Array<string | number> = [1, 'a'] //泛型里可以是string或number
    let list4: number | string[] = 9 // 这样定义说明可以赋值number类型，或者字符串数组 比如['a'], 但不能赋值[1, 'a']
    let list5: any[] = [1, 'a', true] // any类型可以存储任意类型的

    // 6.元祖类型 在定义的时候 类型和数据的个数一开始就已经限定
    let tuple1: [string, number, boolean] = ['小姐姐', 100.1234, true]
    console.log(tuple1[0].split('')); // 第0位是字符串 可以去调用字符串的方法
    // console.log(tuple1[1].split('')); // 第1位不是字符串 会报错
    console.log(tuple1[1].toFixed(2)); //可以调用number的方法 保留2位小数

    console.log('------------------------');

    // 7. 枚举
    enum Color1 { red, green, blue }
    // 枚举类型里面的每个数据值都可以叫元素, 每个元素都有自己的编号，编号从0开始 依次递增加1，也可以赋值
    let c1: Color1 = Color1.red
    console.log(c1); // 输出0


    enum Color2 { red = 1, green = 2, blue = 4 }
    console.log(Color2.red, Color2.green, Color2.blue);

    enum Gender { 女, 男 }
    console.log(Gender.男); //enum中的元素可以是中文 但是不推荐这么写

    const enum Direction {
        Up = 'UP',
        Down = 'DOWN',
        Left = 'LEFT',
        Right = 'RIGHT',
      }
      // console.log(Direction.Up)
      const value = 'UP'
      if (value === Direction.Up) {
        console.log('go up!')
      }
      
    console.log('------------------------');

    // 8. any类型 不清楚变量类型的时候可以用any any作用很大
    let anyVal: any = 100
    anyVal = '年少不知富婆好，错把少女当成宝'
    console.log(anyVal);
    let arr1: any[] = [1, '年少不知软饭香，错把青春倒插秧', true]
    console.log(arr1[1].split(''));
    // console.log(arr1[0].split('')); // 第0位是number类型 没有split方法 没有提示运行时报错 所以any类型有优点也有缺点，不要滥用 

    // 9. void 某种程度上说 void类型和any正好相反 表示没有任何类型
    function fn(): void {
        console.log("abc");
        // return null
        // return 'a' //返回值是void 当写return的时候会报错
    }

    // 定义一个void类型的变量 可以接收一个undefined类型的值,但是意义不大
    let vd: void = undefined
    console.log(vd);

    // 10. object表示非原始类型，也就是除了number、string、boolean之外的类型
    function fn1(obj: object): object { // 定义了一个参数是object 返回值也是object的函数
        console.log("参数:", obj);
        return { name: 'za' }
        // return '123'
        // return  // 不传也报错
    }
    console.log(fn1(new String('abc')));
    // console.log(fn1('abc'));


    // 11.联合类型 用或连接
    //需求1： 定义个函数 可以传number或string类型，如果想传任意类型 用any
    function getStr(s: number | string): string { // 冒号后面表示返回值也是字符串类型
        return s.toString()
    }

    // 12. 类型断言: 告诉编译器，我知道我自己是什么类型，也知道自己在干什么
    // 写法1： <类型>变量名  写法2：变量 as 类型
    function getStrLength(str: number | string): number { // 冒号后面表示返回值是number类型
        // return s.toString().length
        // 类型断言 写法1
        if ((<string>str).length) {
            // 如果本身是字符串，则不用再去tostring
            // return (<string>str).length
            // 类型断言 写法2
            return (str as string).length
        } else {
            return str.toString().length
        }

    }

    console.log(getStrLength(12345));
    console.log(getStrLength('abcde'));

    // 13. 类型推断 TS在没有明确指定类型的时候推断出一个类型
    /*
      有2种情况：
      1. 定义变量时赋值了，推断为对应的类型
      2. 定义变量的时候没有赋值 定义为any类型
    */
    let b9 = 12 // number类型
    // b9 = '12' //error

    let b10 // any类型
    b10 = 10
    b10 = 'abc'

})()