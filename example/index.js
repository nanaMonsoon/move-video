import Vue from 'vue'
import App from './App'
import vconsole from 'vconsole'
import VideoPlayback from '../src'
new vconsole()

Vue.component('VideoPlayback', VideoPlayback)

new Vue({
    el: '#app',
    render:h => h(App)
})
