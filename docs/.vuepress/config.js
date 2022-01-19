module.exports = {
  theme: 'reco',
  title: 'Eddie-Blog',
  keywords: '前端开发',
  description: '自己有决心并且付出精力是成功的先决条件',
  repo: 'https://github.com/uncledrewzhaopeng/blog.git',
  // base: '/blog/',
  base: '/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 引入jquery
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js',
      },
    ],
    // 引入鼠标点击脚本
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/js/MouseClickEffect.js',
      },
    ],
  ],
  lastUpdated: 'Last Updated',
  // 多语言配置
  // locales: {
  //     '/': {
  //         lang: 'zh-CN'
  //     },
  //     '/en/': {
  //         lang: 'en-US'
  //     }
  // },
  themeConfig: {
    author: 'Eddie',
    authorAvatar: '/img/My.jpg',
    type: 'blog',
    logo: '/img/logo.png',
    // 评论
    valineConfig: {
      appId: 'ns5dzf0Yo2oTFbuVzVt3cL4b-gzGzoHsz', // your appId
      appKey: 'rLM1IeWEUuOJekFg86QltXc1', // your appKey
    },
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      },
    },
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: 'JS', link: '/js_docs/' },
      // { text: 'CSS', link: '/css_docs/' },
      // { text: 'Vue', link: '/vue_docs/' },
      // { text: 'Node', link: '/node_docs/' },
      { text: '项目笔记', link: '/note/', icon: 'reco-suggestion' },
      { text: '计划', link: '/plan/', icon: 'reco-coding' },
      { text: '其它', link: '/other/', icon: 'reco-other' },
      { text: 'GitHub', link: 'https://github.com/uncledrewzhaopeng', icon: 'reco-github' },
    ],
    // sidebar: "auto",
    sidebar: {
      '/js_docs/': [
        '',
        'js_docs_1',
        'js_docs_2',
        'js_docs_3',
        'js_docs_4',
        'js_docs_5',
        'js_docs_6',
        'js_docs_7',
        'js_docs_8',
        'js_docs_9',
        'js_docs_10',
        'js_docs_11',
        'js_docs_12',
        'js_docs_13',
        'js_docs_14',
        'js_docs_15',
        'js_docs_16',
        'js_docs_17',
        'js_docs_18',
        'js_docs_19',
        'js_docs_20',
        'js_docs_21',
        'js_docs_22',
        'js_docs_23',
        'js_docs_24',
        'js_docs_25',
        'js_docs_26',
        'js_docs_27',
      ],
      '/css_docs/': [
        '',
        'css_docs_1',
        'css_docs_2',
        'css_docs_3',
        'css_docs_4',
        'css_docs_5',
        'css_docs_6',
      ],
      '/other/': [
        '',
        'other_1',
        'other_2',
        'other_3',
        'other_4',
        'other_5',
        'other_6',
        'other_7',
        'other_8',
        'other_9',
      ],
      '/vue_docs/': ['', 'vue_docs_1'],
      '/plan/': ['', '20210416-unknown'],
      '/node_docs/': ['', 'node_docs_1', 'node_docs_2'],
      '/note/': [
        '',
        '1note',
        '2note',
        '3note',
        '4note',
        '5note',
        '6note',
        '7note',
        '8note',
        '9note',
        '10note',
        '11note',
        '12note',
        '13note',
        '14note',
        '15note',
        '16note',
        '17note',
      ],
    },
  },
}
