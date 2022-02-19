/*
 * @Version: 0.1
 * @Autor: zmf96
 * @Email: zmf96@qq.com
 * @Date: 2022-02-19 07:09:03
 * @LastEditors: zmf96
 * @LastEditTime: 2022-02-19 07:27:38
 * @FilePath: /docs/.vuepress/nav.js
 * @Description: 
 */

module.exports =  [{
            text: '首页',
            link: '/'
        },
        {
            text: '安全',
            link: '/sec/'
        },
        {
            text: '开发',
            link: '/dev/',
            items: [{
                text: 'python',
                link: '/dev/python/'
            }, {
                text: 'golang',
                link: '/dev/golang/'
            }, {
                text: 'web',
                link: '/dev/web/'
            }]
        },
        {
            text: '运维',
            link: '/ops/'
        },
        {
            text: '杂记',
            link: '/other/'
        },
        {
            text: '开源项目',
            link: '/opensource/',
            items: [{
                text: 'one',
                link: '#'
            }, {
                text: 'two',
                link: '#'
            }, {
                text: 'three',
                link: '#'
            }]
        },
        {
            text: '关于',
            link: '/about/'
        },
        {
            text: 'Github',
            link: '#'
        },
    ]
