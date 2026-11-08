---
title: Effective harnesses for long-running agents
description: The core challenge of long-running agents is that they must work in discrete sessions, and each new session begins with no memory of what came before.
type: source
source_url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
media_type: text/html
date_fetched: 2026-11-08
author: Justin Young; Anthropic Engineering
preservation: text-extracted
published: 2025-11-26
tags:
  - source
  - immutable
  - layer-ingest
  - text
  - harness
  - agent
---

# Effective harnesses for long-running agents

As AI agents become more capable, developers are increasingly asking them to take on complex tasks requiring work that spans hours, or even days. However, getting agents to make consistent progress across multiple context windows remains an open problem.

The core challenge of long-running agents is that they must work in discrete sessions, and each new session begins with no memory of what came before. Because context windows are limited, and because most complex projects cannot be completed within a single window, agents need a way to bridge the gap between coding sessions.

Anthropic describes a two-part solution: an initializer agent that sets up the environment on the first run, and a coding agent that makes incremental progress in every session while leaving clear artifacts for the next session.

Compaction is available, but it is not sufficient by itself. In their experiments, a capable agent given only a high-level prompt would try to do too much at once, run out of context in the middle of implementation, and leave the next session to guess what happened. Another agent could later inspect partial progress and declare the whole job done.

## Environment management

The initializer creates a feature list from the input spec. The list gives later agents a clear outline of full functionality. Coding agents work on one feature at a time and update whether each feature passes.

The agent commits progress to git with descriptive commit messages and writes summaries of its progress in a progress file. This lets subsequent sessions recover working states and avoid spending time reconstructing what happened.

Testing is another explicit part of the harness. Without prompting, the agent might mark a feature complete after unit tests or simple API checks even when the feature does not work end-to-end. The harness therefore requires verification the way a user would use the application.

## Getting up to speed

Every coding agent is prompted to read the git log and progress files to understand recent work, read the feature list, and choose the highest-priority feature that is not yet done. The agent also runs the initialization and basic end-to-end test before starting a new feature, so an undocumented broken state is caught early.

A typical session starts by checking the working directory, reading the progress file, reading the feature list, checking recent commits, starting the development server, and verifying basic functionality.
