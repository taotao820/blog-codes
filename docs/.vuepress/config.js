module.exports = {
  title: 'XXX的博客',
  base: '/',
  description: 'full stack engineer',
  locales: {
    "/": {
      lang: "en",
    },
  },
  themeConfig: {
    author: "Huitao Xu",
    logo: "/avatar.jpeg",
    authorAvatar: "/avatar.jpeg",
    type: "blog",
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Shark Xu 的博客',
        items: [
          { text: '掘金', link: 'https://juejin.cn/user/233526039432445' },
          { text: 'Github', link: 'https://github.com/Xusssyyy' },
        ],
      },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 是否折叠
        children: [{ title: '博客简介', path: '/' }],
      },
      {
        title: '基础篇',
        path: '/blogs/1',
        collapsable: true,
        children: [
          { title: '第一篇', path: '/blogs/1' },
          { title: '第二篇', path: '/blogs/2' },
        ],
      },
    ],
  },
  plugins: [
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
 ]
}
