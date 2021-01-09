学习笔记

## CSS 规则

1. at-rule
2. qualified rule


### At-rule

1. @charset
2. @import
3. @media
4. @page
5. @counter-style
6. @key-frames
7. @support
8. @namespace
9. @viewport

### Qualified rule

1. 选择器
2. 声明列表
   1. 属性
   2. 值
      1. 值的类型
      2. 函数

实现CSS variable
```css
:root {
    --variable-name: #fff;
}

#foo {
    background-color: var(--variable-name); 
}
```

### 选择器的规则

## 简单选择器

### 优先级的算法

算出id，class，和tag的数量

例子

```
#id.class
[0, 1, 1, 0] -> 0 inline, 1 id, 1 class, 0 tag

let N = 65536  -> example

specValue = N^3 * 0 + N^2 * 1 + N^1 * 1 + N^0 * 0
```

## 复杂选择器

### 优先级

第一
1. 无连接符号

第二
1. 空格
2. ~
3. +
4. >
5. ||

第三
1. ,

## 建议
1. 根据 id 选单个元素
2. class 和 class 的组合选成组元素
3. tag 选择器确定页面风格

## 伪元素

例子

::first-line
::first-letter
::before
::after

### 注意情况

1. `::first-letter` 必须使用块级元素（div）
2. `::first-line` 和 `::first-letter` 都是实现有限的几个CSS属性

### 为什么 float 不能 用在 ::first-line

可能原因是float会生新的bfc，所以如果在第一行生成新的bfc的话，第一行就会从文章脱离出来。