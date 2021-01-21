(() => {
    interface IPerson {
        firstName: string, //姓氏
        lastName: string, //名字
    }
    // 定义一个类
    class User {
        // 假如屏蔽firstName则也会报错 
        firstName: string // 姓氏
        lastName: string // 名字
        fullName: string //姓名
        
        constructor(firstName: string, lastName: string){
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = firstName + "_" + lastName
        }
    }

    // 传入的参数符合接口规范IPerson
    function showFull(person: IPerson) {
      return person.firstName + "==" + person.lastName;
    }

    const ldh = new User("刘", "德华");
    console.log(showFull(ldh));
    
})()