---
title: AGENTS.md
description: "Think of AGENTS.md as a README for agents: a dedicated, predictable place to provide the context and instructions to help AI coding agents work on your project."
type: source
source_url: https://agents.md/
media_type: text/html
date_fetched: 2026-11-08
preservation: text-extracted
tags:
  - source
  - immutable
  - layer-ingest
  - text
  - agents-md
  - agent
---

# AGENTS.md

A simple, open format for guiding coding agents, used by over 60k open-source projects.

Think of AGENTS.md as a README for agents: a dedicated, predictable place to provide the context and instructions to help AI coding agents work with your project.

## Why AGENTS.md?

README.md files are for humans: quick starts, project descriptions, and contribution guidelines. AGENTS.md complements this by containing the extra, sometimes detailed context coding agents need: build steps, tests, and conventions that might clutter a README or aren't relevant to human contributors.

We intentionally kept it separate to give agents a clear, predictable place for instructions, keep READMEs concise and focused on human contributors, and provide agent-focused guidance that complements existing README and docs.

## How to use AGENTS.md

1. Add an AGENTS.md file at the root of the repository.
2. Cover what matters: project overview, build and test commands, code style, testing instructions, security considerations.
3. Add extra instructions for commit messages, pull request guidelines, deployment steps, and other context you would give a new teammate.
4. For a large monorepo, use nested AGENTS.md files for subprojects. Agents read the nearest file in the directory tree, and the closest one takes precedence.

AGENTS.md is standard Markdown and has no required fields. It is living documentation.
