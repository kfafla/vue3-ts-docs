import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue3 + TypeScript 学习文档",
    description: "详细学习 Vue3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "/assets/logo.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "组件", link: "/components/" },
            { text: "API 参考", link: "/components/"},
            { text: "常见问题", link: "/faq/"},
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress"},
        ],
        sidebar: {
            "/gudie/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "介绍", link: "/guide/" },                        
                    ],
                },
            ],
            "/components/": [
                {
                    text: "常用组件",
                    items: [
                        { text: "介绍", link:"/components/"},
                    ],
                },
            ],
        },
        footer: {
            message: "用心学习 Vue3 和 TypeScript！",
            copyright: "Copyright o 2024 lh",
        },
    },
});
