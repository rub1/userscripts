// ==UserScript==
// @name         HLTV.org stream url fix
// @namespace    https://www.hltv.org/
// @version      0.4.1
// @description  Changes to links instead of using embedded streams on the hltv page
// @author       Ruben
// @match        https://www.hltv.org/matches/*
// @grant        none
// @updateURL    https://github.com/rub1/userscripts/raw/master/hltv-stream-url-fix.user.js
// ==/UserScript==

(function() {
	'use strict';

	var streamdivs = document.getElementsByClassName("stream-box-embed");

	for (var i = 0; i < streamdivs.length; i++) {
		var streamanchor = document.createElement("a");
		var streamlink = streamdivs[i].getAttribute('data-stream-embed');

		if (streamlink.indexOf("youtube") >= 0) { 
			streamlink = streamlink.split('?autoplay=1')[0];
			streamlink = streamlink.replace("embed/","watch?v=");
		} else if (streamlink.indexOf("twitch") >= 0) { 
			var channel = streamlink.split('?channel=')[1];
			streamlink = "https://twitch.tv/" + channel + "?mode=theater";
		}
    
		streamanchor.setAttribute('href', streamlink);
		streamanchor.setAttribute('class', streamdivs[i].getAttribute('class'));
		streamanchor.innerHTML = streamdivs[i].innerHTML;
		streamdivs[i].replaceWith(streamanchor);
	}
})();
