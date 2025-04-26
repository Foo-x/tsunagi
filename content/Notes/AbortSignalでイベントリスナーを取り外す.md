---
description: removeEventListener() ではなく AbortSignal でイベントリスナーを取り外す方法
created: 2025/03/20
aliases:
    - remove-event-listener-with-abort-signal
---

```ts
const controller = new AbortController();

element.addEventListener("click", () => doSomething(), { signal: controller.signal });

controller.abort();
```

のようにAbortSignalでイベントリスナーを取り外すことができる。  
`removeEventListener()` と比べて、登録した関数を保持しなくて良いメリットがある。  
特に、同時に登録したり取り外したりする場合は、同じ AbortSignal を使えるので楽。
