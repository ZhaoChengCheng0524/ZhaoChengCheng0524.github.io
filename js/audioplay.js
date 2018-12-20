var player=document.getElementById("audioPlayer");
var info="卡农是两段重合的音乐，到了高潮后乐终于追上了前乐……爱情也是这样，为了对方让自己变成更好的一个人，希望最终能够天长地久。";
var all_info="希望在未来的时光，能和你一起快乐的走下去。——致最可爱的小可爱";
function musicTips(){
	firm();
}
function firm() {   
	if (confirm("是否播放背景音乐？")) {
		player.play();
		console.info(info);
	}  
	console.info(all_info);
} 