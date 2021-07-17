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