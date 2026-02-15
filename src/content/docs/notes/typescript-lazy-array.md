---
title: 📄配列の遅延評価
description: 配列を遅延評価してパフォーマンスを良くする方法
---

TypeScript の配列操作は遅延評価されない。  
`filter()` や `map()` のたびに新しい配列が作られるので、大きい配列ではパフォーマンスの問題がある。

❌

```ts
// 大きい配列
const array = [
    { active: true, value: 1 },
    { active: false, value: 2 },
    /* ... */
    { active: true, value: 1000000 },
]

const result = array
    .filter((x) => x.active)
    .map((x) => x.value * 2)
```

`values()` でイテレータに変換することで遅延評価されてパフォーマンスが良くなる。

⭕

```ts
// 大きい配列
const array = [
    { active: true, value: 1 },
    { active: false, value: 2 },
    /* ... */
    { active: true, value: 1000000 },
]

const result = array
    .values()
    .filter((x) => x.active)
    .map((x) => x.value * 2)
    .toArray()
```
