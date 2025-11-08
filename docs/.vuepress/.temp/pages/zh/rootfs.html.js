import comp from "/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/zh/rootfs.html.vue"
const data = JSON.parse("{\"path\":\"/zh/rootfs.html\",\"title\":\"内核空间和用户空间\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/rootfs.md\"}")
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
