
function addEvent(obj, type, fn) {
	try {
		if (obj.addEventListener) {
			obj.addEventListener(type, fn, false);
		} else if (obj.attachEvent) {
			obj["e"+type+fn] = fn;
			obj[type+fn] = function() {obj["e"+type+fn](window.event);}
			obj.attachEvent("on"+type, obj[type+fn]);
		} else {
			obj["on"+type] = obj["e"+type+fn];
		}
	} catch (err) {
		//alert('addEvent: ' + err);
	}
}

var ca = null;
function getPageWidth() {
	if (ca === null) {ca = document.getElementById("page-area");}
	if (ca === null) {
		return 0;
	} else {
		return ca.clientWidth;
	}
}
