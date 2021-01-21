(function () {
    function sayHi(str) {
        return "hello " + str;
    }
    var name = "xiao jiejie";
    // let name = [1, 2] 
    // let name = 2
    // 规定了sayHi的参数是字符串，如果参数是数组、数字 都报错，
    // 但是依然可以显示出来结果，因为js是弱类型语言 ts则提示报错
    console.log(sayHi(name));
})();
