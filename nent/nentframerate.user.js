// ==UserScript==
// @name        Adds red background to 60fps - nentsportbooking.com
// @namespace   Violentmonkey Scripts
// @match       https://www.nentsportbooking.com/feed/*
// @grant       none
// @version     1.0
// @author      -
// @description 18/08/2020, 22:08:41
// ==/UserScript==

(function() {
	'use strict';

	console.log("Starting Violentmonkey script");

	var delayInMilliseconds = 5000,
			frameRate,
			selectedFrameRate;

	setTimeout(function() {
		console.log("Running after 5 sec delay");

		frameRate = document.querySelectorAll('[name=frame_rate]')[0];
		selectedFrameRate = document.querySelectorAll('[name=frame_rate]')[0].options.selectedIndex;

		console.log(frameRate)

		if (selectedFrameRate == 1) {
			frameRate.style.color="white"
			frameRate.style.backgroundColor="red"

			console.log("Set red background because of 60fps")
		}

		console.log("Done running custom script");
	}, delayInMilliseconds);
})();
