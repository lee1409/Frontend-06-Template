学习笔记

# JS 语言通识

## 语言按语法分类

1. 非形式语言
   1. 中文，英文...

2. 形式语言
   - 0-型文法（无限制文法或短语结构文法）包括所有的文法。
   - 1-型文法（上下文相关文法）生成上下文相关语言。
   - 2-型文法（上下文无关文法）生成上下文无关语言。
   - 3-型文法（正规文法）生成正则语言。

## 产生式 (BNF)

1. 用尖括号括<>起来的名称来表示语法结构名
2. 语法结构分成基础结构和需要用其他语法结构定义的复合结构
   1. 基础结构 - 终结符 (Terminal Symbol)
   2. 复合结构 - 非终结符 (Non-terminal Symbol)
3. 引号""和中间的字符表示终结符
4. 可以有括号[]
5. *表示重复多次
6. |表示或
7. +表示至少一次


### 深入理解产生式

- 0-型文法（无限制文法或短语结构文法）包括所有的文法。
  - ?::=?
- 1-型文法（上下文相关文法）生成上下文相关语言。
  - <span style="color:red;">?</span>\<A\><span style="color:blue;">?</span>:==<span style="color:red;">?</span>\<B\><span style="color:blue;">?</span>
- 2-型文法（上下文无关文法）生成上下文无关语言。
  - \<A\>:==?
- 3-型文法（正规文法）生成正则语言。
  - \<A\>::=\<A\>?

#### 例子：上下文无关文法 + 有关

Sent -> S V O （上下文无关）

S -> 人 | 天 （上下文无关）

人V -> 人吃 （有关）

天V -> 天下（有关）

下O -> 下雨 | 下雪（有关）

吃O -> 吃饭 | 吃肉（有关）

## 现代语言分类

特例
1. C++中，*可能表示乘号或者指针，具体是哪个，取决于星号前面的标识符是否被声明为类型。

用途
1. 数据描述语言 (JSON, HTML, XAML, SQL, CSS)
2. 编程语言 (C, C++, Java, C#)

形式语言 - 表达方式
1. 声明式语言 (Declarative) - JSON, HTML, XAML, SQL
2. 命令型语言 (Imperative) - C, C++, Python

## 编程语言的性质

图灵完备性
1. 命令式 - 图灵机
   1. goto
   2. if 和 while
2. 声明式 - lambda
   1. 递归

动态
1. 在用户的设备/在线服务器上
2. 产品实际运行时
3. Runtime

静态
1. 在程序员的设备上
2. 产品开发时
3. Compile time

## 一般命令式编程语言的设计方式

例子

| Atom       | Expression | Statement  | Structure | Program |
| ---------- | ---------- | ---------- | --------- | ------- |
| Identifier | Atom       | Expression | Function  | Library |
| Literal    | Operator   | Keyword    | Class     | Module  |
|            | Punctuator | Punctuator | Namespace | Package |


# JS类型

## Number

### Atom

1. Grammar
   1. Literal
   2. Variable
   3. Keywords
   4. Whitspace
   5. Line Terminator
2. Runtime
   1. Types
   2. Execution Context 

## 对象的基础知识

### Object - 物体

1. 实体或者是抽象
2. 不会因为对象本身的状态改变而变得有区别
3. 任何一个对象都是唯一的，这与他本身的状态无关
4. 所以，即使状态完全一致的两个对象，也并不相等
5. 我们用状态来描述对象，比如鱼的大小


### Object成立的要素

1. State 状态
2. Identifier 唯一性的标识
3. Behavior 行为

### Class 类

1. 类是一种常见的描述对象的方式
2. 两个主要的流派
   1. 归类
   2. 分类
3. 对于归类方面而言，多继承是自然地事情 (Multiple inheritance)
4. 采用分类就是单继承结构，并且会有一个基类Object

### Prototype 原型

1. 原型是一种更接近人类原始认知的描述对象的方法
2. 不试图做严谨的分类，而是采用*相似*这样的方式去描述对象
3. 任何对象仅仅需要描述他自己与原型的区别即可

设计

1. 不应该受到语言描述的干扰
2. 在设计对象的状态和行为是，我们总是遵循*行为改变状态*的规则


## JS中的对象

只关心
1. Property
2. [[prototype]]

kv 型
Key
1. Symbol
2. String

Value
1. Data
   1. [[value]]
   2. writable
   3. enumerable
   4. configurable

2. Accessor
   1. get
   2. set
   3. enumerable
   4. configurable
3. If set configurable as false, enumerable, writable, [[value]] cannot be change.
4. JS 用属性统一抽象对象状态的行位
5. 一般来说，数据属性用于描述状态，访问器属性这用于描述行位
6. 数据属性中如果存储函数，也可以用于描述行位

### Object API
1. `{} . [] Object.defineProperty`
2. `Object.create / Object.setPrototypeOf / Object.getPrototypeOf `
3. `new / class / extends `
4. `new / function / prototype `

Special Object 

1. 特殊对象比如函数对象 (Function Object)
2. 函数对象有一个行为 [[call]]

Host object

1. 由宿主环境定义比如window