---
title: 第四讲. 拆分思路
description: 常用信息放手边，偶尔用的收起来，用不上的别带。
type: source
source_url: https://walkinglabs.github.io/learn-harness-engineering/zh/lectures/lecture-04-why-one-giant-instruction-file-fails/#how-to-split
media_type: text/html
date_fetched: 2026-11-08
preservation: text-extracted
tags:
  - source
  - immutable
  - layer-ingest
  - text
  - agents-md
  - harness
  - agent
---

## 拆分思路

核心原则：常用信息放手边，偶尔用的收起来，用不上的别带。

入口文件 `AGENTS.md` 控制在 50-200 行，只放最常用的东西：项目概览（一两句话说清楚这是什么）、首次运行命令（`make setup && make test`）、全局硬约束（不超过 15 条不可违反的规则）、指向专题文档的链接（一行描述加适用条件）。

```markdown
# AGENTS.md

## 项目概览

Python 3.11 FastAPI 后端，PostgreSQL 15 数据库。

## 快速开始

- 安装：`make setup`
- 测试：`make test`
- 完整验证：`make check`

## 硬约束

- 所有 API 必须走 OAuth 2.0 认证
- 所有数据库查询必须用 SQLAlchemy 2.0 语法
- 所有 PR 必须通过 pytest + mypy --strict + ruff check

## 专题文档

- API 设计规范 (`docs/api-patterns.md`) — 添加新端点时必读
- 数据库操作约束 (`docs/database-rules.md`) — 涉及数据库修改时必读
- 测试标准 (`docs/testing-standards.md`) — 编写测试时参考
```

每个专题文档 50-150 行，按主题放在 `docs/` 目录下或对应模块目录旁。Agent 只在需要时才去读。用收纳袋整理行李的思路：内衣一个袋，洗漱一个袋，充电器一个袋，找东西不用翻整个箱子。

还有些信息直接放在代码里更合适，比如类型定义、接口注释、配置文件里的说明。Agent 读代码的时候自然能看到，不用再在指令里重复一遍。

每条指令都应该标明来源（"为什么加这条规则？"）、适用条件（"这条规则在什么时候需要？"）、过期条件（"什么情况下可以删掉这条规则？"）。定期审计，删掉过时的、冗余的、矛盾的条目。像管理代码依赖一样管理你的指令，用不上的依赖就该删，不然它们只会拖慢系统。

如果某条指令必须在入口文件里，放顶部或底部，不要放中间。"中间迷失"效应告诉我们，LLM 对长文本中间部分的信息利用效率显著低于两端。但更好的做法是把指令放到专题文档里，让 agent 按需加载。

OpenAI 和 Anthropic 都隐性支持拆分的做法。OpenAI 说入口文件应"短小且以路由为导向"，Anthropic 说长运行 agent 的控制信息应"简洁且高优先级"。两家都在说同一件事：别把什么都塞进一个文件里。
