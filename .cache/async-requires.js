// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-contador-js": () => import("./../src/templates/contador.js" /* webpackChunkName: "component---src-templates-contador-js" */)
}

