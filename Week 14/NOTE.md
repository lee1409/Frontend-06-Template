学习笔记


1. 好的组件化提高复用率
2. 组件基本上都是用来描述UI



## 对象
1. properties
2. methods
3. inherit



## 组件 - 特殊的对象/模块

1. properties
2. methods
3. inherit
4. attribute
5. config & state
6. event
7. lifecycle
8. children （形成树形结构的重要性）


## 组件操作概念
1. 用户：改变state，因而改变children
2. 程序员
   1. 通过attribute、method、property影响组件
   2. event来传递信息



## Attribute vs Property

1. Attribute
   1. 通常使用markup来实现
   2. 强调描述性
2. Property
   1. 通常使用JS来实现
   2. 强调从属关系

## 例子

1. 不一样名字
   1. attribute：class
   2. property: className
2. 不一样类型 (style)
   1. attribute：string
   2. property：object
3. 不一样的值 (href)
   1. attribute：一样
   2. property：resolve过的结果
4. 默认值
   1. attribute：没有property，使用attribute
   2. property：有property，优先使用property





## Lifecycle

1. created
2. mount
3. 。。。
4. destroyed

## Children
1. Content型Children
2. Template型Children


## 操作方式

webpack然后把`index.html` 放入`dist/` 里

## 轮播组件

1. 如果使用`calc`会出先缓慢的现象。
2. 可以使用`source-map` for debugging.

拖拽
1. 参考 Week 5
