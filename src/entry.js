import RenderlessSelector from "./RenderlessSelector.vue"

function install(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('RenderlessSelector', RenderlessSelector)
}

const plugin = {
    install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
}

if (GlobalVue) {
    GlobalVue.use(plugin)
}

RenderlessSelector.install = install

export default RenderlessSelector