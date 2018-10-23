function tips() {
    var str = "青春的大雨劈头盖脸淋下，有人孤独迷惘，有人渴望飞翔，谁能安然无恙躲过这场雨？后来，我淋过很多场雨，吻过很多朵花，遇到过很多次爱，仰望过很多地方的天空，却永远记得最初的那次心动。";
    alert(str);
}
const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
    Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
    const ms = randomIn(2000, 4000)
    el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
    mixupInterval(el)
    el.addEventListener('webkitAnimationIteration', () => {
        mixupInterval(el)
    })
})