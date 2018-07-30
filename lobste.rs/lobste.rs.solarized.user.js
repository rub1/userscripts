// ==UserScript==
// @name         Lobste.rs Solarized 
// @namespace    https://lobste.rs/
// @version      0.1.1
// @description  Lobste.rs Solarized theme
// @author       Ruben
// @match        https://lobste.rs/*
// @grant        none
// @run-at       document-end
// @updateURL    https://github.com/rub1/userscripts/raw/master/lobste.rs.solarized.user.js
// ==/UserScript==

(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"    body {background-color: #022b36 !important; color: #828282 !important;}",
    "    .link a {color: #2aa198 !important;}",
    "    .link a:hover {text-decoration: none !important;}",
	"    a {color: #828282 !important;}",
    "    a:visited {color: #b58900 !important;}",
    "    a:hover {background: #073642 !important; text-decoration: underline !important}",
    "    .tags a {background: #073642 !important; border-color: #516161 !important;}",
    "    .stories  {list-style: decimal !important; padding-left: 2rem !important;}",
    "    .headerlinks a, #footer a {padding: 0 !important; margin-right: 1rem;}"
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
