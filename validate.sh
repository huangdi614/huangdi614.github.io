#!/bin/bash

echo "🔍 验证 Jekyll 文件格式..."

# 检查 YAML 头部格式（仅布局和页面文件需要）
echo "检查 YAML 头部格式..."
for file in _layouts/*.html archive.html; do
    if head -1 "$file" | grep -q "^---$"; then
        echo "✅ $file - YAML 头部格式正确"
    else
        echo "❌ $file - 缺少 YAML 头部"
    fi
done

# 检查 include 文件（不需要 YAML 头部）
for file in _includes/*.html; do
    if [ -f "$file" ]; then
        echo "✅ $file - Include 文件（无需 YAML 头部）"
    fi
done

# 检查 SCSS 文件
echo ""
echo "检查 SCSS 文件..."
if head -3 assets/css/style.scss | grep -q "^---$"; then
    echo "✅ assets/css/style.scss - Jekyll 前端内容正确"
else
    echo "❌ assets/css/style.scss - 缺少 Jekyll 前端内容"
fi

# 检查必要的文件
echo ""
echo "检查必要文件..."
required_files=("_config.yml" "index.markdown" "Gemfile" "_layouts/home.html" "assets/css/style.scss")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - 存在"
    else
        echo "❌ $file - 缺失"
    fi
done

echo ""
echo "验证完成！"