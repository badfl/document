module.exports = {
  dest: 'document',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '技术体系',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'https://github.com/badfl/document',
    docsBranch:'develop',
    editLinks: true,
    displayAllHeaders: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    algolia: {
      apiKey: '09e4ab218175ac349007c1d23e75c89c',
      indexName: 'badfl'
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text:'Vue.js',
            items:[
              {
                text:'学习',
                items:[
                  {
                    text:'教程',
                    link:'https://cn.vuejs.org/v2/guide/'
                  },
                  {
                    text:'API',
                    link:'https://cn.vuejs.org/v2/api/'
                  },
                  {
                    text:'风格指南',
                    link:'https://cn.vuejs.org/v2/style-guide/'
                  },
                  {
                    text:'示例',
                    link:'https://cn.vuejs.org/v2/examples/'
                  },
                  {
                    text:'Cookbook',
                    link:'https://cn.vuejs.org/v2/cookbook/'
                  }
                ]
              },
              {
                text:'工具',
                items:[
                  {
                    text:'Devtools',
                    link:'https://github.com/vuejs/vue-devtools'
                  },
                  {
                    text:'Webpack模版',
                    link:'https://vuejs-templates.github.io/webpack/'
                  },
                  {
                    text:'Vue Loader',
                    link:'https://vue-loader.vuejs.org/zh/'
                  }
                ]
              },
              {
                text:'核心插件',
                items:[
                  {
                    text:'Vue Router',
                    link:'https://router.vuejs.org/zh/'
                  },
                  {
                    text:'Vuex',
                    link:'https://vuex.vuejs.org/zh/'
                  },
                  {
                    text:'Vue 服务端渲染',
                    link:'https://ssr.vuejs.org/zh/'
                  }
                ]
              },
              {
                text:'帮助',
                items:[
                  {
                    text:'论坛',
                    link:'https://forum.vuejs.org/'
                  }
                ]
              }
            ]
          },
          {
            text:'风格指南',
            link:'/zh/standard/'
          },
          {
            text:'Dcloud',
            items: [
              {
                text: 'FQA',
                items: [
                  {
                    text:'非官方mui文档',
                    link:'/zh/mui/'
                  }
                ]
              },
              {
                text: '官方文档',
                items: [
                  {
                    text: 'mui文档',
                    link: 'http://dev.dcloud.net.cn/mui/ui/'
                  },
                  {
                    text: 'html5+文档',
                    link: 'http://www.html5plus.org/doc/zh_cn/webview.html'
                  },
                  {
                    text: 'Android平台5+SDK API参考手册',
                    link: 'http://www.dcloud.io/docs/sdk/android/'
                  },
                  {
                    text: 'IOS平台5+SDK API参考手册',
                    link: 'https://www.dcloud.io/docs/sdk/ios/'
                  },
                ]
              },
              {
                text: '社区',
                items: [
                  {
                    text: 'Dcloud问答社区',
                    link: 'http://ask.dcloud.net.cn/explore/'
                  },
                  {
                    text: 'Dcloud官网',
                    link: 'http://www.dcloud.io/'
                  }

                ]
              },
              {
                text: '官方资源',
                items: [
                  {
                    text: 'HTML 5+ SDK',
                    link: 'http://ask.dcloud.net.cn/article/103'
                  },
                  {
                    text: '安卓离线打包',
                    link: 'http://ask.dcloud.net.cn/article/508'
                  },
                  {
                    text: 'IOS离线打包',
                    link: 'https://ask.dcloud.net.cn/article/41'
                  },
                  {
                    text: 'Android插件开发',
                    link: 'https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/66'
                  },
                  {
                    text: 'IOS插件开发',
                    link: 'https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/67'
                  }

                ]
              }
            ]
          }

        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南'),
          '/zh/mui/': [{
            title:'mui',
            children:[
              '',
              'mui-tableview',
              'mui-popover',
              'mui-btn',
              'mui-card',
              'mui-dialog',
              'mui-input',
              'mui-radio',
              'mui-checkbox',
              'range',
              'switch',
              'numbox',
              'badges',
              'slide',
              'progressbar',
              'grid',
              'icon',
              'mask',
              'picker',
              'nav',
              'scroll',
              'menu',
              'tabbar',
              'word',
              'others'
            ]
           }
          ],
          '/zh/vue/v2/guide/':[
            {
              title:'Vue',
              children:[
                '',
              //  'installation',
                // 'index',
                // 'instance',
                // 'syntax',
                // 'computed',
                // 'class-and-style',
                // 'conditional',
                // 'list',
                // 'events',
                // 'forms',
                // 'components'
              ]
            }
          ]
        }
      }
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'deploy',
        'i18n'

      ]
    }
  ]
}

