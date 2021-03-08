## Mocha

## 需要知道的情况

1. recursive - 告诉mocha深入测试
2. 通配符
   1. ** - 所有名字，通常用在 directory
   2. *. - 所有的文件
   3. {js|jsx} - js 或者是jsx
3. watch
4. grep - 测试test case 名字
5. timeout 9999 - 可以用在debug 的时候
6. 用chai断言库，更多选择
7. require babel/register - 需要babel 的情况

## Istanbul

1. nyc - 负责code-coverage
2. jest 已经有了，不需要
3. 如果利用mocha，那么需要 @istanbuljs/nyc-config-babel
4. 种类
   1. Line - 以行數為單位
   2. Statement - 通过statement来检测 (if else)
   3. Branch Coverage - 判断每个逻辑有测试到吗 (condition1 || condition2)
   4. Function Coverage - 以函数为单位