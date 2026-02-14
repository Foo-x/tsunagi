---
title: SSH接続を維持
description: SSH接続を維持する方法
---

`~/.ssh/config` に `ServerAliveInterval 60` のように記述すると、60秒間隔でnullパケットを送信してSSH接続を維持する。
