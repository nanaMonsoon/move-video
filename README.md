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

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| icon-width | null | `string` | 开关图标宽度 |
| icon-height | null | `string` | 开关图标高度 |
| video-width | null | `string` | 视频宽度 |
| video-width | 0.3 | `string` | 视频高度 |


