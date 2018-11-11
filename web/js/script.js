
$(document).ready(function(){


	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		//timestamp : (new Date()).getTime() + 08*10*60*60*1000
    });
    var maxtime = 60 * 60; //一个小时，按秒计算，自己调整!
    if (maxtime >= 0) {
        minutes = Math.floor(maxtime / 60);
        seconds = Math.floor(maxtime % 60);
        msg = "only " + minutes + "minutes " + seconds + "seconds";
        document.all["timer"].innerHTML = msg;
    }
    else {
        clearInterval(timer);
    }
    timer = setInterval("CountDown()", 1000);
    /*
     * 
     * 
     * <SCRIPT type="text/javascript">
            
            function CountDown() {
               
            }
          
        </SCRIPT>
     * /

	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
