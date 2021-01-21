(() => {
    // 1.泛型的基本使用
    function getArr<T>(value: T, count: number): T[] {
        // let arr: T[] = []
        let arr: Array<T> = []
        for (let index = 0; index < count; index++) {
            arr.push(value)
        }
        return arr;
    }

    console.log(getArr<string>('abc', 3));
    // console.log(getArr<string>( 10, 3));  //如果规定泛型是string则不能输入number
    console.log(getArr<number>(10, 3));




    // 2.多个泛型参数
    function getMsg<K, V>(v1: K, v2: V): [K, V] {
        return [v1, v2]
    }
    let arr1 = getMsg<string, number>('jacker', 100);
    console.log('arr1:', arr1[0].split(''));


})()