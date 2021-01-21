(function () {
    function showFullInfo(person) {
        return person.firstName + '_' + person.lastName + " age: " + person.age;
    }
    var p = {
        firstName: "东方",
        // lastName: '不败',  // ts如果没有参数lastName则报错 Argument of type '{ firstName: string; age: number; }' is not assignable to parameter of type 'Person'.
        lastName: '翔',
        age: 3
    };
    // console.log(showFullInfo());
    console.log(showFullInfo(p));
})();
