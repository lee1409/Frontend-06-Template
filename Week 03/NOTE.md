学习笔记

## Abstract Syntax Tree （抽象語法樹）

### 干嘛用的？

1. 来定义代码的结构
2. 定位到声明语句、赋值语句、运算语句
3. Compiler 里扮演重要的角色
   1. Compiler 的简单步骤：
      1. Lexical Analysis aka Tokenization
      2. Syntax Analysis aka Parsing （这里我们就形成了AST）
      3. Code Generation

## LL Parser

1. 其中一个由上至下递归的parser
2. 例子：制作简单的加减乘除

### 步骤

1. 知道语法规则

```
// Example
<Expression>::=
    <AdditiveExpression><EOF>
    
<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
```

2. 做出Tokenization
3. 根据规则作出递归 （参考`ast.html`)

```js
// Example AdditiveExpression
function AdditiveExpression (source) {
    // source[0] should be either
    // MultiplicativeExpression or AdditiveExpression
    if (source[0].type === 'Multiplicative') {
        // Form an additive node
        // Save source[0] into its child
        let node = {
            type: 'Additive',
            children: [source[0]] 
        }
        // Replace 0 into additive node
        source[0] = node;
        // Run recursion again
        return AdditiveExpression(source);
    }
    // Second option
    if (source[0].type === 'Additive' && source[1] && source[1] === '+') {
        let node = {
            type: 'Additive',
            operator: '+',
            children: []
        }
        node.children.push(source.shift());
        node.children.push(source.shift());
        // Need use multiplicatuve to process source first
        MultiplicativeExpression(source);
        node.children.push(source.shift());
        source.unshift(node);
        return AdditiveExpression(source);
    }
    // Third option
    if (source[0].type === 'Additive' && source[1] && source[1] === '-') {
        let node = {
            type: 'Additive',
            operator: '-',
            children: []
        }
        node.children.push(source.shift());
        node.children.push(source.shift());
        // Need use multiplicatuve to process source first
        MultiplicativeExpression(source);
        node.children.push(source.shift());
        source.unshift(node);
        return AdditiveExpression(source);
    }
    // Last option.
    // When reach this condition, normally the parsing is ended.
    if (source[0].type === 'Additive') {
        return source[0];
    }
    // Have to use multiExpression to parse the source first.
    MultiplicativeExpression(source);
    return AdditiveExpression(source);
}
```