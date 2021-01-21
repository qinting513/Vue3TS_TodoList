(() => {
    // ts语法 声明str为string类型
    function sayHi(str: string) {
        return "您好 " + str
    }
    let text = "小姐姐"
    console.log(sayHi(text));
})()