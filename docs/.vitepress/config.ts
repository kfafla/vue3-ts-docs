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
            { text: "VueUse", link: "/components/" },
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
                        { text: "第一周", link: "" }, 
                        { text: "第二周", link: "" }, 
                        { text: "第三周", link: "" }, 
                        { text: "第四周", link: "/guide/concepts" }, 
                        { text: "第五周",link:""}                       
                    ],
                },
            ],
            "/components/": [
                {
                    text: "VueUse",
                    items: [
                        { text: "介绍", link:"/components/"},
                        { text: "useActionElement",link:"/components/useActionElement"},
                        { text: "useClipboard",link:"/components/useClipboard"},
                        { text: "usePonterLock",link:"/components/usePonterLock"},
                        { text: "使用循环列表",link:"/components/list"},
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
