
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