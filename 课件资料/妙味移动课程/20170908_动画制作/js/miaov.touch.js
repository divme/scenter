function transform(el,attr,val){
	if(!el.transform){
		el.transform = {
		};
	}
	if(val === undefined){
		return el.transform[attr];
	}
	el.transform[attr] = val;
	var str = "";
	for(var s in el.transform){
		switch(s){
			case "rotate":
			case "rotateX":
			case "rotateY":
			case "rotateZ":
			case "skewX":
			case "skewY":
				str += s +"("+el.transform[s]+"deg) ";
				break;
			case "scale":
			case "scaleX":
			case "scaleY":
				str += s +"("+el.transform[s]+") ";
				break;
			case "translateX":
			case "translateY":
			case "translateZ":
				str += s +"("+el.transform[s]+"px) ";
				break;	
		}
	}
	el.style.WebkitTransform = el.style.transform = str;
}
function tap(el,fn){
	var startPoint = {};
	el.addEventListener('touchstart', function(e) {
		startPoint = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY
		}
	});
	el.addEventListener('touchend', function(e) {
		var nowPoint = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY
		}
		if(Math.abs(nowPoint.x - startPoint.x) < 5
		&&Math.abs(nowPoint.y - startPoint.y) < 5){
			fn&&fn.call(el,e);
		}
	});
}
function css(el,attr,val){
	var transformAttr = ["rotate","rotateX","rotateY","rotateZ","skewX","skewY","scale","scaleX","scaleY","translateX","translateY","translateZ"];
	for(var i = 0; i < transformAttr.length; i++){
		if(attr == transformAttr[i]){ //如果 attr 等transform其中一个值就代表用用户想要操作的是 transform
			return transform(el,attr,val);
		}
	}
	if(val === undefined){
		val = getComputedStyle(el)[attr];
		console.log(val);
		val = parseFloat(val);
		return val;
	}
	if(attr == "opacity"){
		el.style[attr] = val;
	} else {
		el.style[attr] = val + "px";
	}
}