
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
