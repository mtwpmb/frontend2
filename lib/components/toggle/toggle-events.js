function tglMouseDown(tgl) {
	var p = tgl.parentNode
	if (p.flMouseDown == undefined) {
		addEvent(p, 'mousemove', tglMouseMove);
	}
	p.flMouseDown = true;
}

function tglMouseMove(e) {
	var obj = e.target || e.srcElement;
	if (obj.flMouseDown == undefined || !obj.flMouseDown) {return;}
	var rect = obj.getBoundingClientRect();
	if (e.clientX > rect.left + rect.width * 0.7 && obj.className.indexOf("toggle-component-off") > 0) {
		obj.flMouseDown = false;
		obj.className = obj.className.replace("toggle-component-off", "toggle-component-on");
	}
	if (e.clientX < rect.left + rect.width * 0.3 && obj.className.indexOf("toggle-component-on") > 0) {
		obj.flMouseDown = false;
		obj.className = obj.className.replace("toggle-component-on", "toggle-component-off");
	}
}