# 清哥的博客 - 优化说明

## 项目简介
这是一个基于 Jekyll 的静态博客，专注于认知科学、大模型和 AI 智能体技术分享。

## 优化内容

### 1. 首页布局优化
- **卡片式网格布局**：采用响应式网格展示文章预览
- **现代化设计**：添加阴影、圆角和悬停动画效果
- **内容预览**：显示文章摘要、分类和日期

### 2. 字体排印改进
- **系统字体栈**：使用现代系统字体，确保最佳显示效果
- **中文优化**：针对中文内容进行专门的字体和行高优化
- **分级标题**：为不同级别标题添加视觉层次和装饰元素

### 3. 新增功能
- **文章归档页面** (`/archive/`)：按年份和月份组织文章
- **分类标签系统**：在文章预览中显示分类信息
- **响应式设计**：完美适配移动端和桌面端

### 4. 文件结构
```
├── _layouts/
│   └── home.html              # 自定义首页布局
├── _includes/
│   └── header.html            # 自定义导航栏（含归档链接）
├── assets/css/
│   └── style.scss             # 自定义样式文件
├── archive.html               # 文章归档页面
├── preview.html               # 首页预览文件
└── .github/workflows/
    └── jekyll.yml             # GitHub Actions 部署配置
```

## 本地开发

### 环境要求
- Ruby 2.7 或更高版本
- Bundler
- Jekyll 4.3.3

### 安装和运行
```bash
# 安装依赖
bundle install

# 启动开发服务器
bundle exec jekyll serve

# 访问 http://localhost:4000/
```

### 构建站点
```bash
# 构建静态文件
bundle exec jekyll build

# 输出目录：_site/
```

## 内容创作

### 创建新文章
在 `_posts/` 目录下创建新文件，格式：`YYYY-MM-DD-title.markdown`

### 文章头部格式
```yaml
---
layout: post
title: "文章标题"
date: 2024-01-14 12:00:00 +0800
categories: category1 category2
---
```

## 自定义配置

### 颜色变量
在 `assets/css/style.scss` 中修改 CSS 变量：
```scss
:root {
  --primary-color: #2c3e50;    // 主色调
  --secondary-color: #3498db;  // 辅助色
  --accent-color: #e74c3c;     // 强调色
  // ...
}
```

### 布局调整
- 首页文章数量：修改 `_layouts/home.html` 中的 `limit: 6`
- 网格列数：修改 `assets/css/style.scss` 中的 `minmax(350px, 1fr)`

## 部署

本仓库已配置 GitHub Actions，推送到 `main` 分支将自动部署到 GitHub Pages。

## 预览

如果无法本地运行 Jekyll，可以打开 `preview.html` 文件查看首页设计效果。