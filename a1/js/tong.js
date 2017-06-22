
  var lb = document.getElementsByClassName("lb");
  var u = lb[0].getElementsByTagName("lb-1");
  var ls = u[0].getElementsByTagName("li");
  var sp = lb[0].getElementsByTagName("span");
  var lefttwo = 0;
  var w = ls[0].clientWidth;
  var x;
  var n = 0;
  lb[0].addEventListener("touchstart", function(ev) {
  	x = ev.changedTouches[0].pageX;
  	lefttwo = u[0].offsetLeft;
  })
  lb[0].addEventListener("touchmove", function(ev) {
  	var jj = x - ev.changedTouches[0].pageX;
  	if(jj < 0) {
  		if(parseInt(u[0].offsetLeft) > w / 10) {
  			return;
  		}
  		u[0].style.left = -(x - ev.changedTouches[0].pageX) + lefttwo + "px";

  	} else {
  		if(jj > 0) {
  			if(parseInt(u[0].offsetLeft) < -400) {
  				return;
  			}
  			u[0].style.left = -(x - ev.changedTouches[0].pageX) + lefttwo + "px";
  		}
  	}

  })
  lb[0].addEventListener("touchend", function(ev) {
  	n = Math.round(u[0].offsetLeft / w);
  	u[0].style.left = w * n + "px";

  	if(-u[0].offsetLeft / w == 1) {
  		sp[1].style.background = "red";
  		sp[0].style.background = "none";
  	} else {
  		sp[1].style.background = "none";
  		sp[0].style.background = "red";
  	}
  })
  var ez = 0;
  var time = setInterval(function() {
  	ez++
  	if(ez == 2) {
  		ez = 0;
  	}
  	u[0].style.left = -(w * ez) + "px";
  	if(ez == 1) {
  		sp[1].style.background = "red";
  		sp[0].style.background = "none";
  	} else {
  		sp[1].style.background = "none";
  		sp[0].style.background = "red";
  	}
  }, 3000)
  for(var i = 0; i < sp.length; i++) {
  	sp[i].index = i;
  	sp[i].addEventListener("click", function() {
  		u[0].style.left = -this.index * w + "px";
  		if(this.index == 1) {
  			sp[1].style.background = "red";
  			sp[0].style.background = "none";
  		} else {
  			sp[1].style.background = "none";
  			sp[0].style.background = "red";
  		}
  	})
  } 