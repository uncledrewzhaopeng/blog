import { defineConfig } from 'vitepress'

const section = (text: string, path: string, items: string[]) => ({
  text,
  items: [
    { text: '概览', link: path },
    ...items.map((item) => ({ text: item, link: `${path}${item}` })),
  ],
})

export default defineConfig({
  title: 'Eddie Blog',
  description: 'WEB 前端开发与学习笔记',
  base: '/blog/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js' }],
    ['script', { src: '/js/MouseClickEffect.js' }],
  ],
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/note/' },
      { text: '计划', link: '/plan/' },
      { text: '其他', link: '/other/' },
    ],
    sidebar: {
      '/js_docs/': [
        section('JavaScript', '/js_docs/', Array.from({ length: 27 }, (_, index) => `js_docs_${index + 1}`)),
      ],
      '/css_docs/': [
        section('CSS', '/css_docs/', Array.from({ length: 6 }, (_, index) => `css_docs_${index + 1}`)),
      ],
      '/vue_docs/': [section('Vue', '/vue_docs/', ['vue_docs_1'])],
      '/node_docs/': [section('Node', '/node_docs/', ['node_docs_1', 'node_docs_2'])],
      '/note/': [
        section('笔记', '/note/', Array.from({ length: 18 }, (_, index) => `${index + 1}note`)),
      ],
      '/plan/': [section('计划', '/plan/', ['20210416-unknown'])],
      '/other/': [
        section('其他', '/other/', Array.from({ length: 9 }, (_, index) => `other_${index + 1}`)),
      ],
    },
    outline: { level: [2, 3], label: '本页目录' },
    lastUpdated: { text: '最后更新于' },
    docFooter: { prev: '上一页', next: '下一页' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/uncledrewzhaopeng' }],
    footer: { message: 'Email：pengweb_job@163.com', copyright: 'Copyright © 2026 Eddie' },
    search: { provider: 'local' },
  },
})
