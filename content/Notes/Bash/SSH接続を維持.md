---
description: SSH接続を維持する方法
created: 2025/03/20
aliases:
    - keep-ssh-connection
---

`~/.ssh/config` に `ServerAliveInterval 60` のように記述すると、60秒間隔でnullパケットを送信してSSH接続を維持する。
