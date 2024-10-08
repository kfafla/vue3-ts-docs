import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue3 + TypeScript 学习文档",
    description: "详细学习 Vue3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "ymx前端学习",
        logo: "/assets/logo.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "组件", link: "/components/" },
            { text: "API 参考", link: "/api/"},
            { text: "常见问题", link: "/faq/"},
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/kfafla/vue3-ts-docs"},
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "介绍", link: "/guide/concepts" }, 
                        { text: "项目实战练习",link:"/guide/lima"}                       
                    ],
                },
            ],
            "/components/": [
                {
                    text: "常用组件",
                    items: [
                        { text: "介绍", link:"/components/"},
                        { text: "按钮 Button",link:"/components/button"},
                        { text: "表单 Form",link:"/components/form"},
                        { text: "表格 Table",link:"/components/table"},
                    ],
                },
            ],

        },
        footer: {
            message: "用心学习 Vue3 和 TypeScript！",
            copyright: "Copyright o 2024 xmy",
        },
    },
});
