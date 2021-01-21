(() => {
    // 接口: 是一种能力，一种约束
    interface Person {
        firstName: string,
        lastName: string,
        age: number
    }

    function showFullInfo(person: Person) {
        return person.firstName + '_' + person.lastName + " age: " + person.age;
    }

    const p = {
        firstName: "东方",
        // lastName: '不败',  // ts如果没有参数lastName则报错 Argument of type '{ firstName: string; age: number; }' is not assignable to parameter of type 'Person'.
        lastName: '翔', 
        age: 3
    }
    // console.log(showFullInfo());

    console.log(showFullInfo(p));

})()