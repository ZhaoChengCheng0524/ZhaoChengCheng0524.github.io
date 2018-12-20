var player=document.getElementById("audioPlayer");

function musicTips(){
	firm();
}
//弹出一个询问框，有确定和取消按钮  
function firm() {   
	if (confirm("是否播放背景音乐？")) {  
		player.play();
	}  

} 