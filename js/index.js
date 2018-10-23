function tips() {
    var str = "青春的大雨劈头盖脸淋下，有人孤独迷惘，有人渴望飞翔，谁能安然无恙躲过这场雨？后来，我淋过很多场雨，吻过很多朵花，遇到过很多次爱，仰望过很多地方的天空，却永远记得最初的那次心动。";
    alert(str);
}
function failed(e) {
    // video playback failed - show a message saying why
    switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_ABORTED:
            alert("您终止了视频的缓存");
            break;
        case e.target.error.MEDIA_ERR_NETWORK:
            alert("网络错误导致视频下载失败");
            break;
        case e.target.error.MEDIA_ERR_DECODE:
            alert("视频使用了浏览器不支持的视频，视频播放被中止");
            break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            alert("由于服务器或网络较差，或格式不受支持，视频无法加载");
            break;
        default:
            alert("未知错误");
            break;
    }
}