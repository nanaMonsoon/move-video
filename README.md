## scroll-tab-bar文档

### 组件介绍
基于vue的，web移动端视频播放组件，解决移动端视频视频层级，全屏播放问题

### npm安装

~~~
npm i move-video --save
~~~

### 组件注册
```
import Vue from 'vue'
import App from './App'
import moveVideo from 'move-video'

Vue.component('moveVideo', moveVideo)

new Vue({
    el: '#app',
    render:h => h(App)
})

```

### 使用
 
```
<template>
    <div id="app" ref="li">
       <move-video
           class = "video-playback"
           icon-width = "48px"
           icon-height = "51px"
           videoWidth = "281px"
           videoHeight = "501px"
           :full-screen = "false"
           :init-icon = "initIcon"
           :controls = "false"
           :load-icon = "loadIcon"
           video-url = "https://vod-dpy.bhbcdn.com/cv-vod_b323de_1554893977654.mp4"
           image-url = "https://img-dpy.bhbcdn.com/cv-img_b1d731_1554894122628.jpg"
       />
    </div>
</template>

<script>
    export default {
    }
</script>

```

### 组件参数

#### scroll-tab Prop
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| current-select | 0 | `number` | 控制切换到某个scroll-tab-col页 |
| touch-delay | 0.3 | `number` | 页面切换的延迟时间 |

#### scroll-tab Event
| Prop | Type | Description |
| :---------------:| :---------------:| :-----|
| selectChange | `function(index)` | 监听滑动切换 |


