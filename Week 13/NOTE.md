学习笔记

## HTML
 
XML 与 SGML

## Element的namespace
1. HTML
2. SVG
3. Math ML

## DOM API

1. BOM不是DOM

4各部分

1. Traversal
2. 节点部分
3. 事件部分
4. Range api

## 导航操作

1. parentNode
2. childNodes
3. firstChild
4. lastChild
5. nextSibling
6. previousSibling
7. parentElement
8. children
9. firstElementChild
10. lastElementChild
11. nextElementSibling
12. previousElementSibling


## 修改操作

1. appendChild
2. insertBefore
3. removeChild
4. replaceChild

## 高级操作

1. compareDocumentPosition
2. contains
3. isEqualNode
4. isSameNode (===)
5. cloneNode

## 事件API

`document.addEventListener(type, listener, options)`

`onScroll` 传入 `passive` 为false， 可以达到提升性能的效果

冒泡与捕获

1. 误区：不管监不监听都同样会发生冒泡捕获的过程
2. 先捕获（从外到内），后冒泡 （从内到外）
3. 先加的先出发

## Range API

1. DOM collection 是living collection ？
   1. 取出来的childNode，这个集合会跟着变化
2. 元素的这些子元素，在insert的时候是不需要把它从原来的位置拿掉
   1. 一定会把它remove了然后再append

3. element的偏移值是children，textNode 的偏移值是文字的个数

range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode
range.selectNodeContents

fragment = range.extractContents();

1. 采用range重排少了


## CSSOM

document.styleSheets去访问

document.styleSheets[0].cssRules
document.styleSheets[0].insertRule("p {color:pink;}", 0);
document.styleSheets[0].removeRule(0)

CSSStyleRule
CSSCharsetRule
CSSImportRule
...

window.getComputedStyle();

## CSSOM View

1. window.innerHeight, window.innerWidth
2. window.outerWidth, window.outerHeight
3. window.devicePixelRatio
4. window.screen
   1. height
   2. width
   3. availWidth  (电话的浏览器可能不一样)
   4. availHeight

window.open(...)
moveTo(x,y)
moveBy(x, y)
resizeTo(x,y)
resizeBy(x,y)

scroll
scrollTop
scrollLEft
scrollWidth
scrollHeight
scroll(x,y)
scrollBy(x,y)
scrollIntoView()

window
1. scrollX
2. scrollY
3. scroll(x, y)
4. scrollBy(x,y)

1. getClientRects()
2. getBoundingClientRect() 

伪元素也会加入getClientRects()

标准化组织

1. khronos
   1. WebGL
2. ECMA
   1. ECMAScript
3. WHATWG
   1. HTML
4. W3C
   1. webaudio
   2. CG/WG

