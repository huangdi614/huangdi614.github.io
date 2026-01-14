# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based static site for a blog called "清哥的博客" (Albert's Blog), focusing on cognitive science, large language models, and AI agents. The site is hosted on GitHub Pages with the base URL "/blog".

## Architecture & Structure

- **Jekyll Static Site**: Content is generated at build time, not runtime
- **File-based Content**: Posts follow Jekyll's `YEAR-MONTH-DAY-title.MARKUP` naming convention
- **Markdown-based**: Content written in Markdown with YAML front matter
- **Theme-based**: Uses the Minima theme with potential customizations
- **Static Generation**: Output is placed in `_site/` directory (excluded from Git)

### Key Directories and Files
- `_posts/`: Blog content directory with date-prefixed files
- `_config.yml`: Main site configuration (title, description, theme, etc.)
- `index.markdown`, `about.markdown`: Page templates
- `Gemfile`: Ruby dependencies for Jekyll and plugins
- `_site/`: Generated static site (auto-generated, in .gitignore)

## Build & Development Commands

### Prerequisites
- Ruby (version that supports Jekyll 4.3.3)
- Bundler for Ruby dependency management

### Setup
```bash
bundle install
```

### Development & Build Commands
```bash
# Start local development server with auto-reload
bundle exec jekyll serve

# Serve with draft posts (for posts with future dates or unpublished)
bundle exec jekyll serve --drafts

# Build the site to the _site directory
bundle exec jekyll build

# Build and serve without watching for changes
bundle exec jekyll serve --no-watch

# Build with verbose output for debugging
bundle exec jekyll build --verbose
```

### Content Management
- Posts are written in Markdown with YAML front matter
- All posts go in the `_posts/` directory
- Post filename format: `YEAR-MONTH-DAY-title.markdown` (e.g., `2024-01-14-my-post.markdown`)
- Front matter format:
  ```yaml
  ---
  layout: post
  title: "Post Title"
  date: 2024-01-14 12:00:00 +0800
  categories: category1 category2
  ---
  ```

## Site Configuration

The site is configured in `_config.yml` with:
- Title: "清哥的博客"
- Email: albert.huangdi@gmail.com
- Description: "专注记录分享通过认知科学构建大模型及智能体" (Focused on recording and sharing cognitive science-based construction of large models and intelligent agents)
- Base URL: "/blog"
- Theme: "minima"
- Plugins: jekyll-feed

## Content Guidelines

- The blog primarily focuses on cognitive science, large language models, AI agents, and related topics
- Content may be in Chinese or English (the example posts show both)
- Follow Jekyll's content structure and conventions
- Use appropriate categories and tags in front matter for organization