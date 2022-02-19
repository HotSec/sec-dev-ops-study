/*
 * @Version: 0.1
 * @Autor: zmf96
 * @Email: zmf96@qq.com
 * @Date: 2022-02-19 06:02:27
 * @LastEditors: zmf96
 * @LastEditTime: 2022-02-19 07:30:40
 * @FilePath: /docs/.vuepress/config.js
 * @Description: 
 */
module.exports = {
    title: 'Sec Dev Ops Study',
    description: '安全开发运维工程师(打杂工程师)的学习笔记',
    dest: './dist',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/last-updated'
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: require('./nav'),
        siderbar: require('./sidebar'),
    }
}