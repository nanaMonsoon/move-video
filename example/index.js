import Vue from 'vue'
import App from './App'
import vconsole from 'vconsole'
import moveVideo from '../src'
new vconsole()

Vue.component('moveVideo', moveVideo)

new Vue({
    el: '#app',
    render:h => h(App)
})
