import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BlogArchive from './BlogArchive.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogArchive', BlogArchive)
  },
}
