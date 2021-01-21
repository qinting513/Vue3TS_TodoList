(function () {
    // 定义一个类
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + "_" + lastName;
        }
        return User;
    }());
    // 传入的参数符合接口规范IPerson
    function showFull(person) {
        return person.firstName + "==" + person.lastName;
    }
    var ldh = new User("刘", "德华");
    console.log(showFull(ldh));
})();
