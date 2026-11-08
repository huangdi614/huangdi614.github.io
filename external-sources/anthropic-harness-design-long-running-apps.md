---
title: Harness design for long-running application development
description: A three-agent architecture with planner, generator, and evaluator produced rich full-stack applications over multi-hour autonomous coding sessions.
type: source
source_url: https://www.anthropic.com/engineering/harness-design-long-running-apps
media_type: text/html
date_fetched: 2026-11-08
author: Prithvi Rajasekaran; Anthropic Engineering
preservation: text-extracted
published: 2026-03-24
tags:
  - source
  - immutable
  - layer-ingest
  - text
  - harness
  - agent
---

# Harness design for long-running application development

Anthropic's earlier long-running harness used an initializer agent to decompose a product spec into a task list and a coding agent to implement tasks one feature at a time. Structured artifacts carried context between sessions.

For more complex tasks, the agent still tended to go off track over time. One failure was losing coherence as the context window filled. Clearing the context and starting a fresh agent required a structured handoff carrying the previous agent's state and next steps. This differs from compaction, which summarizes earlier conversation so the same agent can continue with a shortened history. Compaction preserves continuity but does not provide a clean slate.

A second failure was self-evaluation. Agents asked to evaluate their own work tended to praise it confidently, even when the result was mediocre. Separating the agent doing the work from the agent judging it proved a strong lever.

## A three-agent architecture

The final architecture used a planner, generator, and evaluator.

The planner expanded a one-to-four-sentence prompt into a product spec. It focused on product context and high-level technical design rather than detailed implementation, because errors in granular early technical decisions could cascade downstream.

The generator worked through the spec one feature at a time and self-evaluated each sprint before handing work to QA.

The evaluator clicked through the running application with Playwright, tested UI features, API endpoints, and database state, then graded each sprint against product depth, functionality, visual design, and code quality.

Before each sprint, the generator and evaluator negotiated a sprint contract: they agreed on what would be built and what evidence would make that chunk done before code was written. Communication was handled through files, with one agent writing and another reading and responding. The generator then built against the agreed contract.
