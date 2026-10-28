---
title: 第十三讲. 四种沉默成本
description: loop 跑起来之后，你不会立刻看到问题。以下四种成本会沉默地累积，等到你发现的时候可能已经损失了很多。
type: source
source_url: https://walkinglabs.github.io/learn-harness-engineering/zh/lectures/lecture-13-loop-engineering/#four-silent-costs
media_type: text/html
date_fetched: 2026-10-28
preservation: text-extracted
tags:
  - source
  - immutable
  - layer-ingest
  - text
  - harness
  - loop-engineering
  - agent
---

## 四种沉默成本

loop 跑起来之后，你不会立刻看到问题。以下四种成本会沉默地累积，等到你发现的时候可能已经损失了很多。

### 1. Verification Debt（验证负债）

loop 跑得快的时候，你很容易跳过验证。"看起来没问题"不等于"确实没问题"。loop 里自动生成的代码越多，验证债务积累越快。解决方式是：**停止条件必须是可自动检查的，不能是"感觉差不多"。**

### 2. Comprehension Rot（理解腐烂）

loop 出代码的速度越快，你对自己代码库的理解就越跟不上。一个 loop 合并了上百个 PR，团队要读这些 PR、审查真正重要的 diff、继续亲自使用这些代码，让心智模型跟上代码。**快速跑 loop 的前提是快速读结果。**

### 3. Cognitive Surrender（认知投降）

当 loop 跑得很顺的时候，最舒服的姿势就是不再有观点。来什么接什么，不对结果动脑子。但这恰恰是危险的开始——你在用 loop 逃避思考，而不是用 loop 放大思考。Osmani 的警告：「两个人可以造完全一样的 loop，得到完全相反的结果。一个用它加深理解后加速，另一个用它代替理解。loop 不知道区别，你知道。」

### 4. Token Blowout（令牌爆炸）

loop 的每一次迭代都会积累更多上下文。代码写过了，错误遇到了，决策做过了。当每一轮只新增近似固定数量的内容时，单轮看到的历史长度随轮数近似线性增长；如果系统每一轮都重新处理完整历史，N 轮的累计输入量才近似二次增长。Codex 的解决方案是自动 context compaction——用一个专门的 API 将老的对话轮次压缩成加密的内容摘要，保留关键知识，丢弃冗余细节。这是每个 loop 设计之初就要考虑的工程问题。
