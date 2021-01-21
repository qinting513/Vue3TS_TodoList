(() => {
    // 类： 可以理解为模板，通过模板实例化对象
    // 面向对象的编程思想

    // 1. 类的基本用法
    class Person {
        name: string
        age: number
        gender: string

        // 定义构造函数：为了将来实例化对象的时候 可以直接对属性进行值的初始化
        // constructor(name: string, age: number, gender: string){
        //     this.name = name
        //     this.age = age
        //     this.gender = gender
        // }

        // 也可以写默认值
        constructor(name: string = '小甜甜', age: number = 10, gender: string = 'man') {
            this.name = name
            this.age = age
            this.gender = gender
        }



        greeting(str: string) {
            console.log("Hello " + str);
        }

    }

    // 实例化对象 必须加new关键词
    let ldh = new Person("刘德华", 18, '男');
    console.log(ldh);
    ldh.greeting("张国荣")

    let xtt = new Person()
    console.log(xtt);


    console.log("----------------");

    // 2. 类的继承
    //  类A继承了类B， 则A叫子类或派生类， B叫基类或父类、超类
    // 一旦发生继承关系 就出现了父子类的关系
    class Human {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        getMoney(m: number) {
            console.log(`获取父类 ${this.name}的${m}块钱`);
        }
    }

    class Student extends Human {
        // 学生有自己的私有属性    
        homework: string

        constructor(name: string, age: number, homework: string = "家庭作业") {
            super(name, age)
            // 其他赋值要在调用super之后执行
            this.homework = homework
        }
        // 重新父类的方法
        getMoney(m: number) {
            super.getMoney(10)
            console.log("子类的 getMoney");
        }
    }

    let s1 = new Student("张三", 10);
    console.log(s1);
    s1.getMoney(100);

    /*
    总结：1.类和类可以用extends实现继承
    2. 子类可以调用父类的构造函数
    3.子类可以覆写父类的方法
    */

    console.log("----------------");
    // 3.多态 父类型的引用指向子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        // 默认速度是0
        run(speed: number = 0) {
            console.log(`${this.name}的速度是${speed}`);

        }
    }

    class Dog extends Animal {

        constructor(name: string) {
            super(name)
        }
        // 默认速度是0
        run(speed: number = 10) {
            console.log(`${this.name}的速度是${speed}`);

        }
    }

    class Cat extends Animal {

        constructor(name: string) {
            super(name)
        }
        // 默认速度是0
        run(speed: number = 20) {
            console.log(`${this.name}的速度是${speed}`);
        }
    }

    const ani: Animal = new Animal("动物")
    ani.run()

    const dog: Dog = new Dog("大黄")
    dog.run()

    const cat: Cat = new Cat("卡菲猫")
    cat.run();

    // 父类类型 创建子类对象: 父类型的引用指向子类型的对象，
    const dog1: Animal = new Dog("小黄")
    dog1.run()

    const cat1: Animal = new Cat("小花猫")
    cat1.run()

    console.log("----------------");
    // 不同类型的对象针对相同的方法，产生了不同的行为
    function showRunMsg(ani: Animal) {
        ani.run()
    }

    showRunMsg(dog1)
    showRunMsg(cat1)

    console.log("----------------");
    // 公共，私有与受保护的修饰符:
    // https://www.tslang.cn/docs/handbook/classes.html
    class Property {
        // 1. ts默认是public修饰的
        // public name: string;
        private name: string;
        public constructor(theName: string) { this.name = theName; }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    // 2.当成员被标记成 private时，它就不能在声明它的类的外部访问
    // let pro = new Property("abc")
    // console.log(pro.name); // 错误: 'name' 是私有的.

    // 4.抽象类
    // 抽象类作为其他派生类的基类使用，他们既不能被实例化，不同于接口，抽象类可以包含成员的实现细节，
    // abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
    // 抽象类都是为给子类服务的
    abstract class Ani {
        abstract name: string = "abc"
        // 抽象方法不能有具体实现
        abstract cry(): void
        // abstract cry(): void {}
         run(){
            console.log("run。。。。");
            
        }
    }
    class DDog extends Ani {
        // 抽象类实现属性赋值 否则报错
        name = "ccc"
        cry(){
            console.log("dog cry");
        }
    }
    const d1 = new DDog()
    d1.run()
    d1.cry()


    
})()