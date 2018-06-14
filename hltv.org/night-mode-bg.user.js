// ==UserScript==
// @name         HLTV.org Night Mode Background
// @namespace    https://www.hltv.org/
// @version      0.0.4
// @description	 Adds nightmode background
// @author       Ruben
// @match        https://www.hltv.org/*
// @grant        none
// @run-at       document-end
// @updateURL    https://github.com/rub1/hltv-stream-url-fix/raw/master/night-mode-bg.user.js
// ==/UserScript==

(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"    html,body,.bgPadding {background-color: #1b1f23 !important;}",
	"    .bgPadding {max-width: unset}"
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
