function tips() {
    var str = "�ഺ�Ĵ�����ͷ�������£����˹¶���㯣����˿������裬˭�ܰ�Ȼ������ⳡ�ꣿ���������ܹ��ܶೡ�꣬�ǹ��ܶ�仨���������ܶ�ΰ����������ܶ�ط�����գ�ȴ��Զ�ǵ�������Ǵ��Ķ���";
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