
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