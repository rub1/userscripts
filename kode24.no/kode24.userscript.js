// ==UserScript==
// @name        No fucking blinking animations
// @namespace   Violentmonkey Scripts
// @match       https://www.kode24.no/*
// @grant       none
// @version     1.0
// @author      Ruben
// @description 4/29/2024, 9:27:56 AM
// @updateURL   https://raw.githubusercontent.com/rubenleikarnes/userscripts/master/kode24.no/kode24.no.userscript.js
// ==/UserScript==


(function() {var css = [
	".hot::before {animation:none !important;}, .hot {animation:none !important;}, .hot::after {animation:none !important;}",
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
