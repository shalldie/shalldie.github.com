const path = require('path');

module.exports = {
    base: '/views/vdocs/',
    dest: path.join(__dirname, '../../views/vdocs'),
    title: 'VDocs',
    description: "shalldie's github docs",
    themeConfig: {
        logo: '/images/logo.png',
        repo: 'https://github.com/shalldie/shalldie.github.com',
        repoLabel: 'Github',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'vdocs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑此页面',
        lastUpdated: '上次更新',
        nav: [
            //
            {
                text: '其它',
                items: [
                    {text: 'Github - shalldie', link: 'https://github.com/shalldie'},
                    {text: '博客 - nosaid.com', link: 'https://nosaid.com'}
                ]
            }
        ],
        // 侧边栏
        sidebar: [
            // 首页
            {
                title: 'VDocs - root',
                sidebarDepth: 1,
                path: '/'
            },
            {
                title: 'Demos',
                collapsable: false,
                children: [
                    {
                        title: 'mini-vdom',
                        path: '/demos/mini-vdom'
                    },
                    {
                        title: 'mini-mvvm',
                        path: '/demos/mini-mvvm'
                    },
                    {
                        title: 'vue-git-comment',
                        path: '/demos/vue-git-comment'
                    },
                    {
                        title: 'v-scroll-active',
                        path: '/demos/v-scroll-active'
                    },
                    {
                        title: 'v-scroll-affix',
                        path: '/demos/v-scroll-affix'
                    },
                    {
                        title: 'vue-qin',
                        path: '/demos/vue-qin'
                    }
                ]
            }
        ]
    }
};
