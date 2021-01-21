(() => {

    // 类类型 
    // 类实现接口， ts用接口来明确一个类去符合某种契约

    //  1.定义一个接口
    interface IFly {
        // 该方法没有任何实现
        fly(): void  //定义了一个返回值是void的fly函数

    }
    
    //    class Person implements IFly {
    //        /**
    //        Class 'Person' incorrectly implements interface 'IFly'.
    //        Property 'fly' is missing in type 'Person' but required in type 'IFly'.
    //         */
    //    }

    // 2.类实现接口
    class P1 implements IFly {
        fly() { // 实现IFly接口中定义的方法
            console.log("飞人");
        }
    }
    const p1 = new P1()
    p1.fly()

   

    interface ISwim{
        swimName: string
        swim():void 
    }
    // 3.当前类实现多个接口   一个类受多个接口约束
    class P2 implements IFly, ISwim {
        swimName = "蝶泳"
        fly(){
            console.log("我会飞，我是超人");
        }
        swim(){
            console.log("我还会游泳：" + this.swimName);    
        }
    }
    const p2 = new P2()
    p2.fly()
    p2.swim()
  
    
    // 3.接口继承其他的多个接口
    interface IMyAction extends IFly,ISwim {
        //  定义了一个接口 继承其他多个接口
    }

    class P3 implements IMyAction {
        // 在接口中定义的属性名也要实现
        swimName = "蛙泳"
        fly(){
            console.log("我会飞了");
        }
        swim(){
            console.log("我会游泳了:" + this.swimName);    
        }
    }
    const p3 = new P3();
    p3.fly();
    p3.swim();

      
    // 总结：1.类可以通过接口的方式，来定义当前这个类的类型
    // 2.类可以实现一个接口，也可以实现多个接口, 要注意接口中的内容都要真正的实现
    // 3.接口跟接口之间用继承(使用extends关键字), 类和接口之间叫实现(用implements关键字)
})()