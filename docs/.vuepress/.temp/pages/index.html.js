import comp from "/data/data/com.termux/files/home/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Ruri\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Ruri\",\"heroImage\":\"/images/logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"https://github.com/RuriOSS/ruri\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[{\"level\":2,\"title\":\"Highlights\",\"slug\":\"highlights\",\"link\":\"#highlights\",\"children\":[]},{\"level\":2,\"title\":\"About us:\",\"slug\":\"about-us\",\"link\":\"#about-us\",\"children\":[]},{\"level\":2,\"title\":\"Get ruri\",\"slug\":\"get-ruri\",\"link\":\"#get-ruri\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
