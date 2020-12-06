// ==UserScript==
// @name        Adds spaces bettween 4 letters and numbers in codes - nentsportbooking.com
// @namespace   Violentmonkey Scripts
// @match       https://www.nentsportbooking.com/feed/*
// @grant       none
// @version     1.0
// @author      -
// @description 06/12/2020, 17:56:41
// ==/UserScript==

(function() {
	'use strict';

	console.log("Starting Violentmonkey script");

	var delayInMilliseconds = 6000;

	setTimeout(function() {
		console.log("Running after 6 sec delay");

		function space(str) {
		    if (!str) {
		        return false;
		    }
		    var v = str;
		    var reg = new RegExp(".{" + 4 + "}", "g");

		    return v.replace(reg, function (a) {
		        return a + ' ';
		    });
		}

		function spaceEach(str) {
		  if (!str) {
		    return false;
		  }
		  var words = str.value.split(" ");

		  for (let i = 0; i < words.length; i++) {
		    if (words[i].length > 10) {
		      words[i] = space(words[i]);
			  console.log(words[i]);
		    }
		  }

		  return words.join(" ");
		}

		var shared =  document.querySelector("[name='sat_encryption_biss_code_shared']");
		if (shared) {
		  var changed = spaceEach(shared);
		  shared.value = changed;
		}

		var code =  document.querySelector("[name='sat_encryption_no']");
		if (code) {
			var changed = spaceEach(code);
		  code.value = changed;
		}

		console.log("codes changed... errr formatted");
	}, delayInMilliseconds);
})();
