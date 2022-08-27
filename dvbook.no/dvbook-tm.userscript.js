// ==UserScript==
// @name        VSPL Rødt i TM - dvbook.no
// @namespace   Violentmonkey Scripts
// @match       https://dvbook.no/dvb3/tm_editor.asp
// @grant       none
// @version     1.0.1
// @author      -
// @description 8/27/2022, 6:23:27 PM
// @updateURL   https://raw.githubusercontent.com/rubenleikarnes/userscripts/master/dvbook.no/dvbook-tm.userscript.js
// ==/UserScript==

(function() {
  'use strict';

  console.log("Starting Violentmonkey script");

  let tmTasks;
  let tmTime;
  let vsplTasks;
  let delayInMilliseconds = 5000;


  setTimeout(function() {
    console.log("Running after 5 sec delay");

    tmTasks = document.querySelectorAll(".tmline");
    tmTime = document.querySelectorAll(".tmlTime");
    vsplTasks = document.querySelectorAll(".tmlTask");

    for (var i = 1; i < tmTasks.length; i++) {
      if (vsplTasks[i].innerHTML.includes("VsPL")) {
        tmTime[i].style.background = "red"
      }
    }

    // make production sidebar wider


    document.getElementsByClassName("book-sidebar")[0].style.width="400px";
    document.getElementsByClassName("book-sidebar-sticky")[0].style.width="400px";

    console.log("Done running custom script");
  }, delayInMilliseconds);
})();
