---
title: "Vue3项目中按需引入Element-Plus组件"
published: 2022-01-21
category: "笔记"
tags: ["NOTE"]
draft: false
---

- 1、首先安装一个按需导入插件

```js
yarn add babel-plugin-import -D
```

- 2、在 `babel.config.js` 中配置按需导入组件样式文件(没有的话在根目录创建一个)

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
  presets: ['@vue/cli-plugin-babel/preset'],
}
```

- 3、在任意文件下新建一个文件(例如：elementPlugins.js)

```js
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadioGroup,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElLoading,
  ElTooltip,
  ElScrollbar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElDialog,
  ElTree,
  ElDatePicker,
  ElPagination,
  ElTable,
  ElTableColumn,
  ElTag,
} from 'element-plus'

const elementPlugins = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadioGroup,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElCheckboxGroup,
  ElLink,
  ElLoading,
  ElTooltip,
  ElScrollbar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElDialog,
  ElTree,
  ElDatePicker,
  ElPagination,
  ElTable,
  ElTableColumn,
  ElTag,
]

export default (app) => {
  for (const plugin of elementPlugins) {
    app.use(plugin)
  }
}
```

- 4、在 `main.js` 文件中引入刚刚新建的文件

```js
import { createApp } from 'vue'
import useElementPlugins from '../scripts/elementPlugins'

const app = createApp(App)
useElementPlugins(app)
```

> 完事之后在页面中什么都不需要引入 ✿✿ ヽ(°▽°)ノ ✿
