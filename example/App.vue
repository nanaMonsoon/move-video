<template>
    <div id="app">
        <video-playback
                class="video-playback"
                icon-width = "48px"
                icon-height = "51px"
                videoWidth = "281px"
                videoHeight = "501px"
                :full-screen="true"
                video-url = "https://vod-dpy.bhbcdn.com/cv-vod_b323de_1554893977654.mp4"
                image-url = "https://img-dpy.bhbcdn.com/cv-img_b1d731_1554894122628.jpg"
        />
	</div>
</template>

<script>
    export default {
    }
</script>

<style>
html, body, div, body, ul ,li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

.video-playback {
    margin: 0 auto;
    margin-top: 50px;
}
</style>
