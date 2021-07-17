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

var topbar = null;
var login = false;

function RebuildCompositionHeader(pagewidth = 0) {
	if (pagewidth === 0) {pagewidth = getPageWidth();}
	if (pagewidth === 0) {return;}
	if (topbar === null) {topbar = document.getElementById("topbar-area");}
	if (topbar !== null) {
		var cls = "topbar-area";
		if (login) {
			if (pagewidth < 450) {
				cls = cls + " topbar-menu-fourrows";
			} else if (pagewidth < 890) { //890
				cls = cls + " topbar-menu-threerows";
			} else if (pagewidth < 1210) {
				cls = cls + " topbar-menu-tworows";
			}
		} else {
			if (pagewidth < 450) {
				cls = cls + " topbar-menu-fourrows";
			} else if (pagewidth < 710) {
				cls = cls + " topbar-menu-threerows";
			} else if (pagewidth < 1210) {
				cls = cls + " topbar-menu-tworows";
			}
		}
		if (login) {cls = cls + " topbar-menu-login";}
		if (topbar.className !== cls) {topbar.className = cls;}
	}
}

function UserLogin() {
	login = true;
	RebuildCompositionHeader();
}

function UserLogout() {
	login = false;
	RebuildCompositionHeader();
}

var footer = null;

function RebuildCompositionFooter(pagewidth = 0) {
	if (pagewidth === 0) {pagewidth = getPageWidth();}
	if (pagewidth === 0) {return;}
	if (footer === null) {footer = document.getElementById("footer-area");}
	if (footer === null) {return;}
	var cls = "footer-area";
	if (pagewidth < 850) {
		cls = cls + " footer-area-threerows";
	} else if (pagewidth < 1240) {
		cls = cls + " footer-area-tworows";
	}
	if (footer.className !== cls) {footer.className = cls;}
}

var copyright = null;

function RebuildCompositionCopyright(pagewidth = 0) {
	if (pagewidth === 0) {pagewidth = getPageWidth();}
	if (pagewidth === 0) {return;}
	if (copyright === null) {copyright = document.getElementById("copyright-area");}
	if (copyright === null) {return;}
	var cls = "copyright-area";
	if (pagewidth < 420) {
		cls = cls + " copyright-area-threerows";
	} else if (pagewidth < 650) {
		cls = cls + " copyright-area-tworows";
	}
	if (copyright.className !== cls) {copyright.className = cls;}
}

function RebuildComposition() {
	var pagewidth = getPageWidth();
	RebuildCompositionHeader(pagewidth);
	RebuildCompositionFooter(pagewidth);
	RebuildCompositionCopyright(pagewidth);
}

addEvent(window, 'resize', RebuildComposition);

function rbClick(rb) {
	var cont = rb.parentNode;
	if (cont.cntClick == undefined) {cont.cntClick = 0;}
	cont.cntClick++;
	rb.cntClick = cont.cntClick;
	var elem = cont.getElementsByClassName("radio-button");
	for (var i = 0; i < elem.length; i++) {
		if (elem[i].cntClick == undefined) {elem[i].cntClick = 0;}
		var baseclass = elem[i].className.replace("rb-checked", "");
		baseclass = baseclass.trim();
		baseclass = baseclass.replace("  ", " ");
		if (elem[i].cntClick < rb.cntClick) {
			elem[i].className = baseclass;
		} else {
			elem[i].className = baseclass + " rb-checked";
		}
	}
}

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

function ShowFormEnter() {
	document.getElementById("form-reg").style.display = "none";
	document.getElementById("form-enter").style.display = "block";
}

function ShowFormReg() {
	document.getElementById("form-enter").style.display = "none";
	document.getElementById("form-reg").style.display = "block";
}