学习笔记

## 根据浏览器属性进行排版

1. 主要是找出
   1. mainSize,
   2. mainStart,
   3. mainEnd,
   4. mainSign,
   5. mainBase,
   6. crossSize,
   7. crossStart,
   8. crossEnd,
   9. crossSign,
   10. crossBase;
2. flex direction

## 收集元素进行

1. 每放一个element，mainspace减少
2. 如果是flex，那么标注width 是0
3. 如果mainspace超出了，而且没有 `nowrap`，那么就放在新的一行 


## 计算主轴

1. 如果 mainspace 是负数
   1. 全部 flex = 0，然后对应作出压缩
2. else
   1. 针对有flex 的 element， 算出可扩充的值
   2. 如果没有，那么就由 justify content 去决定elements的 位置

## 计算交叉轴

1. 根据每一行中最大元素尺寸计算行高
2. 根据行高`flex-align`和`item-align`，确定元素的具体位置