学习笔记

## 字典树 (Trie)

1. 基本上就像字典一样
2. 哈希表的一种
3. 建立字典树的时候是 O(M * log N) where M is the maximum length of key and N is the number of key.
4. 搜索字的时候只需要O(m)

## KMP

1. DP 的一种
2. O(m+n)


## Wildcard

1. 最后一个\*多匹配，其它\*少匹配
2. 大概步骤
   1. 先从 0 index 检查到第一个*
   2. 然后利用正则表达来做匹配
   3. 然后从后 index 检查到最后一个*