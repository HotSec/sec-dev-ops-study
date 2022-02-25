/*
 * @Version: 0.1
 * @Autor: zmf96
 * @Email: zmf96@qq.com
 * @Date: 2022-02-19 07:08:58
 * @LastEditors: zmf96
 * @LastEditTime: 2022-02-19 07:17:04
 * @FilePath: /docs/.vuepress/siderbar.js
 * @Description: 
 */

module.exports = [
    {
        title: '安全',
        collapsable: true,
        children: [
            '/sec/',
        ]
    },
    {
        title: '开发',
        collapsable: true,
        children: [
            '/dev/c',
            '/dev/python/',
            '/dev/golang/',
            '/dev/web/',
        ]
    },
    {
        title: '运维',
        collapsable: true,
        children: [
            '/ops/',
            '/ops/k8s/',
            '/ops/docker/',
            '/ops/git/',
            '/ops/jenkins/',
            '/ops/nginx/',
            '/ops/redis/',
            '/ops/mysql/',
            '/ops/elk/'
        ]
    },
    {
        title: '杂记',
        collapsable: true,
        children: [
            '/other/',
        ]
    },
    {
        title: '开源项目',
        collapsable: true,
        children: [
            '/other/',
        ]
    },
    {
        title: '关于',
        collapsable: true,
        children: [
            '/about/',
        ]
    },
]