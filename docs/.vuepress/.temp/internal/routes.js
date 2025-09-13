export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Build.html", { loader: () => import(/* webpackChunkName: "Build.html" */"/data/data/com.termux/files/home/vuepress-starter/docs/.vuepress/.temp/pages/Build.html.js"), meta: {"title":"Build"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/data/data/com.termux/files/home/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Ruri"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/data/data/com.termux/files/home/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
