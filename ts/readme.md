
1.手动编译
```
1. tsc main.ts // 先转化为js
2. node main.js // 再用node运行或者在HTML里引入
```

2.自动编译
```
 1. 在终端执行 tsc --init 生成配置文件 tsconfig.json 
 2. 修改tsconfig.json outDir和 "strict": false
 3. 启动监视任务
   Terminal -> Configure Tasks -> tsc: watch -ts_second/tsconfig.json
   Terminal -> Run Task -> show all Task ->  tsc: watch -ts_second/tsconfig.json
 
```
3.类型注解

4.接口
5.类
6.总结

```
使用webpack打包ts：
https://www.jianshu.com/p/2bc50b542969

tsc --init 生成 tsconfig.json 
npm init -y 生成 packages.json


1.安装依赖
yarn add -D typescript
/*
  注意这个安装指定的版本
  npm install -D webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.2
*/
yarn add -D wepack wepack-cli
yarn add -D wepack-dev-server
yarn add -D html-webpack-plugin clean-webpack-plugin
yarn add -D ts-loader
yarn add -D cross-env



```

1. 基础类型
2. 接口
3. 函数
4. 类
5. 泛型
6. 枚举
