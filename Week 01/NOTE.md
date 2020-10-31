# 学习笔记

## 1 游戏的基本框架 (MVC)

1. Initialize Model 
2. Controller
   1. Entry - Connect with UI Rendering 
   2. Logic - Calculate and update model
   3. Trigger UI rendering function
   4. UI Rendering Function
      1. Create listener to trigger controller

## 2 AI Decision

1. 策略
   1. 第一层：赢
   2. 第二层：不输
   3. 棋谱
2. 对方最好的·选择是我方最差的选择
3. 其他棋类有深度搜索问题。
   1. 胜负剪枝增加计算效率
4. 尝试把2D压缩成1D
   1. 这样可以利用`Object.create` instead of `JSON.parse(JSON.stringify())` 
      1. 节省内存空间。

## 3 Async (异步)

1. Callback
2. Async/await
3. Generator + Promise
4. Async + generator

## Callback

1. 问题：产生层级嵌套（callback hell）

## Promise

1. 解决callback问题
2. Tips
   1. 用函数重制相似promise
   2. Race - 多个promise，只确保第一个完成
   3. All - 多个promise，确保每个完成
3. 手动Promise操作
   1. 利用Resolve来控制Promise任务。

```js
// Example of manual promise
function happen(element, eventName) {
  return new Promise((resolve)=>{
    element.addEventListener(eventName, resolve, {once: true});
  })
}
```

## Generator

1. 早年没async函数的时候，来模拟async

```js
// 例子
function* go(){
  while(true){
    fn();
    yield promise();
  }
}

function run(iterator) {
  let {value, done} = iterator.next()
  if (done)
    return;
  if (value instance of Promise)
    value.then(() =>{
      run(iterator)
    })
}

function co(generator) {
  return function(){
    return run(generator());
  }
}

go = co(go);
```

## Async Generator

Ref: https://github.com/jhusain/asyncgenerator

JavaScript programs are single-threaded and therefore must streadfastly avoid blocking on IO operations. Today web developers must deal with a steadily increasing number of push stream APIs:

1. Server sent events
2. Web sockets
3. DOM events

Async generator 可以解决这个问题

例子：聚集爬虫，等待连贯性地数据

```js
// Code example for a timer
async function sleep(i) {
    return new Promise(resolve => setTimeout(resolve, i))
}

async function* timer(){
    let i = 0;
    while (true) {
        await sleep(1000)
        yield i++;
    }
}

(async function (){
    for await (const i of timer()) {
        console.log(i)
    }
})();
```
