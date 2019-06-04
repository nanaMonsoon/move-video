<template>
  <div class="video-box">
    <video :style="{width:payVideoWidth, height: payVideoHeight, borderRadius: 8 + 'px'}"
           v-show='!isPoster && isInit'
           loop
           :webkit-playsinline="!fullScreen"
           :playsinline="!fullScreen"
           :x5-video-player-type="fullScreen ? 'h5' : '' "
           :x5-video-orientation="orientation"
           id="play-video"
           @click="handleClick"
           :src="videoUrl"
           :controls="controls"
           >
    </video>
    <img  :style="{width:payVideoWidth, height: payVideoHeight}"
          v-if="(isPoster || (!isPoster && !isInit)) && initIcon"
          class="video-poster"
          :src="imageUrl"/>
    <img  v-show="!isPoster && !isInit && loadIcon"
          class="video-load"
          :src="loadIcon"/>
    <img  class="video-buttom"
          v-if="!isPlay"
          :style="{width:iconWidth, height: iconHeight}"
          @click="handlePlay"
          :src="initIcon"/>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayback',
  props: {
    initIcon: null,
    loadIcon: null,
    videoWidth: null,
    videoHeight: null,
    iconWidth: null,
    iconHeight: null,
    videoUrl: null,
    imageUrl: null,
    fullScreen: Boolean,
    borderRadius: {
      type: Number,
      default: 8
    },
    orientation: {
      default: 'portraint',
      type: String
    },
    controls: Boolean
  },
  data () {
    return {
      payVideoHeight: '',
      payVideoWidth: '',
      isPoster: true,
      isPlay: false,
      isInit: false,
      canvas: '',
      showImage: '',
      isShare: false
    }
  },
  watch: {
    isPlay (newData) {
      if (newData && this.isPoster) this.isPoster = false
    }
  },
  created () {
    let userAgent = navigator.userAgent
    if (userAgent.indexOf('MicroMessenger') !== -1 && userAgent.indexOf('Android') !== -1) {
      this.isH5 = true
    }
    this.payVideoWidth = this.videoWidth
    this.payVideoHeight = this.videoHeight
  },
  mounted () {
    this.video = document.getElementById('play-video')
    if (this.fullScreen && this.isH5) {
      this.video.addEventListener('resize', () => {
        this.setVideoSize(window.innerWidth + "px", window.innerHeight + "px")
      })
      this.video.addEventListener("x5videoexitfullscreen", () => {
        this.isPlay = false
        this.setVideoSize(this.payVideoWidth, this.payVideoHeight)
      }, false)
      this.video.addEventListener("x5videoenterfullscreen", () => {
        this.setVideoSize(window.innerWidth + "px", window.innerHeight + "px")
      }, false)
    }
    // 判断视频是否加载完成
    const timeupdate = () => {
      if (this.video.currentTime >= 0.1) {
        //进入全屏
        this.setFullScreen()
        this.isInit = true
        this.video.removeEventListener('timeupdate', timeupdate, false)
      }
    }
    this.video.addEventListener('timeupdate', timeupdate, false)
  },
  methods: {
    handlePlay () {
      this.video.play()
      this.isPlay = true
    },
    setFullScreen () {
      let ele = this.video
      if (ele.requestFullscreen) {
        ele.requestFullscreen();
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
      } else if (ele.webkitRequestFullScreen) {
        ele.webkitRequestFullScreen();
      }
    },
    sharePlay () {
      this.isPoster = false
      this.video.play()
      this.isPlay = true
      this.video.currentTime = this.currentTime
    },
    sharePause () {
      this.currentTime = this.video.currentTime
      this.isPoster = true
    },
    setVideoSize (innerWidth, innerHeight) {
      this.video.style.width = innerWidth
      this.video.style.height =  innerHeight
    },
    pause () {
      this.video.pause()
      this.isPlay = false
    },
    handleClick () {
      if (!this.isPlay) {
        this.video.play()
        this.isPlay = true
      } else {
        this.video.pause()
        this.isPlay = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.video-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .layer {
    position: absolute;
    bottom: 0px;
    left: 100px;
    width: 100px;
    height: 100px;
    background: #fff;
    z-index: 10000;
  }

  #play-video {
    width: 100%;
    height: auto;
  }

  .video-poster {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .video-load {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100px;
    margin: auto;
  }

  .video-buttom {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
    margin: auto;
  }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
  }

  #canvas {
    position: absolute;
    top: -100%;
    left: -100%;
    opacity: 0;
  }
}
</style>
