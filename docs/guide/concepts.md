# VitePress 学习小结

## 一、概述

VitePress 是一个基于 Vite 的静态网站生成器，专为项目文档和技术博客设计。它利用 Vue.js 的强大功能，提供了简洁且易于维护的文档结构。通过 VitePress，你可以快速创建一个高性能、美观的文档网站。

## 二、安装与配置

### 安装

1. **创建项目目录**：首先，在你的工作区创建一个新的项目目录。
2. **初始化 npm 项目**：在项目目录中运行 `npm init -y` 来初始化一个新的 npm 项目。
3. **安装 VitePress**：运行 `npm install vitepress --save-dev` 来安装 VitePress。

### 配置

在项目根目录下创建一个 `.vitepress` 目录，并在其中添加必要的配置文件和目录结构。

- **config.js**：用于配置 VitePress 的全局设置，如站点标题、描述、主题等。
- **theme**（可选）：用于自定义主题。
- **public**：用于存放静态资源，如图片、CSS 文件等。
- **components**（可选）：用于存放自定义 Vue 组件。

示例 `config.js` 配置：

```javascript
module.exports = {
  title: "我的 VitePress 站点",
  description: "一个关于 VitePress 的学习小结。",
  themeConfig: {
    logo: "/logo.png", // 站点 Logo
    nav: [
      // 导航栏链接
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
    sidebar: [
      // 侧边栏链接
      {
        text: "介绍",
        link: "/",
      },
      {
        text: "入门",
        items: [
          { text: "安装", link: "/guide/installation" },
          { text: "配置", link: "/guide/configuration" },
        ],
      },
    ],
  },
};
```
