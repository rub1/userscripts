// ==UserScript==
// @name         Ruter startpage fix
// @namespace    https://ruter.no/
// @version      0.1
// @description  Changes default tab to "Se avganger i sanntid"
// @author       Ruben
// @match        https://ruter.no/
// @grant        none
// @updateURL    https://github.com/rub1/ruter-startpage-fix/raw/master/ruter-startpage-fix.user.js
// ==/UserScript==

(function() {
	'use strict';

	var reiseblocks = document.getElementsByClassName("journey-planner__tab-block");
	var reisetabs = document.getElementsByClassName("tab-item");

	reiseblocks[0].setAttribute('class', 'journey-planner__tab-block  ng-hide');
	reiseblocks[1].setAttribute('class', 'journey-planner__tab-block  ng-show');

	reisetabs[0].setAttribute('class', 'tab-item');
	reisetabs[1].setAttribute('class', 'tab-item tab-item--active');
})();
