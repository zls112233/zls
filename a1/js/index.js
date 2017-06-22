$(function() {
	var s = 0;
	$(".nav-one span").click(function() {
		s++;
		if(s % 2 !== 0) {
			$(".nav-ll").css({
				"display": "block"
			});
		} else {
			$(".nav-ll").css({
				"display": "none"
			})
		}
	})

})

function showTimes() {
	var date_time = new Date();
	var week;
	switch(date_time.getDay()) {
		case 1:
			week = "星期一";
			break;
		case 2:
			week = "星期二";
			break;
		case 3:
			week = "星期三";
			break;
		case 4:
			week = "星期四";
			break;
		case 5:
			week = "星期五";
			break;
		case 6:
			week = "星期六";
			break;
		default:
			week = "星期天";
			break;
	}
	var year = date_time.getFullYear();
	if(year < 10) {
		year = "0" + year;
	}
	var month = date_time.getMonth() + 1;
	if(month < 10) {
		month = "0" + month;
	}
	var day = date_time.getDate();
	if(day < 10) {
		day = "0" + day;
	}
	var hours = date_time.getHours();
	if(hours < 10) {
		hours = "0" + hours;
	}
	var minutes = date_time.getMinutes();
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	var seconds = date_time.getSeconds();
	if(seconds < 10) {
		seconds = "0" + seconds;
	}
	var date_zj = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
	document.getElementById("zj").innerHTML = date_zj;
}
//设置1秒调用一次show_cur_times函数 
setInterval("showTimes()", 100);