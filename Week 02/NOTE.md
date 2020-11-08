学习笔记

## BFS

基本框架需要

1. Queue
2. 递归

```js
function BFS (start, end) {
    function insert(i) {
        // Condition to prevent adding into queue
        // Example: visited, out of boundary...
        if (...) 
        
        // If all condition is true
        // Do something and add into queue
        // Mark as visited
        i.visited = true
        queue.push(i)
    }
    let queue = [];
    queue.insert(start);
    while (queue.length) {
        let node = queue.shift(); // FIFO
        if (node === end) {
            // Meaning search is found
            return true
        }
        // List out all vertices of the node
        for (let vertex of node.vertex) {
            insert(vertex) // Search for next vertex
        }
    }
}
```

Time and Space complexity: O(|V|) where |V| is then number of vertices, if V is known. Otherwise can be generally expressed as O(b^d) where b is the branching factor of the graph and d is the number of depth from the start node.

## Bidirectional BFS

1. 基本上就是开两个BFS来优化BFS
2. 特别注意的地方是shift()的时候都是先跟最小的queue拿起
3. 这样能把O(n^d)降到O(n^(d/2))

条件
1. 必须知道起点和终点
2. Branching factor 必须两边都一样


## Dijkstra's 

1. 把Queue换成Priority Queue
2. 每一次要做选择的时候，我们都是会选最小cost的道路走

## A* Search

1. 如果每一个路程的cost都是1的话，Dijkstra 基本上就是一个暴力的BFS
2. 找出当前与终点最短的。（除了斜着走，那就会是`Math.sqrt(2)`)

因此我们可以利用Euclidean distance 来计算

## Extra

1. 模拟python range

Number
```js
[...Array(4).keys()]
```

Iterator
```js
for (let i of Array(4).keys())
```

## 注意事项
1. 需要注意Array是Object，不能直接拿来对比