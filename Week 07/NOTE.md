学习笔记

# 运算符和表达式
## Operator Precedence 

Reference: [Precendence & Associativity Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### 注意情况

new Foo() 优先于 new Foo. Example:

```js
new Foo()(); // 1. new Foo() -> 2. ()
new new Foo(); // 1. new Foo() -> 2. new
```

虽然computed member access跟new (with arguement list), 和按理说是差不多一样优先级，但因为要处理（）的原因被拉低了。

```js
new Foo()['b']; // 1. new Foo() -> 2. ['b']
```

## LHS & RHS 

1. 不是RHS，就是LHS。

不合法的例子

```js
++ a ++ ;
++ (a++);
```

# Type Conversion

|           | Number          | String            | Boolean  | Undefined | Null | Object | Symbol |
| --------- | --------------- | ----------------- | -------- | --------- | ---- | ------ | ------ |
| Number    | -               |                   | 0 false  | X         | X    | Boxing | X      |
| String    | NaN for invalid | -                 | "" false | X         | X    | Boxing | X      |
| Boolean   | true 1, false 0 | 'true', 'false'   | -        | X         | X    | Boxing | X      |
| Undefined | NaN             | 'undefined'       | false    | -         | X    | X      | X      |
| Null      | 0               | 'null'            | false    | X         | -    | X      | X      |
| Object    | valueOf         | valueOf, toString | true     | X         | X    | -      | X      |
| Symbol    | X               | -                 | true     | X         | X    | Boxing | -      |

## Unboxing


如果定义了[Symbol.toPrimitive()], Symbol.toPrimitive() 优先，要不然就得看valueOf() 和 toString() 的次序。

例子：

```js
let o = {
    toString() {return 2},
    valueOf() {return 1}
}

let x = {}
x[o] = 2 // o is 2

console.log("x" + o) // o is 1
```

如果valueOf return 还是object呢? 那就会再尝试执行toString()。如果toString() 还是不能返回primitive type, 就会报错。

```js
let x = {
    toString() {return 2};
    valueOf() {return []};
}

x + 3 // 5 because valueOf return object
```

Array 的例子

```js
let x = [1,2,3];
x.valueOf() // Still object
x.toString() // 1,2,3
console.log(x + 2) // 1,2,32 
```
## Boxing

装箱后跟原本的类型是不一样，就如值类型 vs 引用类型

```js
typeof Number(2) // return "number"
typeof new Number(2) // return "object"
```

# 运行时相关概念

## Completetion Record

[[type]]: normal, break, continue, return, or throw

[[value]]: 基本类型

[[target]]: label

# 简单语句和复合语句

## 简单语句

1. Expression
2. Empty
3. Debugger
4. Throw
5. Continue
6. Break
7. Return

## 复合语句

1. Block
   1. [[type]]: normal
2. If
3. Switch
4. Iteration
5. With
6. Labeled
7. Try
   1. [[type]]: return
   2. [[value]]: --
   3. [[target]]: label

# 声明

Function
1. Function
2. Generator
3. Async Function
4. Async Generator

Other

5. Variable
6. Class
7. Lexical

## 预处理

预处理是不管return。所以在执行前js会去寻找variable，即使是在return后面。const也是如此，只是在你声明之前使用的话会抛错。

## 作用域

早期var和function的作用范围都是整个的函数体

```js
var a = 2;
void function() {
    a = 1;
    {
        var a; 
    }
}();
console.log(a); // a = 2
```
而const和let是block-level 
```js
var a = 2;
void function () {
    a = 1;
    {
        let a;
    }
}()
console.log(a); // a = 1; 
```

# 宏任务和微任务

JS 执行粒度 (Runtime)

1. 宏任务
2. 微任务（Promise）
3. 函数调用（Execution Context）
4. 语句/声明 （Completion Record）
5. 直接量

## 制造异步任务 (MicroTask/Job)
比如这项代码就会产生两个microtask，
```js
let x = 1; // Job 1
let p = new Promise(resolve => resolve()); // Job 1
p.then(() => x = 3); // Job 2
x = 2; // Job 1

x // Get x = 3
```

## 事件循环

1. wait
2. get code
3. execute

## 函数调用

如何去控制是否能访问相关的变量。

```js
// main.js

import {foo} from 'foo.js';
var i = 0;
console.log(i);
foo();
console.log(i);
i++;

// foo.js
import {foo2} from 'foo2.js';
let x = 1;
function foo() {
    console.log(x);
    foo2();
    console.log(x);
}
export foo;

// foo2.js
let y = 2;
function foo2() {
    console.log(y);
}

export foo2;
```

1. Main.js，foo，foo2各自会拥有属于自己的环境 (Execution Context)
2. 然后用stack来储存它们。
3. 比如我们执行foo的时候，foo的Execution context也可称作running execution context。
4. 所以我们可以访问变量时，都是尝试从running execution context里找
5. 当Running execution context 需要执行foo2 的时候
6. foo2 的Execution context就会被放进stack里。

## Content of Execution Context

1. Code evaluation state
2. Function
3. Script or module
4. Generator
5. Realm 
6. Lexical Environment
7. Variable Environment

### Lexical Environment

1. this
2. new.target
3. super
4. variable

## Environment Record

1. Delcarative
   1. Function
   2. Module
2. Global
3. Object

## Function - Closure

1. 每个函数都会生成一个闭包
2. 每个闭包都会有两个部分
   1. 代码部分
   2. 环境部分
      1. 由一个object和一个变量的序列来组成
3. 每一个函数都会带那时候定义时的Environment Record 保存到自己函数对象身上

例子
```js
let y = 2;
function foo2() {
    let z = 3;
    return () => {
        console.log(y, z);
    }
}
let foo3 = foo2();
export foo3;
```
因为arrow function 的原因，foo3可以访问到this，y，z
Foo3
1. Environement Record
   1. z:3
   2. this:global
   3. Environemnt Record
      1. y:2
   4. Code

## Realm

1. 根据函数表达式或者{}来创造相应的对象
2. 隐式转换也会创建对象。
3. 如果没有realm，就不知道原型是什么。

```js
1..toString(); // 装箱产生Number对象
```