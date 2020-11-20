// ==UserScript==
// @name        Adds feed link to ID - nentsportbooking.com
// @namespace   Violentmonkey Scripts
// @match       https://www.nentsportbooking.com/feeds/list
// @grant       none
// @version     1.0
// @author      -
// @description 30/01/2020, 14:35:41
// ==/UserScript==

(function() {
	'use strict';

	console.log("Starting Violentmonkey script");

	var delayInMilliseconds = 5000,
			defaultUrl = "https://www.nentsportbooking.com/feed/",
			feedList,
			feedListLength,
			feedIdCell,
			feedId,
			newIdLink.
			sidebar;

	setTimeout(function() {
		console.log("Running after 5 sec delay");

		feedList = document.getElementsByClassName("table table-hover")[0];
		feedListLength = document.getElementsByClassName("book-filter book-bottom-sticky")[0].children[2].children[0].children[1].innerText;
		
		for (var i = 1; i < feedListLength+1; i++) {
			feedIdCell = feedList.rows[i].cells[1].children[0];
			feedId = feedIdCell.innerHTML;
			newIdLink = document.createElement("a");

			newIdLink.setAttribute('href', defaultUrl + feedId);
			newIdLink.innerHTML = feedId;
			feedIdCell.replaceWith(newIdLink);
		}

		// make production sidebar wider
		
		
		document.getElementsByClassName("book-sidebar")[0].style.width="400px";
		document.getElementsByClassName("book-sidebar-sticky")[0].style.width="400px";
		
		console.log("Done running custom script");
	}, delayInMilliseconds);
})();
